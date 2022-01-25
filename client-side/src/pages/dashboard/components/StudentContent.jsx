import React from 'react'
import Calender from 'react-calendar'
import { Link } from 'react-router-dom'
import 'react-calendar/dist/Calendar.css'
import { useSelector } from 'react-redux'

const StudentContent = () => {

    const [ date , setDate ] = React.useState( new Date() )
    const { student } = useSelector( state => state ) ;

    return (
        <div>
            <div className="student-profile  mt-2 shadow-sm pb-2">
                <h5 className="header mb-1  m-0 px-2 d-flex justify-content-between"> 
                     <span> Student's Profile </span>
                     <Link to={'/edit-profile/student'} className='btn btn-light py-0'>
                         <span className='far fa-edit'></span> Edit profile
                     </Link>
                 </h5>
                <div className='mt-2'>
                     <div className="d-flex">
                        <img
                            src= {     /* display default image if student image is empty */     
                                    student.image ? student.image : 
                                    require('../../../Assets/user.png').default 
                                    }
                            alt="student's profile"
                            className='ms-1 ms-md-2'
                        />
                        <ul className='p-0 m-0 ms-2 '>
                            <li className='text-right m-0 p-0 py-1'>  
                                <b> Name :</b>  { student.name }
                            </li>
                            <li className='text-right m-0 p-0 py-1'>  
                                <b> Admission No :</b>
                                 <span className='text-primary'> lgst </span>
                                 /{ student.id }
                            </li>
                            <li className='text-right m-0 p-0 py-1'>  
                                <b> Gender :</b>  { student.gender }
                            </li>
                        </ul>
                     </div>
                     <ul className='p-0 m-0 ms-md-2 mt-3'>
                         <li className='text-right m-0 p-0 py-1'>  
                             <b> Phone no :</b>  { student.phone }
                         </li>
                         <li className='text-right m-0 p-0 py-1'>  
                             <b> Email Address :</b>  { student.email }
                         </li>
                         <li className='text-right m-0 p-0 py-1'>  
                             <b> Course :</b>  { student.course }
                         </li>
                         <li className='text-right m-0 p-0 py-1'>  
                             <b> Date Registered :</b>  { student.dateRegistered }
                         </li>
                         <li className='text-right m-0 p-0 py-1'>  
                             <b> Blood Group :</b>  { student.bloodGroup }
                         </li>
                         <li className='text-right m-0 p-0 py-1'>  
                             <b> Age :</b>  { student.age }
                         </li>
                         <li className='text-right m-0 p-0 py-1'>  
                             <b> Class :</b>  { student.class }
                         </li>
                         <li className='text-right m-0 p-0 py-1'>  
                             <b> Date Of Birth :</b>  { student.dateOfBirth }
                         </li>
                         <li className='text-right m-0 p-0 py-1'>  
                             <b> Contact Address :</b>  { student.address }
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

export default StudentContent
