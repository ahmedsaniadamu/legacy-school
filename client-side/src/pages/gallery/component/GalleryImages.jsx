import React from 'react'

const GalleryImages = () => {

    const [galleryImages] = React.useState([

        require('../../../Assets/analytical_chemistry_2021_774x250.jpg').default,
        require('../../../Assets/1cbbaa6e02e704bbf4032c5880bf382b.jpg').default,
        require('../../../Assets/IMG_20211220_213510.png').default,
        require('../../../Assets/IMG_20211224_221833.png').default,
        require('../../../Assets/IMG_20211224_221907.png').default,
        require('../../../Assets/ict-resource-center.jpg').default,

    ])

    return (
        <>
           {
               galleryImages.map( (image,id) => {
                   return (
                    <div className='col-12 col-sm-6 p-1 mt-1 mt-sm-0' key={id}>
                         <img src={image}
                              alt='gallery'
                              className='d-block mx-auto'
                           />
                      </div>
                   )
               })
           }
        </>
    )
}

export default GalleryImages


