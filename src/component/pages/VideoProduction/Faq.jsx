import FAQs from '@/component/pages/common/CommonFAQ'

export const Faq = () => {
  const data = [
    {
      title: "How long does a video production project take?", 
      description: ""
    },
    {
      title: "How Do You Find Link Opportunities?",  
      description: ""
    },
    {
      title: "Can you manage video marketing and distribution?", 
      description: ""
    },
    {
      title: "What types of clients do you typically work with?", 
      description: ""
    },
    {
      title: "How much does video production cost?", 
      description: ""
    }
  ];

  return (
    <FAQs data={data}/>
  )
}