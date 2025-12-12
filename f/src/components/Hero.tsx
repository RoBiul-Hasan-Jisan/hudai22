import { Heart, Sparkles, Shield, Play, Download, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Custom pregnancy tracking for Indian mothers",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Medical Accuracy",
      description: "Doctor-reviewed content & WHO guidelines",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Sparkles,
      title: "AI Insights",
      description: "Smart predictions & personalized recommendations",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-full border border-purple-200 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">
                  AI-Powered Maternal Health Ecosystem
                </span>
                <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs font-medium text-purple-700">
                  Trusted by 50K+ Mothers
                </span>
              </motion.div>
              
              {/* Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-gray-900"
              >
                <span className="block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                    Matri-Rokkha Bondhun
                  </span>
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-600 mt-4 font-normal">
                  Your Intelligent Pregnancy Companion
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl"
              >
                From conception to delivery, get personalized tracking, medical guidance, 
                and rural healthcare support designed specifically for Indian mothers.
              </motion.p>

              {/* Features Rotator */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                        currentFeature === index
                          ? 'bg-white shadow-lg border border-purple-200'
                          : 'bg-white/50'
                      }`}
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Start Your Journey
                  <Sparkles className="w-5 h-5" />
                </button>
                
                <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <Play className="w-5 h-5 text-purple-600" />
                  Watch Demo
                </button>
              </motion.div>

              {/* Download App */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Download className="w-4 h-4" />
                    <span>Also available as:</span>
                  </div>
                  <button className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors">
                    Android App
                  </button>
                  <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors">
                    iOS App
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Interactive Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl p-6 md:p-8 border border-purple-100">
                {/* Interactive Pregnancy Timeline */}
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center p-8 mb-6">
                  <div className="relative w-full h-full">
                    {/* Circular Timeline */}
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-200 animate-spin-slow"></div>
                    
                    {/* Center Mother & Baby Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                          <Users className="w-16 h-16 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Trimester Indicators */}
                    {[
                      { week: 12, label: "1st Tri", color: "bg-purple-500" },
                      { week: 27, label: "2nd Tri", color: "bg-pink-500" },
                      { week: 40, label: "3rd Tri", color: "bg-blue-500" }
                    ].map((trimester, index) => {
                      const angle = (index * 120) * (Math.PI / 180);
                      const radius = 120;
                      const x = 50 + (radius * Math.cos(angle)) / 2;
                      const y = 50 + (radius * Math.sin(angle)) / 2;
                      
                      return (
                        <div
                          key={trimester.label}
                          className="absolute w-16 h-16 bg-white rounded-full shadow-lg flex flex-col items-center justify-center"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <div className={`w-3 h-3 rounded-full ${trimester.color}`}></div>
                          <span className="text-xs font-bold text-gray-700 mt-1">
                            {trimester.week}
                          </span>
                          <span className="text-[10px] text-gray-500">
                            {trimester.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Stats Display */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "40+", label: "Weeks", color: "text-purple-600" },
                    { value: "500+", label: "Health Tips", color: "text-pink-600" },
                    { value: "24/7", label: "Support", color: "text-blue-600" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center bg-white/50 rounded-xl p-4">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-green-200 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Safe & Verified</div>
                    <div className="text-xs text-gray-600">Medical board approved</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-purple-200 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Rural Friendly</div>
                    <div className="text-xs text-gray-600">Works offline too</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-purple-500 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;