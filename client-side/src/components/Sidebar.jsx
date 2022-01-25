import React from 'react' ;
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { usePageBodyHeight } from '../customhooks/ResponsiveHeight';

const Sidebar = ({ activePage }) => {
    
    const { activeProfile , isLoggedIn } = useSelector( state => state) ;
    const [ sidebarHeight ] = usePageBodyHeight() ;
    
    return (
        <aside className='sidebar p-0 m-0 w-100 border-top' 
              style={{ height:sidebarHeight,overflowY:'scroll'}}
         >
            <div className='user-profile pt-3'>
                 <img 
                      style={{ objectFit : isLoggedIn ? 'cover':'normal' }}
                      src={activeProfile.image} alt='profile'
                      className='d-block mx-auto rounded-circle'
                 />
                <p className='p-0 m-0 text-center'>
                    <b> Welcome : </b> <span> { activeProfile.name }  </span>
                </p>
            </div>
            <div className='links-container m-0  border-top mb-3'>
                {  
                  /* active class prop is used for styling current page link */
                }
               <SidebarLink to={'/'} activePage={ activePage } id={'home'}
                             path={'home'} text={'Home'} 
                /> 
               <SidebarLink to={'/about'} activePage={ activePage } path={'about'} id={'about'}
                            text={'About'}
                 />              
               <SidebarLink to={'/contact'} activePage={ activePage } path={'contact'} id={'contact'}
                            text={'Contact'}
                 />
               <SidebarLink to={'/dashboard-menu'} activePage={ activePage } path={'dashboard'}
                            id={'dashboard'} text={'Dashboard'}
                 />
               <SidebarLink to={'/gallery'} activePage={ activePage } path={'gallery'} id={'gallery'}
                            text={'Gallery'}
                  />
               <SidebarLink to={'/registration'} activePage={ activePage } id={'register'}
                            path={'register'} text={'Signup/Register'}
                 />
                 <SidebarLink to={'/accomandation'} activePage={ activePage } id={'hostel'}
                            path={'accomandation'} text={'Hostel/Accomandation'}
                 />
                 <SidebarLink to={'/examination'} activePage={ activePage } id={'exam'}
                            path={'examination'} text={'Examination/Timetable'}
                 />
                 <SidebarLink to={'/login'} activePage={ activePage } id={'login'}
                            path={'login'} text={'Login'}
                 />
                   <SidebarLink to={'/blog/1'} activePage={ activePage } path={'blog'} id={'blog'}
                            text={'Blog'}
                  />
            </div>
        </aside>
    )
}

const SidebarLink = ({activePage,to,path,text,id}) => {
    return(
        <React.Fragment>
          <Link to={to} className={ (activePage === path) ? 'active ps-1 mx-auto': 'ps-1 mx-auto'} >
                        <span className='sprite-image d-block me-1' id={id}></span>
                        <span> {text} </span>
                  </Link>
        </React.Fragment>
    )
}
export default Sidebar
