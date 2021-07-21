import React from 'react';
import 'tachyons';
import {BsArrowDown} from 'react-icons/bs';

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => toggleFAQ(index)}
			style={{borderBottom: '2px solid #0069FF'}}
		>
			<div className="faq-question flex justify-between">
			 <p>{faq.id}. {faq.question}</p>
			 <p><BsArrowDown color="#0069FF" size="2rem"/></p>
			</div>
			<div className="faq-answer" style={{color:'black'}}>
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ;
