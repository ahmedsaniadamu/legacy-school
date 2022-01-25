import React,{useState,useEffect} from 'react'
import LoadingEffect from '../../../components/LoadingEffect';
import  isValid  from './FormValidation';
import { useSelector,useDispatch } from 'react-redux';
import IsNotLogin from '../../login/components/IsNotLogin'
import { UPDATE_TEACHER_PROFILE } from '../../../store/actions';
import { useHistory  } from 'react-router-dom';

const TeacherEditProfile = () => {

    const [ form , setForm ] = useState({
        name : '' ,
        email : '' ,
        course : '' ,
        age : '' ,       
        qualification : '' ,
        address : '' ,
        formstatus : '',
        image : '' ,
        serverResponse : '' ,        
        isLoading : false
    })

    const { teacher ,isLoggedIn } = useSelector( state => state)
    const dispatch = useDispatch() ;
    const history = useHistory()

    useEffect(() => {
        setForm({ 
                ...form , name : teacher.name , email : teacher.email,              
                course : teacher.course ,age : teacher.age , 
                address : teacher.address,qualification:teacher.qualification
            })
    }, [])
    
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
            //display a loading effect
            setForm({...form,isLoading : true , formstatus : '' })
            let formData = new FormData( document.querySelector('form.teacher'))            
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
                            type:UPDATE_TEACHER_PROFILE,
                            payload : result.info,
                        })
                        history.push('/dashboard/teacher')
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
if(isLoggedIn){
    return (
        <div className='teacher-edit-profile border mx-auto d-block'>  
           <h5 className='header text-center mb-1 py-1 border-bottom'>Teacher Profile Update </h5>
             <form className='teacher'>
                    {
                        //display image if user already has an image
                           teacher.image ?
                           <label htmlFor='file' className='p-1 file m-1 ms-2' > 
                                <img src={ teacher.image} alt=" teacher" />
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
                      type='file' name='file'
                       id='file' onChange={ handleChange }
                        className='file' 
                  />

                  {/* sends which user is trying to edit profile */}
                  <input type="hidden"  name='user' value={'teacher'} />

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
                                   <label htmlFor='course'>  
                                      course <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='text' className='form-control py-1' 
                                            name='course' 
                                            onChange={ handleChange } value={ form.course }
                                            placeholder='e.g msc computer science..' id='course'
                                    />
                            </div>
                { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                   <label htmlFor='qualification'>  
                                      qualification <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='text' className='form-control py-1' 
                                            name='qualification' 
                                            onChange={ handleChange } value={ form.qualification }
                                            placeholder='e.g degree,masters..' id='qualification'
                                    />
                            </div>
             { /* input field */ }                            
                            <div className='col-12 col-md-6 p-0 m-0'>
                                    <label htmlFor='age'>  
                                       Age <i className='text-danger'> * </i>
                                    </label>
                                    <input
                                            type='number' className='form-control py-1' name='age'
                                            onChange={ handleChange } value={ form.age } 
                                            placeholder='your age' id='age'
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
                 { form.formstatus } 
                 <i className='text-primary'> { form.serverResponse }</i>
             </p>
                  <button 
                       className='register-btn text-center py-1 btn btn-primary my-2 d-block mx-auto' 
                       style={{ 
                               background : 'rgb(38, 42, 248)'
                             }}
                       onClick={ handleSubmit }
                  >  
                      Update Profile
                  </button>
             </form>
             { /*display a loading effect */  form.isLoading && <LoadingEffect /> }
        </div>
    )
  }
  else  return (
        <>
            <IsNotLogin />
        </>
   )   
}

export default TeacherEditProfile
