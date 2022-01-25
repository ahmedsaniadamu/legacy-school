import { useState, useEffect } from "react";

export const useFetch = ( url,user) => {

     const [ isLoading , setIsloading ] = useState(true) ;
     const [ responseData , setResponseData  ] = useState([]) ;

     useEffect(() => {                  
        fetch(url,{
            method : 'POST' ,
            headers : { 'Content-Type':'application/json' } ,
            body : JSON.stringify({  
                user :  user ,                     
              })
         })
           .then( (response) => response.json() 
            )
           .then( result => {              
                   setResponseData(result)
                   setIsloading(false)               
           })               
     }, [isLoading])
     return [ isLoading , responseData ] ;
}