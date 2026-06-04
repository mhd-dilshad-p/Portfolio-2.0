export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectShot = {
  src: string;
  alt: string;
  type?: "mobile" | "web";
};

export type Project = {
  name: string;
  slug: string;
  category: string;
  status?: string;
  summary: string;
  description: string;
  logo: string;
  stack: string[];
  highlights: string[];
  outcomes: string[];
  gallery: ProjectShot[];
  links: ProjectLink[];
};

export const portfolioData = {
  person: {
    name: "Mohammed Dilshad P",
    title: "Flutter Developer",
    subtitle: "Junior Mobile Application Developer",
    location: "Perinthalmanna, Malappuram, Kerala",
    phone: "+91 97783 53618",
    email: "dilshadgb750@gmail.com",
    summary:
      "Passionate Flutter developer building scalable, real-world applications across delivery, travel, and utility products with a strong focus on modular architecture, practical UX, and dependable backend integration.",
    introduction:
      "I build Flutter apps that go beyond UI — from multi-role delivery platforms with Supabase and Firebase backends to freelance client tools shipped on deadline. Four production apps. Two backend platforms. Ready to join a team and ship from day one.",
    availability:
      "Open to Flutter engineering, full-stack mobile, and product-focused frontend roles.",
    languages: ["English", "Malayalam", "Tamil"],
    links: {
      github: "https://github.com/mhd-dilshad-p",
      linkedin: "https://www.linkedin.com/in/mhd-dilshad-p",
      website: "https://mohammeddilshad-p.vercel.app/",
      resume: "/assets/documents/Mohammed_Dilshad_P.pdf",
    },
  },
  heroShots: [
    {
      src: "/assets/screenshots/Alizo/homeincutomer.jpeg",
      alt: "Alizo Customer App Home",
      label: "Alizo Customer",
    },
    {
      src: "/assets/screenshots/FuelDost/expenceandhistory.jpeg",
      alt: "FuelDost Expenses View",
      label: "FuelDost",
    },
    {
      src: "/assets/screenshots/Nadodi/nadodihome.jpeg",
      alt: "Nadodi Home Screen",
      label: "Nadodi",
    },
    {
      src: "/assets/screenshots/Adam/ticketpreview.jpeg",
      alt: "Adam Travels Ticket Preview",
      label: "Adam Travels",
    },
    {
      src: "/assets/screenshots/Alizo/medicinescreen-customers.jpeg",
      alt: "Alizo Medicine Store",
      label: "Alizo Health",
    },
    {
      src: "/assets/screenshots/FuelDost/insights.jpeg",
      alt: "FuelDost Insights Dashboard",
      label: "FuelDost Analytics",
    },
    {
      src: "/assets/screenshots/Alizo/restaurants-menu-cutomers.jpeg",
      alt: "Alizo Restaurant Menu",
      label: "Alizo Food",
    },
  ],
  stats: [
    {
      value: "4",
      label: "Integrated Alizo Surfaces",
      detail: "Customer, store, rider, and admin experiences working as one system.",
    },
    {
      value: "4",
      label: "Featured Apps",
      detail: "Alizo, NaDodi, Adam Travels, and FuelDost.",
    },
    {
      value: "Supabase + Firebase",
      label: "Backend Confidence",
      detail: "Auth, realtime sync, RLS, Firestore, REST APIs, and custom JS backends.",
    },
  ],
  philosophy: [
    {
      title: "Clean Architecture",
      body:
        "I prefer feature structures that are modular, readable, and realistic to maintain as an app grows in scope and complexity.",
    },
    {
      title: "Backend-Aware Development",
      body:
        "Good Flutter work is not only about screens. I care about auth flows, access control, API contracts, realtime data, and deployment behavior.",
    },
    {
      title: "Real Product Thinking",
      body:
        "I focus on useful workflows such as bookings, delivery states, notifications, verification, analytics, and operations support.",
    },
  ],
  featuredTech: [
    { name: "Flutter", icon: "/assets/icons/flutter.png" },
    { name: "Dart", icon: "/assets/icons/dart.png" },
    { name: "Firebase", icon: "/assets/icons/firebase.png" },
    { name: "Supabase", icon: "/assets/icons/supabase.png" },
    { name: "GitHub", icon: "/assets/icons/GitHub.png" },
    { name: "Android", icon: "/assets/icons/android.png" },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "Flutter",
        "Dart",
        "Cross-platform UI",
        "Responsive layouts",
        "Widget systems",
        "Flutter Web",
      ],
    },
    {
      category: "Backend",
      items: [
        "Supabase Auth",
        "Realtime",
        "Row-Level Security",
        "Edge Functions",
        "Firebase Auth",
        "Firestore",
        "REST APIs",
        "Node.js / JavaScript",
      ],
    },
    {
      category: "State Management",
      items: ["Provider", "Bloc", "Riverpod"],
    },
    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "Android Studio",
        "Visual Studio Code",
        "Vercel",
        "Clean code",
        "Modular development",
      ],
    },
  ],
  experience: [
    {
      role: "Flutter Developer Intern",
      company: "Zoople Technologies",
      location: "Kerala, India",
      period: "2025 - 2026",
      bullets: [
        "Contributed to end-to-end Flutter app delivery across UI implementation, feature integration, and state management.",
        "Built reusable widgets and modular structures for scalable multi-service products.",
        "Implemented Provider-based state handling for predictable updates across complex app roles.",
        "Integrated Supabase and Firebase services for authentication, realtime sync, and secure data handling.",
        "Built and connected a custom JavaScript backend for the NaDodi mobile app and web admin workflow.",
        "Improved responsiveness and visual consistency across different device sizes.",
      ],
    },
  ],
  education: [
    {
      title: "Flutter Development Program",
      org: "Zoople Technologies, Kerala",
      period: "2025",
      image: "/assets/education/flutterdeveloper.jpeg",
      accent: "cyan",
    },
    {
      title: "Bachelor of Social Work (BSW)",
      org: "Calicut University",
      period: "2022 - 2025",
      image: "/assets/education/social-work.jpeg",
      accent: "warm",
    },
    {
      title: "Higher Secondary (Humanities)",
      org: "Kerala State Board",
      period: "2021 - 2022",
      image: "/assets/education/humanities.jpeg",
      accent: "sage",
    },
  ],
  projects: [
    {
      name: "Alizo",
      slug: "alizo",
      category: "Multi-Service Delivery & Marketplace Platform",
      summary:
        "A premium multi-surface Flutter platform connecting customers, stores, riders, and admins.",
      description:
        "Alizo is a comprehensive delivery platform linking local stores, delivery riders, and customers. It features secure ordering, instant Presley checkout, prescription uploads, and real-time logistics tracking powered by a Supabase backend.",
      logo: "/assets/projects/alizo-logo.png",
      stack: [
        "Flutter",
        "Dart",
        "Supabase",
        "Provider",
        "Realtime",
        "OneSignal",
        "Vercel",
      ],
      highlights: [],
      outcomes: [],
      gallery: [
        { src: "/assets/screenshots/Alizo/homeincutomer.jpeg", alt: "Alizo Customer Home" },
        { src: "/assets/screenshots/Alizo/restaurants-menu-cutomers.jpeg", alt: "Restaurants Menu" },
        { src: "/assets/screenshots/Alizo/retail-screen-1-customers.jpeg", alt: "Retail Marketplace" },
        { src: "/assets/screenshots/Alizo/medicinescreen-customers.jpeg", alt: "Pharmacy Flow" },
        { src: "/assets/screenshots/Alizo/grocery-screen-customers.jpeg", alt: "Grocery Selection" },
        { src: "/assets/screenshots/Alizo/store-screen-customer.jpeg", alt: "Store Dashboard" },
        { src: "/assets/screenshots/Alizo/deliveryboyprofile.jpeg", alt: "Rider Experience" },
      ],
      links: [
        {
          label: "View GitHub Repository",
          href: "https://github.com/mhd-dilshad-p/AliZo",
          external: true,
        },
      ],
    },
    {
      name: "Nadodi Travels",
      slug: "nadodi",
      category: "Full-Stack Travel Booking Platform",
      summary:
        "A multi-surface travel booking ecosystem with user, driver, partner, and admin experiences.",
      description:
        "Nadodi Travels connects travelers with taxi drivers and hotel partners. It supports real-time navigation tracking via Google Maps, booking confirmations via secure QR tickets, and separate web control dashboards for hotel partners and operators.",
      logo: "/assets/projects/nadodi-logo.jpg",
      stack: [
        "Flutter",
        "Dart",
        "Firebase Firestore",
        "Firebase Auth",
        "Firebase Hosting",
        "Google Maps API",
      ],
      highlights: [],
      outcomes: [],
      gallery: [
        { src: "/assets/screenshots/homescreen-nadodi.jpeg", alt: "Nadodi User App Home Screen" },
        { src: "/assets/screenshots/cab-bookingscreen.jpeg", alt: "Cab Booking Screen" },
        { src: "/assets/screenshots/cab-earning.jpeg", alt: "Driver Earnings Dashboard" },
        { src: "/assets/screenshots/profilescreen-cabidriver.jpeg", alt: "Cab Driver Profile Screen" },
        { src: "/assets/screenshots/ride-history-in-cab-driver.jpeg", alt: "Driver Ride History" },
        { src: "/assets/screenshots/roomdetailscreen.jpeg", alt: "Hotel Room Detail Screen" },
        { src: "/assets/screenshots/Screenshot website hotel.png", alt: "Nadodi Hotels Web Portal", type: "web" as const },
      ],
      links: [
        {
          label: "View GitHub Repository",
          href: "https://github.com/mhd-dilshad-p/NaDodiA",
          external: true,
        },
      ],
    },
    {
      name: "Aqua Kair",
      slug: "aquakair",
      category: "Water Purifier Service Suite (Freelance)",
      status: "Freelance Project",
      summary:
        "A multi-surface water purifier service suite for customer registration, warranties, and scheduling.",
      description:
        "Aqua Kair is a comprehensive service suite built with Flutter. It streamlines filter warranty tracking, automates technician dispatching, and integrates billing invoices across an Admin Web, Admin App, and Technician Dashboard.",
      logo: "/assets/projects/aquakair/logo.png",
      stack: [
        "Flutter",
        "Dart",
        "Admin Web",
        "Admin App",
        "Technician App",
        "Invoice Workflows",
      ],
      highlights: [],
      outcomes: [],
      gallery: [
        { src: "/assets/projects/aquakair/admin_web_dashboard.png", alt: "Admin Web Dashboard", type: "web" as const },
        { src: "/assets/projects/aquakair/admin_web_customer.png", alt: "Customer Management Portal", type: "web" as const },
        { src: "/assets/projects/aquakair/admin_web_filters_adding.png", alt: "Filter Inventory Control", type: "web" as const },
        { src: "/assets/projects/aquakair/admin_web_technician_detail.png", alt: "Technician Assignment", type: "web" as const },
        { src: "/assets/projects/aquakair/admin_app_home.png", alt: "Admin App Home", type: "mobile" as const },
        { src: "/assets/projects/aquakair/admin_app_customer_details.png", alt: "Customer Details", type: "mobile" as const },
        { src: "/assets/projects/aquakair/admin_app_ebill.png", alt: "E-Bill Generator", type: "mobile" as const },
        { src: "/assets/projects/aquakair/technician_home.png", alt: "Technician Dashboard Home", type: "mobile" as const },
        { src: "/assets/projects/aquakair/technician_customer.png", alt: "Technician Customer Records", type: "mobile" as const },
        { src: "/assets/projects/aquakair/technician_service_detail.png", alt: "Service Details Screen", type: "mobile" as const },
        { src: "/assets/projects/aquakair/printing_bill.png", alt: "Bill Printing Workflow", type: "mobile" as const },
      ],
      links: [], // Renders as Private Repository
    },
    {
      name: "Adam Travels",
      slug: "adam",
      category: "Confirmation Generator (Freelance)",
      status: "Freelance Work",
      summary:
        "A custom booking confirmation generator for travel confirmation documents.",
      description:
        "Built for travel agencies, this tool automates structured boarding passes, seat manifests, and printable passenger itineraries, running seamlessly on web browsers and mobile tablets.",
      logo: "/assets/projects/adam/logo.png",
      stack: ["Flutter", "Dart", "Web Workflows", "PDF Generation", "Client Delivery"],
      highlights: [],
      outcomes: [],
      gallery: [
        { src: "/assets/screenshots/Adam/adamhome_filling.jpeg", alt: "Booking Interface" },
        { src: "/assets/screenshots/Adam/ticketpreview.jpeg", alt: "Ticket Generation" },
        { src: "/assets/screenshots/Adam/adam_bookinghistory.jpeg", alt: "Transaction Logs" },
        { src: "/assets/screenshots/Adam/airlines details.jpeg", alt: "Inventory Details" },
      ],
      links: [], // Renders as Private Repository
    },
    {
      name: "FuelDost",
      slug: "fueldost",
      category: "Fuel Cost & Route Utility App",
      summary:
        "A utility app for route planning, fuel expense tracking, and travel price analytics.",
      description:
        "FuelDost estimates trip costs by calculating real-time route mileage and local gas prices. It tracks monthly vehicle expenses and provides smart visual analytics to minimize transit costs.",
      logo: "/assets/projects/fueldost/logo.png",
      stack: ["Flutter", "Dart", "Google Maps API", "Trip Cost Analytics", "Expense History"],
      highlights: [],
      outcomes: [],
      gallery: [
        { src: "/assets/projects/fueldost/insights_analytics.jpg", alt: "Cost Insights Graph", type: "mobile" as const },
        { src: "/assets/projects/fueldost/expenses_overview.png", alt: "Expenses Log Overview", type: "mobile" as const },
        { src: "/assets/projects/fueldost/route_map.jpg", alt: "Route Planning & GPS", type: "mobile" as const },
        { src: "/assets/projects/fueldost/smart_recommendations.jpg", alt: "Fuel Saving Analytics", type: "mobile" as const },
        { src: "/assets/projects/fueldost/cost_calculation.jpg", alt: "Calculator Screen", type: "mobile" as const },
        { src: "/assets/projects/fueldost/web_1.png", alt: "Web Landing Page", type: "web" as const },
        { src: "/assets/projects/fueldost/web_2.png", alt: "Web Dashboard View", type: "web" as const },
      ],
      links: [
        {
          label: "Google Play Store",
          href: "https://play.google.com/store/apps/details?id=com.fueldost.fuel_dost",
          external: true,
        },
        {
          label: "View Live Website",
          href: "https://fueldostwebsite.vercel.app/",
          external: true,
        },
        {
          label: "View GitHub Repository",
          href: "https://github.com/mhd-dilshad-p/Fuel-Dost",
          external: true,
        },
      ],
    },
  ] satisfies Project[],
} as const;

export const navigationItems = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
