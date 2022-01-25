import React,{useState} from 'react'
import LoadingEffect from '../../../components/LoadingEffect';
import  isValid  from './FormValidation';

const TeacherRegistration = () => {

    const [ form , setForm ] = useState({
        tname : '' ,
        temail : '' ,
        tcourse : '' ,
        tage : '' ,
        tpassword : '' ,
        tconfirmPassword : '' ,
        tqualification : '' ,
        taddress : '' ,
        formstatus : '',
        image : '' ,
        serverResponse : '' ,
        agreed : false ,
        isLoading : false
    })

  // handle all input fields in one function
    const handleChange = event => {
        //check if input name is == file set the image value e.target.file[0]
        if(event.target.name === 'tfile') setForm({ ...form , image : event.target.files[0]})
        if(event.target.name === 'agreed') setForm({...form , agreed : !form.agreed })
        else setForm({...form , [event.target.name] : event.target.value})        
    }
      

  // validate and submit the form to the server.
   const handleSubmit = event => {

        //prevent default form action
        event.preventDefault() ;                
        
        //a function that validate form
        let isOk = isValid(form,setForm) ;
        
        //clear error status if everything is ok
        if(isOk) setForm({...form, formstatus : ''})
      
        //submit form if the every thing is ok and user agree with information provided
        if(isOk && form.agreed ) {                
            //display a loading effect
            setForm({...form,isLoading : true })
            let formData = new FormData( document.querySelector('form.teacher'))            
            fetch('https://legacy-school-server.herokuapp.com/teachers.php',
               {
                    method : 'POST' ,
                    body : formData ,
            })
            .then( res => res.text())
            .then( result => {
                    setForm({...form,serverResponse : result , isLoading : false })
            })                
        }
    } 

    return (
        <div className='teacher-registration border mx-auto d-block'>  
           <h5 className='header text-center mb-1 py-1 border-bottom'> Teacher Registration Form </h5>
             <form className='teacher'>
                  <label htmlFor='tfile' className='p-2 file m-1 ms-2' > 
                      <i className='d-block text-center far fa-image'>  </i>
                      <span className='text d-block text-center mt-1'> Upload Profile Image </span>
                  </label>
                  <input type='file' name='tfile' id='tfile' onChange={ handleChange } className='file' />
                  <div className='input-wrapper mt-2 w-100 p-0 m-0 mx-auto row'>
                      { /* input field */ }
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='tname'>  
                                       Full name <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='text' className='form-control py-1' name='tname'
                                            onChange={ handleChange } value={ form.name }
                                            placeholder='full name..' id='tname' required
                                    />
                            </div>
                     { /* input field */ }
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='temail'>  
                                       Email address <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='email' className='form-control py-1' name='temail'
                                            onChange={ handleChange } value={ form.email }
                                            placeholder='email address..' id='temail' required
                                    />
                            </div>                                                    
                { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                   <label htmlFor='tcourse'>  
                                      course <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='text' className='form-control py-1' 
                                            name='tcourse' 
                                            onChange={ handleChange } value={ form.course }
                                            placeholder='e.g msc computer science..' id='tcourse'
                                    />
                            </div>
                { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                   <label htmlFor='tqualification'>  
                                      qualification <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='text' className='form-control py-1' 
                                            name='tqualification' 
                                            onChange={ handleChange } value={ form.qualification }
                                            placeholder='e.g degree,masters..' id='tqualification'
                                    />
                            </div>
             { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='tage'>  
                                       Age <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='number' className='form-control py-1' name='tage'
                                            onChange={ handleChange } value={ form.age } 
                                            placeholder='your age' id='tage'
                                    />
                            </div>
            { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='tpassword'>  
                                      Password <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='password' className='form-control py-1' 
                                            name='tpassword' maxLength={'8'}
                                            onChange={ handleChange } value={ form.password }
                                            placeholder='password..' id='tpassword' required
                                    />
                            </div>
            { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='tconfirmPassword'>  
                                         confirm password <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='password' className='form-control py-1' 
                                            name='tconfirmPassword'
                                            maxLength={'8'}
                                            onChange={ handleChange } value={ form.confirmPassword }
                                            placeholder='confirm password..' id='tconfirmPassword' required
                                    />
                           </div>                   
            { /* input field */ }                           
                           <div className='col-12 col-md-12 p-0 m-0'>
                                    <label htmlFor='taddress'>  
                                        address <i className='text-danger'> * </i>
                                    </label>
                                    <textarea
                                            className='form-control py-1 messege' 
                                            name='taddress'
                                            onChange={ handleChange } value={ form.address }
                                            placeholder='address ..' id='taddress' required
                                    />
                           </div>
                           
                  </div>
            <div className='agreement d-flex align-items-center mt-1'>
                <input type='checkbox' name='agreed' id='tagree'
                       className='form-check-input p-0 m-0 ms-2' onChange={ handleChange }
                       checked={ form.agreed }
                 />
                <label className='form-check-label ms-1 ' htmlFor='agree'>
                    I agree that all the information provided is correct.
                </label>
            </div>
            { /* submit form */ }
            <p className='status ps-3 text-danger p-0 m-0 mt-1'> 
                 { form.formstatus } 
                 <i className='text-primary'> { form.serverResponse }</i>
             </p>
                  <button 
                       className='register-btn text-center py-1 btn btn-primary my-2 d-block mx-auto' 
                       style={{ 
                               background : form.agreed ? 'rgb(38, 42, 150)' :  'rgb(38, 42, 248)'
                             }}
                       onClick={ handleSubmit }
                  >  
                      Register  
                  </button>
             </form>
             { /*display a loading effect */  form.isLoading && <LoadingEffect /> }
        </div>
    )
}

export default TeacherRegistration
