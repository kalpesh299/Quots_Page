import React from 'react'

import { FaBars } from "react-icons/fa";


const Header = () => {


  return (
    <div className='w-screen  flex h-16 justify-between bg-gray-200'>
      <div className="h-full ">
   
        <img className="h-full w-full " alt='logo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAYFBMVEX///8AAADJycny8vL8/Pz4+PjS0tLp6enm5ualpaXv7++/v79oaGhbW1sqKirPz8+JiYl0dHRDQ0Pd3d02NjaRkZGtra0hISELCwt/f39iYmKzs7NOTk6bm5s7OzsXFxef5TY+AAAEj0lEQVRoge1a17ajIBS9WEGMDWOL5f//cixIRIGIejOz1rifsmKSLafsU8zPz40bN27cuHHjxv8HaHh/hbcFeWT8BV5UAFC0DbS+TRzmYECcmV8mhv5IDALf+a6rrQhQtMj5KjPOZ+aiztwvEjs1YMhL/L0gs2KwQBAR+1vMGeDgo28FmZPwzEWFUez7fokM8qs+9x5AhrTM5Me3oYNfp/yCpMQ9KoeFm2W7kJAQo8ivg64YruIzvD+vTsXsO27P1URlXCUBf6k8qXYKWyvwIOdYezz1Wbtzzh1A9I+bR+dVxsg/86xQnzfxARsn58L4KO3zAk2ztF0bX6FiVqnJGlxhYv3TRlewcr4tM+yEOIsCOenwqUtomTA/Fj0tebYK4uYCWjj/GOaVB0Zy3uJ8121T5/pwcylcHznw4wf1wOkkelEbi2QWVhxt3wBZJkTp8Do+KZAmPa1Y3a3mzeqzNrcZCmZ2jneK5UBqtrnLDbLFnRl9tc9PWZqM/UIeyj8BB/93T760O+nJZIo/p4WJUbapO0b/rRPjBRlp6wPf7B2fHOcdU7Q7kox2daKdI2Mnd8xRvanqo/3cpEjbpsEOMywMV3sR1P2XX8do3fG48eb9cBge8u2PGmVexMwpJADtMd5JFDZecqgUri+8xpwDjPjogb1RfpNN4zBX45Z3X1hQBZn90heU6kgTOymzv37bZcrIxznrSVi29zeoEBwpErFmEMbLSzCbzlm6I8Fdf4Yh9uKPXYjP6294nRx02+r5CdRuW7Wb256Vf9lszizk9gGCdGlhIeOl41kwH5dWWpMW45oFotWbPtHVjrmyCtTdG0zByq0R01dwDIhkYVlfvzpYcw8jFGfPced+guSgpVQmLiOuCStF+aAGFgftBoP+g0pycYiEQMvQ79XRh6rQgNxPwVN8cdR3Lc3yWLLUSslxhkQjqeTHx9TS6vDe/VquCgw3GROl97EoDKxRSgqdRmuxrlI1OT51AwaBQBFhKlYeOQywgPR+rQj41IhYJMW09daIaG7Klk53CLRMI5q3jjBQxU53FyWTG/cKiaEQCBYa0UdExkfQLJz7hyUIOOTC2R2thpc+8+JlrmK2ZtudSSHPC9Kt78yxbKTGez04pEDezLfoLiaY3bVhzQvytanJPJH50x7czegbSYkJhAY3He/mdda8vUmdhU3JPPrWw3SUxB/2ELtHNCj4clFlUxTZuGRhh0g0z2VRIfjShN3+tRPJLySPB7+1y4ba1MN7F5INuv2lcPeWjOWIIV8Sp/sF2lXva5aYjLiJxAV0tkrK5fr2xCRVfEJrOapY1qzx+oEq8+iNdfb+HV1X1qqrmp2sBrES2kOwp1rI7YakA1LBvODE2yF2D7HKb7tQHZv4LY2oFkGybduB/XksQHziedX6gaQGDoTUAq7ujp/i0PaJAz4SXlc817DR/jIxob3oabzd6IhI2lz3HwAz2xtgLbr4TyaG8lHGhC665MnRCiaJavnTyS6Jf/H/SxAjAXkaN6/f/zuLbbokxFkzAL0MB3rm1/+ydOPGjRs3bty48a/iD1vzM/h4mg4nAAAAAElFTkSuQmCC"></img></div>
        
        

        
        <ul className='hidden max-lg:text-xs max-xl:text-sm md:flex flex-row  w-1/3 justify-evenly items-center '>
        <li>Home</li>
        <li>Quote</li>
        <li>Restruarants</li>
        <li>Foods</li>
        <li>Contact</li>
        </ul>
      
    <FaBars className='flex justify-center items-center h-full mr-8 md:hidden  '/>
        <ul className='max-lg:text-xs max-xl:text-sm    w-1/4 justify-evenly items-center hidden md:flex '>
        
            <li>Contact Us</li>
            <li>Log In</li>
            <li className='bg-blue-500 p-2 rounded'>Sign Up</li>
        </ul>
  
    </div>
  )
}

export default Header