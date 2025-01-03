import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    flutter,
    html,
    css,
    reactjs,
    dart,
    firebase,
    bloc,
    aws,
    git,
    figma,
    cloudSolution,
    pixxi,
    lads,
    goProgs,
    carrent,
    frich,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Responsive Design",
      icon: creator,
    },
    {
      title: "Backend Integration",
      icon: backend,
    },
  ];
  
  const technologies = [
    
    {
      name: "Flutter",
      icon: flutter,
    },
    
    {
      name: "Flutter Bloc",
      icon: bloc,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "FireBase",
      icon: firebase,
    },
  
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Aws Web Services",
      icon: aws,
    },
  
  ];
  
  const experiences = [
    {
      title: "Mobile App developer",
      company_name: "Cloud Solutions",
      icon: cloudSolution,
      // iconBg: "#383E56",
      iconBg: "#ffffff",
      date: "Aug 2024 - Present",
      points: [
        "Developing and maintaining Mobile applications using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Flutter developer",
      company_name: "Pixxi",
      icon: pixxi,
      iconBg: "#ffffff",
      date: "Jun 2023 - Aug 2024",
      points: [
        "Developing and maintaining Mobile applications using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Futter Developer ",
      company_name: "Lads Technologies",
      icon: lads,
      iconBg: "#ffffff",
      date: "Nov 2021 - May 2023",
      points: [
        "Developing and maintaining Mobile applications using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Futter Developer ",
      company_name: "Goprogs Technologies",
      icon: goProgs,
      iconBg: "#ffffff",
      date: "Sep 2020 - Oct 2021",
      points: [
        "Developing and maintaining Mobile applications using Flutter and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pixxi CRM",
      description:
        "Web and Mobile CRM platform focused on the real estate in UAE, helping real estate companies to better grow business, and helping brokers to manage all data and track data in a systematic way.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Rest API",
          color: "green-text-gradient",
        },
        {
          name: "Push Notifications",
          color: "orange-text-gradient",
        },
        {
          name: "Calander",
          color: "blue-text-gradient",
        },
        {
          name: "Google Maps",
          color: "green-text-gradient",
        },
        {
          name: "Provider",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://apps.apple.com/ae/app/pixxi-crm/id6450628894",
    },
    {
      name: "Frich: Money Insights for GenZ",
      description:
        "Mobile application on which you Anonymously see how others spend, save and invest. Every week we break down how others manage their money. Then we’ll show you how to manage yours.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Rest API",
          color: "green-text-gradient",
        },
        {
          name: "Push Notifications",
          color: "orange-text-gradient",
        },
      ],
      image: frich,
      source_code_link: "https://apps.apple.com/us/app/frich-money-insights-for-genz/id1573562913",
    },
    {
      name: "HD Wallpaper - 4K Background",
      description:
        "The ultimate HD Wallpaper - 4K Background app to personalize your phone with stunning Background.With vast collection of HD wallpapers, live backgrounds, cool visuals, and captivating dark wallpapers.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "FireBase",
          color: "green-text-gradient",
        },
        {
          name: "S3 Bucket",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://play.google.com/store/apps/details?id=com.hdwallpaperapp.livewallpapers.hdbackground.animewallpaper",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };