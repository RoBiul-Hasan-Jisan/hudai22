// pregnancyData.ts
export interface WeekDetail {
  title: string;
  babySize: string;
  babyLength: string;
  weight: string;
  image: string;
  ruralTip: string;
  milestones: string[];
  symptoms: string[];
  tips: string[];
}

export interface WeekDetails {
  [key: number]: WeekDetail;
}

export const weekDetails: WeekDetails = {
  1: {
    title: "Week 1: Menstrual Period",
    babySize: "Not yet conceived",
    babyLength: "0 cm",
    weight: "0 g",
    image: "/public/images/week1.jpg",
    ruralTip: "Track menstrual cycle for pregnancy planning",
    milestones: [
      "Body preparing for ovulation",
      "Uterine lining shedding",
      "Follicles beginning to develop"
    ],
    symptoms: [
      "Menstrual bleeding",
      "Cramping",
      "Bloating",
      "Mood changes"
    ],
    tips: [
      "Start taking prenatal vitamins",
      "Stop alcohol and smoking",
      "Maintain healthy diet",
      "Track ovulation if planning pregnancy"
    ]
  },
  2: {
    title: "Week 2: Ovulation",
    babySize: "Not yet conceived",
    babyLength: "0 cm",
    weight: "0 g",
    image: "/public/images/week2.jpg",
    ruralTip: "Recognize fertile signs for conception",
    milestones: [
      "Ovulation occurs",
      "Egg released from ovary",
      "Fertilization window opens"
    ],
    symptoms: [
      "Increased cervical mucus",
      "Mild pelvic pain (mittelschmerz)",
      "Increased libido",
      "Slight temperature rise"
    ],
    tips: [
      "Optimal time for conception",
      "Continue prenatal vitamins",
      "Stay hydrated",
      "Avoid excessive heat exposure"
    ]
  },
  3: {
    title: "Week 3: Conception & Implantation",
    babySize: "Pinpoint",
    babyLength: "0.1-0.2 mm",
    weight: "Microscopic",
    image: "/public/images/week3.jpg",
    ruralTip: "Early pregnancy signs may appear",
    milestones: [
      "Fertilization occurs",
      "Zygote begins cell division",
      "Journey to uterus begins",
      "Blastocyst forms"
    ],
    symptoms: [
      "Possible implantation bleeding",
      "Mild cramping",
      "Breast tenderness",
      "Fatigue"
    ],
    tips: [
      "Continue healthy lifestyle",
      "Avoid NSAIDs",
      "Get adequate rest",
      "Eat folate-rich foods"
    ]
  },
  4: {
    title: "Week 4: Implantation Complete",
    babySize: "Poppy Seed",
    babyLength: "0.1 cm",
    weight: "Less than 1 g",
    image: "/public/images/week4.jpg",
    ruralTip: "Visit local health worker for confirmation",
    milestones: [
      "Implantation complete",
      "Placenta begins to form",
      "Neural tube starts developing",
      "Amniotic sac forming"
    ],
    symptoms: [
      "Missed period",
      "Light spotting possible",
      "Breast tenderness",
      "Fatigue"
    ],
    tips: [
      "Confirm pregnancy with local health worker",
      "Start taking folic acid",
      "Avoid tobacco and alcohol",
      "Eat iron-rich local foods"
    ]
  },
  5: {
    title: "Week 5: Heart Development",
    babySize: "Apple Seed",
    babyLength: "0.13 cm",
    weight: "Less than 1 g",
    image: "/public/images/week5.jpg",
    ruralTip: "Morning sickness remedies using local herbs (ginger tea)",
    milestones: [
      "Heart begins to beat",
      "Neural tube closes",
      "Major organs start forming",
      "Blood circulation begins"
    ],
    symptoms: [
      "Morning sickness begins",
      "Frequent urination",
      "Food aversions",
      "Fatigue increases"
    ],
    tips: [
      "Eat small, frequent meals",
      "Stay hydrated",
      "Rest when needed",
      "Avoid strong smells"
    ]
  },
  6: {
    title: "Week 6: Rapid Growth",
    babySize: "Sweet Pea",
    babyLength: "0.25 cm",
    weight: "Less than 1 g",
    image: "/public/images/week6.jpg",
    ruralTip: "Use traditional remedies for nausea",
    milestones: [
      "Brain developing rapidly",
      "Arm and leg buds appear",
      "Eyes and ears forming",
      "Digestive system begins"
    ],
    symptoms: [
      "Nausea and vomiting",
      "Breast changes continue",
      "Mood swings",
      "Bloating"
    ],
    tips: [
      "Eat ginger for nausea",
      "Wear comfortable bras",
      "Practice relaxation techniques",
      "Avoid spicy foods"
    ]
  },
  7: {
    title: "Week 7: Facial Features Form",
    babySize: "Blueberry",
    babyLength: "0.5 cm",
    weight: "Less than 1 g",
    image: "/public/images/week7.jpg",
    ruralTip: "Include local protein sources in diet",
    milestones: [
      "Face taking shape",
      "Mouth and tongue forming",
      "Kidneys developing",
      "Elbows and wrists visible"
    ],
    symptoms: [
      "Food cravings begin",
      "Increased salivation",
      "Constipation",
      "Skin changes"
    ],
    tips: [
      "Increase fiber intake",
      "Eat local lentils and legumes",
      "Practice good oral hygiene",
      "Wear sunscreen"
    ]
  },
  8: {
    title: "Week 8: Growing Rapidly",
    babySize: "Raspberry",
    babyLength: "1.6 cm",
    weight: "1 g",
    image: "/public/images/week8.jpg",
    ruralTip: "Attend village health camp for checkup",
    milestones: [
      "All major organs forming",
      "Fingers and toes webbed",
      "Heart beats regularly",
      "Bone cells developing"
    ],
    symptoms: [
      "Morning sickness peaks",
      "Frequent urination",
      "Food aversions",
      "Mood swings"
    ],
    tips: [
      "Attend antenatal checkup",
      "Drink boiled water",
      "Eat small frequent meals",
      "Rest when tired"
    ]
  },
  9: {
    title: "Week 9: Becoming a Fetus",
    babySize: "Cherry",
    babyLength: "2.3 cm",
    weight: "2 g",
    image: "/public/images/week9.jpg",
    ruralTip: "Traditional belly oil massage for skin",
    milestones: [
      "Now called a fetus",
      "Muscles developing",
      "Movements begin (not felt)",
      "Taste buds forming"
    ],
    symptoms: [
      "Weight gain begins",
      "Breast enlargement",
      "Nasal congestion",
      "Increased vaginal discharge"
    ],
    tips: [
      "Start maternity clothes",
      "Use coconut oil for skin",
      "Practice pelvic floor exercises",
      "Stay active with walking"
    ]
  },
  10: {
    title: "Week 10: Critical Development Complete",
    babySize: "Strawberry",
    babyLength: "3.1 cm",
    weight: "4 g",
    image: "/public/images/week10.jpg",
    ruralTip: "Prepare homemade healthy snacks",
    milestones: [
      "Organ development complete",
      "Fingerprints forming",
      "Teeth buds appearing",
      "Can swallow"
    ],
    symptoms: [
      "Visible veins",
      "Round ligament pain",
      "Energy may return",
      "Visible baby bump in some"
    ],
    tips: [
      "Eat calcium-rich foods",
      "Practice good posture",
      "Stay hydrated",
      "Prepare healthy snacks"
    ]
  },
  11: {
    title: "Week 11: Rapid Growth Phase",
    babySize: "Fig",
    babyLength: "4.1 cm",
    weight: "7 g",
    image: "/public/images/week11.jpg",
    ruralTip: "Use local herbs for digestion",
    milestones: [
      "Diaphragm developing",
      "Genitalia forming",
      "Hair follicles appear",
      "More coordinated movements"
    ],
    symptoms: [
      "Reduced nausea",
      "Increased energy",
      "Skin changes",
      "Dizziness"
    ],
    tips: [
      "Eat iron-rich foods",
      "Rise slowly from sitting",
      "Wear comfortable shoes",
      "Practice deep breathing"
    ]
  },
  12: {
    title: "Week 12: First Trimester Complete",
    babySize: "Plum",
    babyLength: "5.4 cm",
    weight: "14 g",
    image: "/public/images/week12.jpg",
    ruralTip: "Register at nearest health center",
    milestones: [
      "Reflexes developing",
      "Fingers and toes separated",
      "Kidneys producing urine",
      "Baby can make a fist"
    ],
    symptoms: [
      "Nausea improves",
      "Increased energy",
      "Visible baby bump",
      "Food cravings"
    ],
    tips: [
      "Schedule first trimester screening",
      "Wear loose comfortable clothes",
      "Continue prenatal vitamins",
      "Stay hydrated"
    ]
  },
  13: {
    title: "Week 13: Second Trimester Begins",
    babySize: "Lemon",
    babyLength: "7.4 cm",
    weight: "23 g",
    image: "/public/images/week13.jpg",
    ruralTip: "Traditional pregnancy diet recipes",
    milestones: [
      "Vocal cords developing",
      "Intestines moving to abdomen",
      "Can suck thumb",
      "Unique movements"
    ],
    symptoms: [
      "Energy returns",
      "Libido may increase",
      "Less frequent urination",
      "Glowing skin"
    ],
    tips: [
      "Announce pregnancy if desired",
      "Start pregnancy exercise",
      "Plan maternity leave",
      "Eat balanced meals"
    ]
  },
  14: {
    title: "Week 14: Facial Expressions",
    babySize: "Peach",
    babyLength: "8.7 cm",
    weight: "43 g",
    image: "/public/images/week14.jpg",
    ruralTip: "Local calcium sources (sesame seeds, greens)",
    milestones: [
      "Can make facial expressions",
      "Lanugo hair covering body",
      "Thyroid functioning",
      "Squinting and frowning"
    ],
    symptoms: [
      "Increased appetite",
      "Nasal congestion",
      "Thicker hair",
      "Reduced morning sickness"
    ],
    tips: [
      "Eat protein with every meal",
      "Use humidifier for congestion",
      "Practice good dental hygiene",
      "Start baby registry"
    ]
  },
  15: {
    title: "Week 15: Sensory Development",
    babySize: "Apple",
    babyLength: "10.1 cm",
    weight: "70 g",
    image: "/public/images/week15.jpg",
    ruralTip: "Traditional sitting positions for comfort",
    milestones: [
      "Can sense light",
      "Taste buds developed",
      "Bones hardening",
      "Hair pattern determined"
    ],
    symptoms: [
      "Round ligament pain",
      "Nasal stuffiness",
      "Increased vaginal discharge",
      "Forgetfulness"
    ],
    tips: [
      "Wear supportive maternity wear",
      "Sleep on side",
      "Practice memory exercises",
      "Stay organized with lists"
    ]
  },
  16: {
    title: "Week 16: Movement Begins",
    babySize: "Avocado",
    babyLength: "11.6 cm",
    weight: "100 g",
    image: "/public/images/week16.jpg",
    ruralTip: "Learn about government pregnancy schemes",
    milestones: [
      "Baby starts moving",
      "Hair begins to grow",
      "Taste buds developing",
      "Eyes moving slowly"
    ],
    symptoms: [
      "Round ligament pain",
      "Nasal congestion",
      "Glowing skin",
      "Increased appetite"
    ],
    tips: [
      "Feel for baby movements",
      "Eat calcium-rich foods",
      "Practice good posture",
      "Wear comfortable footwear"
    ]
  },
  17: {
    title: "Week 17: Fat Storage Begins",
    babySize: "Pear",
    babyLength: "13 cm",
    weight: "140 g",
    image: "/public/images/week17.jpg",
    ruralTip: "Traditional pregnancy massage techniques",
    milestones: [
      "Brown fat developing",
      "Sweat glands forming",
      "More coordinated movements",
      "Can hear external sounds"
    ],
    symptoms: [
      "Backaches",
      "Increased breast size",
      "Leg cramps",
      "Nasal bleeding"
    ],
    tips: [
      "Practice gentle stretching",
      "Use pregnancy pillows",
      "Apply nasal saline spray",
      "Elevate feet when resting"
    ]
  },
  18: {
    title: "Week 18: Hearing Develops",
    babySize: "Sweet Potato",
    babyLength: "14.2 cm",
    weight: "190 g",
    image: "/public/images/week18.jpg",
    ruralTip: "Sing traditional lullabies to baby",
    milestones: [
      "Ears in final position",
      "Can hear mother's heartbeat",
      "Yawning begins",
      "Myelin forming around nerves"
    ],
    symptoms: [
      "Quickening (first movements felt)",
      "Increased appetite",
      "Dizziness",
      "Bloating"
    ],
    tips: [
      "Talk and sing to baby",
      "Eat small frequent meals",
      "Rise slowly",
      "Avoid standing long periods"
    ]
  },
  19: {
    title: "Week 19: Sensory Development",
    babySize: "Mango",
    babyLength: "15.3 cm",
    weight: "240 g",
    image: "/public/images/week19.jpg",
    ruralTip: "Local hair care traditions",
    milestones: [
      "Five senses developing",
      "Vernix caseosa forms",
      "Hair continues growing",
      "More active movements"
    ],
    symptoms: [
      "Skin stretching",
      "Lower back pain",
      "Increased vaginal discharge",
      "Leg cramps at night"
    ],
    tips: [
      "Moisturize skin daily",
      "Practice prenatal yoga",
      "Wear panty liners if needed",
      "Massage calves before bed"
    ]
  },
  20: {
    title: "Week 20: Halfway There!",
    babySize: "Banana",
    babyLength: "25.6 cm",
    weight: "300 g",
    image: "/public/images/week20.jpg",
    ruralTip: "Prepare for ultrasound at Primary Health Center",
    milestones: [
      "Gender visible on ultrasound",
      "Baby can hear sounds",
      "Swallowing amniotic fluid",
      "Developing sleep patterns"
    ],
    symptoms: [
      "Back pain",
      "Leg cramps",
      "Stretch marks",
      "Increased vaginal discharge"
    ],
    tips: [
      "Anatomy scan at PHC",
      "Sleep on left side",
      "Massage legs for cramps",
      "Wear maternity support belt"
    ]
  },
  21: {
    title: "Week 21: Taste Buds Mature",
    babySize: "Carrot",
    babyLength: "26.7 cm",
    weight: "360 g",
    image: "/public/images/week21.jpg",
    ruralTip: "Traditional recipes for gestational diabetes prevention",
    milestones: [
      "Taste buds fully formed",
      "Bone marrow making blood cells",
      "Eyebrows and eyelashes appear",
      "Regular sleep-wake cycles"
    ],
    symptoms: [
      "Increased appetite",
      "Braxton Hicks contractions",
      "Varicose veins",
      "Shortness of breath"
    ],
    tips: [
      "Eat balanced meals",
      "Practice Kegel exercises",
      "Elevate legs when sitting",
      "Practice breathing exercises"
    ]
  },
  22: {
    title: "Week 22: Sense of Touch",
    babySize: "Coconut",
    babyLength: "27.8 cm",
    weight: "430 g",
    image: "/public/images/week22.jpg",
    ruralTip: "Handmade baby clothing preparations",
    milestones: [
      "Sense of touch developing",
      "Can feel pain",
      "Grasp reflex developing",
      "More coordinated movements"
    ],
    symptoms: [
      "Swollen ankles",
      "Stretch marks more visible",
      "Linea nigra appears",
      "Increased fetal movement"
    ],
    tips: [
      "Monitor salt intake",
      "Moisturize belly daily",
      "Wear comfortable clothing",
      "Track baby movements"
    ]
  },
  23: {
    title: "Week 23: Hearing Improves",
    babySize: "Grapefruit",
    babyLength: "28.9 cm",
    weight: "500 g",
    image: "/public/images/week23.jpg",
    ruralTip: "Local music exposure for baby",
    milestones: [
      "Can hear outside sounds clearly",
      "Rapid eye movement (REM) sleep",
      "Lung development continues",
      "Skin becoming less translucent"
    ],
    symptoms: [
      "Heartburn",
      "Backache",
      "Swollen feet",
      "Darkening areolas"
    ],
    tips: [
      "Eat smaller meals",
      "Use pregnancy pillow",
      "Wear compression socks",
      "Play music for baby"
    ]
  },
  24: {
    title: "Week 24: Viability Milestone",
    babySize: "Corn",
    babyLength: "30 cm",
    weight: "600 g",
    image: "/public/images/week24.jpg",
    ruralTip: "Prepare emergency transport plan",
    milestones: [
      "Lungs developing surfactant",
      "Brain growing rapidly",
      "Fingerprints forming",
      "Responds to touch and sound"
    ],
    symptoms: [
      "Braxton Hicks contractions",
      "Swollen ankles",
      "Heartburn",
      "Shortness of breath"
    ],
    tips: [
      "Glucose screening test",
      "Elevate feet when sitting",
      "Eat small frequent meals",
      "Practice breathing exercises"
    ]
  },
  25: {
    title: "Week 25: Hand Coordination",
    babySize: "Rutabaga",
    babyLength: "34.6 cm",
    weight: "660 g",
    image: "/public/images/week25.jpg",
    ruralTip: "Traditional handcrafts for baby",
    milestones: [
      "Hand coordination improves",
      "Can make a fist",
      "Nostrils begin to open",
      "More fat deposition"
    ],
    symptoms: [
      "Constipation",
      "Hemorrhoids",
      "Restless legs syndrome",
      "Increased fetal movements"
    ],
    tips: [
      "Increase fiber intake",
      "Use stool softeners if needed",
      "Massage legs before bed",
      "Monitor fetal movement patterns"
    ]
  },
  26: {
    title: "Week 26: Eye Opening",
    babySize: "Green Onion",
    babyLength: "35.6 cm",
    weight: "760 g",
    image: "/public/images/week26.jpg",
    ruralTip: "Local eye care traditions",
    milestones: [
      "Eyes begin to open",
      "Responds to light",
      "Can hear father's voice",
      "Immune system developing"
    ],
    symptoms: [
      "High blood pressure risk",
      "Increased vaginal discharge",
      "Itchy belly",
      "Difficulty sleeping"
    ],
    tips: [
      "Monitor blood pressure",
      "Wear cotton underwear",
      "Use anti-itch cream",
      "Establish bedtime routine"
    ]
  },
  27: {
    title: "Week 27: Third Trimester Begins",
    babySize: "Cauliflower",
    babyLength: "36.6 cm",
    weight: "875 g",
    image: "/public/images/week27.jpg",
    ruralTip: "Start preparing delivery supplies",
    milestones: [
      "Brain activity increases",
      "Can recognize voices",
      "Hiccups begin",
      "Sleep-wake patterns regular"
    ],
    symptoms: [
      "Increased fetal movement",
      "Back pain",
      "Shortness of breath",
      "Frequent urination returns"
    ],
    tips: [
      "Start childbirth classes",
      "Practice relaxation techniques",
      "Sleep propped up",
      "Empty bladder regularly"
    ]
  },
  28: {
    title: "Week 28: Third Trimester",
    babySize: "Eggplant",
    babyLength: "37.6 cm",
    weight: "1 kg",
    image: "/public/images/week28.jpg",
    ruralTip: "Plan delivery location with family",
    milestones: [
      "Eyes can open and close",
      "Dreaming begins",
      "Brain developing folds",
      "Baby position changes"
    ],
    symptoms: [
      "Increased fetal movement",
      "Fatigue returns",
      "Hip pain",
      "Varicose veins"
    ],
    tips: [
      "Start weekly checkups",
      "Count fetal movements",
      "Pack hospital bag",
      "Learn about labor signs"
    ]
  },
  29: {
    title: "Week 29: Muscle Development",
    babySize: "Butternut Squash",
    babyLength: "38.6 cm",
    weight: "1.2 kg",
    image: "/public/images/week29.jpg",
    ruralTip: "Traditional exercises for labor",
    milestones: [
      "Muscles and lungs maturing",
      "Bone marrow producing red blood cells",
      "More fat accumulation",
      "Kicks become stronger"
    ],
    symptoms: [
      "Braxton Hicks increase",
      "Leg cramps",
      "Difficulty finding comfortable position",
      "Increased vaginal discharge"
    ],
    tips: [
      "Practice perineal massage",
      "Stay hydrated",
      "Change positions frequently",
      "Wear panty liners"
    ]
  },
  30: {
    title: "Week 30: Weight Gain",
    babySize: "Cabbage",
    babyLength: "39.9 cm",
    weight: "1.3 kg",
    image: "/public/images/week30.jpg",
    ruralTip: "Local nutrient-rich recipes for third trimester",
    milestones: [
      "Can regulate body temperature",
      "Eyesight developing",
      "Bone marrow fully functional",
      "More coordinated movements"
    ],
    symptoms: [
      "Swelling in hands and feet",
      "Trouble sleeping",
      "Backache",
      "Increased clumsiness"
    ],
    tips: [
      "Monitor swelling",
      "Sleep with pillows for support",
      "Practice balance exercises",
      "Avoid high heels"
    ]
  },
  31: {
    title: "Week 31: Brain Development",
    babySize: "Coconut",
    babyLength: "41.1 cm",
    weight: "1.5 kg",
    image: "/public/images/week31.jpg",
    ruralTip: "Traditional brain-boosting foods",
    milestones: [
      "Brain developing rapidly",
      "Nervous system maturing",
      "Can process information",
      "All five senses functional"
    ],
    symptoms: [
      "Shortness of breath",
      "Heartburn",
      "Frequent urination",
      "Breast leakage"
    ],
    tips: [
      "Eat sitting upright",
      "Practice breathing exercises",
      "Wear breast pads if needed",
      "Limit fluids before bed"
    ]
  },
  32: {
    title: "Week 32: Preparing for Birth",
    babySize: "Squash",
    babyLength: "42.4 cm",
    weight: "1.7 kg",
    image: "/public/images/week32.jpg",
    ruralTip: "Arrange traditional birth attendant",
    milestones: [
      "Bones fully formed but soft",
      "Baby practicing breathing",
      "Immune system developing",
      "Lanugo hair shedding"
    ],
    symptoms: [
      "Frequent urination",
      "Trouble sleeping",
      "Breathlessness",
      "Nesting instinct begins"
    ],
    tips: [
      "Finalize birth plan",
      "Install baby equipment at home",
      "Practice relaxation techniques",
      "Arrange transport for delivery"
    ]
  },
  33: {
    title: "Week 33: Immune System",
    babySize: "Pineapple",
    babyLength: "43.7 cm",
    weight: "1.9 kg",
    image: "/public/images/week33.jpg",
    ruralTip: "Traditional immunity-boosting foods",
    milestones: [
      "Immune system developing antibodies",
      "Skull bones soft for delivery",
      "Recognizes songs and stories",
      "Pupils can dilate"
    ],
    symptoms: [
      "Increased vaginal discharge",
      "Pelvic pressure",
      "Braxton Hicks contractions",
      "Fatigue"
    ],
    tips: [
      "Rest when possible",
      "Practice pelvic tilts",
      "Monitor contraction patterns",
      "Prepare freezer meals"
    ]
  },
  34: {
    title: "Week 34: Lung Maturation",
    babySize: "Cantaloupe",
    babyLength: "45 cm",
    weight: "2.1 kg",
    image: "/public/images/week34.jpg",
    ruralTip: "Breathing exercises for labor",
    milestones: [
      "Lungs nearly mature",
      "Fat layers thickening",
      "Fingernails reach fingertips",
      "Central nervous system maturing"
    ],
    symptoms: [
      "Increased pelvic pressure",
      "Difficulty walking",
      "Varicose veins",
      "Hemorrhoids"
    ],
    tips: [
      "Practice slow deep breathing",
      "Wear support stockings",
      "Take warm baths",
      "Avoid standing long periods"
    ]
  },
  35: {
    title: "Week 35: Kidney Development",
    babySize: "Honeydew Melon",
    babyLength: "46.2 cm",
    weight: "2.4 kg",
    image: "/public/images/week35.jpg",
    ruralTip: "Traditional kidney-cleansing herbs (after consulting doctor)",
    milestones: [
      "Kidneys fully developed",
      "Liver processing waste",
      "Plump appearance",
      "Less room to move"
    ],
    symptoms: [
      "Frequent bathroom trips",
      "Swelling increases",
      "Trouble finding comfortable position",
      "Nesting instinct strong"
    ],
    tips: [
      "Limit evening fluids",
      "Elevate feet frequently",
      "Use pregnancy pillow",
      "Finalize baby preparations"
    ]
  },
  36: {
    title: "Week 36: Full Term",
    babySize: "Pumpkin",
    babyLength: "47.4 cm",
    weight: "2.6 kg",
    image: "/public/images/week36.jpg",
    ruralTip: "Keep emergency numbers and transport ready",
    milestones: [
      "Baby drops into pelvis",
      "Vernix coating thickens",
      "Organs fully developed",
      "Ready for birth"
    ],
    symptoms: [
      "Lightening (baby drops)",
      "Pelvic pressure increases",
      "Increased Braxton Hicks",
      "Nesting continues"
    ],
    tips: [
      "Weekly doctor visits",
      "Finalize baby names",
      "Rest as much as possible",
      "Know when to go to hospital"
    ]
  },
  37: {
    title: "Week 37: Early Term",
    babySize: "Winter Melon",
    babyLength: "48.6 cm",
    weight: "2.9 kg",
    image: "/public/images/week37.jpg",
    ruralTip: "Traditional labor-inducing foods (with caution)",
    milestones: [
      "Considered early term",
      "Grasp reflex strong",
      "Coordination improving",
      "Practicing breathing"
    ],
    symptoms: [
      "Mucus plug may discharge",
      "Increased pelvic pressure",
      "Nesting energy",
      "Stronger Braxton Hicks"
    ],
    tips: [
      "Watch for labor signs",
      "Practice pushing techniques",
      "Stay near phone",
      "Keep hospital bag ready"
    ]
  },
  38: {
    title: "Week 38: Full Development",
    babySize: "Pumpkin",
    babyLength: "49.8 cm",
    weight: "3.1 kg",
    image: "/public/images/week38.jpg",
    ruralTip: "Traditional postpartum preparation",
    milestones: [
      "Brain still developing",
      "Vernix disappearing",
      "Lanugo mostly gone",
      "Ready for life outside"
    ],
    symptoms: [
      "Cervical dilation may begin",
      "Increased discharge",
      "Backache",
      "Irregular contractions"
    ],
    tips: [
      "Final hospital bag check",
      "Install car seat",
      "Review labor signs",
      "Rest and conserve energy"
    ]
  },
  39: {
    title: "Week 39: Ready for Birth",
    babySize: "Mini Watermelon",
    babyLength: "50.7 cm",
    weight: "3.3 kg",
    image: "/public/images/week39.jpg",
    ruralTip: "Stay near health facility in remote areas",
    milestones: [
      "Physical development complete",
      "Continues to gain weight",
      "Head engaged in pelvis",
      "Awaiting birth signals"
    ],
    symptoms: [
      "Cervical effacement",
      "Stronger contractions",
      "Energy surge or fatigue",
      "Anxious anticipation"
    ],
    tips: [
      "Monitor contraction timing",
      "Eat light meals",
      "Practice relaxation",
      "Stay in contact with healthcare provider"
    ]
  },
  40: {
    title: "Week 40: Due Date",
    babySize: "Watermelon",
    babyLength: "51.2 cm",
    weight: "3.4 kg",
    image: "/public/images/week40.jpg",
    ruralTip: "Traditional birth welcoming rituals",
    milestones: [
      "Ready to meet the world!",
      "All systems functional",
      "Position for birth",
      "Waiting for labor"
    ],
    symptoms: [
      "Stronger contractions",
      "Mucus plug discharge",
      "Nesting energy",
      "Anxious excitement"
    ],
    tips: [
      "Monitor for labor signs",
      "Stay calm and relaxed",
      "Eat light meals",
      "Final preparations complete"
    ]
  },
  41: {
    title: "Week 41: Post Due Date",
    babySize: "Small Pumpkin",
    babyLength: "51.7 cm",
    weight: "3.6 kg",
    image: "/public/images/week41.jpg",
    ruralTip: "Consult healthcare provider immediately",
    milestones: [
      "Still gaining weight",
      "Skin may be dry",
      "Nails continue growing",
      "Placenta aging"
    ],
    symptoms: [
      "Increased discomfort",
      "Anxiety about overdue baby",
      "Possible membrane sweep offered",
      "Induction discussion"
    ],
    tips: [
      "Daily monitoring required",
      "Discuss induction options",
      "Stay active to encourage labor",
      "Monitor baby movements closely"
    ]
  },
  42: {
    title: "Week 42: Late Term",
    babySize: "Large Pumpkin",
    babyLength: "52 cm",
    weight: "3.7 kg",
    image: "/public/images/week42.jpg",
    ruralTip: "Urgent medical consultation needed",
    milestones: [
      "Post-term pregnancy",
      "Risk of complications increases",
      "Usually induced by now",
      "Close monitoring essential"
    ],
    symptoms: [
      "Extreme discomfort",
      "Possible decreased movement",
      "Medical intervention likely",
      "Hospital admission probable"
    ],
    tips: [
      "Follow medical advice strictly",
      "Hospital induction usually recommended",
      "Continuous fetal monitoring",
      "Prepare for possible C-section"
    ]
  }
};

