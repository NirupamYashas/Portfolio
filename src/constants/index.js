import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    ai,
    leadingindiaai,
    nic,
    uf,
    superstars,
    carrent,
    jobit,
    tripguide,
    upsc,
    ecommerce,
    chatapp,
    cropprediction,
    traveladvisor,
    expensetracker,
    threejs,
    angular,
    aws,
    azure,
    cpp,
    django,
    flask,
    go,
    heroku,
    java,
    jsonimg,
    mysql,
    numpy,
    postgresql,
    postman,
    pycharm,
    python,
    scikitlearn,
    seaborn,
    socketio,
    springboot,
    vscode,
    ufhealth,
    webdashboard,
    gatorrepo
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
      id: "skills",
      title: "Skills"
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Angular / React Developer",
      icon: mobile,
    },
    {
      title: "NodeJS Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "AWS",
    //   icon: aws,
    // },
    // {
    //   name: "Microsoft Azure",
    //   icon: azure,
    // },
    // {
    //   name: "C++",
    //   icon: cpp,
    // },
    // {
    //   name: "Django",
    //   icon: django,
    // },
    // {
    //   name: "Flask",
    //   icon: flask,
    // },
    // {
    //   name: "Go Lang",
    //   icon: go,
    // },
    // {
    //   name: "Heroku",
    //   icon: heroku,
    // },
    {
      name: "Java",
      icon: java,
    },
    // {
    //   name: "JSON",
    //   icon: jsonimg,
    // },
    {
      name: "MySQL",
      icon: mysql,
    },
    // {
    //   name: "NumPy",
    //   icon: numpy,
    // },
    // {
    //   name: "PostgreSql",
    //   icon: postgresql,
    // },
    {
      name: "Postman",
      icon: postman,
    },
    // {
    //   name: "PyCharm",
    //   icon: pycharm,
    // },
    {
      name: "Python",
      icon: python,
    },
    // {
    //   name: "ScikitLearn",
    //   icon: scikitlearn,
    // },
    // {
    //   name: "Seaborn",
    //   icon: seaborn,
    // },
    // {
    //   name: "SocketIO",
    //   icon: socketio,
    // },
    // {
    //   name: "Spring Boot",
    //   icon: springboot,
    // },
    // {
    //   name: "VS Code",
    //   icon: vscode,
    // }
  ];
  
  const experiences = [
    {
      title: "Deep Learning Intern",
      company_name: "Leading India AI",
      icon: ai,
      iconBg: "#383E56",
      date: "Nov 2019 - Jan 2020",
      points: [
        "Engineered an Autonomous Agricultural Drones integrated with deep learning to detect dry and wet patches and spray water in the dry parts of the farm as a team of 4.",
        "Achieved 86% Accuracy in differentiating wet and dry lands using CNN model."
      ],
    },
    {
      title: "AI Software Engineer",
      company_name: "National Informatics Centre (Govt. of India)",
      icon: nic,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Dec 2021",
      points: [
        "Designed an Automatic Voice Controlled System for Government Portal named Kisan-Suvidha (Live Website) Using NLP, enabling over 10 million farmers to access and control the website using voice commands in various local languages.",
        "Evaluated Different API’s like Speechly, Dialog Flow by Google, Annyang (JS library) for finding the entities during voice recognition with 95% accuracy."
      ],
    },
    {
      title: "Software Developer",
      company_name: "University Of Florida, Department of Computer & Information Science",
      icon: uf,
      iconBg: "#E6DEDD",
      date: "June 2022 - May 2023",
      points: [
        "Web  Application  Development:  Pioneered  the  design  of  a  web  application  that  retrieves  ﬁles  seamlessly  from Amazon  S3  Buckets.  This  integration  signiﬁcantly  improved  real  time  traffic  monitoring  capabilities  by  efficiently handling  sensor  data  from  over  1000  intersections  in  prominent  cities  like  Orlando,  Gainesville,  etc.",
        "Database  &  Deployment:  Deployed  the  fully  functional  Web  Application  on  AWS  using  Kubernetes  and  Docker services,  achieving  0  downtime  with  multiple  cluster  nodes.",
        "Microservices:  Adopted  micro-service  design  patterns  to  ensure  modular  and  scalable  code  structure."
      ],
    },
    {
      title: "Full Stack Web Developer",
      company_name: "UF Health",
      icon: ufhealth,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Front-end  Development:  Transformed  cancer  nanomedicine  dataset  into  an  interactive  web  dashboard  using  Angular, Node.js,  and  D3.js.  Post  launch,  researchers  reported  a  10%  enhancement  in  research  predictability.",
        "Backend  &  Database:  Centralized  research  datasets  using  a  PostgresQL  server  coupled  with  a  Node.js  backend boosting  data  retrieval  efficiency  by  15%.  Utilized  GraphQL  for  optimized  data  querying.",
        "Deployment  &  Security:  Orchestrated  deployment  using  Docker,  kubernetes  on  AWS  with  CI/CD  integration  achieving 99.9%  uptime  rate.  Leveraged  Auth0  for  security,  achieving  a  90%  reduction  in  unauthorized  access.",
        "Automated  Testing:  Implemented  various  testing  methodologies  including  Unit,  Functional  and  UI  Testing."
      ],
    },
    {
      title: "Angular Developer",
      company_name: "Superstars",
      icon: superstars,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
      points: [
        "Spearheaded the development of Superstars Web Application using Angular, Typescript, HTML, and CSS.",
        "Developed RESTful APIs and microservices using Node.js and Express.js, improving backend performance by 40%",
        "Collaborated with cross-functional teams to design & implement new features, improving the user experience by 25%."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Yashas proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Yashas does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Yashas optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Gator-Repo",
      description:
        "Gator Repo is a web application that can be used to maintain all the projects done by students at UF. It offers additional features for professors and other students to verify projects and also allows the contributors to add their project updates.Engineered features like intuitive listing, comprehensive viewing, efficient filtering, and interactive engagement, leading to a notable 20% rise in collaborative participation and accountability within the UF community.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "GoLang",
          color: "pink-text-gradient",
        },
        {
          name: "SQLite",
          color: "orange-text-gradient",
        },
      ],
      image: gatorrepo,
      source_code_link: "https://github.com/NirupamYashas/Gator-Repo",
    },
    {
      name: "Interactive Web Dashboard For UF Health",
      description:
        "Transformed cancer nanomedicine dataset into an interactive web dashboard using Angular, Node.js, and D3.js. Post launch, researchers reported a 10% enhancement in research predictability.Centralized research datasets using a PostgreSQL server coupled with a Node.js backend boosting data retrieval efficiency by 15%.Orchestrated deployment using Docker, Kubernetes on AWS with CI/CD integration achieving 99.9% uptime rate. Leveraged Auth0 for security, achieving a 90% reduction in unauthorized access.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "orange-text-gradient",
        },
        {
          name: "aws",
          color: "red-text-gradient",
        }
      ],
      image: webdashboard,
      source_code_link: "https://ec2-3-129-177-192.us-east-2.compute.amazonaws.com/",
    },
    {
      name: " UPSC Pre",
      description:
        "Built an android learning platform application for students to prepare for the most competitive exams conducted by UPSC (Union Public Service Commission) of India while closely collaborating with 3 others. Ranked among top ten UPSC-related applications, the app is available on Playstore with a productivity boost of 20% and user engagement boost of 40% in the past year.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: upsc,
      source_code_link: "https://play.google.com/store/apps/details?id=com.upscpre.iasprep",
    },
    {
      name: "Full Stack ECommerce Application",
      description:
        "Developed a modern, cutting-edge ECommerce website using React, resulting in a 35% increase in user engagement and seamless user experience with advanced design and animations. Implemented advanced cart, checkout functionalities,and real-time payments with Stripe integration, leading to a 25% sales conversion rate increase, and streamlined product management using Sanity.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "sanity",
          color: "red-text-gradient",
        },
        {
          name: "stripe",
          color: "orange-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/NirupamYashas/eStore",
    },
    {
      name: "Real-Time Chat Application",
      description:
        "Built a responsive, feature-rich Real-Time Chat App, enhancing communication efficiency by 40% and reducing user response times by 30% with features like group chats, emojis, and built-in GIF support. Leveraged GetStream.io and integrated React and NodeJS, enabling users to create custom real-time chat applications, improving collaboration across various teams.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "getstream.io",
          color: "red-text-gradient",
        }
      ],
      image: chatapp,
      source_code_link: "https://github.com/NirupamYashas/ChatApplication-Phase2",
    },
    {
      name: "Data Driven Agricultural Farming",
      description:
        "Implemented an AI based web app which helps farmers in 5+ farming services like Crop & Fertilizer recommendation, Pest Detection, Weather Prediction, and Market Statistics. Trained CNN model on 10k image data set provided by Kaggle on different Healthy and Unhealthy plant image Data set.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "red-text-gradient",
        },
        {
          name: "OpenCV",
          color: "orange-text-gradient",
        }
      ],
      image: cropprediction,
      source_code_link: "https://github.com/raghav-rathi/EastIndiaCompany",
    },
    // {
    //   name: "Speechly Expense Tracker",
    //   description:
    //     "The Speechly Expense Tracker streamlines personal finance management with voice control and multilingual support. Built using React, JavaScript, and Context API, it offers voice-command expense tracking, category organization, visual data representation, and seamless user experience. This innovative solution revolutionizes personal finance management for a diverse audience.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "javascript",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "context api",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "speechly",
    //       color: "pink-text-gradient",
    //     }
    //   ],
    //   image: expensetracker,
    //   source_code_link: "https://github.com/",
    // }
  ];
  
  export { services, technologies, experiences, testimonials, projects };