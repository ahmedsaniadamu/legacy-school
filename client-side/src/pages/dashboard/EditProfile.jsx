import React from 'react'
import { Link , useParams  } from 'react-router-dom';
import { usePageBodyHeight } from '../../customhooks/ResponsiveHeight';
//components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import StudentEditProfile from './components/StudentEditProfile';
import TeacherEditProfile from './components/TeacherEditProfile';

const DashboardMenu = () => {

    const [ mainSectionHeight ] = usePageBodyHeight() ; 
    const {  user } = useParams() ;

    return (
        <div>
            <div className='w-100 p-0 m-0 navbar-wrapper'>
                 <Navbar activePage={'dashboard'} id='dashboard'/>
            </div>
             <div className='row w-100 p-0 m-0 main-container'>
                <div className='d-none d-sm-block sidebar-wrapper col-sm-4 col-md-3 p-0 m-0'>
                      <Sidebar  activePage={'dashboard'}/>
                 </div>
                 <div className=' main-content-wrapper dashboard-section dashboard-menu col-12 col-sm-8 col-md-9 p-0 m-0' 
                      style={{ height: mainSectionHeight ,overflowY:'scroll'}}
                  > 
                    <div className='p-0 p-sm-1'> 
                        <Carousel />

                     <div className='bread-crum mt-1 p-0 ps-1'>
                          <div>
                                <Link to={'/'} className='p-0 m-0'> 
                                    <i className='fas fa-home'> </i> Home
                                </Link>
                                <span className='fas fa-chevron-right'></span>
                                <Link to={'/dashboard-menu'} className='p-0 m-0'> 
                                    Dashboard
                                </Link>
                                <span className='fas fa-chevron-right'></span>
                                 {
                                     user === 'student' ?
                                     <Link to={'/edit-profile/student'} className='p-0 m-0'> 
                                         Student's Edit Profile
                                     </Link>
                                              :
                                    <Link to={'/edit-profile/teacher'} className='p-0 m-0'> 
                                         Teacher's Edit Profile
                                     </Link>
                                 }                                 
                          </div>                           
                     </div>   

                     <div>
                         {  
                           //display student edit profile form if user is student else display for teacher
                            user === 'student' ? <StudentEditProfile />
                                                : <TeacherEditProfile />
                         }
                     </div>

                    <div className='notice-board mt-2 pb-2 border shadow-sm'>
                          <h5 className="header m-0 py-1">
                              <span className="fas fa-exclamation-circle mx-1"></span>
                               Notice Board
                          </h5>
                          <div className='p-1 p-md-2'>
                              <h6 className='mb-1'> 
                                 Dear Our Returning Students.
                              </h6>
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                               Dignissimos illum autem consequuntur, soluta quos provident 
                               incidunt amet. Ex quae voluptatem 
                              eos suscipit? Pariatur, facere? Adipisci optio sed consequatur 
                              illo eaque.
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                               Dignissimos illum autem consequuntur, soluta quos provident 
                               incidunt amet. Ex quae voluptatem 
                              eos suscipit? Pariatur, facere? Adipisci optio sed consequatur 
                              illo eaque.
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                               Dignissimos illum autem consequuntur, soluta quos provident 
                               incidunt amet. Ex quae voluptatem 
                              eos suscipit? Pariatur, facere? Adipisci optio sed consequatur 
                              illo eaque.
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                               Dignissimos illum autem consequuntur, soluta quos provident 
                               incidunt amet. Ex quae voluptatem 
                              eos suscipit? Pariatur, facere? Adipisci optio sed consequatur 
                              illo eaque.
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                               Dignissimos illum autem consequuntur, soluta quos provident 
                               incidunt amet. Ex quae voluptatem 
                              eos suscipit? Pariatur, facere? Adipisci optio sed consequatur 
                              illo eaque.
                              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                               Dignissimos illum autem consequuntur, soluta quos provident 
                               incidunt amet. Ex quae voluptatem 
                              eos suscipit? Pariatur, facere? Adipisci optio sed consequatur 
                              illo eaque.
                              
                          </div>
                    </div>

                    <div className='our-app mt-3 pt-3 shadow-sm'>
                         <h5 className='header mb-0 text-center'>
                              Download Our Mobile App
                         </h5>
                         <p className='p-1 pb-0 text-center sub-header'>
                             get our latest news and update via your mobile app
                             with ease of access.
                         </p>
                         <div className='store d-flex justify-content-center mt-0 pt-0'>
                              <span className='d-inline-block play'></span>
                              <span className='d-inline-block ios ms-sm-2'></span>
                         </div>
                    </div>                   
                   
                   <div className='who-we-are mt-2 pb-2 shadow-sm'>
                      <h6 className='header py-1 ps-1'> Who We Are ? </h6>
                      <p className='p-0 m-0 ps-1'>
                          We are one of the to schools that focus on teaching and guiding students
                          in learning the basics of science and technology with the help of our
                          top and expert teachers world wide.
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Commodi, corporis at iure quod culpa, voluptas minima ipsum sint,
                           similique deleniti aliquid! Laboriosam libero ratione
                          eos harum voluptas architecto unde maiores?
                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Commodi, corporis at iure quod culpa, voluptas minima ipsum sint,
                           similique deleniti aliquid! Laboriosam libero ratione
                          eos harum voluptas architecto unde maiores?
                      </p>
                   </div>

                  </div> 
                  <Footer />                
              </div>                
           </div>    
        </div>
    )
}

export default DashboardMenu
