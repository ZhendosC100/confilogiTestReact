import React from 'react'

const QuestionItem = ({ question, answer, index, onShowAnswer, active }) => {
  return(
    <p 
      className={`questions_item ${index === active ? 'questions_item-active' : ''}`}
      onClick={onShowAnswer}
      data-index={index}
    >
        { question }
        <span>{ answer }</span>
    </p>
  )
};

export default QuestionItem;