import React from 'react'
import { useSelector } from 'react-redux'
import MediaObjects from './MediaObjects'
import Sidebar from './Sidebar'


const Navbar = (props) => {

    return (
        <nav className='m-0 w-100'>  
            <div className='d-flex justify-content-between w-100 p-0 m-0 h-100'>
                  <div className='h-100 p-0 m-0 w-auto'>
                       <img
                            src={ require('../Assets/logo.png').default }
                            alt='logo' 
                            className='h-100 p-0 m-0' 
                        /> 
                         <span className='school-name d-none d-sm-inline ms-2'> 
                             Legacy school of science & Technology
                         </span>
                  </div>
                   { /* 
                      show right items in the navbar e.g ( masseges , notifications) 
                      in non mobile devices
                  */}
                  <div className='d-none d-sm-flex msg'>
                      <NavbarItems />            
                  </div>
                   { /*
                      hide right items and display an icon that toggles a sliding sidebar                      
                  */}
                  <div className='d-sm-none mt-2 me-2'>
                      <span className='fas fa-bars' data-bs-toggle='offcanvas' data-bs-target='#demo'>                          
                      </span>
                       {  /*  Offcanvas Sidebar  */ }
                        <div className='offcanvas offcanvas-start p-0' id='demo'>
                            <div className='offcanvas-header p-0 m-0 py-1 border-bottom'>     
                                <span className='fas fa-arrow-left' data-bs-dismiss='offcanvas'></span>
                                <NavbarItems /> 
                            </div>
                            <div className='offcanvas-body p-0 m-0 w-100'>
                                 <Sidebar activePage={props.activePage} />
                            </div>
                        </div>
                 </div>
            </div>            
        </nav>
    )
}

const NavbarItems = () => {
     
     const {messeges,notifications} = useSelector(state => state)

     const [ searchInput , setSearchInput ] = React.useState('')

     const handleChange = event => setSearchInput(event.target.value)

     return (
          <>   
            <form className='form-inline mt-sm-1 me-1 me-sm-3 '>
                        <div className='input-group input-group-sm'>
                            <span className='input-group-text'>
                                <i className='fas fa-search'></i>
                            </span>
                            <input type='search' className='form-control'
                                   placeholder='Find something...' onChange={ handleChange } 
                                   required value={searchInput}
                                  />
                        </div>
                    </form>

                      <div className='dropdown notification-dropdown'>
                      <span className='fas fa-bell me-0 me-sm-3 mt-1' data-bs-toggle='dropdown'>
                       </span>                     
                            <ul className='dropdown-menu p-0'>
                                <li className='dd-header py-1 ps-1'> 
                                    5 Notifications
                                 </li>
                                 { 
                                   notifications.map( ( notification , index ) => {
                                        return (
                                             <MediaObjects                                                 
                                               renderImage={ false }
                                               icon={notification.icon }
                                               name={ notification.text }
                                               text = { notification.time }
                                               key={index}
                                               className={'notification-body ps-1'}
                                             />
                                        )
                                   })
                                 }
                            </ul>
                        </div>                          
                          
                         <div className='dropdown messeges-dropdown'>
                            <span data-bs-toggle='dropdown' 
                                  className='messeges fas fa-envelope me-1 me-sm-3 mt-1'>
                             </span>
                            <ul className='dropdown-menu p-0'>
                                     <li className='dd-header py-2 py-sm-1 ps-1'> 
                                        12 Messeges
                                    </li>
                                   {                                     
                                      messeges.map( (msg,index) => {
                                      
                                         const image = require('../Assets/user.png').default
                                       
                                        return <MediaObjects 
                                                             renderImage={ true }
                                                             key={index}
                                                             imageSrc={image} 
                                                             name={ msg.name }
                                                             text={ msg.messege }
                                                             className={'messeges ps-1'}
                                                />
                                    })
                                }
                            </ul>
                        </div>
          </>
     )
}
            
export default Navbar 
