
//student registeration form validation 
 export const isValid = (form,setForm) => {

        let isOk = true ;
        const { password , confirmPassword } = form ;

       // check if both password matches        
          if( password !== confirmPassword ){
               setForm({
                        ...form,serverResponse:'',
                        formstatus:'Sorry! the two password did not match.'
                     })
               isOk = false ;
          }     
          
          //check if email address is valid 
          if( (!form.email.includes('@') ) || form.email.startsWith('@') ||
               !form.email.endsWith('@gmail.com') ){
            
                  setForm({
                       ...form,serverResponse:'',
                       formstatus:'please use a valid email address.'})
             isOk = false ;
          }
          //check if all input are not empty excluding image which is optional
          if( !form.name || !form.email || !form.gender || !form.bloodGroup || !form.age || 
              !form.class || !form.course || !form.dob || !form.phone || !form.address
             || !password || !confirmPassword){
               
                setForm({
                         ...form,serverResponse:'',
                         formstatus:'Error! please fill all the required fields.' ,
                        })
               isOk = false ;
               
          } 

        return isOk ;
    }

    const TeachersValdationFunc = (form,setForm) => {
        
         let isOk = true ;
         const { tpassword , tconfirmPassword } = form ;

      // check if both password matches        
         if( tpassword !== tconfirmPassword ){
               setForm({
                     ...form,serverResponse:'',
                     formstatus:'Sorry! the two password did not match.'
                   })
               isOk = false ;
         }     
         
         //check if email address is valid 
         if( (!form.temail.includes('@') ) || form.temail.startsWith('@')
              || !form.temail.endsWith('@gmail.com') 
            ){

            setForm({...form,serverResponse:'',formstatus:'please use a valid email address.'})
            isOk = false ;
         }
         //check if all input are not empty excluding image which is optional
         if( !form.tname || !form.temail || !form.tage || !form.tqualification ||
             !form.tcourse || !form.taddress || !tpassword || !tconfirmPassword ){
               
               setForm({
                        ...form,serverResponse:'',
                         formstatus:'Error! please fill all the required fields.'
                        })
               isOk = false ;
               
         } 

         return isOk ;
    }

    export default TeachersValdationFunc ;