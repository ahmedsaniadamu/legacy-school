import React from 'react'

const MediaObjects = ({imageSrc,name,text,renderImage,icon,className}) => {

    return (
        <li>
              <div className='d-flex p-0 m-0 mx-auto w-100 media-object p-1'>
                    {
                        renderImage ? <img src={imageSrc} alt='user'  className='user-img'/>
                                    : <span className={icon}></span>                                     
                    }
                    <div className={className}>
                          <h6 className='p-0 m-0'> {name} </h6>
                          <p className='p-0 m-0'> { text } </p>
                    </div>
              </div>
        </li>
    )
}

export default MediaObjects
