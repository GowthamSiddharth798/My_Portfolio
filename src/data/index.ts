import { Project, Skill, Internship, Certification, Achievement, Education } from '../types';

export const education: Education[] = [
  {
    degree: 'B.Tech EEE',
    institution: 'Vishnu Institute of Technology',
    timeline: '2022–Present',
    score: 'CGPA: 8.2',
  },
  {
    degree: 'Intermediate',
    institution: 'Sri Chaitanya Junior College',
    timeline: '2020-2022',
    score: '85.1%',
  },
  {
    degree: 'SSC',
    institution: 'Narayana EM High School',
    timeline: '2019-2020',
    score: 'GPA: 10',
  },
];

export const skills: Skill[] = [
  // Languages
  { name: 'Python', level: 4, category: 'Languages' },
  { name: 'C', level: 4, category: 'Languages' },
  { name: 'SQL', level: 3, category: 'Languages' },
  { name: 'Java(Basic)', level: 2, category: 'Languages' },
  { name: 'JavaScript', level: 3, category: 'Languages' },
  
  // Frameworks
  { name: 'React.js', level: 4, category: 'Frameworks' },
  { name: 'Bootstrap', level: 3, category: 'Frameworks' },
  
  // Tools
  { name: 'MATLAB', level: 4, category: 'Tools' },
  { name: 'Git', level: 3, category: 'Tools' },
  { name: 'MySQL', level: 3, category: 'Tools' },
  // { name: 'MongoDB', level: 3, category: 'Tools' },
  
  // Platforms
  // { name: 'Web', level: 4, category: 'Platforms' },
  // { name: 'Windows', level: 4, category: 'Platforms' },
  // { name: 'Arduino', level: 4, category: 'Platforms' },
  { name: 'Raspberry Pi', level: 3, category: 'Platforms' },
  
  // Soft Skills
  { name: 'Leadership', level: 4, category: 'Soft Skills' },
  { name: 'Time Management', level: 4, category: 'Soft Skills' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Energy Monitoring System (EMS)',
    timeline: 'Jan 2023 - Mar 2023',
    role: 'Electrical Design Lead',
    description: 'Developed a real-time energy monitoring system for residential and commercial buildings to track power consumption.',
    features: [
      'Real-time power consumption tracking',
      'Energy usage analytics',
      'Anomaly detection',
      'Power factor correction recommendations'
    ],
    technologies: ['Arduino', 'IoT Sensors', 'Python','MFM384','RS485'],
    category: 'Electrical',
    link: 'https://energymonitoringsystem.netlify.app/',
    image: '\image1.png'
  },
  {
    id: 2,
    title: 'Wireless Charging System',
    timeline: 'Apr 2023 - Jun 2023',
    role: 'System Designer',
    description: 'Created an efficient wireless charging system using magnetic resonance coupling for consumer electronics.',
    features: [
      'High efficiency power transfer',
      'Foreign object detection',
      'Thermal management system',
      'Multi-device support'
    ],
    technologies: ['Circuit Design', 'Electromagnetic Theory', 'Microcontrollers'],
    category: 'Electrical',
    image: '\image2.png'
  },
  {
    id: 3,
    title: 'Smart Incubator',
    timeline: 'Jul 2023 - Oct 2023',
    role: 'Lead Developer',
    description: 'Built an IoT-enabled smart incubator with precise temperature and humidity control.',
    features: [
      'Automated environment regulation',
      'Remote monitoring via mobile app',
      'Alert system for parameter deviations',
      'Data logging and analytics'
    ],
    technologies: ['Arduino', 'IoT', 'Sensors', 'Mobile App Development'],
    category: 'IoT',
    link: 'https://smartincubator.onrender.com/',
    image: '\image3.png'
  },
  {
    id: 4,
    title: 'Smart Street Lights',
    timeline: 'Nov 2023 - Dec 2023',
    role: 'Electrical Engineer',
    description: 'Designed an energy-efficient smart street lighting system with automated controls based on ambient light and traffic.',
    features: [
      'Automatic brightness adjustment',
      'Motion-based activation',
      'Energy consumption monitoring',
      'Fault detection and reporting'
    ],
    technologies: ['Sensors', 'IoT', 'Solar Integration', 'Power Electronics'],
    category: 'IoT',
    image:'\image4.png'  },
  {
    id: 5,
    title: 'Aquaculture Health Monitoring System',
    timeline: 'Jan 2024 - Mar 2024',
    role: 'System Architect',
    description: 'Developed an IoT-based  system for aquaculture farms to track water quality parameters in real-time.',
    features: [
      'Real-time water quality monitoring',
      'Automatic feeding system control',
      'Mobile alerts for critical parameters',
      'Historical data analysis'
    ],
    technologies: ['Micro Controllers', 'Water Sensors', 'Cloud Computing', 'Data Analysis'],
    category: 'IoT',
    image: '\image5.png'  },
  {
    id: 6,
    title: 'RB Couriers Web Project',
    timeline: 'Apr 2024 - Present',
    role: 'Frontend Developer',
    description: 'Building a comprehensive web platform for a courier service company with tracking and management features.',
    features: [
      'Real-time shipment tracking',
      'Customer dashboard',
      'Admin management panel',
      'Automated email notifications'
    ],
    technologies: ['React','Html','Css','Bootstrap'],
    link: 'https://github.com/GowthamSiddharth798/rb-couriers',
    category: 'Web',
    image: '\image6.png'
  }
];

