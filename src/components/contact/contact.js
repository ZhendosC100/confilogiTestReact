import React, { useState, useEffect } from 'react';

import IconError from '../../assets/icon-error.svg';
import './contact.scss';

const Contact = () => {

  const [count, setCount] = useState(35000);
  const [inputValue, setValue] = useState('');
  const [activeClass, setActiveClass] = useState('');

  // verify: example@example.some
  const inputVerify = () => {
    let patt = /^[^@]+@[^@.]+\.[^@]+$/;
    let result = inputValue.match(patt);;
    if(inputValue === '' || result === null) {
      setActiveClass('input_wrapper-active')
    } else {
      setActiveClass('')
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
    inputVerify()
  }
  
  const changeInput = (e) => {
    e.preventDefault();
    inputVerify()
    console.log(inputValue)
  };


  useEffect(() => {
    const digitalCounter = count > 0 && setTimeout(() => setCount(count - 35), 20);
    return () => clearInterval(digitalCounter);
  }, [count])
  
    return(
      <div className="contact">
        <div className="container">
          <div className="contact_description-wrapper">
            <p className="contact_description">
            <span className="contact_dynamic">{ count }</span>
              + ALREADY JOINED
            </p>
            <h3 className="contact_header">Stay up-to date with what we're doing</h3>
      
            <form 
              id="modal_form" 
              className="contact_form" 
              action="#" 
              method="POST"
              onSubmit={changeInput}
            >
              <div className={`input_wrapper ${activeClass}`}>
                <input 
                  className="contact_form__email"
                  name="user_email" required="" 
                  type="email" 
                  placeholder="Enter your email address" 
                  onChange={handleChange}
                />
                <img className="input_img" src={ IconError } alt="error icon"></img>
                <p className="input_error">Whoops, make sure it's an email</p>
              </div>
              <button className="contact_btn" name="submit" type="submit">
                Contact us
              </button>
            </form>
          </div>
        </div>
      </div>
    )
 
};

export default Contact;