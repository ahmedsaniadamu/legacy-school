import React from 'react'
import LoadingEffect from '../../../components/LoadingEffect'

const MHostelForm = () => {
   
    const [ form , setForm ] = React.useState({
        name : '' ,
        email : '' ,
        admissionNo : '' ,
        class : '' ,
        room : '' ,
        status : '' ,
        serverResponse : '' ,
        isLoading : false ,
    })
        
    const handleInputChange = event => setForm({...form,[event.target.name]:event.target.value })

    const handleSubmit = event => {
       //prevent default form action
       event.preventDefault()
       let isOk = true ;
      
       //check and return error messege if input are empty    
       const { name,email,admissionNo,room }  = form ;

       if(!name || !email || !admissionNo || !room || !form.class){
           setForm({...form, serverResponse : '', status:'error! please fill all the input fiels'})
           isOk = false
       }
       //check if room number is between 1 and 80
       if( Number(room) <= 0 || Number(room) > 80 ){
            setForm({...form ,serverResponse :'', status : 'select room between 1 and 80 '})
            isOk = false ;
       }
        //check if email address is valid 
        if( (!email.includes('@') ) || email.startsWith('@') || !email.endsWith('@gmail.com') ){
            setForm({...form,serverResponse:'' ,status:'please use a valid email address.'})
            isOk = false ; 
         }
       // try to submit form to the server if everything is ok
       if(isOk){
            setForm({...form, status : '' , isLoading : true})
            //sent to the server using fetch api.
            fetch('https://legacy-school-server.herokuapp.com/accomandation.php',{
                    method : 'POST' ,
                    headers : { 'Content-Type':'application/json' } ,
                    body : JSON.stringify({
                        gender : 'male' ,
                        email : form.email ,
                        name : form.name ,
                        admissionNo : form.admissionNo ,
                        class : form.class ,
                        room : form.room
                })
            })
            .then( response => response.text() )
            .then ( result => {
                setForm({...form , status : '', isLoading : false , serverResponse : result })
            } )
        }
    }

    return (
       <>
          <form className='d-block mx-auto'>
             <input
                    type='text' name='name' placeholder='your full name..'
                     value={ form.name} className='form-control' onChange={ handleInputChange } 
             />
             <input
                    type='email' name='email' placeholder='email address..'
                     value={ form.email} className='form-control' onChange={ handleInputChange } 
             />
             <input
                    type='number' name='admissionNo' placeholder='admission no..'
                     value={ form.admissionNo} className='form-control' onChange={ handleInputChange } 
             />
             <input
                    type='number' name='room' placeholder='room no.. between 1 and 80'
                     value={ form.room} className='form-control' onChange={ handleInputChange } 
             />
             <select name='class' value={ form.class} className='form-select' onChange={ handleInputChange}>
                 <option value=''> select </option>
                 <option value='1'> class 1 </option>
                 <option value='2'> class 2 </option>
                 <option value='3'> class 3 </option>
                 <option value='4'> class 4 </option>
                 <option value='5'> class 5 </option>
                 <option value='6'> class 6 </option>
             </select>
             <p className='p-0 m-0 ps-2 mt-1 text-danger'> 
                { form.status }  <i className='text-primary'>  {form.serverResponse }</i>
            </p>
             <button 
                     className='btn btn-primary py-1 d-block mx-auto text-center mt-1' 
                     style={{ width : 200 }} onClick={ handleSubmit }
              >
                   Apply
             </button>
         </form>
         { form.isLoading && <LoadingEffect /> }
     </>
    )
}

export default MHostelForm
