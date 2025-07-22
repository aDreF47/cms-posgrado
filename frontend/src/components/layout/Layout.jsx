import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import StudentLogin from '../auth/StudentLogin.jsx'
import AdminLogin from '../auth/AdminLogin.jsx'

const Layout = ({ children }) => {
  const [showStudentLogin, setShowStudentLogin] = useState(false)
  const [showAdminLogin, setShowAdminLogin] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        onStudentLogin={() => setShowStudentLogin(true)}
        onAdminLogin={() => setShowAdminLogin(true)}
      />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
      
      {/* Modals */}
      {showStudentLogin && (
        <StudentLogin onClose={() => setShowStudentLogin(false)} />
      )}
      
      {showAdminLogin && (
        <AdminLogin onClose={() => setShowAdminLogin(false)} />
      )}
    </div>
  )
}

export default Layout