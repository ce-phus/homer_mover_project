import { 
    filling2, estimate, virtual, internationalmoving, localmoving, petrelocation, movingservices, arrowright, instagram, twitter, facebook, linkedin, hero13, hero6, hero18, hero19, hero20, hero21, hero22, hero23, hero24, hero25, hero1, hero4, hero5, hero7, hero10,  hero26, hero27,
    hero28,
    hero29,
    hero30,
    hero31,
    hero32,
    hero33,
    hero34,
    hero35,
    hero36,
    hero37, manchester, birmingham, brighton, bristol, cotswolds, newcastle, oxford
 } from "@/assets"


export const navLinks = [
    {
        title: "Home",
        href: "/",
        dropdownItems: []
    },
    {
        title: "About Us",
        href: "/about",
        dropdownItems: []
    },
    {
        title: "Services",
        href: "#",
        dropdownItems: [
          {
            "id": 1,
            "title": "Domestic Relocation",
            "href": "/domestic",
          },
          {
            "id": 2,
            "title": "Corporate Relocation",
            "href": "/corporate",
          },
          
          {
              "id": 3,
              "title": "International Relocation",
              "href": "/international",
          },
        ]
    },
    {
      title: "Key Areas",
      href: "/key",
      dropdownItems: []
  },
    {
        title: "Contact",
        href: "/contact",
        dropdownItems: []
    },
    {
        title: "Blogs",
        href: "/blogs",
        dropdownItems: []
    }
]

export const services = [
    {
        title: "Fill out our simple enquiry form",
        text: "1",
        icon: filling2,
    },

    {
        title: "Get an estimate",
        text: "2",
        icon: estimate,
    },

    {
        title: "Virtual survey",
        text: "3",
        icon: virtual,
    },
]

export const nationalmoving = [
    {
        title: "International Moving",
        link: "/international-moving",
        icon: arrowright,
        img: internationalmoving,
    },

    {
        title: "Local Moving",
        icon: arrowright,
        link: "/local-moving",
        img: localmoving,
    },

    {
        title: "Pet Relocation",
        icon: arrowright,
        link: "/pet-relocation",
        img: petrelocation,
    },

    {
        title: "Moving Services",
        icon: arrowright,
        link: "/moving-services",
        img: movingservices,
    },
]

export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "#",
        },
        {
          name: "How it Works",
          link: "#",
        },
        {
          name: "Create",
          link: "#",
        },
        {
          name: "Explore",
          link: "#",
        },
        {
          name: "Terms & Services",
          link: "#",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "#",
        },
        {
          name: "Partners",
          link: "#",
        },
        {
          name: "Suggestions",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
        {
          name: "Job vacancies",
          link: "#",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "#",
        },
        {
          name: "Become a Partner",
          link: "#",
        },
      ],
    },
  ];

  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];

  export const Posts  = [
    {
      id: 1,
      title1: "5 Essential Tips for Stress-Free International Moves",
      title2: "Learn how to streamline your overseas relocation with these expert tips.",
      img: hero13,
      link : "#",
    },
    {
      id: 2,
      title1: "The Ultimate Checklist for Domestic Relocation",
      title2: "Everything you need to organize a seamless move within the UK.",
      img: hero6,
      link : "#",
    },
    {
      id: 3,
      title1: "Understanding Visa Requirements for Your Destination",
      title2: "A guide to navigating the complexities of immigration paperwork.",
      img: hero18,
      link : "#",
    },
    {
      id: 4,
      title1: "How to Choose the Right Neighborhood for Your Family",
      title2: "Key factors to consider when searching for your new home.",
      img: hero19,
      link : "#",
    },
    {
      id: 5,
      title1: "Settling In: Making a New Country Feel Like Home",
      title2: "Tips for adapting to a new culture and building your support network.",
      img: hero20,
      link : "#",
    },
]

export const Resources = [
  {
    id: 1,
    title1: "Relocation Checklists: ",
    title2: "Download comprehensive guides to help you stay on track.",
    img: hero21,
    link : "#",
  },
  {
    id: 2,
    title1: "Moving Budget Planner:",
    title2: "A free tool to estimate and manage relocation costs.",
    img: hero22,
    link : "#",
  },
  {
    id: 3,
    title1: "Immigration Resources:",
    title2: "Links to official government websites for visas and work permits.",
    img: hero23,
    link : "#",
  },
  {
    id: 4,
    title1: "School Search Tools: ",
    title2: "Tips and resources to find the best educational options for your children.",
    img: hero24,
    link : "#",
  },
  {
    id: 5,
    title1: "Language Learning Apps: ",
    title2: "Recommendations for tools to help you or your family learn a new language.",
    img: hero25,
    link : "#",
  },
]

export const locations = [
  {
    id: 1,
    title1: "Manchester ",
    title2: "A booming city with a strong economy, great transport links, and cultural hotspots.",
    img: manchester,
  },
  {
    id: 2,
    title1: "Birmingham ",
    title2: "A major business and education hub with excellent affordability.",
    img: birmingham,
  },
  {
    id: 3,
    title1: "Oxford & Cambridge ",
    title2: "World-renowned for their universities, history, and charming neighborhoods.",
    img: oxford,
  },
  {
    id: 4,
    title1: "Bristol ",
    title2: " A vibrant city with a strong creative and tech scene.",
    img: bristol,
  },
  {
    id: 5,
    title1: "Brighton ",
    title2: "A beautiful coastal town with a relaxed atmosphere and a thriving arts community.",
    img: brighton,
  },
  {
    id: 6,
    title1: "The Cotswolds",
    title2: "Perfect for those seeking countryside living with easy access to major cities.",
    img: cotswolds,
  },
  {
    id: 7,
    title1: "Newcastle ",
    title2: "A friendly city with great career opportunities and a lower cost of living.",
    img: newcastle,
  },
]



export const HeroData = [
  {
    id: 1,
    img: hero1,
    
  },
  {
      id: 36,
      img: hero36,
      
  },
  {
      id: 37,
      img: hero37,
      
  },
  {
      id: 7,
      img: hero7,
      
  },
  {
    id: 26,
    img: hero26,
    
  },
  {
      id: 10,
      img: hero10,
      
  },
  {
      id: 4,
      img: hero4,
      
  },
  {
      id: 5,
      img: hero5,
      
  },
  {
      id: 6,
      img: hero6,
      
  },
  {
      id: 26,
      img: hero26,
      
  },
  {
      id: 27,
      img: hero27,
      
  },
  {
      id: 28,
      img: hero28,
      
  },
  {
      id: 29,
      img: hero29,
      
  },
  {
      id: 30,
      img: hero30,
      
  },
  {
      id: 31,
      img: hero31,
      
  },
  {
      id: 32,
      img: hero32,
      
  },
  {
      id: 33,
      img: hero33,
      
  },
  {
      id: 34,
      img: hero34,
      
  },
  {
      id: 35,
      img: hero35,
      
  },
];
  
  