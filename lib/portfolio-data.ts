export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ProjectShot = {
  src: string;
  alt: string;
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
        "A premium multi-surface Flutter platform connecting customers, local stores, riders, and admins inside one delivery ecosystem.",
      description:
        "Built for restaurants, groceries, pharmacies, and local retail, Alizo combines marketplace discovery, secure multi-role workflows, realtime order visibility, and operations control in one connected product.",
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
      highlights: [
        "Built separate customer, store, rider, and admin experiences under one architecture.",
        "Migrated backend from Firebase to Supabase with PostgreSQL, Realtime, and Row-Level Security.",
        "Implemented multi-store checkout, live tracking, and pharmacy prescription upload flows.",
        "Designed auto-generated IDs with PostgreSQL triggers for customers, stores, riders, and orders.",
      ],
      outcomes: [
        "Enabled secure role-based access using RLS and SECURITY DEFINER functions.",
        "Improved operational visibility through live order updates and notification flows.",
        "Created a complete marketplace foundation for approvals, payments, analytics, and logistics.",
      ],
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
      name: "NaDodi",
      slug: "nadodi",
      category: "Travel Booking Platform",
      summary:
        "A full-stack travel product for flights, stays, packages, and transfers with mobile booking and admin operations.",
      description:
        "NaDodi delivers a modern booking experience powered by Flutter on the client side, Firebase for secure user management, and a custom JavaScript backend powering shared operations across mobile and web.",
      logo: "/assets/projects/nadodi-logo.jpg",
      stack: [
        "Flutter",
        "Dart",
        "Firebase Auth",
        "Firestore",
        "REST APIs",
        "JavaScript backend",
        "Admin Web",
      ],
      highlights: [
        "Built the Flutter booking app together with a web admin dashboard and custom backend services.",
        "Integrated Firebase Authentication and Firestore for secure persistence across app workflows.",
        "Implemented QR verification, PDF generation, printing, and sharing for ticket operations.",
        "Used REST APIs to fetch live flight, hotel, transfer, and package data.",
      ],
      outcomes: [
        "Delivered a modular stack that supports separate mobile, admin, and backend development.",
        "Improved real-world usability with travel alerts, confirmations, and document workflows.",
        "Created a broad travel platform rather than a single booking flow.",
      ],
      gallery: [
        { src: "/assets/screenshots/Nadodi/nadodihome.jpeg", alt: "Travel Explorer" },
        { src: "/assets/screenshots/Nadodi/flightbooking.jpeg", alt: "Flight Selection" },
        { src: "/assets/screenshots/Nadodi/splashnadodi.jpeg", alt: "Branding" },
      ],
      links: [
        {
          label: "View GitHub Repository",
          href: "https://github.com/mhd-dilshad-p/NaDodi",
          external: true,
        },
      ],
    },
    {
      name: "Adam Travels",
      slug: "adam",
      category: "Freelance Cross-Platform Confirmation Generator",
      status: "Freelance Work",
      summary:
        "A freelance Flutter build for Adam Travels focused on fast, polished travel confirmation generation across web and mobile.",
      description:
        "This client project was built to generate clean ticket confirmations and previews with a practical workflow for passenger data, booking history, and printable output across devices.",
      logo: "/assets/projects/adam/logo.png",
      stack: ["Flutter", "Dart", "Web", "Mobile", "PDF workflows", "Client delivery"],
      highlights: [
        "Built for a freelance travel business use case with web and mobile support.",
        "Created structured booking and passenger forms with confirmation generation flow.",
        "Implemented printable ticket preview, sharing, and booking history interfaces.",
      ],
      outcomes: [
        "Delivered a focused cross-platform client app for day-to-day operations.",
        "Showcased practical Flutter work for business documents and confirmation UX.",
      ],
      gallery: [
        { src: "/assets/screenshots/Adam/adamhome_filling.jpeg", alt: "Booking Interface" },
        { src: "/assets/screenshots/Adam/ticketpreview.jpeg", alt: "Ticket Generation" },
        { src: "/assets/screenshots/Adam/adam_bookinghistory.jpeg", alt: "Transaction Logs" },
        { src: "/assets/screenshots/Adam/airlines details.jpeg", alt: "Inventory Details" },
      ],
      links: [
        {
          label: "View GitHub Repository",
          href: "https://github.com/mhd-dilshad-p/Adam",
          external: true,
        },
      ],
    },
    {
      name: "FuelDost",
      slug: "fueldost",
      category: "Fuel Cost & Route Utility App",
      summary:
        "A utility-focused Flutter app for route planning, fuel estimation, station insights, and trip decision support.",
      description:
        "FuelDost helps users estimate travel fuel cost, analyze trips, review expense patterns, and work with map-based route context in one lightweight but practical mobile experience.",
      logo: "/assets/projects/fueldost/logo.png",
      stack: ["Flutter", "Dart", "Maps", "Trip insights", "Cost calculation"],
      highlights: [
        "Combined route context, distance, and time into a simple travel-planning workflow.",
        "Added calculator and quick-action features for practical everyday usage.",
        "Designed insights and expense history views to extend the app beyond a single calculation screen.",
      ],
      outcomes: [
        "Turned a narrow utility into a more complete mobile product experience.",
        "Showcased problem-solving around cost visibility, navigation context, and trip understanding.",
      ],
      gallery: [
        { src: "/assets/screenshots/FuelDost/home1.jpeg", alt: "Route Planning" },
        { src: "/assets/screenshots/FuelDost/expenceandhistory.jpeg", alt: "Log History" },
        { src: "/assets/screenshots/FuelDost/insights.jpeg", alt: "Cost Analytics" },
        { src: "/assets/screenshots/FuelDost/home2.jpeg", alt: "Dashboard" },
      ],
      links: [
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
