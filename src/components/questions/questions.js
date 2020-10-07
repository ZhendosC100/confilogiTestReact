import React, { useState } from 'react';
import QuestionItem from './questionItem/questionItem';
import './questions.scss';

const Questions = () => {

  const questionsContent = [
    {
      question: 'What is Bookmark?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse architecto aliquid magni nemo qui obcaecati, eius adipisci quasi labore soluta! Officiis, vitae corporis? Quam eum molestiae labore optio odit mollitia.'
    },
    {
      question: 'How can I request a new browser?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse architecto aliquid magni nemo qui obcaecati, eius adipisci quasi labore soluta! Officiis, vitae corporis? Quam eum molestiae labore optio odit mollitia.'
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse architecto aliquid magni nemo qui obcaecati, eius adipisci quasi labore soluta! Officiis, vitae corporis? Quam eum molestiae labore optio odit mollitia.'
    },
    {
      question: 'What about other Chromium browsers?',
      answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse architecto aliquid magni nemo qui obcaecati, eius adipisci quasi labore soluta! Officiis, vitae corporis? Quam eum molestiae labore optio odit mollitia.'
    },
  ]

  const [active, setActive] = useState(0);

  const onShowAnswer = e => setActive(+e.target.dataset.index);

  const questions = questionsContent.map ((item, index) => {
    return <QuestionItem 
              key={index}
              question={item.question} 
              answer={item.answer} 
              index={index} 
              onShowAnswer={onShowAnswer} 
              active={active}
            />
  })

  return(
    <div className="questions container">
      <div className="questions_wrapperBox">
        <div className="questions_description-wrapper">
          <h3 className="questions_header">Frequently Asked Questions</h3>
          <p className="questions_description">
            Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
          </p>
        </div>
        <div className="questions_wrapper">
          { questions }
        </div>
        <button className="questions_btn">More info</button>
      </div>
    </div>
  )
}

export default Questions;