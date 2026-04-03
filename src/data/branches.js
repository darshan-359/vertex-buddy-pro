/**
 * Post-intermediate (Class 11–12) branch / stream data for Indian education system.
 * Covers both State Board streams and CBSE streams.
 */

export const branches = [
  {
    id: "mpc",
    label: "MPC",
    fullName: "Mathematics, Physics & Chemistry",
    board: "State Board / CBSE Science (PCM)",
    icon: "🔬",
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #1e40af 0%, #2563eb 60%, #3b82f6 100%)",
    description:
      "MPC is the gateway to engineering, technology, and the physical sciences. Students study Mathematics, Physics, and Chemistry at an advanced level, building strong analytical and problem-solving skills.",
    opportunities: [
      {
        category: "Engineering & Technology",
        careers: [
          "B.Tech / B.E. (CSE, ECE, Mechanical, Civil, Chemical, Aerospace, etc.)",
          "Software Developer / Full-Stack Engineer",
          "Data Scientist / Machine Learning Engineer",
          "Robotics & Automation Engineer",
          "Aerospace / Defense Engineer",
          "Civil & Structural Engineer",
        ],
      },
      {
        category: "Pure Sciences",
        careers: [
          "B.Sc. Physics / Mathematics / Statistics",
          "Research Scientist (ISRO, DRDO, BARC)",
          "Astrophysicist / Astronomer",
          "Mathematician / Actuary",
        ],
      },
      {
        category: "Architecture & Design",
        careers: [
          "B.Arch (Architecture)",
          "Urban / Town Planner",
          "Interior Designer (with maths base)",
        ],
      },
      {
        category: "Defence & Government",
        careers: [
          "NDA (National Defence Academy)",
          "Indian Navy / Air Force Technical Branch",
          "UPSC / State PSC (with optional Maths/Physics)",
          "ISRO Scientist",
        ],
      },
      {
        category: "Finance & Analytics",
        careers: [
          "Chartered Accountant (CA) – via CPT/Foundation",
          "Actuary",
          "Data Analyst / Quant Analyst",
          "Investment Banker",
        ],
      },
    ],
    entranceExams: ["JEE Main", "JEE Advanced", "EAMCET (AP/TS)", "BITSAT", "VITEEE", "SRMJEE", "NDA"],
    topCourses: ["B.Tech", "B.Sc. Mathematics", "B.Arch", "B.Sc. Data Science", "Integrated M.Sc."],
  },
  {
    id: "bipc",
    label: "BiPC",
    fullName: "Biology, Physics & Chemistry",
    board: "State Board / CBSE Science (PCB)",
    icon: "🧬",
    color: "#16a34a",
    gradient: "linear-gradient(135deg, #14532d 0%, #16a34a 60%, #22c55e 100%)",
    description:
      "BiPC opens doors to medicine, pharmacy, and life sciences. Students explore the living world through Biology along with Physics and Chemistry, preparing them for health-care and research careers.",
    opportunities: [
      {
        category: "Medicine & Allied Health",
        careers: [
          "MBBS (Medical Doctor)",
          "BDS (Dentist)",
          "BAMS / BHMS (Ayurveda / Homeopathy)",
          "B.Pharm / D.Pharm (Pharmacist)",
          "B.Sc. Nursing",
          "Physiotherapist (BPT)",
          "Optometrist",
        ],
      },
      {
        category: "Life Sciences & Research",
        careers: [
          "B.Sc. Biotechnology / Microbiology / Biochemistry",
          "Genetic Counsellor",
          "Food Technologist",
          "Environmental Scientist",
          "Research Scientist (ICMR, CSIR, DBT)",
        ],
      },
      {
        category: "Agriculture & Veterinary",
        careers: [
          "B.Sc. Agriculture (B.Sc. Ag.)",
          "B.V.Sc. (Veterinary Doctor)",
          "Agricultural Scientist / Officer",
          "Agri-Tech Entrepreneur",
        ],
      },
      {
        category: "Forensic & Defence",
        careers: [
          "B.Sc. Forensic Science",
          "Army Medical Corps",
          "Forensic Analyst / Crime Investigator",
        ],
      },
      {
        category: "Paramedical & Technology",
        careers: [
          "B.Sc. Medical Lab Technology (MLT)",
          "Radiographer / Radiologist Technician",
          "Dialysis Technician",
        ],
      },
    ],
    entranceExams: ["NEET-UG", "EAMCET (AP/TS Agriculture & Medical)", "AIIMS", "JIPMER", "AFMC"],
    topCourses: ["MBBS", "BDS", "B.Pharm", "B.Sc. Biotechnology", "B.Sc. Nursing"],
  },
  {
    id: "cec",
    label: "CEC",
    fullName: "Commerce, Economics & Civics",
    board: "State Board / CBSE Commerce",
    icon: "📊",
    color: "#d97706",
    gradient: "linear-gradient(135deg, #92400e 0%, #d97706 60%, #f59e0b 100%)",
    description:
      "CEC combines Commerce, Economics, and Civics to build a strong foundation in business, trade, law, and public policy. Ideal for students interested in finance, civil services, and management.",
    opportunities: [
      {
        category: "Business & Finance",
        careers: [
          "Chartered Accountant (CA)",
          "Company Secretary (CS)",
          "Cost & Management Accountant (CMA)",
          "Investment Banker",
          "Financial Analyst / Advisor",
          "Stockbroker / Trader",
        ],
      },
      {
        category: "Law & Civil Services",
        careers: [
          "LLB / BA LLB (Advocate / Judge)",
          "UPSC / IAS / IPS Officer",
          "State PCS Officer",
          "Political Scientist / Diplomat",
        ],
      },
      {
        category: "Management",
        careers: [
          "BBA / MBA (Business Management)",
          "Retail / Operations Manager",
          "HR Manager",
          "Supply Chain Manager",
        ],
      },
      {
        category: "Economics & Research",
        careers: [
          "B.A. / B.Sc. Economics",
          "Economist (RBI, World Bank, IMF)",
          "Policy Analyst",
          "Economic Journalist",
        ],
      },
    ],
    entranceExams: ["CA Foundation", "CLAT", "IPMAT", "SET", "CUET", "UPSC CSE"],
    topCourses: ["B.Com", "BBA", "BA Economics", "Integrated Law (BA LLB)", "CA Program"],
  },
  {
    id: "mec",
    label: "MEC",
    fullName: "Mathematics, Economics & Commerce",
    board: "State Board",
    icon: "💹",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 60%, #8b5cf6 100%)",
    description:
      "MEC is a powerful combination of quantitative skills and business knowledge. Students master Mathematics, Economics, and Commerce—perfect for careers in finance, data analytics, and management.",
    opportunities: [
      {
        category: "Finance & Banking",
        careers: [
          "Chartered Accountant (CA)",
          "Investment Analyst / Portfolio Manager",
          "Banker / RBI Officer",
          "Actuary",
          "Quant / Risk Analyst",
        ],
      },
      {
        category: "Data & Technology",
        careers: [
          "Data Analyst / Business Analyst",
          "Financial Modeler",
          "Operations Research Analyst",
          "Data Scientist (with further study)",
        ],
      },
      {
        category: "Management",
        careers: [
          "BBA → MBA",
          "Product Manager",
          "E-Commerce Entrepreneur",
          "Supply Chain Analyst",
        ],
      },
      {
        category: "Economics & Policy",
        careers: [
          "B.Sc. / BA Economics",
          "UPSC / Civil Services",
          "Public Policy Researcher",
          "International Trade Specialist",
        ],
      },
    ],
    entranceExams: ["CA Foundation", "IPMAT", "CUET", "UPSC CSE", "IBPS / SBI PO"],
    topCourses: ["B.Com (Hons)", "BBA", "B.Sc. Economics", "Integrated MBA", "CA Program"],
  },
  {
    id: "hec",
    label: "HEC",
    fullName: "History, Economics & Civics",
    board: "State Board / CBSE Humanities",
    icon: "🏛️",
    color: "#dc2626",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 60%, #ef4444 100%)",
    description:
      "HEC nurtures critical thinking and social awareness through History, Economics, and Civics. A perfect foundation for civil services, journalism, law, and social science research.",
    opportunities: [
      {
        category: "Civil Services & Law",
        careers: [
          "IAS / IPS / IFS (UPSC Civil Services)",
          "State PCS Officer",
          "LLB / Advocate / Judge",
          "Diplomat / Foreign Service Officer",
        ],
      },
      {
        category: "Journalism & Media",
        careers: [
          "Journalist / News Anchor",
          "Content Writer / Editor",
          "Public Relations (PR) Manager",
          "Documentary Filmmaker",
        ],
      },
      {
        category: "Social Sciences & Research",
        careers: [
          "Historian / Archaeologist",
          "Sociologist / Anthropologist",
          "NGO / Development Sector Work",
          "Political Analyst",
        ],
      },
      {
        category: "Education",
        careers: [
          "Teacher / Professor (B.Ed → M.Ed)",
          "School / College Counsellor",
          "Curriculum Designer",
        ],
      },
      {
        category: "Management",
        careers: [
          "BBA → MBA (HR / Marketing)",
          "Public Policy Analyst",
          "Social Entrepreneur",
        ],
      },
    ],
    entranceExams: ["CLAT", "UPSC CSE", "CUET", "DU JAT", "IISER (Humanities)"],
    topCourses: ["BA History / Political Science / Economics", "BA LLB", "BJMC (Journalism)", "BBA"],
  },
  {
    id: "cbse-science",
    label: "CBSE Science",
    fullName: "CBSE – Science Stream",
    board: "CBSE",
    icon: "⚗️",
    color: "#0891b2",
    gradient: "linear-gradient(135deg, #164e63 0%, #0891b2 60%, #06b6d4 100%)",
    description:
      "CBSE Science stream (Physics, Chemistry, Mathematics/Biology) prepares students for national-level engineering and medical entrance exams (JEE, NEET) with a rigorous NCERT-based curriculum.",
    opportunities: [
      {
        category: "Engineering (PCM path)",
        careers: [
          "Software / IT Engineer",
          "Electrical / Electronics Engineer",
          "Mechanical / Automobile Engineer",
          "Chemical / Petroleum Engineer",
        ],
      },
      {
        category: "Medicine (PCB path)",
        careers: [
          "MBBS Doctor",
          "Dentist (BDS)",
          "Pharmacist",
          "Biomedical Engineer (PCM+Biology combined)",
        ],
      },
      {
        category: "Pure Research",
        careers: [
          "IISc / IIT Research (BS/MS programs)",
          "Physicist / Chemist / Biologist",
          "CSIR / DST Scientist",
        ],
      },
      {
        category: "Tech Startups",
        careers: [
          "Entrepreneur / Startup Founder",
          "AI / ML Researcher",
          "Cybersecurity Analyst",
        ],
      },
    ],
    entranceExams: ["JEE Main & Advanced", "NEET-UG", "BITSAT", "KVPY/INSPIRE", "SAT (for abroad)"],
    topCourses: ["B.Tech", "MBBS", "B.Sc. (Research)", "Integrated M.Sc.", "B.Arch"],
  },
  {
    id: "cbse-commerce",
    label: "CBSE Commerce",
    fullName: "CBSE – Commerce Stream",
    board: "CBSE",
    icon: "💼",
    color: "#0d9488",
    gradient: "linear-gradient(135deg, #134e4a 0%, #0d9488 60%, #14b8a6 100%)",
    description:
      "CBSE Commerce (Accountancy, Business Studies, Economics, Maths) provides a comprehensive business education nationally. Students are well-prepared for CA, MBA, and corporate careers.",
    opportunities: [
      {
        category: "Accounting & Finance",
        careers: [
          "Chartered Accountant (CA)",
          "Cost & Management Accountant (CMA)",
          "Company Secretary (CS)",
          "Certified Financial Planner (CFP)",
        ],
      },
      {
        category: "Business & Management",
        careers: [
          "BBA / MBA Graduate",
          "Marketing Manager",
          "Operations Manager",
          "Business Analyst",
        ],
      },
      {
        category: "Banking & Insurance",
        careers: [
          "Bank PO / Clerk (IBPS / SBI)",
          "Insurance Underwriter / Actuary",
          "Mutual Fund Distributor",
        ],
      },
      {
        category: "Entrepreneurship",
        careers: [
          "E-Commerce Entrepreneur",
          "Digital Marketing Specialist",
          "Retail Business Owner",
        ],
      },
    ],
    entranceExams: ["CA Foundation", "IPMAT", "CUET", "CLAT", "IBPS"],
    topCourses: ["B.Com / B.Com (Hons)", "BBA", "Integrated CA", "BA Economics", "BMS"],
  },
  {
    id: "cbse-arts",
    label: "CBSE Arts / Humanities",
    fullName: "CBSE – Arts & Humanities Stream",
    board: "CBSE",
    icon: "🎭",
    color: "#9333ea",
    gradient: "linear-gradient(135deg, #581c87 0%, #9333ea 60%, #a855f7 100%)",
    description:
      "CBSE Arts/Humanities covers a wide range of subjects—History, Geography, Political Science, Psychology, Sociology, Fine Arts—enabling diverse careers in civil services, creative fields, and social sciences.",
    opportunities: [
      {
        category: "Civil Services",
        careers: [
          "IAS / IPS / IRS Officer",
          "State Administrative Officer",
          "Foreign / Diplomatic Service",
        ],
      },
      {
        category: "Creative & Media",
        careers: [
          "Graphic Designer / Animator",
          "Fashion Designer",
          "Filmmaker / Director",
          "Photographer",
        ],
      },
      {
        category: "Social Work & NGO",
        careers: [
          "Social Worker",
          "Development Sector Specialist",
          "Child Rights Activist",
        ],
      },
      {
        category: "Psychology & Counselling",
        careers: [
          "Clinical / Counselling Psychologist",
          "School Counsellor",
          "HR Recruiter / Talent Manager",
        ],
      },
      {
        category: "Education & Research",
        careers: [
          "Professor / Lecturer",
          "Educational Researcher",
          "Curriculum Developer",
        ],
      },
    ],
    entranceExams: ["CLAT", "UPSC CSE", "CUET", "NID (Design)", "NID / NIFT (Creative arts)"],
    topCourses: ["BA (Hons) various", "BA LLB", "B.Des (Design)", "B.A. Psychology", "BJMC"],
  },
];

export const getBranchById = (id) => branches.find((b) => b.id === id);
