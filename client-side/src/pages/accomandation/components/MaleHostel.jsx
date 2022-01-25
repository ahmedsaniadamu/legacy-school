import React from 'react'
import MHostelForm from './MHostelForm'

const MaleHostel = () => {

    return (
        <>
            <div className='male-hostel mt-0'>
                <h5 className='header py-1 m-0 mb-1 ps-2'> Male hostel </h5>
                <div className='row w-100 m-0 p-0 mx-auto'>
                     <div className='col-12 col-md-6 p-0 m-0 image-container'>
                          <img 
                              src={ require('../../../Assets/hotelsdotcom-498428-2496ff19_w-602632.jpg').default} 
                              alt="male hostel"
                              className='d-block mx-auto'
                           />
                     </div>
                     <div className='col-12 col-md-6 p-0 m-0 form-container mt-2 mt-md-0'>
                         <h5 className="header text-center">
                               Apply to our Hostel and Choose Your Room 
                         </h5>
                         <MHostelForm />                         
                     </div>
                </div>
            </div> 
        </>
    )
}

export default MaleHostel
