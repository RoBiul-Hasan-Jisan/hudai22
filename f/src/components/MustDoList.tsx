'use client';

import { CheckCircle2, Circle, AlertTriangle, Clock, Star } from 'lucide-react';
import { useState } from 'react';

const MustDoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Schedule prenatal checkup',
      category: 'medical',
      priority: 'high',
      completed: false,
      dueDate: 'Today',
      icon: '🏥',
    },
    {
      id: 2,
      title: 'Take prenatal vitamins',
      category: 'daily',
      priority: 'high',
      completed: true,
      dueDate: 'Daily',
      icon: '💊',
    },
    {
      id: 3,
      title: 'Drink 2L water',
      category: 'daily',
      priority: 'medium',
      completed: false,
      dueDate: 'Today',
      icon: '💧',
    },
    {
      id: 4,
      title: 'Prenatal yoga session',
      category: 'exercise',
      priority: 'medium',
      completed: false,
      dueDate: 'Tomorrow',
      icon: '🧘',
    },
    {
      id: 5,
      title: 'Read baby book',
      category: 'education',
      priority: 'low',
      completed: false,
      dueDate: 'This week',
      icon: '📚',
    },
    {
      id: 6,
      title: 'Pack hospital bag',
      category: 'preparation',
      priority: 'medium',
      completed: false,
      dueDate: 'Week 32',
      icon: '🎒',
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const categories = [
    { id: 'all', label: 'All Tasks', count: 6 },
    { id: 'daily', label: 'Daily', count: 2 },
    { id: 'medical', label: 'Medical', count: 1 },
    { id: 'preparation', label: 'Preparation', count: 1 },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTasks = selectedCategory === 'all'
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  const progress = (tasks.filter(t => t.completed).length / tasks.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Must Do Checklist</h2>
            <p className="text-gray-600">Essential tasks for a healthy pregnancy</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-700">
            {tasks.filter(t => t.completed).length}/{tasks.length}
          </div>
          <div className="text-sm text-gray-600">tasks completed</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 text-purple-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="font-medium">{category.label}</span>
            <span className={`text-sm px-2 py-0.5 rounded-full ${
              selectedCategory === category.id
                ? 'bg-purple-100 text-purple-700'
                : 'bg-gray-200 text-gray-700'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3 mb-8">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
              task.completed
                ? 'bg-green-50 border-green-200'
                : 'bg-white border-gray-200 hover:border-purple-300'
            }`}
          >
            <button
              onClick={() => toggleTask(task.id)}
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                task.completed
                  ? 'bg-green-500 text-white'
                  : 'border-2 border-gray-300 hover:border-green-500'
              }`}
            >
              {task.completed ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Circle className="w-4 h-4 text-gray-400" />
              )}
            </button>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">{task.icon}</span>
                <div>
                  <h3 className={`font-medium ${
                    task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                  }`}>
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      task.priority === 'high'
                        ? 'bg-red-100 text-red-700'
                        : task.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {task.priority} priority
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {task.dueDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {task.priority === 'high' && !task.completed && (
              <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Quick Add */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5">
        <h3 className="font-bold text-gray-900 mb-3">Add New Task</h3>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 bg-white rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-300">
            Add
          </button>
        </div>
      </div>

      {/* Achievement */}
      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
        <div className="flex items-center gap-3">
          <Star className="w-6 h-6 text-yellow-500" />
          <div>
            <h4 className="font-bold text-gray-900">Daily Streak!</h4>
            <p className="text-sm text-gray-600">You've completed daily tasks for 7 days in a row!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustDoList;