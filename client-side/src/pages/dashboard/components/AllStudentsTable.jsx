import React from 'react'
import { useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate'

export const AllStudentsTable = React.memo( ({ students }) => {

    const [  pagination , setPagination ] = useState([]) ,
          [ showModal , setShowModal ] = useState(false) ,
          [ activeModalStudent , setActiveModaStudent ] = useState({}) ,
          [ pageNumber , setPageNumber ] = useState(0) ,
          students_per_page = 4 ,
          page_visited = students_per_page * pageNumber ,
          result_per_page = Math.ceil( pagination.length /  students_per_page ),
          handlePageChange = ({ selected }) => setPageNumber(selected) ;

    
   useEffect( () =>  setPagination([...students]),[ students] )

   const showModalWindow = (student) => { 
        setActiveModaStudent({ ...student }) 
        setShowModal(true)           
    }

   const displayStudents = pagination.slice(page_visited,page_visited + students_per_page).map(
      student => {
        return (
            <React.Fragment  key={ student.id } >
                <tr  className='py-0 my-0'>
                    <td>  { student.id} </td>
                    <td> { student.name } </td>
                    <td>  {  student.email } </td>
                    <td> { student.class } </td>
                    <td>  { student.age } </td>
                    <td> 
                        <span className='btn btn-primary py-1 m-0'
                          onClick={ () => showModalWindow(student) }> 
                            view profile 
                         </span> 
                    </td>                    
                </tr>                          
             </React.Fragment>
         )
      }  
   )

    return (
        <> 
            <table className='table table-striped table-hover'>
                <thead>
                    <tr> 
                        <th> S/N </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Class </th>
                        <th> Age </th>
                        <th> Profile Information </th>
                    </tr>
                </thead>
                <tbody>
                     { displayStudents }                     
                </tbody>                
            </table>       
            <div className='ms-2'>
                <ReactPaginate 
                    previousLabel='<<'
                    nextLabel = '>>'
                    pageCount={ result_per_page }
                    onPageChange = { handlePageChange }
                    containerClassName='d-flex pagination'
                    previousLinkClassName='btn btn-primary py-1 prev'
                    nextLinkClassName='next btn btn-primary py-1 ms-1'
                    activeLinkClassName='btn btn-primary py-1 text-light'
                    breakLabel='...'
                    pageLinkClassName='btn btn-outline-primary py-1 ms-1'
                />     
            </div>    
            { showModal && <ModalWindow student={ activeModalStudent } 
                             setShowModal={ setShowModal } 
                            />
             }           
        </>
    )
} )

const ModalWindow = ({ student , setShowModal }) => {

    const hideModal = () =>  setShowModal(false)

    return(
        <div style={{ width : '100vw' , height : '100vh' , zIndex:100 , position : 'fixed',
                     top :0 , left : 0 }}>
               <div className='modal-window p-0 m-0 shadow' style={{ 
                                             background :'#FFF',
                                              position : 'absolute'
                                       }}
                >
                    <h5 className="header py-2 m-0 d-flex justify-content-between ps-1">
                       { student.name }'s  academic information
                       <span className='px-2 me-1' onClick={ hideModal }> x </span>                         
                    </h5>
                    <div>
                         <div className='mt-2'>
                            <div className="d-flex">
                                <img
                                    src= { /* display default image if student image is empty */     
                                            student.image ? 
                                              'https://legacy-school-server.herokuapp.com/' +
                                               student.image 
                                                : 
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
                            <ul className='p-0 m-0 ms-md-1 mt-3'>
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
                                    <b> Date Registered :</b>  {  
                                      `${new Date(student.date_registered).toLocaleDateString()}`
                                    }
                                </li>
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Blood Group :</b>  { student.blood_group }
                                </li>
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Age :</b>  { student.age }
                                </li>
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Class :</b>  { student.class }
                                </li>
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Date Of Birth :</b>  { student.dob }
                                </li>
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Contact Address :</b>  { student.address }
                                </li>
                            </ul>
                        </div>
                    </div>
             </div>
        </div>
    )
}