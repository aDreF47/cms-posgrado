import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      toastOptions={{
        duration: 4000,
        style: {
          background: 'white',
          color: '#1f2937',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '12px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb',
          padding: '16px 20px',
          maxWidth: '420px',
        },
        success: {
          style: {
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            border: 'none',
          },
          iconTheme: {
            primary: 'white',
            secondary: '#10b981',
          },
          duration: 3000,
        },
        error: {
          style: {
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            color: 'white',
            border: 'none',
          },
          iconTheme: {
            primary: 'white',
            secondary: '#ef4444',
          },
          duration: 5000,
        },
        loading: {
          style: {
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            color: 'white',
            border: 'none',
          },
          iconTheme: {
            primary: 'white',
            secondary: '#3b82f6',
          },
        },
      }}
    />
  );
};

export default ToasterProvider;