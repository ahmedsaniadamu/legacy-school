import React from 'react'
 import FHostelForm from './FHostelForm'

const FemaleHostel = () => {

    return (
        <>
            <div className='female-hostel mt-3'>
                <h5 className='header py-1 m-0 mb-1 ps-2'> Female hostel </h5>
                <div className='row w-100 m-0 p-0 mx-auto'>
                     <div className='col-12 col-md-6 p-0 m-0 image-container'>
                          <img 
                              src={ require('../../../Assets/mhostel.jpg').default} 
                              alt="male hostel"
                              className='d-block mx-auto'
                           />
                     </div>
                     <div className='col-12 col-md-6 p-0 m-0 form-container mt-2 mt-md-0'>
                         <h5 className="header text-center">
                               Apply to our Hostel and Choose Your Room 
                         </h5>
                         <FHostelForm />                      
                     </div>
                </div>
            </div> 
        </>
    )
}

export default FemaleHostel
