export const foods = [
  {
    id: 1,
    name: 'Spinach (Palak)',
    localName: 'পালং শাক',
    category: 'greens',
    benefits: ['Rich in Iron', 'Folate for baby', 'Vitamin K'],
    description: 'Prevents anemia, essential for blood formation',
    portion: '1 bowl daily',
    icon: '🥬',
    color: 'bg-emerald-100',
    ruralAvailability: 'High',
    season: 'Year-round',
    localRecipe: 'Palak dal, Palak curry'
  },
  {
    id: 2,
    name: 'Lentils (Dal)',
    localName: 'ডাল',
    category: 'protein',
    benefits: ['Protein source', 'Iron rich', 'Fiber'],
    description: 'Essential for growth, prevents neural defects',
    portion: '½ cup cooked daily',
    icon: '🫘',
    color: 'bg-amber-100',
    ruralAvailability: 'High',
    season: 'Year-round',
    localRecipe: 'Masoor dal, Moong dal'
  },
  {
    id: 3,
    name: 'Rice (Chal)',
    localName: 'ভাত',
    category: 'grains',
    benefits: ['Energy source', 'Easy to digest', 'Gluten-free'],
    description: 'Provides carbohydrates for energy',
    portion: '1-2 cups daily',
    icon: '🍚',
    color: 'bg-white',
    ruralAvailability: 'Very High',
    season: 'Year-round',
    localRecipe: 'Plain rice, Panta bhat'
  },
  {
    id: 4,
    name: 'Fish (Mach)',
    localName: 'মাছ',
    category: 'protein',
    benefits: ['Omega-3 fatty acids', 'Protein', 'Calcium'],
    description: 'Brain development, bone health',
    portion: '2-3 times weekly',
    icon: '🐟',
    color: 'bg-blue-100',
    ruralAvailability: 'High (river areas)',
    season: 'Year-round',
    localRecipe: 'Hilsa curry, Small fish fry'
  },
  {
    id: 5,
    name: 'Egg (Dim)',
    localName: 'ডিম',
    category: 'protein',
    benefits: ['Complete protein', 'Choline', 'Vitamin D'],
    description: 'Brain development, muscle growth',
    portion: '1-2 daily',
    icon: '🥚',
    color: 'bg-yellow-100',
    ruralAvailability: 'High',
    season: 'Year-round',
    localRecipe: 'Boiled egg, Egg curry'
  },
  {
    id: 6,
    name: 'Milk (Dudh)',
    localName: 'দুধ',
    category: 'dairy',
    benefits: ['Calcium', 'Protein', 'Vitamin D'],
    description: 'Bone development, teeth formation',
    portion: '2 glasses daily',
    icon: '🥛',
    color: 'bg-gray-100',
    ruralAvailability: 'Medium',
    season: 'Year-round',
    localRecipe: 'Plain milk, Milk with dates'
  },
  {
    id: 7,
    name: 'Banana (Kola)',
    localName: 'কলা',
    category: 'fruits',
    benefits: ['Potassium', 'Energy', 'Fiber'],
    description: 'Prevents cramps, provides quick energy',
    portion: '1-2 daily',
    icon: '🍌',
    color: 'bg-yellow-50',
    ruralAvailability: 'High',
    season: 'Year-round',
    localRecipe: 'Plain, with milk'
  },
  {
    id: 8,
    name: 'Sweet Potato (Misti Alu)',
    localName: 'মিষ্টি আলু',
    category: 'vegetables',
    benefits: ['Vitamin A', 'Fiber', 'Energy'],
    description: 'Eye development, immune support',
    portion: '1 medium daily',
    icon: '🍠',
    color: 'bg-orange-100',
    ruralAvailability: 'High',
    season: 'Winter',
    localRecipe: 'Boiled, roasted'
  }
];

export const foodsToAvoid = [
  { 
    name: 'Raw Fish/Meat', 
    reason: 'Risk of parasites and bacteria',
    localExample: 'Sushi, rare meat',
    alternative: 'Well-cooked fish/meat'
  },
  { 
    name: 'Unpasteurized Milk', 
    reason: 'Listeria infection risk',
    localExample: 'Village raw milk',
    alternative: 'Boiled or pasteurized milk'
  },
  { 
    name: 'Street Food', 
    reason: 'Hygiene concerns',
    localExample: 'Fuchka, chat',
    alternative: 'Home-cooked snacks'
  },
  { 
    name: 'Leftover Food', 
    reason: 'Bacterial growth',
    localExample: 'Overnight rice',
    alternative: 'Freshly cooked meals'
  }
];

export const localRecipes = [
  {
    name: 'Palak Dal',
    ingredients: ['Spinach', 'Lentils', 'Turmeric', 'Salt'],
    benefits: 'Iron + Protein combination',
    cookingTime: '30 mins'
  },
  {
    name: 'Egg Curry',
    ingredients: ['Eggs', 'Onion', 'Tomato', 'Spices'],
    benefits: 'Complete protein meal',
    cookingTime: '20 mins'
  },
  {
    name: 'Fish Curry',
    ingredients: ['Fish', 'Mustard paste', 'Green chili'],
    benefits: 'Omega-3 + Calcium',
    cookingTime: '25 mins'
  },
  {
    name: 'Banana Milk',
    ingredients: ['Banana', 'Milk', 'Dates'],
    benefits: 'Energy + Calcium',
    cookingTime: '5 mins'
  }
];