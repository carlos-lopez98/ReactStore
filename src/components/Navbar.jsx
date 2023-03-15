import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import {ImSun} from 'react-icons/im'
import {BsFillMoonFill} from 'react-icons/bs'

export default function Navbar() {
 /* This is setting a variable *navState*, giving it a setter method *setNavState*, then setting a default value *false* */
  const [navState, setNavState] = useState(false);

  return (
    <nav>
        <div className="container py-3 mx-3">
          <div className='brand'>
            <span>WebsiteName</span>
            <div className='dot'>.</div>
          </div>

          <div className='links-container'>
              <div className='toggle'>
                  {/* If True show mdClose -- if False show GIHamburger -- default is false so GiHamburger */}
                {navState ? <MdClose onClick={()=> setNavState(false)}/> : 
                    <GiHamburgerMenu onClick={()=> setNavState(true)}/>}
              </div>

              <div className={`links ${navState? "responsive-toggle" : ""}`}>
                <ul>
                 <li>
                  <a href="#">Home</a>
                  </li>
                  <li>
                   <a href="#">Landings</a>
                   </li>
                  <li>
                    <a href="#">Pages</a>
                   </li>
                  <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
              </div>

          </div>
        </div>
    </nav>
  )
}
