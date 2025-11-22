import React, { useEffect } from 'react'
import Contactpage from './Contactpage'
import Navbar from '../../component/Navbar/Navbar'
import { Link } from 'react-router-dom';

export default function Contactus() {
  useEffect(() => {
    document.title = 'Contact-Us | Hareram Brass Industries';
  }, []);
  return (
    <>
      <Navbar /> <br />
      <span className='brudandbread'>
        <div className="divbreaad">
          <Link to="/" className='homebrud'>Home</Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right">
            <path d="m9 18 6-6-6-6" />
          </svg>
          <Link to="/contactus" className='activeonbread'>Contact</Link>
        </div>
      </span>
      <Contactpage />
    </>
  )
}
