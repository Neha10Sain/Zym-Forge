import { EquipmentFacility, Trainer, MembershipPlan, Testimonial, ClassSession, FAQItem } from '../types';

export const GYM_STATS = [
  { label: 'Active Athletes', value: '1,850+', detail: 'Disciplined community' },
  { label: 'Olympic & Strength Stations', value: '120+', detail: 'Eleiko & Rogue certified' },
  { label: 'Master Performance Coaches', value: '18', detail: 'CSCS & NSCA accredited' },
  { label: 'High-Performance Floor', value: '15,000 sq ft', detail: 'Turf, racks & recovery' }
];

export const GYM_BENEFITS = [
  {
    number: '01',
    title: 'Olympic Strength Training',
    desc: 'Heavy-duty 11-gauge steel power cages, calibrated steel plates, competition barbells, and dedicated deadlift platforms equipped with chalk stations.',
    badge: 'Heavy Lifting Standard'
  },
  {
    number: '02',
    title: '1-on-1 Biometric Coaching',
    desc: 'Science-backed periodization with weekly velocity tracking, movement screening, and custom nutrition frameworks tailored to your metabolic rate.',
    badge: 'Evidence-Based'
  },
  {
    number: '03',
    title: 'Functional Turf & Hyrox Conditioning',
    desc: '25-meter indoor sprint turf, prowler sleds, Concept2 rowers, SkiErgs, assault bikes, and bumper kettlebells for explosive athletic conditioning.',
    badge: 'Athletic Conditioning'
  },
  {
    number: '04',
    title: 'Contrast Recovery Sanctuary',
    desc: 'Finnish cedar dry saunas, zero-latency 4°C cold immersion pools, and NormaTec pneumatic compression boots for accelerated cellular repair.',
    badge: 'Rest & Regeneration'
  }
];

