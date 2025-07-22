const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 m-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-red-500 text-2xl">⚠️</span>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            Error al cargar la información
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{error || "Ha ocurrido un error inesperado"}</p>
          </div>
          {onRetry && (
            <div className="mt-4">
              <button
                onClick={onRetry}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition"
              >
                🔄 Reintentar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage