import React,{useEffect} from 'react'
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
          <Link to="/">Home</Link> /
          <Link to="/contactus" className='activeonbread'>Contact</Link>
        </div>
      </span>
      <Contactpage />
    </>
  )
}
