import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = ({rating, handleRating, handleText, handleAdd}) => {
  return (
    <div>
        <ul style={{display:"flex",justifyContent:"space-around",listStyle:'none',fontSize:"30px"}}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar