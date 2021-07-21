import React, { useState } from 'react';
import FAQ from './FAQ';
import './faqfun.css';
import 'tachyons';

function Faqs () {
  const [faqs, setfaqs] = useState([
    { id:1,
      question: ' What technologies are used?',
      answer:'For development of websites, we maily use mern stack technologies. For mobile app deveopment, we prefer to use either Flutter or React Native based on the project\'s requirements.',
      open: false
    },
    {
      id:2,
      question: 'How do I know my data is safe?',
      answer: 'We use renowned and  trusted database services and all our form inputs are encrypted end to end thus protecting any personal data that the user may povide us. ',
      open: false
    },
    {
      id:3,
      question: 'Where do I look for projects developed by this organisation?',
      answer: 'Please visit our website for details regarding the projects we have completed.',
      open: false
    },
    {
      id:4,
      question: 'How are you different from other service providers?',
      answer: 'As a startup, our main aim is to meet all of our customer\'s requirements and to provide them the service that they requested for, at the time that was decided. Another one of our strengths is data protection and privacy.',
      open: false
    },
    {
      id:5,
      question: 'Do your mobile applications provide iOS support?',
      answer: 'Yes, as per the customer\'s requirements, we provide applications that support both the Andriod and iOS platforms while at the same time, we use technologies that require maintenance of only one code base for both and thus we provide good maintenance support and platform consistency as well.',
      open: false
    },
    {
      id:6,
      question: 'Are there any jobs available?',
      answer: ' Yes, follow us on LinkedIn/dm to get more details about the same.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div style={{background: 'rgba(236, 243, 255)'}}>
     <p className="tc pa3 f1 fw6">Faq's</p>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <div>
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
             </div>
        ))}

      </div>
    </div>
  );
}

export default Faqs;
