export const initialState = {
    isLoggedIn : false ,
    userType : '' ,
    loggedUserEmail : '' ,
    teacher : {
        image : '',
        name : '' ,
        id : '' ,
        email : '',
        age : '' ,
        dateRegistered : '' ,
        course : '' ,
        qualification : '' ,
        address : '' ,

    } ,
    student : {
        image : '',
        name : '' ,
        id : '' ,
        email : '',     
        gender : '' ,
        bloodGroup : '' ,
        class : '',
        course : '' ,
        dateRegistered : '' ,
        age : '' ,
        phone : '',
        dateOfBirth:'',
        address : '' ,
    } ,    
    activeProfile : {
        //default image
        image : require('../Assets/user.png').default ,
        name : 'Guest' ,         
    } ,
    displayResetPasswordForm : false ,
    resetPasswordEmail : '' ,
    messeges : [
                    {
                        name : 'Lissa Doe' ,
                        date : '13-dec-2021' ,
                        messege : 'i really appreciate this app  i rate 9 stars out of 10' ,                        
                    } ,
                    {
                        name : 'Mary Jhonson' ,
                        date : '13-dec-2021' ,
                        messege : 'i really appreciate this app  i rate 9 stars out of 10'
                    } ,
                    {
                        name : 'Mahammed Musa' ,
                        date : '13-dec-2021' ,
                        messege : 'i really appreciate this app  i rate 9 stars out of 10'
                    } ,
                    {
                        name : 'Jhon doe' ,
                        date : '13-dec-2021' ,
                        messege : 'i really appreciate this app  i rate 9 stars out of 10'
                    } ,
                    {
                        name : 'Ahmed sani' ,
                        date : '13-dec-2021' ,
                        messege : 'i really appreciate this app  i rate 9 stars out of 10'
                    } ,
             ]  ,
    notifications : [
                        {
                            text : 'complete todays task',
                            icon : 'fas fa-check',
                            time : '20 mins ago'
                        },
                        {
                            text : 'Update password',
                            icon : 'fas fa-cogs' ,
                            time : 'about an hour'
                        },
                        {
                            text : 'Director Meeting.',
                            icon : 'fas fa-calendar-alt' ,
                            time : '2days ago'
                        },                        
                    ] ,
  blogPosts: [
                {
                    id:1,
                    image : require('../Assets/IMG_20211224_221939.png').default ,
                    name : 'johan simeon',
                    time : '2020-18-9 2:00pm' ,
                    post : `Covid 19 , Omicron cases in india States including bengal,Haryana,
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Commodi, corporis at`,

                } ,
                {
                    id:2,
                    image : require('../Assets/IMG_20220102_084852.png').default ,
                    post : `Governor Sanwo olu has commisioned a newly  
                             build school named elemero community  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Commodi, corporis at` ,
                    time : '2021-18-9 3:00am' ,
                    name : `Ahmed Sani`
                } ,
                {
                    id:3,
                    image : require('../Assets/IMG_20220102_084820.png').default ,
                    name : `Johanna thomas`,
                    time : '2022-18-9 2:20am' ,
                    post : `Numbers keeps rising as government cautiously optimistic on omicoron effect.
                            worth $50 million per year Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Commodi, corporis at`
                } ,
                {
                    id:4,
                    image : require('../Assets/IMG_20220102_084756.png').default ,
                    post : `Schools closed due to covid 19 out break in Nigeria as
                            directed by minister of education Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Commodi, corporis at`,
                    time : '2018-12-09 9:00pm' ,
                    name : `justin sean`
                } ,
           ] ,
     examinationTimetable : [
            {
                id : 1,
                day : 'monday' ,
                subject : 'English' ,
                time : '9:00am-11:00am',
                date : '19-08-2022' ,
                venue : 'Regular Class'
            } ,
            {
                id : 2 ,
                subject : 'Mathematics' ,
                day : 'wednesday' ,
                time : '9:00am-11:00am',
                date : '21-08-2022' ,
                venue : 'Regular Class'
            } ,
            {
                id : 3 ,
                subject : 'Chemistry' ,
                day : 'Thursday' ,
                time : '9:00am-11:00am',
                date : '21-08-2022' ,
                venue : 'Chemistry Lab'
            } ,
            {
                id : 4 ,
                subject : 'Physics' ,
                day : 'wednesday' ,
                time : '9:00am-11:00am',
                date : '21-08-2022' ,
                venue : 'Physics Lab'
            } ,
            {
                id : 5 ,
                subject : 'Biology' ,
                day : 'wednesday' ,
                time : '9:00am-11:00am',
                date : '09-08-2021' ,
                venue : 'Biology laboratory'
            } ,
            {
                id : 6 ,
                subject : 'Economics' ,
                day : 'wednesday' ,
                time : '9:00am-11:00am',
                date : '21-08-2022' ,
                venue : 'Regular Class'
            } ,
            {
                id : 7 ,
                subject : 'Financial Accounting' ,
                day : 'wednesday' ,
                time : '9:00am-11:00am',
                date : '21-08-2022' ,
                venue : 'Regular Class'
            } ,
            {
                id : 8 ,
                subject : 'Computer programming and application' ,
                day : 'Friday' ,
                time : '9:00am-11:00am',
                date : '21-08-2022' ,
                venue : 'ICT center'
            } ,
            {
                id : 9 ,
                subject : 'Agricultural Science' ,
                day : 'Friday' ,
                time : '9:00am-11:00am',
                date : '21-08-2022' ,
                venue : 'Regular Class'
            } ,
            {
                id : 10 ,
                subject : 'Computer applications' ,
                day : 'wednesday' ,
                time : '9:00am-11:00am',
                date : '21-08-2022' ,
                venue : 'ICT center'
            } ,
            {
                id : 11 ,
                subject : 'Futher Mathematics' ,
                day : 'Saturday' ,
                time : '9:00am-11:00am',
                date : '21-08-2022' ,
                venue : 'Regular Class'
            } ,
     ]
}