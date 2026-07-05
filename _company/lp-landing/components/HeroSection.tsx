// ./lp-landing/components/HeroSection.tsx
import React from 'react';

interface HeroProps {
  subtitle: string;
}

const HeroSection: React.FC<HeroProps> = ({ subtitle }) => {
  return (
    <section className="bg-gray-50 py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          합격률을 높이는 이직 전문 포트폴리오 & 레주메 템플릿 패키지
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-indigo-600 font-semibold">{subtitle}</p>
        <div className="mt-10 flex justify-center">
          {/* CTA는 메인 페이지에서 처리하고, 여기서는 비워둡니다. */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;