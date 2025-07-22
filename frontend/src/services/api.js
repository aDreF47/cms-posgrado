// Este archivo decide qué backend usar
const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === 'true'

// Importar ambas implementaciones
import { mockApi } from './mockApi.js'
import { realApi } from './realApi.js'

// Exportar la implementación activa
export const api = USE_MOCK_API ? mockApi : realApi

// Interface común que ambas implementaciones deben cumplir
export const apiInterface = {
  // Auth
  auth: {
    studentLogin: (accessCode) => api.auth.studentLogin(accessCode),
    adminLogin: (username, password) => api.auth.adminLogin(username, password),
    logout: () => api.auth.logout(),
    verify: () => api.auth.verify()
  },
  
  // Content
  content: {
    get: (section) => api.content.get(section),
    getById: (section, id) => api.content.getById(section, id),
    create: (section, data) => api.content.create(section, data),
    update: (section, id, data) => api.content.update(section, id, data),
    delete: (section, id) => api.content.delete(section, id)
  },
  
  // Files
  files: {
    upload: (file) => api.files.upload(file),
    delete: (fileId) => api.files.delete(fileId)
  },
  
  // Admin
  admin: {
    getUsers: () => api.admin.getUsers(),
    createUser: (userData) => api.admin.createUser(userData),
    updateUser: (id, userData) => api.admin.updateUser(id, userData),
    deleteUser: (id) => api.admin.deleteUser(id)
  }
}