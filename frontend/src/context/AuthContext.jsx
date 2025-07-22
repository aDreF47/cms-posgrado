import { createContext, useContext, useReducer, useEffect } from 'react'
import { api } from '../services/api.js'

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  userType: null, // 'student' | 'admin'
  role: null,     // 'admin' | 'colaborador' (solo para admins)
  permissions: [],
  loading: true,
  error: null
}

// Action types
const AUTH_ACTIONS = {
  AUTH_START: 'AUTH_START',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILURE: 'AUTH_FAILURE',
  LOGOUT: 'LOGOUT',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_LOADING: 'SET_LOADING'
}

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.AUTH_START:
      return {
        ...state,
        loading: true,
        error: null
      }
      
    case AUTH_ACTIONS.AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        userType: action.payload.userType,
        role: action.payload.role,
        permissions: action.payload.permissions || [],
        loading: false,
        error: null
      }
      
    case AUTH_ACTIONS.AUTH_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        userType: null,
        role: null,
        permissions: [],
        loading: false,
        error: action.payload
      }
      
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...initialState,
        loading: false
      }
      
    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
      
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
      
    default:
      return state
  }
}

// Create context
const AuthContext = createContext()

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  
  // Check existing session on app start
  useEffect(() => {
    checkExistingSession()
  }, [])
  
  const checkExistingSession = async () => {
    try {
      dispatch({ type: AUTH_ACTIONS.AUTH_START })
      
      const result = await api.auth.verify()
      
      if (result.valid && result.session) {
        const session = result.session
        dispatch({
          type: AUTH_ACTIONS.AUTH_SUCCESS,
          payload: {
            user: session.user || { userType: session.userType },
            userType: session.userType,
            role: session.role,
            permissions: session.permissions || []
          }
        })
      } else {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false })
      }
    } catch (error) {
      console.error('Session check failed:', error)
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false })
    }
  }
  
  // Student login
  const studentLogin = async (accessCode) => {
    try {
      dispatch({ type: AUTH_ACTIONS.AUTH_START })
      
      const result = await api.auth.studentLogin(accessCode)
      
      dispatch({
        type: AUTH_ACTIONS.AUTH_SUCCESS,
        payload: {
          user: { userType: 'student' },
          userType: 'student',
          role: null,
          permissions: ['read']
        }
      })
      
      return { success: true }
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.AUTH_FAILURE,
        payload: error.message
      })
      return { success: false, error: error.message }
    }
  }
  
  // Admin login  
  const adminLogin = async (username, password) => {
    try {
      dispatch({ type: AUTH_ACTIONS.AUTH_START })
      
      const result = await api.auth.adminLogin(username, password)
      
      dispatch({
        type: AUTH_ACTIONS.AUTH_SUCCESS,
        payload: {
          user: result.user,
          userType: 'admin',
          role: result.role,
          permissions: result.permissions || []
        }
      })
      
      return { success: true }
    } catch (error) {
      dispatch({
        type: AUTH_ACTIONS.AUTH_FAILURE,
        payload: error.message
      })
      return { success: false, error: error.message }
    }
  }
  
  // Logout
  const logout = async () => {
    try {
      await api.auth.logout()
      dispatch({ type: AUTH_ACTIONS.LOGOUT })
      return { success: true }
    } catch (error) {
      // Even if API call fails, clear local state
      dispatch({ type: AUTH_ACTIONS.LOGOUT })
      return { success: true }
    }
  }
  
  // Clear error
  const clearError = () => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR })
  }
  
  // Helper functions
  const hasPermission = (permission) => {
    return state.permissions.includes(permission)
  }
  
  const isAdmin = () => {
    return state.userType === 'admin'
  }
  
  const isStudent = () => {
    return state.userType === 'student'
  }
  
  const canWrite = () => {
    return hasPermission('write') || hasPermission('manage_users')
  }
  
  const canDelete = () => {
    return hasPermission('delete') || hasPermission('manage_users')
  }
  
  const value = {
    // State
    ...state,
    
    // Actions
    studentLogin,
    adminLogin,
    logout,
    clearError,
    
    // Helpers
    hasPermission,
    isAdmin,
    isStudent,
    canWrite,
    canDelete
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}