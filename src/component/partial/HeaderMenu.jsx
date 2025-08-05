export const menuData = [
  {
    title: "Company",
    items: [
      { name: "About Us", link: "/about" },
      { name: "Our Works", link: "/our-works" },
      { name: "Partners", link: "/partners" },
      { name: "Our Clients", link: "/our-clients" },
      { name: "Careers", link: "/careers" },
      { name: "Blogs", link: "/blogs" }
    ]
  },
  {
    title: "Services",
    sections: [
      {
        name: "Development",
        link: "/services/software-development",
        children: [
          {
            name: "Software Development Services",
            link: "/services/software-development",
            image: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            children: [
              { name: "Software Consulting Services", link: "/services/consulting", image: "https://via.placeholder.com/200x120?text=Consulting" },
              { name: "Custom Software Development", link: "/services/custom-software", image: "https://via.placeholder.com/200x120?text=Custom+Software" },
              { name: "Software Architecture & Wireframe", link: "/services/architecture", image: "https://via.placeholder.com/200x120?text=Architecture" },
              { name: "Software Maintenance & Support", link: "/services/maintenance", image: "https://via.placeholder.com/200x120?text=Maintenance" },
              { name: "Database Development", link: "/services/database", image: "https://via.placeholder.com/200x120?text=Database" },
              { name: "Enterprise Software Development Services", link: "/services/enterprise", image: "https://via.placeholder.com/200x120?text=Enterprise+Software" }
            ]
          },
          {
            name: "Web Development Services",
            link: "/services/web-development-services",
            image: "https://via.placeholder.com/200x120?text=Web+App",
            children: [
              { name: "Web Design Services", link: "/services/web-design", image: "https://via.placeholder.com/200x120?text=Web+Design" },
              { name: "Ecommerce Web Development", link: "/services/ecommerce", image: "https://via.placeholder.com/200x120?text=Ecommerce" },
              { name: "Landing Page Development", link: "/services/landing-page", image: "https://via.placeholder.com/200x120?text=Landing+Page" },
              { name: "Website Revamp Services", link: "/services/website-revamp", image: "https://via.placeholder.com/200x120?text=Revamp" },
              { name: "Web Maintenance & Support", link: "/services/web-maintenance", image: "https://via.placeholder.com/200x120?text=Web+Maintenance" },
              { name: "WordPress Web Development", link: "/services/wordpress", image: "https://via.placeholder.com/200x120?text=WordPress" },
              { name: "Shopify Web Development", link: "/services/shopify", image: "https://via.placeholder.com/200x120?text=Shopify" },
              { name: "Magento Web Development", link: "/services/magento", image: "https://via.placeholder.com/200x120?text=Magento" }
            ]
          },
          {
            name: "Mobile App Development",
            link: "/services/mobile-app-development",
            image: "https://via.placeholder.com/200x120?text=Mobile+Dev",
            children: [
              { name: "Android App Development", link: "/services/android-app-development", image: "https://via.placeholder.com/200x120?text=Android+App" },
              { name: "iOS App Development", link: "/services/ios-app-development", image: "https://via.placeholder.com/200x120?text=iOS+App" },
              { name: "Cross Platform App Development", link: "/services/cross-platform-app-development", image: "https://via.placeholder.com/200x120?text=Cross+Platform+App" },
              { name: "Web Development Services", link: "/services/web-development", image: "https://via.placeholder.com/200x120?text=Web+App" },
              { name: "Hybrid Mobile App Development", link: "/services/hybrid-mobile-app-development", image: "https://via.placeholder.com/200x120?text=Hybrid+Mobile+App" },
              { name: "App Store Optimization Services", link: "/services/app-store-optimization-services", image: "https://via.placeholder.com/200x120?text=App+Store+Optimization" },
              { name: "App Maintenance & Support", link: "/services/app-maintenance", image: "https://via.placeholder.com/200x120?text=App+Maintenance" },
            ]
          },
          {
            name: "Web Application Development",
            link: "/services/web-application-development",
            image: "https://via.placeholder.com/200x120?text=Web+App",
            children: [
              { name: "SaaS Development", link: "/services/saas-development", image: "https://via.placeholder.com/200x120?text=SaaS" },
              { name: "PaaS Development", link: "/services/web-development", image: "https://via.placeholder.com/200x120?text=Web+App" },
              { name: "Web Portal Development", link: "/services/web-portal-development", image: "https://via.placeholder.com/200x120?text=Web+Portal" },
              { name: "Progressive Web App (PWA) Development", link: "/services/progressive-web-app-development", image: "https://via.placeholder.com/200x120?text=PWA" },
              { name: "Enterprise Web App Development", link: "/services/enterprise-web-app-development", image: "https://via.placeholder.com/200x120?text=Enterprise+Web+App" },
              { name: "Web App Maintenance & Support", link: "/services/web-app-maintenance", image: "https://via.placeholder.com/200x120?text=Web+App+Maintenance" },
            ]
          },
          {
            name: "Full Stack Development",
            link: "/services/full-stack-development",
            image: "https://via.placeholder.com/200x120?text=Full+Stack",
            children: [
              { name: "Front-End Development", link: "/services/front-end-development", image: "https://via.placeholder.com/200x120?text=Front+End" },
              { name: "Back-End Development", link: "/services/back-end-development", image: "https://via.placeholder.com/200x120?text=Back+End" },
              { name: "API Development & Integration", link: "/services/api-development-integration", image: "https://via.placeholder.com/200x120?text=API+Dev" },
              { name: "CRM Integration", link: "/services/crm-integration", image: "https://via.placeholder.com/200x120?text=CRM" },
              { name: "UI/UX Design Services", link: "/services/ui-ux-design-services", image: "https://via.placeholder.com/200x120?text=UI+UX" }
            ]
          }
        ]
      },


      {
        name: "Branding", link: "/services/branding", image: "https://via.placeholder.com/200x120?text=Branding",
        children: [
          {
            name: "Branding Services",
            link: "/services/branding-services",
            image: "https://via.placeholder.com/200x120?text=Branding+Services",
            children: [
              { name: "Brand Strategy & Positioning", link: "/services/brand-strategy-positioning", image: "https://via.placeholder.com/200x120?text=Brand+Strategy" },
              { name: "Brand Identity Design", link: "/services/brand-identity-design", image: "https://via.placeholder.com/200x120?text=Brand+Identity" },
              { name: "Brand Messaging & Copywriting", link: "/services/brand-messaging-copywriting", image: "https://via.placeholder.com/200x120?text=Brand+Messaging" },
              { name: "Visual Branding & Collateral Design", link: "/services/visual-branding-collateral-design", image: "https://via.placeholder.com/200x120?text=Visual+Branding" },
              { name: "Rebranding Services", link: "/services/rebranding-services", image: "https://via.placeholder.com/200x120?text=Rebranding" },
              { name: "Brand Guidelines & Toolkits", link: "/services/brand-guidelines-toolkits", image: "https://via.placeholder.com/200x120?text=Brand+Guidelines" },
              { name: "Employer Branding", link: "/services/employer-branding", image: "https://via.placeholder.com/200x120?text=Employer+Branding" },
            ]
          }
        ]
      },
      {
        name: "Consulting", link: "/services/consulting", image: "https://via.placeholder.com/200x120?text=Consulting",
        children: [
          {
            name: "Digital Transformation Services",
            link: "/services/digital-transformation-services",
            image: "https://via.placeholder.com/200x120?text=Digital+Transformation",
            children: [
              { name: "Digital Strategy & Roadmap", link: "/services/digital-strategy-roadmap", image: "https://via.placeholder.com/200x120?text=Digital+Strategy" },
              { name: "Cloud Transformation", link: "/services/cloud-transformation", image: "https://via.placeholder.com/200x120?text=Cloud+Transformation" },
              { name: "Legacy System Modernization", link: "/services/legacy-system-modernization", image: "https://via.placeholder.com/200x120?text=Legacy+System" },
            ]
          },
          {
            name: "IT Consulting Services",
            link: "/services/it-consulting-services",
            image: "https://via.placeholder.com/200x120?text=IT+Consulting",
            children: [
              { name: "IT Strategy & Planning", link: "/services/it-strategy-planning", image: "https://via.placeholder.com/200x120?text=IT+Strategy" },
              { name: "IT Talent Consulting", link: "/services/it-talent-consulting", image: "https://via.placeholder.com/200x120?text=IT+Talent" },
              { name: "IT Operations Optimization", link: "/services/it-operations-optimization", image: "https://via.placeholder.com/200x120?text=IT+Operations" },
            ]
          },
          {
            name: "Cybersecurity Services",
            link: "/services/cybersecurity-services",
            image: "https://via.placeholder.com/200x120?text=Cybersecurity",
            children: [
              { name: "Security Assessment", link: "/services/security-assessment", image: "https://via.placeholder.com/200x120?text=Security+Assessment" },
              { name: "IT Security Audit", link: "/services/it-security-audit", image: "https://via.placeholder.com/200x120?text=IT+Security" },
              { name: "Security Testing", link: "/services/security-testing", image: "https://via.placeholder.com/200x120?text=Security+Testing" },
              { name: "Penetration Testing", link: "/services/penetration-testing", image: "https://via.placeholder.com/200x120?text=Penetration+Testing" },
              { name: "Compliance Assessment", link: "/services/compliance-assessment", image: "https://via.placeholder.com/200x120?text=Compliance+Assessment" },
              { name: "Managed Security Services", link: "/services/managed-security-services", image: "https://via.placeholder.com/200x120?text=Managed+Security" },
              { name: "Vulnerability Management", link: "/services/vulnerability-management", image: "https://via.placeholder.com/200x120?text=Vulnerability+Management" },
            ]
          },
          {
            name: "Data Analytics Services",
            link: "/services/data-analytics-services",
            image: "https://via.placeholder.com/200x120?text=Data+Analytics",
            children: [
              { name: "Big Data Analytics", link: "/services/big-data-analytics", image: "https://via.placeholder.com/200x120?text=Big+Data" },
              { name: "Data Visualization Services", link: "/services/data-visualization-services", image: "https://via.placeholder.com/200x120?text=Data+Visualization" },
              { name: "cloud consulting", link: "/services/cloud-consulting", image: "https://via.placeholder.com/200x120?text=Cloud+Consulting" },
              { name: "Managed Services", link: "/services/managed-services", image: "https://via.placeholder.com/200x120?text=Managed+Services" },
              { name: "Enterprise Mobility", link: "/services/enterprise-mobility", image: "https://via.placeholder.com/200x120?text=Enterprise+Mobility" },
              { name: "Data Management", link: "/services/data-management", image: "https://via.placeholder.com/200x120?text=Data+Management" },
            ]
          },
        ]

      },
      {
        name: "Digital Marketing",
        link: "/services/digital-marketing",
        image: "https://via.placeholder.com/200x120?text=Marketing",
        children: [
          {
            name: "SEO Services",
            link: "/services/digital-marketing-services",
            image: "https://via.placeholder.com/200x120?text=Digital+Marketing",
            children: [
              { name: "Enterptise SEO", link: "/services/enterptise-seo", image: "https://via.placeholder.com/200x120?text=Enterptise+SEO" },
              { name: "Ecommerce SEO", link: "/services/ecommerce-seo", image: "https://via.placeholder.com/200x120?text=Ecommerce+SEO" },
              { name: "Local SEO", link: "/services/local-seo", image: "https://via.placeholder.com/200x120?text=Local+SEO" },
              { name: "International/Multilingual SEO", link: "/services/international-multilingual-seo", image: "https://via.placeholder.com/200x120?text=International+SEO" },
              { name: "Link Building", link: "/services/link-building-services", image: "https://via.placeholder.com/200x120?text=Link+Building" },
              { name: "Paid Guest Posting", link: "/services/paid-guest-posting", image: "https://via.placeholder.com/200x120?text=Paid+Guest+Posting" },
              { name: "AEO optimisation", link: "/services/aeo-optimisation", image: "https://via.placeholder.com/200x120?text=AEO+Optimisation" },
              { name: "SEO for LLMs", link: "/services/seo-for-llms", image: "https://via.placeholder.com/200x120?text=SEO+for+LLMs" },

            ]
          },
          {
          name: "Social Media Marketing",
            link: "/services/social-media-marketing",
            image: "https://via.placeholder.com/200x120?text=Social+Media+Marketing",
            children: [
              { name: "Facebook Marketing", link: "/services/facebook-marketing", image: "https://via.placeholder.com/200x120?text=Facebook+Marketing" },
              { name: "Instagram Marketing", link: "/services/instagram-marketing", image: "https://via.placeholder.com/200x120?text=Instagram+Marketing" },
              { name: "Pinterest Marketing", link: "/services/pinterest-marketing", image: "https://via.placeholder.com/200x120?text=Pinterest+Marketing" },
              { name: "Social Media Management", link: "/services/social-media-management", image: "https://via.placeholder.com/200x120?text=Social+Media+Management" },
              { name: "Youtube Marketing", link: "/services/youtube-marketing", image: "https://via.placeholder.com/200x120?text=Youtube+Marketing" },
              { name: "TikTok Marketing", link: "/services/tiktok-marketing", image: "https://via.placeholder.com/200x120?text=TikTok+Marketing" },
            ]
          },
          {
            name: "PPC Management",
            link: "/services/ppc-management",
            image: "https://via.placeholder.com/200x120?text=PPC+Management",
            children: [
              { name: "Performance Marketing", link: "/services/performance-marketing", image: "https://via.placeholder.com/200x120?text=Performance+Marketing" },
              { name: "PPC Strategy & Planning", link: "/services/ppc-strategy-planning", image: "https://via.placeholder.com/200x120?text=PPC+Strategy+Planning" },
              { name: "Meta Advertising Services", link: "/services/meta-advertising-services", image: "https://via.placeholder.com/200x120?text=Meta+Advertising+Services" },
              { name: "Google Ads Management", link: "/services/google-ads-management", image: "https://via.placeholder.com/200x120?text=Google+Ads+Management" },
              { name: "TikTok Advertisements", link: "/services/tiktok-advertisements", image: "https://via.placeholder.com/200x120?text=TikTok+Advertisements" },
              { name: "Pinterest Advertisements", link: "/services/pinterest-advertisements", image: "https://via.placeholder.com/200x120?text=Pinterest+Advertisements" },
              { name: "Reddit Advertisements", link: "/services/reddit-advertisements", image: "https://via.placeholder.com/200x120?text=Reddit+Advertisements" },
              { name: "LinkedIn Advertising Services", link: "/services/linkedin-advertising-services", image: "https://via.placeholder.com/200x120?text=LinkedIn+Advertising+Services" },
              { name: "Marketplace Advertisements", link: "/services/marketplace-advertisements", image: "https://via.placeholder.com/200x120?text=Marketplace+Advertisements" },
              { name: "Inventory/Media Buying", link: "/services/inventory-media-buying", image: "https://via.placeholder.com/200x120?text=Inventory+Media+Buying" },
            ]
          },
          {
            name: "Content Marketing",
            link: "/services/content-marketing",
            image: "https://via.placeholder.com/200x120?text=Content+Marketing",
            children: [
              { name: "Content Strategy", link: "/services/content-strategy", image: "https://via.placeholder.com/200x120?text=Content+Strategy" },
              { name: "Content Development", link: "/services/content-development", image: "https://via.placeholder.com/200x120?text=Content+Development" },
              { name: "Content Creation", link: "/services/content-creation", image: "https://via.placeholder.com/200x120?text=Content+Creation" },
              { name: "Content Optimization", link: "/services/content-optimization", image: "https://via.placeholder.com/200x120?text=Content+Optimization" },
              { name: "Content Promotion", link: "/services/content-promotion", image: "https://via.placeholder.com/200x120?text=Content+Promotion" },
              { name: "Content Reporting", link: "/services/content-reporting", image: "https://via.placeholder.com/200x120?text=Content+Reporting" },
            ]
          },
          {
            name:"Content Writing",
            link: "/services/content-writing",
            image: "https://via.placeholder.com/200x120?text=Content+Writing",
            children: [
              {name:"Blog Content Writing", link: "/services/blog-content-writing", image: "https://via.placeholder.com/200x120?text=Blog+Content+Writing" },
              {name:"Listicle Content Writing", link: "/services/listicle-content-writing", image: "https://via.placeholder.com/200x120?text=Listicle+Content+Writing" },
              {name:"Case Study Writing", link: "/services/case-study-writing", image: "https://via.placeholder.com/200x120?text=Case+Study+Writing" },
              {name:"SEO Content Writing", link: "/services/seo-content-writing", image: "https://via.placeholder.com/200x120?text=SEO+Content+Writing" },
              {name:"Social Media Content Writing", link: "/services/social-media-content-writing", image: "https://via.placeholder.com/200x120?text=Social+Media+Content+Writing" },
              {name:"Email Newsletter Writing", link: "/services/email-newsletter-writing", image: "https://via.placeholder.com/200x120?text=Email+Newsletter+Writing" },
              {name:"Press Release Writing", link: "/services/press-release-writing", image: "https://via.placeholder.com/200x120?text=Press+Release+Writing" },
            ]

          },
          {
            name:"Online Reputation Management",
            link: "/services/online-reputation-management",
            image: "https://via.placeholder.com/200x120?text=Online+Reputation+Management",
            children: [
              {name:"Social Media Reputation Monitoring", link: "/services/social-media-reputation-monitoring", image: "https://via.placeholder.com/200x120?text=Social+Media+Reputation+Monitoring" },
              {name:"Personal Reputation Management", link: "/services/personal-reputation-management", image: "https://via.placeholder.com/200x120?text=Personal+Reputation+Management" },
              {name:"LinkedIn Profile Management", link: "/services/linkedin-profile-management", image: "https://via.placeholder.com/200x120?text=LinkedIn+Profile+Management" },
              {name:"Brand Monitoring & Reporting", link: "/services/brand-monitoring-reporting", image: "https://via.placeholder.com/200x120?text=Brand+Monitoring+Reporting" },
              {name:"Review Management", link: "/services/review-management", image: "https://via.placeholder.com/200x120?text=Review+Management" },
              {name:"Social listening", link: "/services/social-listening", image: "https://via.placeholder.com/200x120?text=Social+listening" },
            ]
          },
          {
            name:"Marketing Automation",
            link: "/services/marketing-automation",
            image: "https://via.placeholder.com/200x120?text=Marketing+Automation",
            children: [
              {name:"Email Marketing", link: "/services/email-marketing", image: "https://via.placeholder.com/200x120?text=Email+Marketing" },
              {name:"WhatsApp Marketing", link: "/services/whatsapp-marketing", image: "https://via.placeholder.com/200x120?text=WhatsApp+Marketing" },
            ]
          },
          {
            name:"Tool-Based Marketing Automation",
            link: "/services/tool-based-marketing-automation",
            image: "https://via.placeholder.com/200x120?text=Tool-Based+Marketing+Automation",
            children: [
              {name:"HubSpot Marketing Hub", link: "/services/hubspot-marketing-hub", image: "https://via.placeholder.com/200x120?text=HubSpot+Marketing+Hub" },
              {name:"ActiveCampaign", link: "/services/activecampaign", image: "https://via.placeholder.com/200x120?text=ActiveCampaign" },
              {name:"Marketo Engage (by Adobe)", link: "/services/marketo-engage", image: "https://via.placeholder.com/200x120?text=Marketo+Engage" },
              {name:"Salesforce Marketing Cloud", link: "/services/salesforce-marketing-cloud", image: "https://via.placeholder.com/200x120?text=Salesforce+Marketing+Cloud" },
              {name:"Microsoft Dynamics 365", link: "/services/microsoft-dynamics-365", image: "https://via.placeholder.com/200x120?text=Microsoft+Dynamics+365" },
              {name:"Omnisend", link: "/services/omnisend", image: "https://via.placeholder.com/200x120?text=Omnisend" },
              {name:"MoEngage", link: "/services/moengage", image: "https://via.placeholder.com/200x120?text=MoEngage" },
              {name:"Oracle Eloqua Marketing Automation", link: "/services/oracle-eloqua-marketing-automation", image: "https://via.placeholder.com/200x120?text=Oracle+Eloqua" },
              {name:"Zoho CRM", link: "/services/zoho-crm", image: "https://via.placeholder.com/200x120?text=Zoho+CRM" },
              {name:"Brevo", link: "/services/brevo", image: "https://via.placeholder.com/200x120?text=Brevo" },
            ]
          },
          {
            name:"B2B Marketing",
            link: "/services/b2b-marketing",
            image: "https://via.placeholder.com/200x120?text=B2B+Marketing",
            children: [
              {name:"Account-Based Marketing (ABM)", link: "/services/account-based-marketing", image: "https://via.placeholder.com/200x120?text=Account-Based+Marketing" },
              {name:"B2B Lead Generation", link: "/services/b2b-lead-generation", image: "https://via.placeholder.com/200x120?text=B2B+Lead+Generation" },
              {name:"Social Media For B2B", link: "/services/social-media-for-b2b", image: "https://via.placeholder.com/200x120?text=Social+Media+For+B2B" },
              {name:"B2B Content Marketing", link: "/services/b2b-content-marketing", image: "https://via.placeholder.com/200x120?text=B2B+Content+Marketing" },
              {name:"Performance & Paid Media for B2B", link: "/services/performance-paid-media-for-b2b", image: "https://via.placeholder.com/200x120?text=Performance+Paid+Media+for+B2B" },
            ]
          },
          {
            name:"B2C Marketing",
            link: "/services/b2c-marketing",
            image: "https://via.placeholder.com/200x120?text=B2C+Marketing",
            children: [
              {name:"Conversion Rate Optimization (CRO)", link: "/services/conversion-rate-optimization", image: "https://via.placeholder.com/200x120?text=Conversion+Rate+Optimization" },
              {name:"Ecommerce Growth Marketing", link: "/services/ecommerce-growth-marketing", image: "https://via.placeholder.com/200x120?text=Ecommerce+Growth+Marketing" },
              {name:"SEO For B2C", link: "/services/seo-for-b2c", image: "https://via.placeholder.com/200x120?text=SEO+For+B2C" },
              {name:"Social Media For B2C", link: "/services/social-media-for-b2c", image: "https://via.placeholder.com/200x120?text=Social+Media+For+B2C" },
              {name:"Performance Marketing for B2C", link: "/services/performance-marketing-for-b2c", image: "https://via.placeholder.com/200x120?text=Performance+Marketing+for+B2C" },
            ]
          }


        ]


      },
      {
        name: "Creative & Media Production", link: "/services/creative-media", image: "https://via.placeholder.com/200x120?text=Media",
        children: [
          {
            name: "Video Production", link: "/services/video-production", image: "https://via.placeholder.com/200x120?text=Video",
            children: [
              { name: "Corporate Video", link: "/services/corporate-video", image: "https://via.placeholder.com/200x120?text=Corporate+Video" },
              { name: "Podcast Production", link: "/services/podcast-production", image: "https://via.placeholder.com/200x120?text=Podcast" },
              { name: "Explainer Video", link: "/services/explainer-video", image: "https://via.placeholder.com/200x120?text=Explainer+Video" },
              { name: "E Learning Video", link: "/services/e-learning-video", image: "https://via.placeholder.com/200x120?text=E-Learning+Video" },
              { name: "Marketing Video", link: "/services/marketing-video", image: "https://via.placeholder.com/200x120?text=Marketing+Video" },
              { name: "Video Editing Services", link: "/services/video-editing-services", image: "https://via.placeholder.com/200x120?text=Video+Editing" },
              { name: "Animation Video", link: "/services/animation-video", image: "https://via.placeholder.com/200x120?text=Animation+Video" },
            ]
          },
          {
            name: "Photography", link: "/services/photography", image: "https://via.placeholder.com/200x120?text=Photography",
            children: [
              { name: "Corporate Photography", link: "/services/corporate-photography", image: "https://via.placeholder.com/200x120?text=Corporate+Photography" },
              { name: "Ecommerce Photography", link: "/services/ecommerce-photography", image: "https://via.placeholder.com/200x120?text=Ecommerce+Photography" },
              { name: "Food Photography", link: "/services/food-photography", image: "https://via.placeholder.com/200x120?text=Food+Photography" },
              { name: "Fashion Photography", link: "/services/fashion-photography", image: "https://via.placeholder.com/200x120?text=Fashion+Photography" },
              { name: "Architecural Photography", link: "/services/architecural-photography", image: "https://via.placeholder.com/200x120?text=Architecural+Photography" },
              { name: "Event Photography", link: "/services/event-photography", image: "https://via.placeholder.com/200x120?text=Event+Photography" },
              { name: "Drone Photography", link: "/services/drone-photography", image: "https://via.placeholder.com/200x120?text=Drone+Photography" },
            ]
          },
        ]
      }
    ]
  },
  {
    title: "Technologies",
    sections: [
      {
        name: "Frontend Technologies", link: "/technologies/frontend-technologies",
        children: [
          { name: "React.js Development", link: "/technologies/react-development" },
          { name: "Angular Development", link: "/technologies/angular-development" },
          { name: "Vue.js Development", link: "/technologies/vue-development" },
          { name: "HTML5 & CSS3 Development", link: "/technologies/html5-css3-development" },
          { name: "JavaScript & TypeScript", link: "/technologies/javascript-typescript" },
          { name: "Bootstrap / TailwindCSS", link: "/technologies/bootstrap-tailwindcss" },
        ]
      },
      {
        name: "Backend Technologies",
        link: "/technologies/backend-technologies",
        children: [
          { name: "Node.js Development", link: "/technologies/node-development" },
          { name: "Python Development", link: "/technologies/python-development" },
          { name: "PHP Development", link: "/technologies/php-development" },
          { name: "Java Spring Boot Development", link: "/technologies/java-spring-boot-development" },
          { name: ".NET Development", link: "/technologies/net-development" },
          { name: "Ruby on Rails Development", link: "/technologies/ruby-on-rails-development" },
          { name: "Golang Development", link: "/technologies/golang-development" },
        ]
      },
      {
        name: "Mobile Technologies", link: "/technologies/mobile",
        children: [
          { name: "Android App Development (Kotlin, Java)", link: "/technologies/android-app-development-kotlin-java" },
          { name: "iOS App Development (Swift)", link: "/technologies/ios-app-development-swift" },
          { name: "Flutter App Development", link: "/technologies/flutter-app-development" },
          { name: "React Native Development", link: "/technologies/react-native-development" },
          { name: "Ionic App Development", link: "/technologies/ionic-app-development" },
        ]
      },
      {
        name: "Cloud & DevOps", link: "/technologies/cloud",
        children: [
          { name: "AWS Cloud Services", link: "/technologies/aws-cloud-services" },
          { name: "Azure Cloud Services", link: "/technologies/azure-cloud-services" },
          { name: "Google Cloud (GCP) Services", link: "/technologies/google-cloud-services" },
          { name: "Cloud DevOps & CI/CD (Docker, Jenkins, GitHub Actions)", link: "/technologies/cloud-devops-ci-cd" },
          { name: "Serverless Architecture (Lambda, Firebase)", link: "/technologies/serverless-architecture" },
        ]
      },
      {
        name: "AI, ML & Data Technologies", link: "/technologies/ai",
        children: [
          { name: "Artificial Intelligence Development (AI)", link: "/technologies/artificial-intelligence-development" },
          { name: "Machine Learning & Predictive Analytics (ML)", link: "/technologies/machine-learning-predictive-analytics" },
          { name: "Natural Language Processing (NLP)", link: "/technologies/natural-language-processing" },
          { name: "Computer Vision (CV)", link: "/technologies/computer-vision" },
          { name: "Data Engineering (ETL Pipelines, Apache Spark, Airflow)", link: "/technologies/data-engineering" },
          { name: "Data Visualization Tools (Power BI, Tableau, Looker)", link: "/technologies/data-visualization-tools" },
        ]
      }
    ]
  },
  {
    title: "Industries",
    items: [
      { name: "E-commerce", link: "/industries/ecommerce" },
      { name: "Healthcare", link: "/industries/healthcare" },
      { name: "Education & E-learning", link: "/industries/education-e-learning" },
      { name: "Real Estate", link: "/industries/real-estate" },
      { name: "Finance & Banking", link: "/industries/finance-banking" },
      { name: "Hospitality & Tourism", link: "/industries/hospitality-tourism" },
      { name: "Automotive", link: "/industries/automotive" },
      { name: "Media & Entertainment", link: "/industries/media-entertainment" },
      { name: "Manufacturing & Industrial", link: "/industries/manufacturing-industrial" },
      { name: "Manufacturing & Industrial", link: "/industries/manufacturing-industrial" },
      { name: "Technology & SaaS", link: "/industries/technology-saas" },
      { name: "Logistics & Supply Chain", link: "/industries/logistics-supply-chain" },
      { name: "Telecommunications", link: "/industries/telecommunications" },
      { name: "Legal Services", link: "/industries/legal" },
      { name: "Beauty Wellness & Fitness", link: "/industries/beauty-wellness-fitness" },
      { name: "Non-Profit & NGOs", link: "/industries/non-profit-ngos" },
      { name: "Food & Beverages", link: "/industries/food-beverage" },
      { name: "Home Decor & Interior Design", link: "/industries/home-decor-interior-design" },
      { name: "Government & Public Sector", link: "/industries/government-public-sector" },
      { name: "Energy & Utilities", link: "/industries/energy-utilities" },
      { name: "Insurance", link: "/industries/insurance" },
      { name: "Gaming & Esports", link: "/industries/gaming-esports" },
      { name: "Events & Exhibitions", link: "/industries/events-exhibitions" },
      { name: "Agriculture & AgroTech", link: "/industries/agriculture-agrotech" },
      { name: "Crypto & Blockchain", link: "/industries/crypto-blockchain" },
      { name: "Pet Care & Veterinary", link: "/industries/pet-care-veterinary" },
      { name: "Renewable Energy", link: "/industries/renewable-energy" },
      { name: "Green & Sustainable Brands", link: "/industries/green-sustainable-brands" },
    ]
  }
];

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const HeaderMenu = ({ mobileMenuOpen }) => {
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);
  const [mobileMenuState, setMobileMenuState] = useState({
    currentMenu: null,
    currentSection: null,
    currentSubItem: null
  });

  const handleMenuHover = (index, menu) => {
    if (!mobileMenuOpen) {
      setHoveredMenuIndex(index);

      if (
        (menu.title === "Services" || menu.title === "Technologies") &&
        menu.sections?.length > 0
      ) {
        const firstSection = menu.sections[0];
        setHoveredSection(firstSection);
        setHoveredSubItem(firstSection.children?.[0] || null);
      } else {
        setHoveredSection(null);
        setHoveredSubItem(null);
      }
    }
  };


  const handleLeave = () => {
    // if (!mobileMenuOpen) {
    //   setHoveredMenuIndex(null);
    //   setHoveredSection(null);
    //   setHoveredSubItem(null);
    // }
  };

  const handleMobileMenuToggle = (e, index) => {
    if (!mobileMenuOpen) return;
    e.stopPropagation();
    setMobileMenuState(prev => ({
      currentMenu: prev.currentMenu === index ? null : index,
      currentSection: null,
      currentSubItem: null
    }));
  };

  const handleMobileSectionToggle = (e, section) => {
    if (!mobileMenuOpen) return;
    e.stopPropagation();
    setMobileMenuState(prev => ({
      ...prev,
      currentSection: prev.currentSection === section ? null : section,
      currentSubItem: null
    }));
  };

  const handleMobileSubItemToggle = (e, subItem) => {
    if (!mobileMenuOpen) return;
    e.stopPropagation();
    setMobileMenuState(prev => ({
      ...prev,
      currentSubItem: prev.currentSubItem === subItem ? null : subItem
    }));
  };

  const renderMobileMenu = () => {
    return (
      <div className="mobileMenuContainer">
        {menuData.map((menu, index) => (
          <div key={index} className="mobileMenuItem">
            <div className="mobileMenuHeader">
              <a
                href={menu.link || '#'}
                className="mobileMenuTitle"
                onClick={(e) => {
                  // Only prevent default if there are items/sections to expand
                  // if (menu.items || menu.sections) {
                  //   e.preventDefault();
                  // }
                }}
              >
                {menu.title}
              </a>
              {(menu.items || menu.sections) && (
                <button
                  className="mobileMenuToggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMobileMenuToggle(e, index);
                  }}
                >
                  <ChevronRight
                    size={16}
                    className={`mobileMenuIcon ${mobileMenuState.currentMenu === index ? 'rotate-90' : ''}`}
                  />
                </button>
              )}
            </div>

            {mobileMenuState.currentMenu === index && (
              <div className="mobileMenuContent">
                {menu.items ? (
                  menu.items.map((item, idx) => (
                    <a key={idx} href={item.link} className="mobileMenuItemLink">
                      {item.name}
                    </a>
                  ))
                ) : (
                  <>
                    {menu.sections.map((section, sIdx) => (
                      <div key={sIdx} className="mobileMenuSection">
                        <div className="mobileMenuSectionHeader">
                          <a
                            href={section.link}
                            className="mobileMenuSectionTitle"
                            onClick={(e) => {
                              // Only prevent default if there are children to expand
                              // if (section.children) {
                              //   e.preventDefault();
                              // }
                            }}
                          >
                            {section.name}
                          </a>
                          {section.children && (
                            <button
                              className="mobileMenuToggle"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMobileSectionToggle(e, section);
                              }}
                            >
                              <ChevronRight
                                size={16}
                                className={`mobileMenuIcon ${mobileMenuState.currentSection === section ? 'rotate-90' : ''}`}
                              />
                            </button>
                          )}
                        </div>

                        {mobileMenuState.currentSection === section && section.children && (
                          <div className="mobileMenuSubItems">
                            {section.children.map((child, cIdx) => (
                              <div key={cIdx} className="mobileMenuSubItem">
                                <div className="mobileMenuSubItemHeader">
                                  <a
                                    href={child.link}
                                    className="mobileMenuItemLink"
                                    onClick={(e) => {
                                      // Only prevent default if there are children to expand
                                      // if (child.children) {
                                      //   e.preventDefault();
                                      // }
                                    }}
                                  >
                                    {child.name}
                                  </a>
                                  {child.children && (
                                    <button
                                      className="mobileMenuToggle"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleMobileSubItemToggle(e, child);
                                      }}
                                    >
                                      <ChevronRight
                                        size={16}
                                        className={`mobileMenuIcon ${mobileMenuState.currentSubItem === child ? 'rotate-90' : ''}`}
                                      />
                                    </button>
                                  )}
                                </div>

                                {mobileMenuState.currentSubItem === child && child.children && (
                                  <div className="mobileMenuSubChildren">
                                    {child.children.map((subChild, scIdx) => (
                                      <a
                                        key={scIdx}
                                        href={subChild.link}
                                        className="mobileMenuItemLink subChild"
                                      >
                                        {subChild.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <nav className={mobileMenuOpen ? "navLinksMobile" : "navLinks"}>
      {mobileMenuOpen ? (
        renderMobileMenu()
      ) : (
        <>
          {menuData.map((menu, index) => (
            <div
              className="navItem"
              key={index}
              onMouseEnter={() => handleMenuHover(index, menu)}
              onMouseLeave={handleLeave}
            >
              <div className="navTitle">
                {menu.title} <ChevronDown size={16} />
              </div>

              {hoveredMenuIndex === index && (
                <div className="dropdown">
                  {menu.items ? (
                    menu.items.map((item, idx) => (
                      <a key={idx} href={item.link} className="dropdownItem">
                        {item.name}
                      </a>
                    ))
                  ) : (
                    <div className="dropdownContainer">
                      <div className="dropdownSection">
                        {menu.sections.map((section, sIdx) => (
                          <a
                            key={sIdx}
                            href={section.link}
                            onMouseEnter={() => {
                              setHoveredSection(section);
                              setHoveredSubItem(section.children?.[0] || section);
                            }}
                            className={`dropdownItem st1column ${hoveredSection?.name === section.name ? "active-link" : ""
                              }`}
                          >
                            {section.name}
                          </a>
                        ))}
                      </div>

                      {hoveredSection?.children && (
                        <div className="dropdownSection dropdownGroup">
                          {hoveredSection.children.map((child, cIdx) => (
                            <a
                              key={cIdx}
                              href={child.link}
                              onMouseEnter={() => setHoveredSubItem(child)}
                              className={`dropdownItem ${hoveredSubItem?.name === child.name ? "active-link" : ""
                                }`}
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}

                      {hoveredSubItem?.children && (
                        <div className="dropdownSection dropdownGroup">
                          {hoveredSubItem.children.map((subChild, i) => (
                            <a
                              key={i}
                              href={subChild.link}
                              onMouseEnter={() => { }}
                              className={`dropdownItem ${hoveredSubItem?.name === subChild.name ? "active-link" : ""
                                }`}
                            >
                              {subChild.name}
                            </a>
                          ))}
                        </div>
                      )}

                      {hoveredSubItem?.image && (
                        <div className="dropdownSection dropdownImage">
                          <img
                            src={hoveredSubItem.image}
                            alt={hoveredSubItem.name}
                            className="menuPreviewImage"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </nav>
  );
};

export default HeaderMenu;