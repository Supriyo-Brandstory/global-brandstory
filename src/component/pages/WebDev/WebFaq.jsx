import FAQs from '@/component/pages/common/CommonFAQ'
export const WebFaq = () =>{
const data = [
  {
    title: "What Are Web Development Services?",
    description: "Web development services encompass the design, creation, building, and maintenance of all types of websites and web applications, from simple static pages to complex e-commerce platforms and custom-built web apps."
  },
  {
    title: "How Much Do Web Development Services Cost?",
    description: "The cost of web development varies widely based on scope, complexity, and features. A basic site may cost a few thousand dollars, while a complex custom web application can cost tens of thousands or more. We provide a detailed quote after a discovery phase."
  },
  {
    title: "What Is Best For Building Web Apps?",
    description: "The 'best' tools depend on the app's requirements. Popular modern choices include JavaScript frameworks like React, Angular, or Vue.js for the frontend, and Node.js, Python/Django, or PHP/Laravel for the backend, depending on scalability and feature needs."
  },
  {
    title: "What Are The Benefits Of Web Portals For Businesses?",
    description: "Web portals (like client or employee portals) centralize information, automate workflows, improve communication, and enhance security. They streamline operations, reduce administrative load, and provide a better, more organized user experience for stakeholders."
  },
  {
    title: "What Do Web Development Services Include?",
    description: "Services typically include project discovery and planning, UI/UX design, front-end and back-end coding, content management system (CMS) integration, quality assurance (QA) testing, deployment, and ongoing maintenance and support."
  },
  {
    title: "Why Hire A Web Development Company?",
    description: "Hiring a professional company ensures your project is built with expert skills in modern security, performance, scalability, and design. It allows you to focus on your core business while getting a high-quality, growth-focused digital asset."
  }
];


return (
    <FAQs data={data}/>
)
}