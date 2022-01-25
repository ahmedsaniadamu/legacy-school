import React from 'react'
import LoadingEffect from '../../../components/LoadingEffect';
import { useSelector } from 'react-redux';

const ResetPasswordForm = ({user}) => {

     const [ form , setForm ] = React.useState({ 
         code : '' ,
         password : '' ,
         confirmPassword : '' ,
         serverResponse : '' ,
         isLoading : false ,
         status : '',
       }) ;

  const { resetPasswordEmail } = useSelector(state => state)
  const handleChange = event => setForm({...form, [event.target.name] : event.target.value })
   
  const handleSubmit = event => {      
      event.preventDefault()
       let isOk = true ; 
             
        if(  form.password !== form.confirmPassword){
             setForm({...form,serverResponse : '', status:'the two password did not match.'})
             isOk = false ;
        }

        //check if all input are not empty 
        if( !form.confirmPassword || !form.password || !form.code){
            setForm({...form,serverResponse:'',status:'Error! please fill all the required fields.'})
            isOk = false ;            
        } 

        if( isOk){
            setForm({...form,status:'',isLoading : true})
            fetch('https://legacy-school-server.herokuapp.com/reset_password.php',{
                method : 'POST' ,
                headers : { 'Content-Type':'application/json' } ,
                body : JSON.stringify({  
                     //send a 6 digit token the user email address
                      user : user ,
                      password : form.password,
                      email : resetPasswordEmail ,
                      token : form.code
                 })
            })
            .then(  response => response.text() )
            .then( result => {
                setForm({...form,status:'',isLoading : false , serverResponse : result})
            })
        }
  }

    return (
        <div className='p-0  m-0 d-block mx-auto'>
            <div className='d-block mx-auto form-container border'>
                  <form className='py-1 px-2'>
                        <img 
                            className='login-image d-block mx-auto mt-1'
                            alt='student login' 
                            src={ require('../../../Assets/loginlogo.png').default}
                        />
                        <h6 className='m-0 p-0 text-center mt-1'> Update password </h6>
                        <p className='p-0 m-0 text-center mt-2 sub-header'>
                             a password token was sent to your email account. enter the 6 
                              digit code that you  recieve in your email 
                               and update your password.
                        </p>                        
                        <input 
                               type="text" name="code" maxLength={6}
                                placeholder='code you recieve in your gmail'
                               id="code" value={ form.code } onChange={ handleChange }
                               className='form-control py-1 mt-2'
                        />
                        <input 
                               type="password" name="password" maxLength={8}
                                placeholder='input your new password'
                               id="password" value={ form.password } onChange={ handleChange }
                               className='form-control py-1 mt-1'
                        />
                        <input 
                               type="password" name="confirmPassword"
                                placeholder='comfirm password' maxLength={8}
                                value={ form.confirmPassword } onChange={ handleChange }
                               className='form-control py-1 mt-1'
                        />

                        <p className='p-0 m-0 text-danger mt-1'> 
                            { form.status } <i className='text-primary'> { form.serverResponse} </i>
                        </p>
                        <button className='btn btn-primary py-1 my-2 mx-auto d-block text-center' 
                              onClick={ handleSubmit }>
                             Update 
                       </button>
                  </form>
                  { form.isLoading && <LoadingEffect />  }
            </div>
        </div>
    )
}

export default ResetPasswordForm
