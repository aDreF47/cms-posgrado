import { createContext, useContext, useReducer } from 'react'
import { api } from '../services/api.js'

// Initial state
const initialState = {
  sections: {}, // { tramites: {...}, tarifarios: {...} }
  loading: false,
  error: null,
  lastUpdated: null
}

// Action types
const CONTENT_ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE',
  UPDATE_SECTION: 'UPDATE_SECTION',
  CLEAR_ERROR: 'CLEAR_ERROR'
}

// Reducer
const contentReducer = (state, action) => {
  switch (action.type) {
    case CONTENT_ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null
      }
      
    case CONTENT_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        sections: {
          ...state.sections,
          [action.payload.section]: action.payload.data
        },
        loading: false,
        error: null,
        lastUpdated: new Date().toISOString()
      }
      
    case CONTENT_ACTIONS.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
      
    case CONTENT_ACTIONS.UPDATE_SECTION:
      return {
        ...state,
        sections: {
          ...state.sections,
          [action.payload.section]: action.payload.data
        },
        lastUpdated: new Date().toISOString()
      }
      
    case CONTENT_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
      
    default:
      return state
  }
}

// Create context
const ContentContext = createContext()

// Provider component
export const ContentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contentReducer, initialState)
  
  // Fetch content by section
  const fetchContent = async (section) => {
    try {
      dispatch({ type: CONTENT_ACTIONS.FETCH_START })
      
      const data = await api.content.get(section)
      
      dispatch({
        type: CONTENT_ACTIONS.FETCH_SUCCESS,
        payload: { section, data }
      })
      
      return data
    } catch (error) {
      dispatch({
        type: CONTENT_ACTIONS.FETCH_FAILURE,
        payload: error.message
      })
      throw error
    }
  }
  
  // Update content
  const updateContent = async (section, blockId, data) => {
    try {
      const updatedBlock = await api.content.update(section, blockId, data)
      
      // Update local state
      const currentSection = state.sections[section]
      const updatedBlocks = currentSection.blocks.map(block =>
        block.id === blockId ? updatedBlock : block
      )
      
      dispatch({
        type: CONTENT_ACTIONS.UPDATE_SECTION,
        payload: {
          section,
          data: {
            ...currentSection,
            blocks: updatedBlocks,
            lastUpdated: new Date().toISOString()
          }
        }
      })
      
      return updatedBlock
    } catch (error) {
      dispatch({
        type: CONTENT_ACTIONS.FETCH_FAILURE,
        payload: error.message
      })
      throw error
    }
  }
  
  // Create new content block
  const createContent = async (section, data) => {
    try {
      const newBlock = await api.content.create(section, data)
      
      const currentSection = state.sections[section] || { blocks: [] }
      const updatedBlocks = [...currentSection.blocks, newBlock]
      
      dispatch({
        type: CONTENT_ACTIONS.UPDATE_SECTION,
        payload: {
          section,
          data: {
            ...currentSection,
            blocks: updatedBlocks,
            lastUpdated: new Date().toISOString()
          }
        }
      })
      
      return newBlock
    } catch (error) {
      dispatch({
        type: CONTENT_ACTIONS.FETCH_FAILURE,
        payload: error.message
      })
      throw error
    }
  }
  
  // Delete content block
  const deleteContent = async (section, blockId) => {
    try {
      await api.content.delete(section, blockId)
      
      const currentSection = state.sections[section]
      const updatedBlocks = currentSection.blocks.filter(block => 
        block.id !== blockId
      )
      
      dispatch({
        type: CONTENT_ACTIONS.UPDATE_SECTION,
        payload: {
          section,
          data: {
            ...currentSection,
            blocks: updatedBlocks,
            lastUpdated: new Date().toISOString()
          }
        }
      })
      
      return true
    } catch (error) {
      dispatch({
        type: CONTENT_ACTIONS.FETCH_FAILURE,
        payload: error.message
      })
      throw error
    }
  }
  
  // Get section data
  const getSection = (section) => {
    return state.sections[section] || null
  }
  
  // Check if section is loaded
  const isSectionLoaded = (section) => {
    return !!state.sections[section]
  }
  
  // Clear error
  const clearError = () => {
    dispatch({ type: CONTENT_ACTIONS.CLEAR_ERROR })
  }
  
  const value = {
    // State
    ...state,
    
    // Actions
    fetchContent,
    updateContent,
    createContent,
    deleteContent,
    clearError,
    
    // Helpers
    getSection,
    isSectionLoaded
  }
  
  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  )
}

// Custom hook
export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}