export interface TrimesterEvent {
  week: number;
  event: string;
  ruralAction: string;
}

export const trimesterData: TrimesterEvent[] = [
  { week: 4, event: 'Pregnancy confirmation', ruralAction: 'Visit local health worker' },
  { week: 8, event: 'First checkup', ruralAction: 'Attend village health camp' },
  { week: 12, event: 'First trimester screening', ruralAction: 'Register at Primary Health Center' },
  { week: 20, event: 'Anatomy scan', ruralAction: 'Travel to district hospital if needed' },
  { week: 24, event: 'Glucose test', ruralAction: 'Available at most PHCs' },
  { week: 28, event: 'Third trimester begins', ruralAction: 'Weekly PHC visits start' },
  { week: 32, event: 'Birth plan finalization', ruralAction: 'Arrange local birth attendant' },
  { week: 36, event: 'Weekly checkups', ruralAction: 'Stay near health facility' },
  { week: 40, event: 'Due date', ruralAction: 'Hospital stay if in remote area' }
];

export interface RuralTips {
  transport: string[];
  nutrition: string[];
  healthcare: string[];
  preparation: string[];
  traditionalPractices: string[];
}

export const ruralSpecificTips: RuralTips = {
  transport: [
    "Arrange reliable transport for emergencies",
    "Keep vehicle fueled and ready",
    "Know nearest health facility route",
    "Have backup transport option",
    "Share location with family"
  ],
  nutrition: [
    "Eat local seasonal fruits and vegetables",
    "Include millets and whole grains",
    "Consume locally available dairy products",
    "Use traditional iron-rich recipes",
    "Forage safe wild greens"
  ],
  healthcare: [
    "Register with local ASHA worker",
    "Attend village health camps regularly",
    "Keep emergency medicines at home",
    "Learn basic first aid for pregnancy",
    "Know danger signs requiring immediate care"
  ],
  preparation: [
    "Prepare birth kit with clean supplies",
    "Arrange warm clothes for baby",
    "Keep emergency cash ready",
    "Inform neighbors for support system",
    "Traditional birth attendant contact ready"
  ],
  traditionalPractices: [
    "Safe herbal teas (ginger, mint)",
    "Traditional pregnancy massage",
    "Cultural rituals for baby health",
    "Local postpartum recovery foods",
    "Traditional breastfeeding techniques"
  ]
};

