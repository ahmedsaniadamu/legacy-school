import React,{useState,useRef} from 'react'
import LoadingEffect from '../../../components/LoadingEffect';
import { isValid } from './FormValidation';

const StudentRegistration = () => {
  
    const formRef = useRef(null) ;

    const [ form , setForm ] = useState({
        name : '' ,
        email : '' ,
        gender : '' ,
        bloodGroup : '' ,
        class : '' ,
        course : '' ,
        age : '' ,
        password : '' ,
        confirmPassword : '' ,
        dob : '' ,
        address : '' ,
        phone : '' ,
        formstatus : '',
        image : '' ,
        agreed : false ,
        isLoading : false ,
        serverResponse : '' ,
    })
  // handle all input fields in one function
    const handleChange = event => {
        //check if input name is == file set the image value e.target.file[0]
        if(event.target.name === 'file') setForm({ ...form , image : event.target.files[0]})
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
             
            setForm({...form,isLoading:true})
            let formData = new FormData(formRef.current)

            fetch('https://legacy-school-server.herokuapp.com/students.php' ,
                  { 
                       method : 'POST' ,
                      body : formData 
              })
            .then( response => response.text() )
            .then( 
                result => {
                    setForm({...form,serverResponse:result , formstatus : ''})
                }
             )
        }
    }

    return (
        <div className='student-registration border mx-auto d-block'>            
           <h5 className='header text-center mb-1 py-1 border-bottom'> Student Registration Form </h5>
             <form ref={ formRef }>
                  <label htmlFor='file' className='p-2 file m-1 ms-2' > 
                      <i className='d-block text-center far fa-image'>  </i>
                      <span className='text d-block text-center mt-1'> Upload Profile Image </span>
                  </label>
                  <input type='file' name='file' id='file' onChange={ handleChange } className='file' />
                  <div className='input-wrapper mt-2 w-100 p-0 m-0 mx-auto row'>
                      { /* input field */ }
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='name'>  
                                       Full name <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='text' className='form-control py-1' name='name'
                                            onChange={ handleChange } value={ form.name }
                                            placeholder='full name..' id='name' required
                                    />
                            </div>
                     { /* input field */ }
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='email'>  
                                       Email address <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='email' className='form-control py-1' name='email'
                                            onChange={ handleChange } value={ form.email }
                                            placeholder='email address..' id='email' required
                                    />
                            </div>
                { /* input field */ }
                            <div className='col-12 col-md-6 p-0 m-0'>
                                <label htmlFor='gender'>  
                                     Gender <i className='text-danger'> * </i>
                                </label>
                                <select
                                        className='form-select py-1' name='gender'
                                        onChange={ handleChange } value={ form.gender }
                                         id='gender' required
                                 >
                                     <option value=''> select  </option>
                                     <option value='male'> male </option>
                                     <option value='female'> female  </option>
                                </select>
                            </div>
             { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                <label htmlFor='bg'>  
                                     Blood Group <i className='text-danger'> * </i>
                                </label>
                                <select
                                        className='form-select py-1' name='bloodGroup'
                                        onChange={ handleChange } value={ form.bloodGroup }
                                         id='bg' required
                                 >   <option value='' > select </option>
                                     <option value='A+'> A+  </option>
                                     <option value='A-'>A-</option>
                                     <option value='B+'> B+ </option>
                                     <option value='B-'>  B- </option>
                                     <option value='O+'> O+ </option>
                                     <option value='O-'> O-  </option>
                                </select>
                            </div>
         { /* input field */ }
                            <div className='col-12 col-md-6 p-0 m-0'>
                                <label htmlFor='class'>  
                                     Class <i className='text-danger'> * </i>
                                </label>
                                <select
                                        className='form-select py-1' name='class'
                                        onChange={ handleChange } value={ form.class }
                                         id='class' required
                                 >
                                     <option value=''> select </option>
                                     <option value='1'> class 1 </option>
                                     <option value='2'> class 2  </option>
                                     <option value='3'> class 3  </option>
                                     <option value='4'> class 4  </option>
                                     <option value='5'> class 5  </option>
                                     <option value='6'> class 6  </option>
                                     <option value='7'> class 7  </option>

                                </select>
                            </div> 
                { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                <label htmlFor='course'>  
                                     Course <i className='text-danger'> * </i>
                                </label>
                                <select
                                        className='form-select py-1' name='course'
                                        onChange={ handleChange } value={ form.course }
                                         id='course' required
                                 >
                                     <option value=''> select  </option>
                                     <option value='science and technology'> 
                                            Science and Technology 
                                     </option>
                                     <option value='business and commerce'> 
                                         Business  and Commerce
                                      </option>                                    
                                </select>
                            </div>
             { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='age'>  
                                       Age <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='number' className='form-control py-1' name='age'
                                            onChange={ handleChange } value={ form.age } maxLength={3}
                                            placeholder='your age' id='age' 
                                    />
                            </div>
            { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='password'>  
                                      Password <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='password' className='form-control py-1' 
                                            name='password' maxLength={'8'}
                                            onChange={ handleChange } value={ form.password }
                                            placeholder='password..' id='password' required
                                    />
                            </div>
            { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='confirmPassword'>  
                                         confirm password <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='password' className='form-control py-1' 
                                            name='confirmPassword'
                                            maxLength={'8'}
                                            onChange={ handleChange } value={ form.confirmPassword }
                                            placeholder='confirm password..' id='confirmPassword' required
                                    />
                           </div>
            { /* input field */ }                           
                           <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='dob'>  
                                         date of birth <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='date' className='form-control py-1' 
                                            name='dob'
                                            onChange={ handleChange } value={ form.dob }
                                            placeholder='date of birth' id='dob' required
                                    />
                           </div>
           { /* input field */ }                           
                           <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='phone'>  
                                         phone number <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='number' className='form-control py-1' 
                                            name='phone'
                                            onChange={ handleChange } value={ form.phone }
                                            placeholder='phone number..' id='phone' required
                                    />
                           </div>
            { /* input field */ }                           
                           <div className='col-12 col-md-12 p-0 m-0'>
                                    <label htmlFor='address'>  
                                        address <i className='text-danger'> * </i>
                                    </label>
                                    <textarea
                                            className='form-control py-1 messege' 
                                            name='address'
                                            onChange={ handleChange } value={ form.address }
                                            placeholder='address ..' id='address' required
                                    />
                           </div>
                           
                  </div>
            <div className='agreement d-flex align-items-center mt-1'>
                <input type='checkbox' name='agreed' id='agree'
                       className='form-check-input p-0 m-0 ms-2' onChange={ handleChange }
                       checked={ form.agreed }
                 />
                <label className='form-check-label ms-1 ' htmlFor='agree'>
                    I agree that all the information provided is correct.
                </label>
            </div>

            { /* submit form */ }
            <p className='status ps-3 text-danger p-0 m-0 mt-1'>
                 { form.formstatus } <i className='text-primary'> { form.serverResponse } </i>
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
             { 
                /* display a loading effect while the form is processing */
                form.isLoading && <LoadingEffect />
             }            
        </div>
    )
}

export default StudentRegistration
