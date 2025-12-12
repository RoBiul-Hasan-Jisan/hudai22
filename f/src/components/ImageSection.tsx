'use client';

import { Camera, Users, Heart, Home } from 'lucide-react';
import { ruralHealthImages, babySizeComparisons } from '@/data/imagesData';

const ImageSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <Camera className="w-8 h-8 text-purple-600" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Rural Health Gallery</h2>
          <p className="text-gray-600">Visual guide for maternal health in rural areas</p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {ruralHealthImages.map((image) => (
          <div
            key={image.id}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden border border-purple-200"
          >
            <div className="h-40 bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
              <div className="text-6xl">
                {image.id === 1 && <Users className="w-16 h-16 text-white" />}
                {image.id === 2 && <Heart className="w-16 h-16 text-white" />}
                {image.id === 3 && <Home className="w-16 h-16 text-white" />}
                {image.id === 4 && <Users className="w-16 h-16 text-white" />}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-purple-100 text-purple-700 rounded">
                  {image.category}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{image.description}</p>
              <div className="space-y-2">
                {image.tips.slice(0, 2).map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Baby Size Comparison */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-6">Baby Size Comparison</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {babySizeComparisons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center border border-gray-200"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-gray-900">Week {item.week}</div>
              <div className="text-xs text-gray-600 mb-1">{item.size}</div>
              <div className="text-xs text-gray-500">{item.localExample}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips for Rural Photography */}
      <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
        <h3 className="font-bold text-gray-900 mb-4">Document Your Journey</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">What to Photograph</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-700">Monthly baby bump progress</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-700">Health camp visits</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-700">Nutritious meals prepared</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-gray-700">Family support moments</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Sharing Guidelines</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-700">Share with healthcare worker</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-700">Keep digital record</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-700">Note dates and details</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-700">Respect privacy concerns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;