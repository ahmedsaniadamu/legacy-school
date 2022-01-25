import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogPosts = () => {
     
    const { blogPosts } = useSelector( state => state)

    return (
        <>
             <h5 className="header ps-1 py-1">
                          Latest News
              </h5>
              <div className="row w-100 p-0 m-0">
                   {
                    blogPosts.map( Post => {
                       return <div className="col-12 col-md-6 p-0 m-0 mt-1 mt-sm-0" key={Post.id}>
                                 <div className='d-flex p-0 m-0 mx-auto w-100 media-object p-1'>
                                    <img src={Post.image} alt='user'  className='post-img'/>                                                                
                                    <div className='post-body ps-1'>
                                        <h6 className='p-0 m-0'>
                                              {Post.name} 
                                               <i className='ms-2'>
                                                     <span className="far fa-clock"></span> { Post.time}
                                                </i>
                                         </h6>
                                        <p className='p-0 m-0'>
                                             { Post.post } 
                                             <Link to={`/blog/${Post.id }`}>  Read more. </Link>
                                        </p>
                                    </div>
                                 </div>    
                            </div>
                       })
                   }
              </div>
        </>
    )
}

export default BlogPosts
