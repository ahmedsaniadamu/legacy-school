//boostrap 5 carousel
import React from 'react'

const Carousel = ({id}) => {

     const carouselItems = [
          {
              image : require('../Assets/carousel2.png').default ,
              captionHeader : 'Welcome to legacy school official website: legacy-school.com' ,
              captionText : `we give our students a quality education that changes thier 
                            entire life.`
          } ,
          {
            image : require('../Assets/carousel1.png').default ,
            captionHeader : 'You are in the right place.' ,
            captionText : `Education is what remains after one has fogetten what has 
                            learned in school.`
           } ,
          {
            image : require('../Assets/carousel3.png').default ,
            captionHeader : 'Let\'s cooperate and solve the issue together ' ,
            captionText : ` Our students are well cooperated and smatter enought in
                           solving complex algorithm`
          } ,
          {
            image : require('../Assets/carousel4.png').default ,
            captionHeader : 'Enroll your child to get certified.' ,
            captionText : `sign up and get started in one click. the future belongs to
                           to those who believe in the beauty of their dreams.`
          } 
     ] ;

    return (
        <div className='w-100 p-0 m-0'>
             <div id={ id } className='carousel slide w-100 p-0 m-0' data-bs-ride='carousel'>
              {/* The slideshow/carousel */}
                <div className='carousel-inner'>
                     <CarouseSlide carousel={ carouselItems } index={ 0 } />
                     <CarouseSlide carousel={ carouselItems } index={ 1 } />
                     <CarouseSlide carousel={ carouselItems } index={ 2 } />
                     <CarouseSlide carousel={ carouselItems } index={ 3 } />
               </div> 
        </div>
      </div>
    )
}

const CarouseSlide = ({ carousel , index }) => {
    return(
         <div className={ index === 0 ? 'carousel-item active' : 'carousel-item' }>
                <img
                    src= { carousel[index].image}
                    alt='carousel item' 
                    className='d-block'
                />
                <div className='carousel-caption'>
                    <h3 className='text-capitalise'>{ carousel[index].captionHeader} </h3>
                    <p>{ carousel[index].captionText} </p>
                </div>
          </div>
    )
}
export default Carousel


 