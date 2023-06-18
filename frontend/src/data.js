export const ImageURL = {
  front: {
    big: "https://firebasestorage.googleapis.com/v0/b/portfolio-e6455.appspot.com/o/wallpapers%2Ffront%2Fblackhole_big.jpg?alt=media&token=14065134-4b4c-4729-ac08-8b050f0324fc",
    small:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-e6455.appspot.com/o/wallpapers%2Ffront%2Fblackhole_small.jpg?alt=media&token=863916c2-2bcd-401f-9ed7-70707737de70",
  },
  myImage:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-e6455.appspot.com/o/wallpapers%2Fmy%2Fsaikat_photo.jpg?alt=media&token=d9bf74d0-1ca0-4edf-89ca-dc6f6c0edabd",

  adminPin: {
    small:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-e6455.appspot.com/o/wallpapers%2Fadmin-pin%2Fsea-gdb313d0f4_640.jpg?alt=media&token=2a435501-f6aa-46e9-85b2-68df23b42677",
    mid: "https://firebasestorage.googleapis.com/v0/b/portfolio-e6455.appspot.com/o/wallpapers%2Fadmin-pin%2Fsea-g0cf122879_1280.jpg?alt=media&token=4ca9a44d-052a-4cfd-a377-151418bad516",
    big: "https://firebasestorage.googleapis.com/v0/b/portfolio-e6455.appspot.com/o/wallpapers%2Fadmin-pin%2Fsea-164989_1920.jpg?alt=media&token=5311f49c-b272-454a-b988-81ec879099c8",
  },
};

export const homeRoutesList = [
  { path: "/intro", name: "Introduction" },
  { path: "/about", name: "About Me" },
  { path: "/skills", name: "Skills" },
  { path: "/experience", name: "Experience" },
  { path: "/projects", name: "Projects" },
  { path: "/technologies", name: "Technologies" },
  { path: "/services", name: "Services" },
  { path: "/testimonials", name: "Testimonials" },
  { path: "/blog", name: "Blog" },
  { path: "/resume", name: "Resume" },
  { path: "/contact", name: "Contact" },
];

export const skillList = [
  {
    title: "Front-end Development",
    subList: [
      {
        title: "HTML",
        rating: "80",
      },
      {
        title: "CSS",
        rating: "90",
      },
      {
        title: "JavaScript",
        rating: "90",
      },
      {
        title: "React",
        rating: "80",
      },
      {
        title: "Vue.js",
        rating: "70",
      },
    ],
  },
  {
    title: "Back-end Development",
    subList: [
      {
        title: "Node.js",
        rating: "90",
      },
      {
        title: "Express.js",
        rating: "80",
      },
      {
        title: "Python",
        rating: "70",
      },
      {
        title: "Django",
        rating: "70",
      },
    ],
  },
  {
    title: "Databases",
    subList: [
      {
        title: "SQL",
        rating: "85",
      },
      {
        title: "MongoDB",
        rating: "80",
      },
      {
        title: "Firebase",
        rating: "75",
      },
    ],
  },
  {
    title: "Version Control",
    subList: [
      {
        title: "Git",
        rating: "90",
      },
      {
        title: "GitHub",
        rating: "85",
      },
      {
        title: "Bitbucket",
        rating: "80",
      },
    ],
  },
  {
    title: "Deployment & DevOps",
    subList: [
      {
        title: "AWS",
        rating: "80",
      },
      {
        title: "Docker",
        rating: "75",
      },
      {
        title: "Jenkins",
        rating: "70",
      },
    ],
  },
  {
    title: "Testing & Debugging",
    subList: [
      {
        title: "Unit Testing",
        rating: "85",
      },
      {
        title: "Integration Testing",
        rating: "80",
      },
      {
        title: "Debugging",
        rating: "90",
      },
    ],
  },
  {
    title: "Responsive Design",
    subList: [
      {
        title: "CSS Flexbox",
        rating: "90",
      },
      {
        title: "CSS Grid",
        rating: "85",
      },
      {
        title: "Media Queries",
        rating: "80",
      },
    ],
  },
  {
    title: "API Integration",
    subList: [
      {
        title: "RESTful APIs",
        rating: "90",
      },
      {
        title: "GraphQL",
        rating: "80",
      },
    ],
  },
  {
    title: "Security & Authentication",
    subList: [
      {
        title: "OAuth",
        rating: "85",
      },
      {
        title: "JSON Web Tokens",
        rating: "80",
      },
      {
        title: "Encryption",
        rating: "75",
      },
    ],
  },
  {
    title: "UI/UX Design",
    subList: [
      {
        title: "Wireframing",
        rating: "85",
      },
      {
        title: "Prototyping",
        rating: "80",
      },
      {
        title: "User Research",
        rating: "75",
      },
    ],
  },
];

export const docsDataList = [
  {
    title: "Programming Language",
    url:"/docs/programming-language",
    subList: [
      {
        title: "JavaScript",
        url:"/docs/programming-language/java-script",
        subList: [
          {
            title: "Array",
            url:"/docs/programming-language/array",
          },
          {
            title: "String",
            url:"/docs/programming-language/string",
          },
        ],
      },
    ],
  },
  {
    title:"Front End Development",
    url:"/docs/front-end-development",
    subList: [
      {
        title: "React.JS",
        url:"/docs/front-end-development/react-js",
        subList: [
          {
            title: "useState",
            url:"/docs/front-end-development/react-js/use-state",
          },
          {
            title: "useEffect",
            url:"/docs/front-end-development/react-js/use-effect",
          },
        ],
      },
    ],
  }
];
