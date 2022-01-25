import React,{useEffect} from 'react'
import Calender from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useFetch } from '../../../customhooks/useFetch'
import LoadingEffect from '../../../components/LoadingEffect'
import {AllStudentsTable} from './AllStudentsTable'
import { AllTeachersTable } from './AllTeachersTable'

const AdminContent = () => {

    const [  date , setDate ] = React.useState( new Date() ) ;
    const [ students , setStudents ]  = React.useState({
        totalMale : 0 ,
        totalFemale : 0 ,
        totalStudents : 0 ,
        allStudentList : [] ,
        totalMaleStdInHostel : 0 ,
        totalFemaleStdInHostel : 0
    })
    const [ teachers , setTeachers ] = React.useState({        
        totalTeachers : 0 ,
        allTeachersList : [] ,
    })
    const [ studentLoading , studentResponseData ] = useFetch(
        'https://legacy-school-server.herokuapp.com/index.php' ,
        'fetch_all_students'  
    )     
    const [ teacherLoading , teacherResponseData ] = useFetch(
        'https://legacy-school-server.herokuapp.com/index.php' ,
         'fetch_all_teachers'  
    )  
    const [ maleHostelLoading , maleHostelResponseData ] = useFetch(
        'https://legacy-school-server.herokuapp.com/index.php' ,
        'fetch_all_mhostel'  
    )  
    const [ femaleHostelLoading , femaleHostelResponseData ] = useFetch(
        'https://legacy-school-server.herokuapp.com/index.php' ,
        'fetch_all_fhostel'  
    )  

    useEffect(() => {
        //check if all student data are ready
         if(!studentLoading && !maleHostelLoading && !femaleHostelLoading){
             setStudents({
                 ...students,
                 totalStudents : studentResponseData.length,    
                 totalFemale : studentResponseData.filter( student => {
                                   return student.gender === 'female'
                                }).length,
                 totalMale : studentResponseData.filter( student => {
                                   return student.gender === 'male'
                                }).length,
                 totalMaleStdInHostel : maleHostelResponseData.length,
                 totalFemaleStdInHostel : femaleHostelResponseData.length,
                 allStudentList : [ ...studentResponseData ]                                                           
             })
         }

    }, [studentLoading,maleHostelLoading,femaleHostelLoading ])  

    useEffect(() => {
         if(!teacherLoading){
             setTeachers({
                 ...teachers , totalTeachers : teacherResponseData.length,
                 allTeachersList : [ ...teacherResponseData ]
             })
         }
    }, [ teacherLoading ])

    return (
        <> 
            <div className="admin-menus mt-2 row w-100 m-0 p-0 mx-auto">
                  <div className="col-12 col-sm-6 col-md-4 m-0 px-3 py-3 student">
                       <h3 className='mb-2 text-center'>
                            { students.totalStudents }
                         </h3>
                       <h6 className='m-0 p-0 text-center'>  Students </h6>
                       <p className='p-0 pt-1 text-center'>  
                          <span> { students.totalMale } Male </span>
                           <span className='ms-3'> { students.totalFemale } female </span>
                      </p>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 m-0 px-3 py-3 teacher">
                       <h3 className='mb-2 text-center'> { teachers.totalTeachers} </h3>
                       <h6 className='m-0 p-0 text-center'>  Teachers </h6>                        
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 m-0 px-3 py-3 hostel">
                       <h3 className='mb-2 text-center'> 300 </h3>
                       <h6 className='m-0 p-0 text-center'>  Hostels </h6>
                       <p className='p-0 pt-1 text-center'>  
                          <span> { students.totalMaleStdInHostel} Male </span>
                           <span> { students.totalFemaleStdInHostel } female </span>
                      </p>
                  </div>
            </div>
            <div className="students-table mt-2 shadow-sm ">
                <h5 className="header py-1 my-0 ps-2">  Students Information </h5>
                 <div>
                   <AllStudentsTable students={ students.allStudentList } />
                </div>
            </div>
            <div className="teachers-table mt-2 shadow-sm ">
                <h5 className="header py-1 my-0 ps-2">  Teachers Information </h5>
                 <div>
                   <AllTeachersTable teachers={ teachers.allTeachersList } />
                </div>
            </div>
            <div className='mt-2 calender-container shadow-sm'>
                <h5 className="header mb-1 py-1 m-0 ps-2"> Event Calender </h5>
                <div className='calender'>
                    <Calender value={ date } onChange={  setDate }  className={'w-100 border-0'}/>
                </div>
            </div>
            {
                //display a loading effect if data are loading.
                ( 
                     studentLoading || teacherLoading ||
                      femaleHostelLoading || maleHostelLoading
                ) && <LoadingEffect />
            }
        </>
    )
}

export default AdminContent
