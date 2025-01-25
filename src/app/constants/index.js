import { 
    filling2, estimate, virtual, internationalmoving, localmoving, petrelocation, movingservices, arrowright, instagram, twitter, facebook, linkedin
 } from "@/assets"

 import { FaArrowRight } from "react-icons/fa";

export const navLinks = [
    {
        title: "Moving with us",
        href: "#",
        dropdownItems: [
            {
                "id": 1,
                "title": "International Moving",
                "href": "/international-moving",
            },
            {
                "id": 2,
                "title": "Local Moving",
                "href": "/local-moving",
            },
            {
                "id": 3,
                "title": "Storage Solutions",
                "href": "/storage-solutions",
            },
            {
                "id": 4,
                "title": "Dedicated Reolocation Expert",
                "href": "/dedicated-relocation-expert",
            },
            {
                "id": 5,
                "title": "Shipment Protection",
                "href": "/shipment-protection",
            },
            {
                "id": 6,
                "title": "Pre Move Consultation",
                "href": "/pre-move-consultation",
            },
            {
                "id": 7,
                "title": "Air andd Ocean Freight",
                "href": "/air-and-ocean-freight",
            },
           
        ]
    },
    {
        title: "Useful Resources",
        href: "#",
        dropdownItems: [
            {
                "id": 1,
                "title": "Moving House Checklist",
                "href": "/moving-house-checklist",
            },
            {
                "id": 2,
                "title": "Settling In",
                "href": "/settling-in",
            },
            {
                "id": 3,
                "title": "Smart Home Surveys",
                "href": "/smart-home-surveys",
            },
            {
                "id": 4,
                "title": "Shipping Tracking using AI",
                "href": "/shipping-tracking-using-ai",
            },
            {
                "id": 5,
                "title": "Payment Options with Paystack",
                "href": "/payment-options-with-paystack",
            },
        ]
    },
    {
        title: "Moving Services",
        href: "#",
        dropdownItems: [
            {
                "id": 1,
                "title": "Pet Relocation",
                "href": "/pet-relocation",
            },
            {
                "id": 2,
                "title": "International Currency Transfer",
                "href": "/international-currency-transfer",
            },
            {
                "id": 3,
                'title': "Utility Services",
                'href': "/utility-services",
            }
        ]
    },
    {
        title: "About Us",
        href: "/about",
        dropdownItems: []
    },
    {
        title: "Contact Us",
        href: "contact",
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
  
  