import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const News = () => {
     
    const { id } = useParams() ;
    const { blogPosts }  = useSelector( state => state )     
    const [ currentNews , setCurrentNews ] = React.useState([])

    React.useEffect( () => {        
        //update the post state with  the current news info
        setCurrentNews( blogPosts.find( news => news.id === parseInt(id)  ) )
    },[ blogPosts , id ])

    return (
        <>
            <div className="current-news mt-2 py-2 shadow-sm px-1">
                 {  
                   ( currentNews.length !== 0) && <div>
                        <h5 className=" mb-1">
                            posted by : <span> { currentNews.name } </span>
                            <i className='ms-3'> 
                                 <span className="far fa-clock me-1"></span> 
                                { currentNews.time } 
                             </i>
                        </h5>    
                        <h6 className='mt-0 mb-1'>
                                   {  currentNews.post }
                         </h6>                    
                        <div className='news-body'>
                             <img
                                 src={ currentNews.image }
                                  alt='latest news' className='mx-auto d-block mb-2'
                              />                                
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                              Provident reiciendis nemo quod, iste neque obcaecati eveniet
                               dolore? Animi ipsam labore beatae. Natus a maiores quos quo nisi,
                                dolorum dolore perferendis?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                              Provident reiciendis nemo quod, iste neque obcaecati eveniet
                               dolore? Animi ipsam labore beatae. Natus a maiores quos quo nisi,
                                dolorum dolore perferendis?                              
                              Provident reiciendis nemo quod, iste neque obcaecati eveniet
                               dolore? Animi ipsam labore beatae. Natus a maiores quos quo nisi,
                                dolorum dolore perferendis?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.                              
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                              Provident reiciendis nemo quod, iste neque obcaecati eveniet
                               dolore? Animi ipsam labore beatae. Natus a maiores quos quo nisi,
                                dolorum dolore perferendis?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                              Provident reiciendis nemo quod, iste neque obcaecati eveniet
                               dolore? Animi ipsam labore beatae. Natus a maiores quos quo nisi,
                                dolorum dolore perferendis?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                              Provident reiciendis nemo quod, iste neque obcaecati eveniet
                               dolore? Animi ipsam labore beatae. Natus a maiores quos quo nisi,
                                dolorum dolore perferendis?
                        </div>
                   </div>
                 
                 }                 
            </div>             
        </>
    )
}

export default News
