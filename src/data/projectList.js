import haralick from "../images/haralick.webp"
import todoapp from "../images/todoapp.webp"
import urlshort from "../images/urailsshort.webp"
import profilesite from "../images/profilesite.webp"

const projectList = [
  {
    name: "Haralick Feature Extractor",
    description:
      "this desktop windows apps can be use to extract haralick features values from images to be used as input data in image processing apps, this app was build using C# , .net framework and accord framework  ",
    thumbnail: haralick,
    alt: "haracklick feature extractor app",
    url: "https://github.com/Rangga-PR/Haralick-Features_Extractor",
    stacks: [],
  },
  {
    name: "Todo App",
    description:
      "use this web app to manage your todo list, build with react js",
    thumbnail: todoapp,
    alt: "todo app",
    url: "https://rangga-pr.github.io/todo-react/",
    stacks: [
      {
        name: "React JS",
        icon: "fab fa-react",
      },
    ],
  },
  {
    name: "Url Shortener",
    description: "url shortener web app, build with Ruby on Rails and MongoDB",
    thumbnail: urlshort,
    alt: "urls shortener",
    url: "https://gentle-ravine-49649.herokuapp.com/",
    stacks: [
      {
        name: "Ruby",
        icon: "fas fa-gem",
      },
      {
        name: "Mongo DB",
        icon: "fas fa-leaf",
      },
      {
        name: "HTML",
        icon: "fab fa-html",
      },
      {
        name: "CSS",
        icon: "fab fa-css",
      },
      {
        name: "Vanila JS",
        icon: "fab fa-js",
      },
    ],
  },
  {
    name: "Profile Website",
    description: "website to showcase profile, build using Gatsby, and Graphql",
    thumbnail: profilesite,
    alt: "profile website",
    url: "https://ranggaputra.site",
    stacks: [
      {
        name: "React",
        icon: "fab fa-react",
      },
    ],
  },
  {
    name: "Niagahoster Landing Page Clone",
    description: "clone of niagahoster's old landing page",
    thumbnail: profilesite,
    alt: "niagahoster landing page clone",
    url: "https://still-temple-23601.herokuapp.com",
    stacks: [
      {
        name: "Vue",
        icon: "fab fa-vuejs",
      },
      {
        name: "PHP",
        icon: "fab fa-php",
      },
    ],
  },
]

export default projectList
