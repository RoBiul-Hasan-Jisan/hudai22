import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import PregnancyTracker from '@/components/PregnancyTracker';
import NutritionGuide from '@/components/NutritionGuide';
import CareSection from '@/components/CareSection';
import MustDoList from '@/components/MustDoList';
import DailyTips from '@/components/DailyTips';
import BodyChanges from '@/components/BodyChanges';
import QuickQuestions from '@/components/QuickQuestions';
import ImageSection from '@/components/ImageSection';
import RuralHealthInfo from '@/components/RuralHealthInfo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const location = useLocation();

  // Handle hash scrolling on page load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-purple-50/20 via-white to-blue-50/20">
        {/* Hero Section */}
        <Hero />
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 space-y-16 max-w-7xl">
          {/* Pregnancy Week Tracker */}
          <section id="pregnancy-tracker" className="scroll-mt-24">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Interactive Pregnancy Tracker
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Track your pregnancy week by week with accurate medical data and personalized insights
              </p>
            </div>
            <PregnancyTracker />
          </section>
          
          {/* Rural Health Information */}
          <section id="rural-health" className="scroll-mt-24">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Rural Health Support
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specialized guidance for mothers in rural and remote areas
              </p>
            </div>
            <RuralHealthInfo />
          </section>
          
          {/* Image Gallery */}
          <section id="image-gallery" className="scroll-mt-24">
            <ImageSection />
          </section>
          
          {/* Nutrition Guide */}
          <section id="nutrition" className="scroll-mt-24">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pregnancy Nutrition Guide
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Balanced diet plans and nutritional advice for each trimester
              </p>
            </div>
            <NutritionGuide />
          </section>
          
          {/* Pregnancy Care */}
          <section id="care" className="scroll-mt-24">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Care Guide
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Essential healthcare information and doctor-recommended practices
              </p>
            </div>
            <CareSection />
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Must Do Section */}
            <section id="must-do" className="scroll-mt-24">
              <MustDoList />
            </section>
            
            {/* Daily Tips */}
            <section id="daily-tips" className="scroll-mt-24">
              <DailyTips />
            </section>
          </div>
          
          {/* Body Changes */}
          <section id="body-changes" className="scroll-mt-24">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Understanding Body Changes
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn about the physical and emotional changes during pregnancy
              </p>
            </div>
            <BodyChanges />
          </section>
          
          {/* Quick Questions */}
          <section id="quick-questions" className="scroll-mt-24">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Questions & Answers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common pregnancy questions from medical experts
              </p>
            </div>
            <QuickQuestions />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;