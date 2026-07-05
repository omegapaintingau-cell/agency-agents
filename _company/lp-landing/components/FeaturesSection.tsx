// ./lp-landing/components/FeaturesSection.tsx
import React from 'react';
import { FeatureItem } from '../types';

interface FeaturesProps {
  features: FeatureItem[];
}

const FeaturesSection: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🔥 왜 이 템플릿이 합격률을 높일까요?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          단순히 디자인만 예쁜 것이 아닙니다. 채용 담당자가 원하는 구조와 스토리텔링을 녹여냈습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition duration-300 bg-gray-50">
              <h3 className="text-2xl font-bold text-indigo-700 mb-3">{feature.icon}</h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;