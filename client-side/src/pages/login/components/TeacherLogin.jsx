import React,{useState} from 'react'
import { Link , useHistory } from 'react-router-dom'
import LoadingEffect from '../../../components/LoadingEffect'
import { UPDATE_TEACHER_PROFILE } from '../../../store/actions'
import { useDispatch } from 'react-redux'

const TeacherLogin = () => {

     const [ login , setLogin ] = useState({
          email : '' ,
          password : '' ,
          status : '' ,
          isLoading : false ,
     })
     const history = useHistory() ;
     const dispatch = useDispatch()
     
    const handleChange = event => setLogin({...login,[event.target.name] : event.target.value })
    
    const handleSubmit = event => {
      
        event.preventDefault()
        let isOk = true ; 
        
        //check if email address is valid 
        if( (!login.email.includes('@') ) || login.email.startsWith('@') ||
            !login.email.endsWith('@gmail.com')){
           
                setLogin({...login, status:'please use a valid email address.'})
               isOk = false ;
        }

        //check if all input are not empty excluding image which is optional
        if( !login.password || !login.email ){

              setLogin({...login, status:'Error! please fill all the required fields.'})
              isOk = false ;
              
        } 

        if( isOk){
            setLogin({...login, isLoading : true ,status:''})
            fetch('https://legacy-school-server.herokuapp.com/login.php',{
                    method : 'POST' ,
                    headers : { 'Content-Type':'application/json' } ,
                    body : JSON.stringify({
                        user : 'teacher' ,
                        email : login.email ,
                        password : login.password ,
                })
            })
            .then( response => response.json() )
            .then( result => {                
                    //display an error messege with server response if server status is false     
                    if( !result.status){
                        setLogin({...login,isLoading:false , status : result.messege })
                    }         
                    //send admin data to store and redirect to dashboard page.
                    else{
                        setLogin({...login,isLoading : false , status : '' })
                        //update teacher content in store
                        dispatch({ type : UPDATE_TEACHER_PROFILE , payload : result })
                        history.push('/dashboard/teacher') ;
                    } 
            } )        
      }
   }

    return (
        <div className='student-login border d-block mx-auto mt-2'>
            <form className='d-block mx-auto'>
                 <img 
                     className='login-image d-block mx-auto mt-1'
                     alt='student login' 
                     src={ require('../../../Assets/loginlogo.png').default}
                  />
                  <h6 className='m-0 p-0 text-center mt-1'> Teacher Login </h6>
                  <div>
                       <label htmlFor='email'> email address</label>
                       <input type='email' name='email' className='form-control py-1'
                             id='email' placeholder='email address..'
                             value={login.email} onChange={handleChange}
                       />
                       
                       <label htmlFor='password'> password </label>
                       <input type='password' name='password' className='form-control py-1'
                              id='password' placeholder='password..' maxLength={8}
                              value={login.password} onChange={ handleChange}
                        />
                         <p className='p-0 mt-1 m-0'> 
                             don't have an account
                             <Link to='/registration' className='ms-1'> register </Link>
                         </p>
                         <p className='status py-0 m-0 text-danger mt-1'> { login.status } </p>

                         <button className='btn btn-primary py-1 d-block mx-auto mt-1'
                                onClick={ handleSubmit }> 
                             Login
                         </button>
                         <Link to='/forgot-password/teacher' className='mt-1 mb-2'>  
                            Forgot password
                         </Link>
                  </div>                 
            </form>
            { login.isLoading && <LoadingEffect /> }
        </div>
    )
}

export default TeacherLogin
