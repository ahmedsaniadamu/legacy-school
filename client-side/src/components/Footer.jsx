import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <footer className='footer-component mt-2'>
             <div className='contact-us row w-100 p-0 m-0 mx-auto justify-content-center'>
                 <div className='col-12 col-sm-6 col-md-4 pt-2 p-0 m-0 ps-1'>
                     <h5 className='header mb-1'>
                         Contact us
                     </h5>
                     <div className='social-media p-0 m-0 ms-2'>
                        <ul className='p-0 m-0 links'>
                            <li>  
                                  <i className='fas fa-phone me-1'></i> 
                                 +2349077270998 , +2348108344257
                             </li>
                             <li>  
                                  <i className='fas fa-envelope me-1'></i>  
                                 support@legacyschool.com
                             </li>
                             <li className='our-social-media'>
                                 <span className='facebook'></span>
                                 <span className='twitter'></span>
                                 <span className='instagram'></span>
                                 <span className='whatsapp'></span>
                                 <span className='linkedin'></span>
                                 <span className='google-plus'></span>
                                 <span className='youtube'></span>
                             </li>
                        </ul>
                     </div>
                 </div>
                 <div className='col-12 col-sm-6 col-md-2 pt-2 p-0 m-0 quick-links ms-2 ms-sm-0'>
                      <h5 className='header mb-1'> Quick Links </h5>
                          <Link to={'/'}> home </Link>
                          <Link to={'/about'}> about </Link>
                          <Link to={'/contact'}> contact </Link>
                          <Link to={'/blog/1'}> blog </Link>
                 </div>
                 <div className='col-12 col-sm-6 col-md-6 pt-2 p-0 m-0 subscribe-container ms-2 ms-md-0' >
                     <h5 className='header mb-1 ps-1'>
                         Subscribe to our news letters
                     </h5>
                       <SubcribeToNewsLetters />
                 </div>
             </div>
             <p className='copyright mt-3 py-1 mb-0 text-center'> 
                 copyright &copy; 2022 legacy school all right reserved
              </p>
        </footer>
    )
}

 const SubcribeToNewsLetters = () => {

    const [input , setInput ] = React.useState('')
    
    const handleInputChange = e => {
        e.preventDefault() ;
        setInput(e.target.value)
    }

    return (<React.Fragment>
                <form className='form-inline ps-1'>
                        <div className='input-group input-group-sm '>
                            <input type='email'
                                    className='form-control py-1' 
                                    placeholder='your email address..'
                                    value={input}
                                    onChange={ handleInputChange }
                                    required
                             />
                            <span className='input-group-text'> Subscribe </span>
                        </div>
                 </form>
          </React.Fragment> )

     }
export default Footer
