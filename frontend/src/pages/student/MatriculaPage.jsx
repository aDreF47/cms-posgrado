import React from 'react';

function MatriculaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Proceso de Matrícula
          </h1>
          <p className="text-xl text-gray-600">
            Completa tu proceso de matrícula para el semestre 2025-I
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Estado de Matrícula
              </h2>
              <p className="text-gray-600">
                Revisa el progreso de tu proceso de matrícula
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                En Proceso
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#A41E22] rounded-lg flex items-center justify-center text-white text-xl">
                📋
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-4">
                Documentos Requeridos
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Revisa y sube los documentos necesarios para tu matrícula
            </p>
            <button className="w-full bg-[#A41E22] text-white py-3 rounded-lg hover:bg-[#8A1A1D] transition-colors">
              Ver Documentos
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#A41E22] rounded-lg flex items-center justify-center text-white text-xl">
                💳
              </div>
              <h3 className="text-xl font-semibold text-gray-800 ml-4">
                Realizar Pago
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Completa el pago de matrícula y derechos académicos
            </p>
            <button className="w-full bg-[#A41E22] text-white py-3 rounded-lg hover:bg-[#8A1A1D] transition-colors">
              Ir a Pagos
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Pasos de Matrícula
          </h3>
          <div className="space-y-4">
            {[
              { step: 1, title: "Verificar documentos", completed: true },
              { step: 2, title: "Realizar pago", completed: false, current: true },
              { step: 3, title: "Seleccionar cursos", completed: false },
              { step: 4, title: "Confirmar matrícula", completed: false }
            ].map((item) => (
              <div key={item.step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                  item.completed ? 'bg-green-500' : 
                  item.current ? 'bg-[#A41E22]' : 'bg-gray-300'
                }`}>
                  {item.completed ? '✓' : item.step}
                </div>
                <span className={`ml-4 ${item.current ? 'font-semibold text-[#A41E22]' : 'text-gray-600'}`}>
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatriculaPage;