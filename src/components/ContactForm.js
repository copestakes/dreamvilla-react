import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

function ContactForm() {
  const chevron = <FontAwesomeIcon icon={faChevronRight} />;

  const handleClick = (e) => {
    e.preventDefault();
    Swal.fire({
      text: "'Thank you for contacting us! An agent will be in touch.'",
      icon: 'success',
      confirmButtonColor: '#d27125',
      timer: 2000,
    });
  };
  return (
    <div className="form-container">
      <div className="form-img"></div>

      <form className="form-content">
        <label htmlFor="fname">First Name:</label>
        <input type="text" id="fname"></input>

        <label htmlFor="lname">Last Name:</label>
        <input type="text" id="lname"></input>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email"></input>

        <label htmlFor="phone">Phone:</label>
        <input type="phone" id="phone"></input>

        <label htmlFor="when">When are you expecing to move?</label>
        <select name="when" id="when">
          <option value="immediately">Immediately</option>
          <option value="three">One to three months</option>
          <option value="six">Six months</option>
          <option value="unsure">I'm not sure</option>
        </select>
        <div className="agent">
          <input id="agent" type="checkbox" />
          <label htmlFor="agent">
            Do you wish to be contacted by an agent?
          </label>
        </div>
        <button onClick={handleClick}>
          Submit <span>{chevron}</span>
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
