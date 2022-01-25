/* this custom hook is use to return device height - navbar height ( navbar height = 50px) .
   it is created becouse react-router-page transition requires a full screen height to work effectively
   which allow the sidebar and main content to work correctely.
*/
import React from "react";

export const usePageBodyHeight = () => {
        //full screen height - navbar height.
        const [ height , setHeight ]  = React.useState(window.innerHeight - 50);
        
        const responsiveHeight =  () => setHeight(window.innerHeight - 50)
        
        React.useEffect( () => {
        
            window.addEventListener('resize' , responsiveHeight  )
        
            return () => window.removeEventListener('resize',responsiveHeight)
        })

    return [height ] 
}
