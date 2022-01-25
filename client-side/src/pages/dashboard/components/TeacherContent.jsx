import React from 'react'
import Calender from 'react-calendar'
import { Link } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css'
import { useSelector } from 'react-redux'

const TeacherContent = () => {

    const [ date , setDate ] = React.useState( new Date() )
    const { teacher } = useSelector( state => state ) ;

    return (
        <div>
            <div className="teacher-profile  mt-2 shadow-sm pb-2">
                <h5 className="header mb-1  m-0 px-2 d-flex justify-content-between"> 
                     <span> Teacher's Profile </span>
                     <Link to={'/edit-profile/teacher'} className='btn btn-light py-0'>
                         <span className='far fa-edit'></span> Edit profile
                     </Link>
                 </h5>
                <div className='mt-2'>
                     <div>
                        <img
                            src= {     /* display default image if teacher image is empty */     
                                    teacher.image ? teacher.image : 
                                    require('../../../Assets/user.png').default 
                                    }
                            alt="teacher's profile"
                            className='ms-1 ms-md-2'
                        />                         
                     </div>
                     <ul className='p-0 m-0 ms-md-2 mt-3'>      
                        <li className=' m-0 p-0 py-1'>  
                            <b> Name :</b>  { teacher.name }
                        </li>
                        <li className=' m-0 p-0 py-1'>  
                            <b> Qualification : </b>
                                { teacher.qualification }
                        </li>
                        <li className=' m-0 p-0 py-1'>  
                                <b> Email Address :</b>  { teacher.email }
                        </li>                                              
                         <li className=' m-0 p-0 py-1'>  
                             <b> Course :</b>  { teacher.course }
                         </li>
                         <li className=' m-0 p-0 py-1'>  
                             <b> Date Registered :</b>  { teacher.dateRegistered }
                         </li>                         
                         <li className=' m-0 p-0 py-1'>  
                             <b> Age :</b>  { teacher.age }
                         </li>                          
                         <li className=' m-0 p-0 py-1'>  
                             <b> Contact Address :</b>  { teacher.address }
                         </li>
                     </ul>
                </div>
            </div>
            <div className='mt-2 calender-container shadow-sm'>
                <h5 className="header mb-1 py-1 m-0 ps-2"> Event Calender </h5>
                <div className='calender'>
                    <Calender value={ date } onChange={  setDate }  className={'w-100 border-0'}/>
                </div>
            </div>

        </div>
    )
}

export default TeacherContent
