import { 
    filling2, estimate, virtual, internationalmoving, localmoving, petrelocation, movingservices, arrowright, instagram, twitter, facebook, linkedin
 } from "@/assets"

 import { FaArrowRight } from "react-icons/fa";

export const navLinks = [
    {
        title: "Home",
        href: "/",
        dropdownItems: [
            
           
        ]
    },
    {
        title: "About Us",
        href: "/about",
        dropdownItems: [
            
            
        ]
    },
    {
        title: "Services",
        href: "#",
        dropdownItems: [
          {
            "id": 1,
            "title": "Corporate Relocation",
            "href": "/corporate",
          },
          {
              "id": 2,
              "title": "Domestic Relocation",
              "href": "/domestic",
          },
          {
              "id": 3,
              "title": "International Relocation",
              "href": "/international",
          },
        ]
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
  
  