export const internships: Internship[] = [
  {
    id: 1,
    role: 'Web Developer',
    company: 'Hacker Plus Technologies',
    location: 'Remote',
    type: 'Remote',
    timeline: 'May 2023 - Jul 2023',
    description: [
      'Developed responsive web applications using React.js',
      'Collaborated with UI/UX designers to implement design specifications',
      'Participated in code reviews and agile development processes',
      'Contributed to the company\'s internal tool development'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML/CSS', 'Git']
  },
  {
    id: 2,
    role: 'Electrical Research Intern',
    company: 'ONGC',
    location: 'Rajahmundry',
    type: 'On-Site',
    timeline: 'Dec 2023 - Feb 2024',
    description: [
      ' Acquired hands-on experience with solar power plant operations, focusing on energy efficiency.',
      'Studied the design and implementation of electrical safety systems within solar infrastructure, emphasizing surge protection, grounding, and fault analysis.' 
      ,'Gained hands-on exposure to the operations and maintenance of a large-scale solar power plant, including inverter configurations, panel orientation, and power output optimization.'
    ],
    technologies: ['MATLAB', 'Data Analysis', 'Power Systems']
  },
  {
    id: 3,
    role: 'Frontend Developer & Hardware Developer',
    company: 'Power Sense Pvt. Ltd.',
    location: 'Hyderabad',
    type: 'On-Site',
    timeline: 'Mar 2024 - Present',
    description: [
      'Developing web interface for power monitoring systems',
      'Creating data visualization dashboards for energy analytics',
      'Implementing responsive designs for cross-device compatibility',
      'Integrating IoT device data with web applications'
    ],
    technologies: ['Multifunction meter','Circuit Integration','React', 'TypeScript', 'Tailwind CSS', 'IoT Integration']
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'HTML, CSS, Bootstrap',
    provider: 'NxtWave',
    date: 'August 2022',
    description: 'Comprehensive web development fundamentals certification covering HTML5, CSS3, and Bootstrap framework.',
  },
  {
    id: 2,
    title: 'MATLAB Programming',
    provider: 'Udemy',
    date: 'October 2022',
    description: 'Advanced course in MATLAB programming with applications in electrical engineering and signal processing.',
  },
  {
    id: 3,
    title: 'Python Programming',
    provider: 'GUVI',
    date: 'January 2023',
    description: 'Comprehensive Python programming certification with focus on data structures, algorithms, and practical applications.',
  },
  {
    id: 4,
    title: 'C Programming',
    provider: 'CarrerNinja',
    date: 'March 2023',
    description: 'In-depth certification in C programming language covering memory management, data structures, and system programming.',
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: '3rd Prize - Smart Incubator Project',
    organization: 'GITAM University',
    date: 'October 2023',
    description: 'Awarded 3rd prize for developing an innovative smart incubator system with IoT integration at the university hackathon.'
  },
  {
    id: 2,
    title: 'Selected for Internal Hackathon',
    organization: 'Smart India Hackathon 2023',
    date: 'August 2023',
    description: 'Project selected for the internal round of Smart India Hackathon 2023, focusing on sustainable energy solutions.'
  },
  {
    id: 3,
    title: 'Paper Presentation',
    organization: 'IEEE Conference @ NIT Tadepalligudem',
    date: 'February 2024',
    description: 'Presented research paper on "Energy Efficient Smart Grid Systems" at the IEEE international conference.'
  },
  {
    id: 4,
    title: 'Innovation Award',
    organization: 'Innovit 2024 @ Vishnu Institute of Technology',
    date: 'March 2024',
    description: 'Received innovation award for the Aquaculture Monitoring System project at the college technical fest.'
  }
];