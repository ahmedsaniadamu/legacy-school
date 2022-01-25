# LEGACY SECONDARY SCHOOL MANAGEMENT SYSTEM
* this is a full stack project which i created as a personal project. In which students and teachers can register with their email address and login in to their dashboard to view their profile.
* it also has a forgot password feature for students and teachers in which a six digit token will be sent to thier email address which i  saved  the token in a database for verification.  if the token in the email address is same as the one in the database an update password form will popup and allow users to update thier password.
* it also has an admin dashboard in which an admin can view all students and teachers information
* the client side is hosted at netlify and the backend is hosted at heroku. the backend is serving the client side via an api which i created with php and mysql. where  fetch api is used to communicate between the server side and the client side
* it has 10+ pages and the site is responsive based on three different devices: mobile , tablet and desktop devices.
## Note :
  since this website is build for practice.
  you can login as one of my admin or student or teacher copy the below email address and password to login and view  more features of the application.
  1. student 
       email =  saniahmed813@gmail.com
      password = 11111111
  2. teacher
      email = jhondoe@gmail.com
      password = 12345678
  3. admin
     email = saniahmed813@gmail.com
     password = 08344257

## Client side 
  the client side is built with : React.js , Redux , Sass , Boostrap5
  1. React.js 
     the user interface is build based on React.js functional component which is recommended by react team.
  2. Redux 
      i use redux for  managing most of the my application states.
 3. Sass
   is a css preprocessor which i use for styling pages
 4. Boostrap5
    i use boostrap CDN for quick styling and building responsive layout

 ### external packages installed.
1. react loading
       for displaying loading effect while contents are loading
2. react-paginate
    for paginating students and teachers table
3.  @steveeeie/react-page-transition
   for applying transition effect on pages in mobile devices only.
4. react-calendar 
   for displaying an event calender.
5. node-sass
   for styling pages
6. random-web-token
   for sending 6 digit token for users that forgot thier email address
7. react-router-dom
   for navigating into different pages.
##  Icons Library
    font awesome 5 icons CDN
## SEVER SIDE
  the server side is build with php and mysql 
  * it is also intergreted with php mailer library for sending mail to 
    users that forgot their passoword and to send complains from contact form to 
    school email address
 * also users password is protected using php password hashing algorithm to ensure data security

## SITE ADDRESS
      you can visit the side at https://legacysecondaryschool.netlify.app

   
