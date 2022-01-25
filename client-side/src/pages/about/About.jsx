import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import { usePageBodyHeight } from '../../customhooks/ResponsiveHeight'
import BlogPosts from '../../components/BlogPosts'


const About = () => {
    
    const [ mainSectionHeight ] = usePageBodyHeight() ;

    return (
        <div>
            <div className='w-100 p-0 m-0 navbar-wrapper'>
                 <Navbar activePage={'about'} id='about' />
            </div>
             <div className='row w-100 p-0 m-0 main-container'>
                <div className='d-none d-sm-block sidebar-wrapper col-sm-4 col-md-3 p-0 m-0'>
                      <Sidebar  activePage={'about'}/>
                 </div>
                 <div className=' main-content-wrapper about-section col-12 col-sm-8 col-md-9 p-0 m-0' 
                      style={{ height: mainSectionHeight ,overflowY:'scroll'}}
                  > 
                    <div className='p-0 p-sm-1'> 
                        <Carousel />

                     <div className='bread-crum mt-1 p-0 ps-1'>
                         <Link to={'/'} className='p-0 m-0'> 
                            <i className='fas fa-home'> </i> Home
                         </Link>
                         <span className='fas fa-chevron-right'></span>
                         <Link to={'/'} className='p-0 m-0'> 
                             About
                         </Link>
                     </div>   

                     <div className='business-model d-flex m-0 p-0 mt-2 py-2 px-sm-1 shadow-sm'>
                         <img src={ require('../../Assets/IMG_20211224_221939.png').default}
                              alt='business model'                             
                          />
                          <div className='content'>
                              <h5 className='header mb-1 ps-2'> Our Business Model </h5>
                              <p className='text p-0 m-0 ps-2'>
                                  Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. Officia quos illo 
                                   architecto nostrum vitae quibusdam nobis, distinctio in 
                                  aperiam nisi minima. Repellat, aspernatu
                                  r ullam debitis repudiandae iure eveniet consequuntur a.
                                  architecto nostrum vitae quibusdam nobis, distinctio in 
                                  aperiam nisi minima. Repellat, aspernatu
                                  r ullam debitis repudiandae iure eveniet consequuntur a.
                                  aperiam nisi minima. Repellat, aspernatu
                                  r ullam debitis repudiandae iure eveniet consequuntur a.
                                  architecto nostrum vitae quibusdam nobis, distinctio in 
                                  aperiam nisi minima. Repellat, aspernatu
                                  r ullam debitis repudiandae iure eveniet consequuntur a.
                                  <span> Read More.</span>
                              </p>
                          </div>
                     </div>
                     
                     <div className='business-model d-flex m-0 p-0 mt-3 py-2 px-sm-1 shadow-sm'>
                         <img src={ require('../../Assets/IMG_20211224_221833.png').default}
                              alt='clinical section'                             
                          />
                          <div className='content'>
                              <h5 className='header mb-1 ps-2'> Our Clinical Section </h5>
                              <p className='text p-0 m-0 ps-2'>
                                  Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. Officia quos illo 
                                   architecto nostrum vitae quibusdam nobis, distinctio in 
                                  aperiam nisi minima. Repellat, aspernatu
                                  r ullam debitis repudiandae iure eveniet consequuntur a.
                                  architecto nostrum vitae quibusdam nobis, distinctio in 
                                  aperiam nisi minima. Repellat, aspernatu
                                  r ullam debitis repudiandae iure eveniet consequuntur a.
                                  aperiam nisi minima. Repellat, aspernatu
                                  r ullam debitis repudiandae iure eveniet consequuntur a.
                                  architecto nostrum vitae quibusdam nobis, distinctio in 
                                  aperiam nisi minima. Repellat, aspernatu
                                  r ullam debitis repudiandae iure eveniet consequuntur a.
                                  <span> Read More.</span>
                              </p>
                          </div>
                     </div>

                    <div className='our-app mt-3 pt-2'>
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

                   <div className='blog mt-2 pb-2 pt-0 shadow-sm'>
                      <BlogPosts />
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

export default About
