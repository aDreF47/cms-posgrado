// Ya está incluido en AuthContext.jsx como export
// Pero puedes crear hooks adicionales aquí

export { useAuth } from '../context/AuthContext.jsx'

// Hook adicional para formularios de auth
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export const useAuthForm = () => {
  const { studentLogin, adminLogin, loading, error, clearError } = useAuth()
  const [formData, setFormData] = useState({})
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (error) {
      clearError()
    }
  }
  
  const handleStudentSubmit = async (e) => {
    e.preventDefault()
    return await studentLogin(formData.accessCode)
  }
  
  const handleAdminSubmit = async (e) => {
    e.preventDefault()
    return await adminLogin(formData.username, formData.password)
  }
  
  const resetForm = () => {
    setFormData({})
    clearError()
  }
  
  return {
    formData,
    loading,
    error,
    handleInputChange,
    handleStudentSubmit,
    handleAdminSubmit,
    resetForm
  }
}