 import React from 'react'
 // sass stylesheet
 import './styles/index.scss' ;
 import { BrowserRouter as Router , Route , Switch } from 'react-router-dom' ;
 import { PageTransition } from '@steveeeie/react-page-transition';
 //pages
import Home from './pages/home/Home'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery'
import DashboardMenu from './pages/dashboard/DashboardMenu';
import Registration from './pages/registration/Registration'
import Accomandation from './pages/accomandation/Accomandation';
import Examination from './pages/examination-timetable/Examination';
import Login from './pages/login/Login'
import Blog from './pages/blog/Blog'
import ForgotPassword from './pages/login/ForgotPassword';
import AdminDashboard from './pages/dashboard/AdminDashboard'
import TeacherDashboard from './pages/dashboard/TearchersDashboard'
import StudentDashboard from './pages/dashboard/StudentDashboard'
import EditProfile from './pages/dashboard/EditProfile'

 const App = () => {

       // apply router transition in mobile devices that are <= 500px 
       const mobileWidth = 500 ;
//check and set the router transition effect based on conditional rendering
 if( window.innerWidth <= mobileWidth ){
       return (
            <React.Fragment>
               <Router>                         
                  <Route render = { 
                     ({location}) => {
                         return (
                              <PageTransition preset='scaleDownScaleDown' 
                                             transitionKey = { location.pathname }
                              >                        
                                 <Switch location={location}>
                                    <Route path='/' component={ Home } exact />  
                                    <Route path='/about' component={About} />
                                    <Route path='/contact' component={ Contact } />
                                    <Route path='/gallery' component={Gallery} />
                                    <Route path={'/dashboard-menu'} component={DashboardMenu} />
                                    <Route path={'/registration'} component={Registration} />
                                    <Route path={'/examination'} component={ Examination } />
                                    <Route path={'/login'} component={ Login } />                  
                                    <Route path={'/accomandation'} component={ Accomandation } />
                                    <Route path={'/dashboard/teacher'} component={TeacherDashboard} />
                                    <Route path={'/dashboard/student'} component={StudentDashboard} />
                                    <Route path={'/dashboard/admin'} component={ AdminDashboard  } />
                                    <Route path={'/forgot-password/:user'} children={ <ForgotPassword />} />
                                    <Route path={'/edit-profile/:user'} children={ <EditProfile />} />                                                                                       
                                    <Route path={'/blog/:id'} children={ <Blog /> } />
                                 </Switch>
                              </PageTransition>
                        )
                        }
                  } /> 
               </Router>
            </React.Fragment>
           )
        }
 else{
    return (
         <React.Fragment>
              <Router>                         
                  <Route render = { 
                  ({location}) => {
                     return ( <PageTransition transitionKey = { location.pathname }>                        
                               <Switch location={location}>
                                    <Route path='/' component={ Home } exact />  
                                    <Route path='/about' component={About} />
                                    <Route path='/contact' component={ Contact } />
                                    <Route path='/gallery' component={Gallery} />
                                    <Route path={'/registration'} component={Registration} />
                                    <Route path={'/examination'} component={ Examination } />
                                    <Route path={'/dashboard-menu'} component={DashboardMenu} />
                                    <Route path={'/login'} component={ Login } />
                                    <Route path={'/accomandation'} component={ Accomandation } /> 
                                    <Route path={'/dashboard/teacher'} component={TeacherDashboard} />
                                    <Route path={'/dashboard/student'} component={StudentDashboard} />
                                    <Route path={'/dashboard/admin'} component={ AdminDashboard  } />   
                                    <Route path={'/forgot-password/:user'} children={ <ForgotPassword />} /> 
                                    <Route path={'/edit-profile/:user'} children={ <EditProfile />} />                              
                                    <Route path={'/blog/:id'} children={ <Blog /> } />                                                                                                  
                                 </Switch>
                               </PageTransition>
                           )
                           }
                  } /> 
               </Router>
            </React.Fragment>
         )
     }
 }
 
 export default App
 