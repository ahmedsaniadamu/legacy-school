import React,{ useRef, useState } from 'react'
import LoadingEffect from '../../../components/LoadingEffect'

const ContactForm = () => {
   
    const [ contactForm , setContactForm ] = useState({
         email : '' ,
         subject : '' ,
         messege : '' ,
         status : '' ,
         success : '' ,
         isLoading : false
    })

    const formRef = useRef(null)

   const handleChange = event => {
       setContactForm({...contactForm,[event.target.name] : event.target.value})
   }
   
   const handleSubmit = event => {
        event.preventDefault() ;
        let isOk = true ; 
        
        //check if email address is valid 
        if( (!contactForm.email.includes('@') ) || contactForm.email.startsWith('@') 
           || !contactForm.email.endsWith('@gmail.com')){
           setContactForm({...contactForm,status:'please use a valid email address.'})
           isOk = false ;
        }
        //check if all input are not empty excluding image which is optional
        if( !contactForm.email || !contactForm.subject || !contactForm.messege ){
              
              setContactForm({...contactForm,status:'Error! please fill all the required fields.'})
              isOk = false ;
              
        } 
        //send a request to the server
        if(isOk){
           setContactForm({...contactForm , status:'', isLoading : true}) 
           //submit the form the server using fetch api 
           let formData = new FormData(formRef.current);
           fetch('https://legacy-school-server.herokuapp.com/contact.php' , {
               method : 'POST' ,
               body : formData 
           })
           .then( res => res.text() )
           .then( result => {
               //check if sever returns a success if 1 then mail is send if 0 mail is not sent
               if(Number(result) === 1){
                    setContactForm({                       
                        ...contactForm,
                        status:'',
                        success : 'your messge is delivered successfully. we will reply as soon as possible' ,
                        isLoading : false
                       })
                   }
                   else  setContactForm({                       
                                        ...contactForm,
                                        status:'',
                                        success : 'Error! an error occured while sending mail.' ,
                                        isLoading : false
                                    })             
               } )                
        } 
   }

    return (
        <div className='contact-form border d-block mx-auto rounded'>
            <img 
                src={ require('../../../Assets/logo.png').default} 
                alt="contact icon"
                className='d-block mx-auto mt-2'
             />
            <h1 className='text-center mb-0 header'> Contact Us  </h1>
            <p className='p-0 m-0 sub-header mt-2 px-2'>  
               Feel free and fill the required fields. we will ensure that 
               your email address is secured.we will get back to you as soon as possible
            </p>
            <form ref={ formRef } className='d-block mx-auto'>
                <label htmlFor='email'>
                     email address <i className='text-danger'> * </i>
                 </label>
                <input 
                    type='email'
                    className='form-control py-1'
                    name='email'
                    required
                    value={ contactForm.email }
                    id='email'
                    onChange={ handleChange }
                    maxLength={300}
                />

                <label htmlFor='subject'>
                     subject <i className='text-danger'> * </i>
                 </label>
                <input 
                    type='text'
                    className='form-control py-1'
                    name='subject'
                    required
                    value={ contactForm.subject }
                    id='subject'
                    onChange={ handleChange }
                    maxLength={500}
                />
                
                <label htmlFor='messege'>
                     messege <i className='text-danger'> * </i>
                </label>
                <textarea 
                       name='messege' 
                       value={ contactForm.messege } 
                       required 
                       id='messege'
                       onChange={ handleChange }
                       className='form-control py-1'
                >                    
                </textarea>
                <p className='pt-1 text-danger status m-0 '>
                     { contactForm.status }
                     <i className='text-success'> { contactForm.success } </i>
                 </p>
                <button onClick={ handleSubmit } className='btn btn-primary py-1 px-5 mb-2 mt-1'>
                     Send 
                </button>
                { /* display a loading effect while form is processing */}
                { contactForm.isLoading && <LoadingEffect />}
            </form>
        </div>
    )
}

export default ContactForm
