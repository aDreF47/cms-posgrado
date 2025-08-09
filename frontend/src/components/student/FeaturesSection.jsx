import React from 'react';
import { systemFeatures } from '../../data/mockData';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">Funcionalidades del Sistema</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Herramientas completas para la gestión integral de programas de posgrado
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemFeatures.map((feature) => (
            <div
              key={feature.id}
              className="text-center p-8 rounded-2xl hover:border-[#A41E22] hover:-translate-y-1 transition-all duration-300 border-2 border-transparent"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#A41E22] to-[#8A1A1D] rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;