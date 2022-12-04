import EmailRoundedIcon from '@material-ui/icons/EmailRounded'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import resume from './static/resume.pdf'

const socialItems = [
  {icon: EmailRoundedIcon, url: "mailto:krishna.desai240391@gmail.com"},
  {icon: LinkedInIcon, url: "https://linkedin.com/in/krishna-desai2418"}
]

const navigationLinks = [
  {name:"About", href:"#about"},
  {name:"Projects", href:"#projects"},
  {name:"Resume", href:resume}
];

const projectData = [
  {
      title:"Portfolio",
      description:"An online representation of some of the work I have created, as well as my skills and experiences. It also includes my resume, a summary of qualifications and skills.",
      tags:["React.js","Material-UI","Gatsby.js"],
      links:[
          {
              icon: OpenInNewIcon,
              href:"",
          },
      ]
  },
  {
      title:"A Todo App",
      description:"A simple app to add, check and remove items in todo list with React for the basic principles of CRUD",
      tags:["HTML","CSS","React.js"],
      links:[
          {
              icon: OpenInNewIcon,
              href:"",
          },
      ]
  },
  {
      title:"Calculator",
      description:"A simple calculator app. That can perform add, subtract, multiply, divide, support decimal values, calculate percentages,invert values, reset functionality, and, output resize based on length",
      tags:["HTML","CSS","React.js"],
      links:[
          {
              icon: OpenInNewIcon,
              href:"",
          },
      ]
  },
  {
      title:"E-commerce website(B2C)",
      description:"student and staff records management system, which provides modules for student to get course related informatin and results online and staff can manage all the details related to students",
      tags:["HTML","CSS","JavaScript","jQuery", "Ajax", "JSON", "PHP (MVC structure)","MySQL"],
      links:[
          {
              icon: OpenInNewIcon,
              href:"",
          },
      ]
  },
  {
      title:"Book-store(B2C)",
      description:"E-commerce website for a book store",
      tags:["HTML","CSS","JavaScript", "JAVA"],
      links:[
          {
              icon: OpenInNewIcon,
              href:"",
          },
      ]
  }
];

export {projectData,navigationLinks,socialItems};