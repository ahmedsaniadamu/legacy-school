import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Carousel from '../../components/Carousel'
import { usePageBodyHeight } from '../../customhooks/ResponsiveHeight'
import BlogPost from '../../components/BlogPosts'
import Footer from '../../components/Footer'

const Home = () => {

    const [ mainSectionHeight ] = usePageBodyHeight() ;

    return (
        <div>
           <div className='w-100 p-0 m-0 navbar-wrapper'>
                 <Navbar activePage={'home'} id='home'/>
            </div>
             <div className='row w-100 p-0 m-0 main-container'>
                <div className='d-none d-sm-block sidebar-wrapper col-sm-4 col-md-3 p-0 m-0'>
                      <Sidebar  activePage={'home'}/>
                 </div>
                 <div className=' main-content-wrapper home-section col-12 col-sm-8 col-md-9 p-0 m-0' 
                      style={{ height: mainSectionHeight ,overflowY:'scroll'}}
                  > 
                    <div className='p-0 p-sm-1'> 
                        <Carousel />

                        <div className='x3 row w-100 p-0 m-0 mx-auto mt-2'>
                            <div className='col-12 col-sm-6 col-md-4 m-0 p-0 our-mission'>
                                    <div className='text-center mt-2'>
                                        <span className='fas fa-cog icon'></span>
                                    </div>                                
                                    <h5 className='m-0 header p-0 text-center'>
                                        Our Mission
                                    </h5>
                                    <p className='p-0 px-2 pt-1 mb-1'>
                                        A technological institution that provides highly trained middle-level-
                                        technical man power with technological skills for self reliance. 
                                    </p>
                            </div>                            
                            <div className='col-12 col-sm-6 col-md-4 m-0 p-0  our-vission'>
                                    <div className='text-center mt-2'>
                                        <span className='fab fa-instagram icon'></span>
                                    </div>                                
                                    <h5 className='m-0 header p-0 text-center'>
                                        Our Vission
                                    </h5>
                                    <p className='p-0 px-2 pt-1 mb-1'>
                                        to impart skills for self reliance and economic development.
                                    </p>
                            </div>
                            <div className='col-12 col-sm-6 col-md-4 m-0 p-0 principles'>
                                    <div className='text-center mt-2'>
                                        <span className='far fa-clone icon'></span>
                                    </div>                                
                                    <h5 className='m-0 header p-0 text-center'>
                                        Cardinal Principles
                                    </h5>
                                    <p className='p-0 px-2 pt-1 mb-1'>
                                        To provide full time and part time courses and training in
                                        techonology business and sciences. 
                                    </p>
                            </div>
                        </div>

                        <div className='our-principal w-100 d-flex p-0 m-0 mx-auto mt-2 py-2 shadow-sm'>
                            <div className='image-container'>
                                <img src={ require('../../Assets/bbcimage15.png').default}
                                     alt='our principal' 
                                     className='d-block mx-auto'
                                />
                            </div> 
                            <div className='content mx-0 mx-sm-2 '>
                                 <h3 className='header py-1 ps-2'>
                                     Our Dear Principal 
                                 </h3>
                                 <p className='name p-0 m-0 ps-1 ps-sm-0'> 
                                    <b> Name : </b> Cristian Geoge 
                                 </p>
                                 <p className='title p-0 m-0 ps-1 ps-sm-0'> <b> 
                                     Title : </b> Msc. Computer science and Mathematics                                  
                                 </p>
                                 <p className='text p-0 m-0 ps-1 ps-sm-0'>
                                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                      Aliquam magni laudantium beatae, suscipit ipsam possimus 
                                      veritatis ratione blanditiis. Magni 
                                     eveniet soluta culpa dignissimos! Quae beatae cupiditate 
                                     quam veritatis facilis obcaecati.
                                     Aliquam magni laudantium beatae, suscipit ipsam possimus 
                                      veritatis ratione blanditiis. 
                                      <button  className='btn py-0 ms-1'> 
                                         Read More.
                                      </button>
                                 </p>
                            </div>
                       </div>    

                     <div className='resources w-100 row p-0 m-0 mx-auto justify-content-cente mt-3 pt-2 shadow-sm'>
                        <div className='col-12 col-sm-6 col-md-4 guide p-0 px-sm-1 mt-2 mt-sm-0'>
                            <h5 className='py-1 ps-2 header'>
                               <span className='fas fa-briefcase-medical me-1'></span> Resource Guide
                            </h5>
                            <h6 className='sub-header m-0 p-0'>
                                Lorem ipsum dolor sit amet.
                            </h6>
                            <div className='text mt-1'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing 
                                elit. Sint minus dolores accusantium suscipit repudiandae.
                                 Fugit molestiae non quisquam. Soluta 
                                repellat odit voluptate perspiciatis possimus.
                                 Reiciendis labore 
                            </div>
                            <button className='btn'>
                                 Read More. <span className='fa fa-arrow-right ms-1'></span>
                            </button>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 support m-0 mt-2 mt-sm-0 p-0 ps-sm-1'>
                            <h5 className='py-1 ps-2 header'>
                              <span className='fas fa-compress me-1'></span>
                              Support & Advice
                            </h5>
                            <h6 className='sub-header m-0 p-0'>
                                 Lorem ipsum dolor sit amet.
                            </h6>
                            <div className='text mt-1'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing 
                                elit. Sint minus dolores accusantium suscipit repudiandae.
                                 Fugit molestiae non quisquam. Soluta 
                                repellat odit voluptate perspiciatis possimus.
                                 Reiciendis labore  
                            </div>
                            <button className='btn'>
                                 Read More. <span className='fa fa-arrow-right ms-1'></span>
                            </button>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 library m-0 mt-2 mt-sm-0 p-0 ps-sm-1'>
                            <h5 className='py-1 ps-2 header'>
                            <span className='fas fa-address-card me-1'></span> Resource Library
                            </h5>
                            <h6 className='sub-header m-0 p-0'>
                                Lorem ipsum dolor sit amet.
                            </h6>
                            <div className='text mt-1'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing 
                                elit. Sint minus dolores accusantium suscipit repudiandae.
                                 Fugit molestiae non quisquam. Soluta 
                                repellat odit voluptate perspiciatis possimus.
                                 Reiciendis labore  
                            </div>
                            <button className='btn'>
                                 Read More. <span className='fa fa-arrow-right ms-1'></span>
                            </button>
                        </div>
                    </div>            
                    
                    <div className='gallery mt-3 pt-0 pb-2 shadow-sm'>
                        <h6 className='ps-1 mb-0 border-bottom py-1'> Our Gallery </h6>
                        <div className='row w-100 p-0 m-0 mx-auto body'>
                             <div className='col-12 col-sm-6 p-1 mt-1 mt-sm-0'>
                                 <img src={require('../../Assets/IMG_20211220_213442.png').default}
                                      alt='gallery'
                                      className='d-block mx-auto'
                                   />
                             </div>
                             <div className='col-12 col-sm-6 p-1 mt-1 mt-sm-0'>
                                 <img src={require('../../Assets/IMG_20211220_213510.png').default}
                                      alt='gallery'
                                      className='d-block mx-auto'
                                   />
                             </div>
                             <div className='col-12 col-sm-6 p-1 mt-1 mt-sm-0'>
                                 <img src={require('../../Assets/IMG_20211224_221803.png').default}
                                      alt='gallery'
                                      className='d-block mx-auto'
                                   />
                             </div>
                             <div className='col-12 col-sm-6 p-1 mt-1 mt-sm-0'>
                                 <img src={require('../../Assets/IMG_20211224_221833.png').default}
                                      alt='gallery'
                                      className='d-block mx-auto'
                                   />
                             </div>
                        </div>
                    </div>

                    <div className='our-app mt-3 pt-3'>
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

                   <div className='blog mt-2 pb-2 shadow-sm'>
                      <BlogPost />
                   </div>
                   
                   <div className='who-we-are mt-3 pb-2 shadow-sm'>
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

export default Home
 