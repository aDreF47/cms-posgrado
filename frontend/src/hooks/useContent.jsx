// Re-export del context
export { useContent } from '../context/ContentContext.jsx'

// Hook adicional para manejo de bloques
import { useState } from 'react'
import { useContent } from '../context/ContentContext.jsx'

export const useContentEditor = (section) => {
  const { 
    getSection, 
    updateContent, 
    createContent, 
    deleteContent,
    loading,
    error 
  } = useContent()
  
  const [editingBlock, setEditingBlock] = useState(null)
  const [isDirty, setIsDirty] = useState(false)
  
  const sectionData = getSection(section)
  
  const startEditing = (blockId) => {
    setEditingBlock(blockId)
  }
  
  const stopEditing = () => {
    setEditingBlock(null)
    setIsDirty(false)
  }
  
  const saveBlock = async (blockId, data) => {
    try {
      await updateContent(section, blockId, data)
      stopEditing()
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
  
  const addBlock = async (blockData) => {
    try {
      await createContent(section, blockData)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
  
  const removeBlock = async (blockId) => {
    try {
      await deleteContent(section, blockId)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
  
  return {
    sectionData,
    editingBlock,
    isDirty,
    loading,
    error,
    startEditing,
    stopEditing,
    saveBlock,
    addBlock,
    removeBlock,
    setIsDirty
  }
}