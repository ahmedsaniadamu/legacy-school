import React from 'react'
import { Link , useParams } from 'react-router-dom';
import { usePageBodyHeight } from '../../customhooks/ResponsiveHeight';
import { useSelector,useDispatch } from 'react-redux';
import { HIDE_RESET_PASSWORD_FORM } from '../../store/actions';
//components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';

const DashboardMenu = () => {

    const [ mainSectionHeight ] = usePageBodyHeight() ;
    // detect which user forgot his password i.e either admin , student or teacher
    const  { user } = useParams() ;
    const  dispatch = useDispatch()
    const { displayResetPasswordForm } = useSelector( state => state )

    React.useEffect( () => {
         dispatch({ type : HIDE_RESET_PASSWORD_FORM })
    }, [ dispatch ] )

    return (
        <div>
            <div className='w-100 p-0 m-0 navbar-wrapper'>
                 <Navbar activePage={'login'} id='login'/>
            </div>
             <div className='row w-100 p-0 m-0 main-container'>
                <div className='d-none d-sm-block sidebar-wrapper col-sm-4 col-md-3 p-0 m-0'>
                      <Sidebar  activePage={'login'}/>
                 </div>
                 <div className=' main-content-wrapper forgot-password-section col-12 col-sm-8 col-md-9 p-0 m-0' 
                      style={{ height: mainSectionHeight ,overflowY:'scroll'}}
                  > 
                    <div className='p-0 p-sm-1'> 
                        <Carousel />

                     <div className='bread-crum mt-1 p-0 ps-1'>
                         <Link to={'/'} className='p-0 m-0'> 
                            <i className='fas fa-home'> </i> Home
                         </Link>
                         <span className='fas fa-chevron-right'></span>
                         <Link to={'/login'} className='p-0 m-0'> 
                             Login
                         </Link>
                         <span className='fas fa-chevron-right'></span>
                         <Link to={'/forgot-password/student'} className='p-0 m-0'> 
                             forgot password
                         </Link>
                     </div>   
                     
                     {/* forgot password container */}
                     <div className='mt-2 py-3 forgot-password-form shadow-sm'>
                         { 
                            displayResetPasswordForm ? 
                            <ResetPasswordForm user = { user } />
                                    :
                             <ForgotPasswordForm user = { user } />                           
                          }
                     </div>
                     
                    <div className='notice-board mt-3 pb-2 border shadow-sm'>
                          <h5 className='header m-0 py-1'>
                              <span className='fas fa-exclamation-circle mx-1'></span>
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

                    <div className='our-app mt-2 pt-3 '>
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
