import React from 'react'
import LoadingEffect from '../../../components/LoadingEffect';
import { DISPLAY_RESET_PASSWORD_FORM } from '../../../store/actions';
import { useDispatch } from 'react-redux';
const token = require('random-web-token') ;

const ForgotPassword = ({user}) => {
 
    const dispatch = useDispatch()
    
   const [ email , setEmail ] = React.useState({ 
         emailAddress : '' ,
         isLoading : false ,
         status : '',
       }) ;

  const handleEmailChange = event => setEmail({...email, [event.target.name] : event.target.value })
   
  const handleSubmit = event => {      

      event.preventDefault()
       let isOk = true ; 
    
        //check if email address is valid 
        if( (!email.emailAddress.includes('@') ) || email.emailAddress.startsWith('@') ||
             !email.emailAddress.endsWith('@gmail.com') ){
             setEmail({...email, status:'please use a valid email address.'})
             isOk = false ;
        }

        //check if all input are not empty excluding image which is optional
        if( !email.emailAddress){

            setEmail({...email, status:'Error! please fill all the required fields.'})
            isOk = false ;
            
        } 

        if( isOk){
            setEmail({...email,status:'' , isLoading : true })
            fetch('https://legacy-school-server.herokuapp.com/forgot_password.php',{
                method : 'POST' ,
                headers : { 'Content-Type':'application/json' } ,
                body : JSON.stringify({  
                     //send a 6 digit token the user email address
                      user : user ,
                      token : token.generate('extra',6),
                      email : email.emailAddress
                 })
            })
            .then(  response => response.text() )
            .then( result => {
                 if(parseInt(result)){
                     setEmail({...email,status : '' , isLoading : false })
                     // notify the store to display reset  password form
                     dispatch({
                                type:DISPLAY_RESET_PASSWORD_FORM,
                                payload: email.emailAddress
                             })
                 }
                 else{
                    setEmail({ 
                          ...email,
                          status : 'Error! an error occured while sending mail.' , 
                          isLoading : false 
                        })
                 } 
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
                        <h6 className='m-0 p-0 text-center mt-1'> Forgot password </h6>
                        <p className='p-0 m-0 text-center mt-2 sub-header'>
                             please provide your email address that you register with us.
                        </p>
                        <label htmlFor="email">
                              your email address <i className='text-danger'> * </i>
                         </label>
                        <input 
                               type="email" name="emailAddress"
                                placeholder='input your email address'
                               id="email" value={ email.emailAddress } onChange={ handleEmailChange }
                               className='form-control py-1'
                        />
                        <p className='p-0 m-0 text-danger mt-1'>  { email.status } </p>
                        <button className='btn btn-primary py-1 my-2 mx-auto d-block text-center' 
                              onClick={ handleSubmit }>
                             Continue
                       </button>
                  </form>
                  { email.isLoading && <LoadingEffect /> }
            </div>
        </div>
    )
}

export default ForgotPassword
