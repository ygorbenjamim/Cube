import React from 'react';
import './style.css';

const Footer = () => {
  // Data atual
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const yaer = date.getFullYear();

  return (
    <div className="footer-container">
      <p>&copy; Copyright todos os direitos reservados { day }/{ month }/{ yaer }</p>
    </div>
  );
}
 
export default Footer;