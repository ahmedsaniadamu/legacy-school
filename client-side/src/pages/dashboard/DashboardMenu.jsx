import React from 'react'
import { Link } from 'react-router-dom';
import { usePageBodyHeight } from '../../customhooks/ResponsiveHeight';
//components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const DashboardMenu = () => {

    const [ mainSectionHeight ] = usePageBodyHeight() ; 

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
                         <Link to={'/'} className='p-0 m-0'> 
                            <i className='fas fa-home'> </i> Home
                         </Link>
                         <span className='fas fa-chevron-right'></span>
                         <Link to={'/dashboard-menu'} className='p-0 m-0'> 
                             Dashboard
                         </Link>
                     </div>   

                     
                     <div className='menu-links row w-100 p-0 m-0 mx-auto mt-2'>
                            <Link to={'/dashboard/student'} className='col-12 col-sm-6 col-md-4 m-0 p-0 student py-3'>
                                    <div className='text-center'>
                                        <span className='fas fa-user-graduate icon'></span>
                                    </div>                                
                                    <h5 className='m-0 header p-0 text-center mt-1'>
                                        Student Dashboard
                                    </h5>                                   
                            </Link>                            
                            <Link to={'/dashboard/teacher'} className='col-12 col-sm-6 col-md-4 m-0 p-0  teacher py-3'>
                                    <div className='text-center '>
                                        <span className='fas fa-chalkboard-teacher icon'></span>
                                    </div>                                
                                    <h5 className='m-0 header p-0 text-center mt-1'>
                                        Teachers Dashboard
                                    </h5>
                                    
                            </Link>
                            <Link to={'/dashboard/admin'} className='col-12 col-sm-6 col-md-4 m-0 p-0 admin py-3'>
                                    <div className='text-center'>
                                        <span className='fas fa-key icon'></span>
                                    </div>                                
                                    <h5 className='m-0 header p-0 text-center mt-1'>
                                        Admin Dashboard
                                    </h5>                                    
                            </Link>
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
