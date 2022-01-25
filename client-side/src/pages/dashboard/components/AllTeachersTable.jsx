import React from 'react'
import { useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate'

export const AllTeachersTable = React.memo( ({ teachers }) => {

    const [  pagination , setPagination ] = useState([]) ,
          [ showModal , setShowModal ] = useState(false) ,
          [ activeModalTeacher , setActiveModalTeacher ] = useState({}) ,
          [ pageNumber , setPageNumber ] = useState(0) ,
          teachers_per_page = 4 ,
          page_visited = teachers_per_page * pageNumber ,
          result_per_page = Math.ceil( pagination.length /  teachers_per_page ),
          handlePageChange = ({ selected }) => setPageNumber(selected) ;

    
   useEffect( () =>  setPagination([...teachers]),[ teachers] )

   const showModalWindow = (teacher) => { 
        setActiveModalTeacher({ ...teacher }) 
        setShowModal(true)           
    }

   const displayTeachers = pagination.slice(page_visited,page_visited + teachers_per_page).map(
      teacher => {
        return (
            <React.Fragment  key={ teacher.id } >
                <tr  className='py-0 my-0'>
                    <td>  { teacher.id} </td>
                    <td> { teacher.name } </td>
                    <td>  {  teacher.email } </td>
                    <td> { teacher.course } </td>
                    <td>  { teacher.age } </td>
                    <td> 
                        <span className='btn btn-primary py-1 m-0'
                          onClick={ () => showModalWindow(teacher) }> 
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
                        <th> Course </th>
                        <th> Age </th>
                        <th> Profile Information </th>
                    </tr>
                </thead>
                <tbody>
                     { displayTeachers }                     
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
            { showModal && <ModalWindow teacher={ activeModalTeacher } 
                             setShowModal={ setShowModal } 
                            />
             }           
        </>
    )
} )

const ModalWindow = ({ teacher , setShowModal }) => {

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
                       { teacher.name }'s  academic information
                       <span className='px-2 me-1' onClick={ hideModal }> x </span>                         
                    </h5>
                    <div>
                         <div className='mt-2'>
                            <div className="d-flex ps-1">
                                <img
                                    src= { /* display default image if teacher image is empty */     
                                            teacher.image ? 
                                              'https://legacy-school-server.herokuapp.com/' +
                                               teacher.image 
                                                : 
                                            require('../../../Assets/user.png').default 
                                            }
                                    alt="teacher's profile"
                                    className='ms-1 ms-md-2'
                                />                               
                            </div>
                            <ul className='p-0 m-0 ms-md-1 mt-3'> 
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Name :</b>  { teacher.name }
                                </li>                                                                                                         
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Email Address :</b>  { teacher.email }
                                </li>
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Course :</b>  { teacher.course }
                                </li>
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Date Registered :</b>  {  
                                      `${new Date(teacher.date_registered).toLocaleDateString()}`
                                    }
                                </li>                                
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Age :</b>  { teacher.age }
                                </li>                                                               
                                <li className='text-right m-0 p-0 py-1'>  
                                    <b> Contact Address :</b>  { teacher.address }
                                </li>
                            </ul>
                        </div>
                    </div>
             </div>
        </div>
    )
}