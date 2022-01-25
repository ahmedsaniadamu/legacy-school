import React,{useState,useRef, useEffect} from 'react'
import LoadingEffect from '../../../components/LoadingEffect';
import { isValid } from './FormValidation';
import { useSelector,useDispatch } from 'react-redux';
import IsNotLogin from '../../login/components/IsNotLogin'
import { UPDATE_STUDENT_PROFILE } from '../../../store/actions';
import { useHistory  } from 'react-router-dom';

const StudentEditProfile = () => {
  
    const formRef = useRef(null) ;
    const { student ,isLoggedIn } = useSelector( state => state)
    const dispatch = useDispatch() ;
    const history = useHistory()

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
        isLoading : false ,
        serverResponse : '' ,
    })

    useEffect( () => {
        setForm({ 
                  ...form , name : student.name , email : student.email,
                  gender : student.gender , bloodGroup : student.bloodGroup,
                  class : student.class , course : student.course ,
                  age : student.age , dob : student.dateOfBirth,
                  address : student.address,phone : student.phone,
              })
    } , [])

  // handle all input fields in one function
    const handleChange = event => {
        //check if input name is == file set the image value e.target.file[0]
        if(event.target.name === 'file') setForm({ ...form , image : event.target.files[0]})         
        else setForm({...form , [event.target.name] : event.target.value})        
    }

     

  // validate and submit the form to the server.
    const handleSubmit = event => {

        //prevent default form action
        event.preventDefault() ;                  
        
        //a function that validate form
        let isOk = isValid(form,setForm) ;                
        //submit form if the every thing is ok and user agree with information provided
        if(isOk) {   
             
            setForm({...form,isLoading:true , formstatus : ''})
            let formData = new FormData(formRef.current)

            fetch('https://legacy-school-server.herokuapp.com/edit_profile.php' ,
                  { 
                       method : 'POST' ,
                      body : formData 
              })
            .then( response => response.json() )
            .then( 
                result => {
                    if(result.status){
                        setForm({
                              ...form,
                              serverResponse: result.messege,
                              formstatus : ''
                       })
                       dispatch({
                            type:UPDATE_STUDENT_PROFILE,
                            payload : result.info,
                        })
                        history.push('/dashboard/student')
                    }
                    else{
                        setForm({
                              ...form,
                              serverResponse: result.messege
                             , formstatus : ''
                       })
                    } 
                }
             )
        }
    }
  //allow profile edit only if student is logged in
if(isLoggedIn){
        return (
            <div className='student-edit-profile border mx-auto d-block mt-2 shadow-sm'>            
               <h5 className='header text-center mb-1 py-1 border-bottom'> Student Edit Profile </h5>
                 <form ref={ formRef }>
                       {
                        //display image if user already has an image
                           student.image ?
                           <label htmlFor='file' className='p-1 file m-1 ms-2' > 
                                <img src={ student.image} alt=" student" />
                           </label> 
                           :
                           <label htmlFor='file' className='p-2 file m-1 ms-2' > 
                               <i className='d-block text-center far fa-image'>  </i>
                              <span className='text d-block text-center mt-1'>
                                   Upload Profile Image 
                              </span>
                          </label>
                       }
                      <input 
                           type='file'
                            name='file'
                             id='file'
                              onChange={ handleChange }
                               className='file' 
                        />
                        {/* sends which user is trying to edit profile */}
                        <input type="hidden"  name='user' value={'student'} />

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
                                                placeholder='email address..' id='email' readOnly
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
                                        <label htmlFor='dob'>  
                                             date of birth <i className='text-danger'> * </i>
                                        </label>
                                        <input
                                                type='text' className='form-control py-1' 
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
                                                type='text' className='form-control py-1' 
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
                          Update
                      </button>
                 </form>
                 { 
                    /* display a loading effect while the form is processing */
                    form.isLoading && <LoadingEffect />
                 }            
            </div>
        )
      }
   else  return (
            <>
                <IsNotLogin />
            </>
       )   
}
export default StudentEditProfile