export const EQUIPMENT_FACILITIES: EquipmentFacility[] = [
  {
    id: 'free-weights',
    title: 'Strength & Free Weights',
    category: 'strength',
    shortDesc: 'Precision-engineered Olympic bars, competition bumpers, and calibrated cast-iron plates built for powerlifting, weightlifting, and hypertrophy.',
    detailedSpecs: [
      'Eleiko IWF-certified 20kg & 15kg training bars',
      'Over 4,500 kg of calibrated competition bumper plates',
      'Solid oak & high-density shock-absorbing deadlift platforms',
      'Magnesium carbonate chalk stands at every lifting bay'
    ],
    tags: ['Eleiko Spec', 'Calibrated Iron', 'Deadlift Bay'],
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    brandPartner: 'Eleiko Sweden'
  },
  {
    id: 'dumbbells-barbells',
    title: 'Dumbbells & Barbells Suite',
    category: 'strength',
    shortDesc: 'Seamless solid steel urethane dumbbells ranging from 2.5 kg up to 65 kg, complemented by precision knurled fixed-weight straight and EZ-curl bars.',
    detailedSpecs: [
      'Twin racks with paired dumbbells from 2.5kg to 65kg in 2.5kg increments',
      'Hard chrome knurled handles with ergonomic grip contour',
      'Fixed urethane barbells from 10kg to 45kg',
      'Heavy-duty adjustable incline/decline benches with laser-cut angle markers'
    ],
    tags: ['2.5kg - 65kg', 'Urethane Steel', 'Ergonomic Grip'],
    imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
    brandPartner: 'Rogue Fitness'
  },
  {
    id: 'squat-racks',
    title: 'Squat Racks & Power Cages',
    category: 'strength',
    shortDesc: 'Commercial 3x3" 11-gauge structural steel cages equipped with safety straps, drop-in monolift hooks, and multi-grip pull-up assemblies.',
    detailedSpecs: [
      '8 Commercial power cages with numbered laser-cut uprights',
      'High-tensile safety strap systems to safeguard maximum attempts',
      'Integrated resistance band pegs and dip attachments',
      'Independent monolift attachments for seamless heavy squat walkouts'
    ],
    tags: ['11-Gauge Steel', 'Monolift Hooks', 'Safety Straps'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    brandPartner: 'Hammer Strength'
  },
  {
    id: 'cable-resistance',
    title: 'Cable Machines & Pin Stacks',
    category: 'strength',
    shortDesc: 'Biomechanically aligned dual adjustable pulleys, lat pulldowns, seated cable rows, and isolateral plate-loaded chest and back press machines.',
    detailedSpecs: [
      'Dual 2:1 ratio adjustable cable crossover towers with smooth aluminum pulleys',
      'Selectorized stacks with micro-load add-on weights (1.25kg increments)',
      'Plate-loaded ISO-lateral incline chest press & rowers',
      'Specialized attachments: MAG grips, rope handles, and leather ankle cuffs'
    ],
    tags: ['Smooth Pulleys', 'Iso-Lateral', 'Micro-Loading'],
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    brandPartner: 'Atlantis Strength'
  },
  {
    id: 'cardio-conditioning',
    title: 'Cardio & Conditioning Arena',
    category: 'cardio',
    shortDesc: 'Non-motorized curved treadmills, air bikes, and flywheel ergs that mirror natural human locomotion and provide raw metabolic stress.',
    detailedSpecs: [
      'Woodway Curve manual treadmills for authentic sprint mechanics',
      'Concept2 Model D indoor rowers and PM5 SkiErgs',
      'Echo Air Resistance bikes with high-output flywheel cooling',
      'StairMaster Gauntlet stepping machines with heart-rate telemetry'
    ],
    tags: ['Woodway Curve', 'Concept2 Ergs', 'High-Output'],
    imageUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1200&auto=format&fit=crop',
    brandPartner: 'Woodway & Concept2'
  },
  {
    id: 'functional-turf',
    title: 'Functional Turf & Mobility Track',
    category: 'functional',
    shortDesc: 'A continuous 25-meter high-density synthetic turf lane designed for heavy sled pushes, tire flips, farmer carries, and plyometric drills.',
    detailedSpecs: [
      '25-meter shock-cushioned indoor synthetic sprint turf with metric distance markings',
      'Heavy steel prowler sleds with removable push posts and pull harness',
      'Competition cast iron kettlebells from 8kg to 48kg',
      'Soft plyometric box sets, slam balls, and battling rope arrays'
    ],
    tags: ['25m Sprint Turf', 'Prowler Sleds', 'Hyrox Ready'],
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop',
    brandPartner: 'Pavigym Turf'
  },
  {
    id: 'recovery-lockers',
    title: 'Locker Rooms & Recovery Sanctuary',
    category: 'recovery',
    shortDesc: 'Architectural relaxation spaces featuring Nordic cedar dry heat saunas, chilled ice baths, rainfall showers, and secure biometric lockers.',
    detailedSpecs: [
      'Custom Finnish cedar sauna heated to an optimal 85°C - 90°C',
      'Dual continuous filtered cold immersion tubs maintained at 4°C',
      'Spacious marble rainfall showers with Malin+Goetz apothecary amenities',
      'Keyless RFID digital lockers, hair styling stations, and towel service'
    ],
    tags: ['85°C Cedar Sauna', '4°C Cold Plunge', 'Private Showers'],
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    brandPartner: 'Nordic Chill & Tylo'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'vikram-sharma',
    name: 'Vikram Sharma',
    role: 'Head Strength & Conditioning Coach',
    specialization: 'Olympic Weightlifting, Powerlifting & Biomechanics',
    experienceYears: 10,
    certifications: ['NSCA - CSCS', 'USAW Level 2 Senior Coach', 'FMS Level 2'],
    specialties: ['Max Strength', 'Olympic Barbell Mechanics', 'Powerlifting Peaking'],
    bio: 'Former national-level weightlifter with a decade of coaching collegiate athletes and competitive powerlifters. Specializes in barbell technique refinement, force-curve optimization, and injury-free progressive overload.',
    philosophy: 'Strength is not an accident of genetics—it is the biological consequence of disciplined mechanics and deliberate consistency.',
    achievements: ['Coached 24 state-level medalists', 'Author of "The Mechanical Lift"', '10,000+ hours on the platform'],
    availability: 'Mon - Fri: 06:00 - 13:00',
    rating: 4.98,
    sessionsCompleted: 1420,
    imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sarah-dsouza',
    name: "Sarah D'Souza",
    role: 'Lead Hyrox & Conditioning Specialist',
    specialization: 'Metabolic Conditioning, Athletic Hypertrophy & Hyrox',
    experienceYears: 7,
    certifications: ['ACE Certified Personal Trainer', 'Hyrox Master Trainer', 'EXOS Performance Specialist'],
    specialties: ['Metabolic Conditioning', 'Fat Loss', 'Functional Capacity', 'Erg Mechanics'],
    bio: 'Sarah combines high-density interval methodology with structured strength baselines. Her clients build resilient cardiovascular engines without sacrificing lean muscle tissue or joint integrity.',
    philosophy: 'Mental grit is trained through heart-rate threshold work. When your body wants to quit, your discipline takes the wheel.',
    achievements: ['Top 5 Hyrox Pro Finisher (2024)', 'Certified Nutrition Coach (Pn1)', 'Over 180 body transformations'],
    availability: 'Mon - Sat: 07:00 - 15:00',
    rating: 4.96,
    sessionsCompleted: 1180,
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'arjun-mehta',
    name: 'Arjun Mehta',
    role: 'Senior Hypertrophy & Body Composition Coach',
    specialization: 'Physique Architecture, Fat Loss & Nutrient Timing',
    experienceYears: 8,
    certifications: ['ISSA Master Trainer', 'Precision Nutrition L2', 'NSPA Speed & Agility'],
    specialties: ['Muscle Building', 'Recomposition', 'Periodized Hypertrophy', 'Macro Strategies'],
    bio: 'Specialist in evidence-based muscular hypertrophy and sustainable body recomposition. Arjun translates sports-nutrition research into practical meal setups and training splits.',
    philosophy: 'Train with intent and track what matters. Random effort yields random outcomes; deliberate execution builds an enduring physique.',
    achievements: ['Featured in Men’s Health India', 'Competed in Natural Physique League', '98% Client Goal Achievement Rate'],
    availability: 'Tue - Sat: 12:00 - 20:00',
    rating: 4.94,
    sessionsCompleted: 990,
    imageUrl: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'maya-sen',
    name: 'Maya Sen',
    role: 'Movement Screening & Recovery Lead',
    specialization: 'Postural Rehabilitation, Joint Mobility & Prehab',
    experienceYears: 6,
    certifications: ['FRC Mobility Specialist (FRCms)', 'Kinstretch Certified', 'B.Sc. Exercise Physiology'],
    specialties: ['Joint Mobility', 'Prehab & Rehab', 'Spine Mechanics', 'Breathwork & Downregulation'],
    bio: 'Maya bridges the gap between clinical physical therapy and heavy weight room performance. She works with lifters to eliminate chronic hip, shoulder, and lumbar discomfort.',
    philosophy: 'You can only produce force across ranges of motion your nervous system truly owns. Mobility is the bedrock of lifelong strength.',
    achievements: ['Rehabilitated 300+ athletes back to heavy squatting', 'Consultant for regional sports academies'],
    availability: 'Mon - Fri: 08:00 - 16:00',
    rating: 4.97,
    sessionsCompleted: 850,
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'Essential access for self-directed athletes building solid training consistency.',
    monthlyPrice: 2499,
    annualPrice: 23990, // ~₹1,999/mo effectively
    accessHours: 'Standard Hours (06:00 - 22:00)',
    features: [
      'Full main gym floor & strength zone access',
      'Complete standard cardio & pin-loaded machines',
      'Locker room, private showers & amenities',
      'FORGE companion mobile app workout tracking',
      'Basic membership onboarding & orientation',
      'Bi-annual body composition scan'
    ],
    notIncluded: [
      'Group athletic conditioning classes',
      'Personal coaching sessions',
      'Sauna & ice bath recovery sanctuary'
    ]
  },
  {
    id: 'pro',
    name: 'PRO',
    tagline: 'Our signature standard for dedicated lifters seeking accelerated results.',
    monthlyPrice: 4999,
    annualPrice: 47990, // ~₹3,999/mo effectively
    isRecommended: true,
    badge: 'MOST POPULAR',
    accessHours: 'Extended Access (05:30 - 23:00)',
    features: [
      'Full unrestricted gym floor & Olympic platform access',
      'Unlimited 25m turf track & Hyrox conditioning area',
      'Personalized monthly workout template & guidance',
      'Unlimited access to all group performance classes',
      'Bi-weekly InBody biometric scans & progress review',
      'Full locker rooms with towel service',
      'Weekly complimentary sauna & cold plunge session'
    ],
    notIncluded: [
      'Weekly 1-on-1 personal coach assignment'
    ]
  },
  {
    id: 'elite',
    name: 'ELITE',
    tagline: 'The ultimate bespoke performance experience with dedicated 1-on-1 mentorship.',
    monthlyPrice: 8999,
    annualPrice: 85990, // ~₹7,165/mo effectively
    badge: 'ALL-INCLUSIVE',
    accessHours: '24/7 Unlimited Priority Access',
    features: [
      '24/7 Priority biometric keyless gym access',
      '4 Monthly 1-on-1 coaching sessions with Master Trainer',
      'Completely customized periodized training & macro blueprint',
      'Unlimited contrast recovery sanctuary (Sauna & Ice Plunges)',
      'Direct WhatsApp access to your dedicated coach for video form checks',
      'Reserved priority locker and complimentary workout kit laundering',
      '2 Complimentary guest day passes per month'
    ]
  }
];

export const COMPARISON_FEATURES = [
  { feature: 'Main Gym Floor & Strength Bay', starter: 'Yes', pro: 'Yes', elite: 'Yes' },
  { feature: 'Olympic Weightlifting Platforms', starter: 'Off-Peak Only', pro: 'Unlimited', elite: 'Unlimited Priority' },
  { feature: 'Access Hours', starter: '06:00 - 22:00', pro: '05:30 - 23:00', elite: '24/7 Priority' },
  { feature: '25m Sprint Turf & Hyrox Area', starter: 'No', pro: 'Yes', elite: 'Yes' },
  { feature: 'Group Performance Classes', starter: 'Add-on (₹400/class)', pro: 'Unlimited Included', elite: 'Unlimited Included' },
  { feature: '1-on-1 Personal Training', starter: 'No', pro: 'Add-on available', elite: '4 Sessions / Month Included' },
  { feature: 'Customized Workout Plan', starter: 'Generic Guide', pro: 'Monthly Template', elite: 'Bespoke Mesocycle' },
  { feature: 'Contrast Recovery (Sauna & Ice)', starter: 'No', pro: '1x per week', elite: 'Unlimited Access' },
  { feature: 'InBody Composition Analysis', starter: 'Twice yearly', pro: 'Every 2 weeks', elite: 'Weekly Scans' },
  { feature: 'Guest Day Passes', starter: 'None', pro: '1 pass per quarter', elite: '2 passes per month' },
  { feature: 'Direct Coach Video Form Checks', starter: 'No', pro: 'No', elite: 'Unlimited via WhatsApp' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rohan Deshmukh',
    role: 'Software Architect & Amateur Powerlifter',
    membershipTier: 'ELITE Member',
    quote: 'Before FORGE, my lower back was constantly giving out on deadlifts. Coach Vikram completely reconstructed my hip hinge mechanics. In 8 months, I added 45kg to my total and train completely pain-free.',
    resultMetric: '+45kg Barbell Total in 8 Months',
    trainingTime: 'Member since 2023',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    name: 'Ananya Roy',
    role: 'Venture Partner & Hyrox Competitor',
    membershipTier: 'PRO Member',
    quote: 'The atmosphere at FORGE is electric yet zero-ego. No one is sitting on machines scrolling phones; everyone is locked in. The Woodway treadmills and turf track prepared me for my first Hyrox finish under 75 minutes.',
    resultMetric: 'Sub-75 Min Hyrox Race Finish',
    trainingTime: 'Member since 2024',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-3',
    name: 'Karan Singhania',
    role: 'Founder & Endurance Athlete',
    membershipTier: 'ELITE Member',
    quote: 'The contrast recovery sanctuary alone pays for the elite tier. Doing a 15-minute 90°C sauna followed by 4 minutes at 4°C after heavy squat sessions completely eliminates second-day DOMS.',
    resultMetric: 'Zero DOMS & Consistent 5x/Week Output',
    trainingTime: 'Member since 2023',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Can I freeze my membership if I travel or sustain an injury?',
    answer: 'Yes. All PRO and ELITE memberships can be frozen for up to 60 days per calendar year with zero fee. STARTER members can freeze for up to 30 days with a nominal administrative hold.',
    category: 'Membership'
  },
  {
    question: 'Do you offer a free trial or day pass before I commit?',
    answer: 'Absolutely. We offer a complimentary 1-Day Athlete Pass for local residents looking to experience our training floor, equipment, and environment. You can request one directly on our Contact page.',
    category: 'Access'
  },
  {
    question: 'What is the cancellation policy on monthly and annual plans?',
    answer: 'Monthly plans operate on a flexible 30-day notice period with zero lock-in contracts or exit penalties. Annual plans are paid upfront at a steep 20% discount and are non-refundable, but can be transferred to a friend or colleague.',
    category: 'Billing'
  },
  {
    question: 'How does personal trainer assignment work?',
    answer: 'During your initial onboarding screening, our Head of Performance conducts a movement assessment and pairs you with the coach whose specialty (powerlifting, fat loss, rehab, or conditioning) directly matches your training objective.',
    category: 'Coaching'
  },
  {
    question: 'What amenities are included in the locker rooms?',
    answer: 'All members enjoy keyless digital lockers, rain showers, freshly laundered towels, luxury organic hair and body wash, hair dryers, and steam/sauna access according to their membership tier.',
    category: 'Amenities'
  },
  {
    question: 'Are payments secure and what methods are supported?',
    answer: 'We support all major Indian credit/debit cards, UPI (Google Pay, PhonePe, Paytm), and net banking. Note: All prices are shown in INR (₹). In this live demo portal, payments are simulated without charging your account.',
    category: 'Billing'
  }
];

export const TIMETABLE_CLASSES: ClassSession[] = [
  {
    id: 'c-1',
    title: 'Olympic Lifting Mechanics',
    trainerName: 'Vikram Sharma',
    day: 'Monday',
    time: '06:30 AM',
    durationMinutes: 60,
    category: 'Strength',
    capacity: 12,
    bookedCount: 10,
    intensity: 'High'
  },
  {
    id: 'c-2',
    title: 'Hyrox Engine & Sled Circuit',
    trainerName: "Sarah D'Souza",
    day: 'Monday',
    time: '07:45 AM',
    durationMinutes: 50,
    category: 'HIIT & Conditioning',
    capacity: 16,
    bookedCount: 14,
    intensity: 'Extreme'
  },
  {
    id: 'c-3',
    title: 'Hip & Thoracic Mobility Flow',
    trainerName: 'Maya Sen',
    day: 'Monday',
    time: '06:00 PM',
    durationMinutes: 45,
    category: 'Mobility',
    capacity: 20,
    bookedCount: 12,
    intensity: 'Medium'
  },
  {
    id: 'c-4',
    title: 'Powerlifting Squat & Bench Peaking',
    trainerName: 'Vikram Sharma',
    day: 'Tuesday',
    time: '07:00 AM',
    durationMinutes: 75,
    category: 'Powerlifting',
    capacity: 10,
    bookedCount: 8,
    intensity: 'Extreme'
  },
  {
    id: 'c-5',
    title: 'Metabolic Conditioning & Ergs',
    trainerName: "Sarah D'Souza",
    day: 'Wednesday',
    time: '06:30 AM',
    durationMinutes: 50,
    category: 'HIIT & Conditioning',
    capacity: 16,
    bookedCount: 15,
    intensity: 'High'
  },
  {
    id: 'c-6',
    title: 'Functional Hypertrophy: Upper Body',
    trainerName: 'Arjun Mehta',
    day: 'Thursday',
    time: '07:30 AM',
    durationMinutes: 60,
    category: 'Strength',
    capacity: 14,
    bookedCount: 11,
    intensity: 'High'
  },
  {
    id: 'c-7',
    title: 'Spinal Health & Prehab Workshop',
    trainerName: 'Maya Sen',
    day: 'Friday',
    time: '06:30 PM',
    durationMinutes: 50,
    category: 'Mobility',
    capacity: 18,
    bookedCount: 9,
    intensity: 'Medium'
  },
  {
    id: 'c-8',
    title: 'Saturday Team Hyrox Gauntlet',
    trainerName: "Sarah D'Souza",
    day: 'Saturday',
    time: '08:30 AM',
    durationMinutes: 75,
    category: 'HIIT & Conditioning',
    capacity: 24,
    bookedCount: 22,
    intensity: 'Extreme'
  }
];
