'use client';

import { useState } from 'react';
import { Apple, Carrot, Beef, Fish, Leaf, Coffee, X } from 'lucide-react';

const NutritionGuide = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All', icon: Apple, color: 'text-purple-600' },
    { id: 'fruits', label: 'Fruits', icon: Apple, color: 'text-red-500' },
    { id: 'vegetables', label: 'Veggies', icon: Carrot, color: 'text-green-500' },
    { id: 'protein', label: 'Protein', icon: Beef, color: 'text-orange-500' },
    { id: 'fish', label: 'Fish', icon: Fish, color: 'text-blue-500' },
    { id: 'greens', label: 'Greens', icon: Leaf, color: 'text-emerald-500' },
  ];
  
  const foods = [
    {
      id: 1,
      name: 'Spinach',
      category: 'greens',
      benefits: ['Rich in Iron', 'Folate for baby development', 'Vitamin K'],
      description: 'Essential for blood formation and preventing anemia',
      portion: '1 cup cooked daily',
      icon: '🥬',
      color: 'bg-emerald-100',
    },
    {
      id: 2,
      name: 'Salmon',
      category: 'fish',
      benefits: ['Omega-3 DHA', 'Brain development', 'Protein'],
      description: 'Supports baby brain and eye development',
      portion: '2 servings per week',
      icon: '🐟',
      color: 'bg-blue-100',
    },
    {
      id: 3,
      name: 'Sweet Potato',
      category: 'vegetables',
      benefits: ['Vitamin A', 'Fiber', 'Energy'],
      description: 'Essential for baby organ development',
      portion: '1 medium daily',
      icon: '🍠',
      color: 'bg-orange-100',
    },
    {
      id: 4,
      name: 'Greek Yogurt',
      category: 'protein',
      benefits: ['Calcium', 'Probiotics', 'Protein'],
      description: 'Supports bone health and digestion',
      portion: '1 cup daily',
      icon: '🥛',
      color: 'bg-white',
    },
    {
      id: 5,
      name: 'Berries',
      category: 'fruits',
      benefits: ['Antioxidants', 'Vitamin C', 'Fiber'],
      description: 'Boosts immunity and prevents cell damage',
      portion: '1 cup daily',
      icon: '🫐',
      color: 'bg-pink-100',
    },
    {
      id: 6,
      name: 'Lentils',
      category: 'protein',
      benefits: ['Folate', 'Iron', 'Fiber'],
      description: 'Prevents neural tube defects',
      portion: '½ cup cooked daily',
      icon: '🫘',
      color: 'bg-amber-100',
    },
  ];
  
  const foodsToAvoid = [
    { name: 'Raw Seafood', reason: 'Risk of bacteria', icon: Coffee },
    { name: 'Unpasteurized Milk', reason: 'Listeria risk', icon: Coffee },
    { name: 'High Mercury Fish', reason: 'Neurological damage', icon: Coffee },
    { name: 'Raw Sprouts', reason: 'E. coli risk', icon: Coffee },
  ];
  
  const filteredFoods = selectedCategory === 'all' 
    ? foods 
    : foods.filter(food => food.category === selectedCategory);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Apple className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Nutrition Guide</h2>
          <p className="text-gray-600">Essential foods for you and your baby's health</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Food Categories */}
        <div>
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Food Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${cat.color}`} />
                    <span className="font-medium text-gray-700">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Foods to Avoid */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-red-600" />
              <h4 className="font-bold text-gray-900">Foods to Avoid</h4>
            </div>
            <div className="space-y-3">
              {foodsToAvoid.map((food, index) => {
                const Icon = food.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-red-500" />
                      <span className="font-medium text-gray-700">{food.name}</span>
                    </div>
                    <span className="text-sm text-red-600">{food.reason}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Middle: Food Items Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {filteredFoods.map((food) => (
              <div
                key={food.id}
                className={`${food.color} rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{food.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{food.name}</h4>
                      <p className="text-sm text-gray-600">{food.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 mb-1">Key Benefits:</h5>
                    <div className="flex flex-wrap gap-2">
                      {food.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/70 text-xs font-medium rounded-md text-gray-700"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700">Recommended:</h5>
                      <p className="text-sm text-gray-600">{food.portion}</p>
                    </div>
                    <button className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors">
                      Add to Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Daily Calorie Counter */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Daily Calorie Intake</h3>
                <p className="text-gray-600">Track your nutritional goals</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-700">2,150</div>
                <div className="text-sm text-gray-600">calories today</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Breakfast</span>
                <span className="text-gray-600">450 cal</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '30%' }} />
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Lunch</span>
                <span className="text-gray-600">650 cal</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }} />
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Dinner</span>
                <span className="text-gray-600">750 cal</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '52%' }} />
              </div>
            </div>
            
            <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-300">
              Generate Meal Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionGuide;