import React from 'react'
import ReactLoading from 'react-loading'

const LoadingEffect = () => {

    const Style = {
        position : 'fixed',
        top : 0 ,
        left : 0 ,
        width : '100vw' ,
        height : '100vh' ,
        background : 'rgb(180,180,255,0.3)' ,
        zIndex : 100 ,
    }

    return (
        <div style={ Style }>
              <div style={ {  width : window.innerWidth > 600 ? 60 : 40 ,
                              height : window.innerHeight > 600 ? 60 : 40 ,
                               transform: 'translate(-50%,-50%)' , left : '50%',
                              top : '50%' , position : 'absolute' } }
                >
                    <ReactLoading 
                        type='spokes' 
                        color='rgb(0,0,255)' 
                        height={  window.innerHeight > 600 ? 60 : 40 }
                        width={ window.innerWidth > 600 ? 60 : 40 } 
                    />
              </div>
        </div>
    )
}

export default LoadingEffect