export interface DangerSigns {
  immediateCare: string[];
  contactHealthWorker: string[];
}

export const dangerSigns: DangerSigns = {
  immediateCare: [
    "Severe headache or blurred vision",
    "Severe abdominal pain",
    "Vaginal bleeding",
    "High fever",
    "Decreased fetal movement",
    "Water breaking before 37 weeks",
    "Contractions before 37 weeks"
  ],
  contactHealthWorker: [
    "Swelling in face or hands",
    "Persistent vomiting",
    "Painful urination",
    "Severe back pain",
    "Excessive thirst or urination",
    "Unusual vaginal discharge"
  ]
};

export interface WeekData extends WeekDetail {
  week: number;
}

// Utility function to get week data with proper typing
export function getWeekData(weekNumber: number): WeekDetail | null {
  return weekDetails[weekNumber] || null;
}

// Export all weeks as array with proper typing
export const allWeeks: WeekData[] = Array.from({length: 42}, (_, i) => i + 1)
  .filter((week): week is number => weekDetails[week] !== undefined)
  .map(week => ({
    week,
    ...weekDetails[week]
  }));

// Export default for easy imports
export default {
  weekDetails,
  trimesterData,
  ruralSpecificTips,
  dangerSigns,
  getWeekData,
  allWeeks
};