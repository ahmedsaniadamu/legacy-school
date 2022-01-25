import * as actionType from './actions'

export const reducer = (state = {} ,{ type, payload }) => {
  
    switch(type){

        case  actionType.UPDATE_ADMIN_PROFILE : 
           return { 
                    ...state , isLoggedIn : true , userType : 'admin' ,
                     loggedUserEmail : payload.email,
                    activeProfile : { 
                                  ...state.activePage , name : payload.name ,
                                   image : 'https://legacy-school-server.herokuapp.com/'+ payload.image ,                                   
                                  }
                 }

        case  actionType.UPDATE_TEACHER_PROFILE : 
           return { 
                    ...state , isLoggedIn : true , userType : 'teacher' ,
                     loggedUserEmail : payload.email,
                    activeProfile : { 
                                   ...state.activePage , name : payload.name ,
                                    image : payload.image ?
                                       'https://legacy-school-server.herokuapp.com/'+ payload.image  
                                                             : 
                                        require('../Assets/user.png').default                                                                                             
                                  },
                   teacher : {
                         ...state.student, name : payload.name , id : payload.id,
                         email : payload.email , qualification : payload.qualification,
                         dateRegistered: new Date(payload.date_registered).toLocaleDateString(),
                         course : payload.course , age : payload.age , address : payload.address,
                         image:'https://legacy-school-server.herokuapp.com/'+payload.image
                    }
                 }

        case  actionType.UPDATE_STUDENT_PROFILE : 
           return { 
                    ...state , isLoggedIn : true , userType : 'student' ,
                     loggedUserEmail : payload.email,                     
                    activeProfile : { 
                                  ...state.activePage , name : payload.name ,
                                   image : payload.image ?
                                       'https://legacy-school-server.herokuapp.com/'+ payload.image
                                         : require('../Assets/user.png').default                                 
                                  },
                    student : {
                         ...state.student, name : payload.name , id : payload.id,
                         email : payload.email , gender : payload.gender, class : payload.class,
                         bloodGroup : payload.blood_group ,
                         dateRegistered: new Date(payload.date_registered).toLocaleDateString(),
                         course : payload.course , age : payload.age , phone : payload.phone,
                         dateOfBirth : payload.dob , address : payload.address,
                         image: payload.image ?
                                'https://legacy-school-server.herokuapp.com/'+payload.image
                               : ''
                    }
                 }

         case actionType.LOGOUT_USER :
            return { 
                ...state , isLoggedIn : false , userType : '' ,
                loggedUserEmail : '',
                activeProfile : { 
                                ...state.activePage , name : 'Guest' ,
                                image : require('../Assets/user.png').default
                                }
                } 
        
      
        case actionType.DISPLAY_RESET_PASSWORD_FORM :
             return { 
                         ...state , displayResetPasswordForm : true ,
                         resetPasswordEmail : payload 
                    }
        
        case actionType.HIDE_RESET_PASSWORD_FORM : 
             return { ...state , displayResetPasswordForm : false  }

        default :
         return state ;
    }

}