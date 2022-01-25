import React from 'react'
import { Link } from 'react-router-dom'

const IsNotLogin = () => {

    return (
        <div className='is-not-login mt-2 py-2 shadow-sm'>
            <img 
                 src={ require('../../../Assets/notlogin.png').default}
                  alt="not login"
                  className='d-block mx-auto'
            />
            <p className='p-0 m-0 mt-2 text-center px-2'>
                 <b>Sorry!</b> you are not logged in. if you are having trouble while trying
                to login. please don't hestitate to contact us.
                <br />
                <Link to='/login' className='btn btn-outline-primary mt-1 py-1'>
                    click here to login
                </Link>
                <Link to='/contact' className='btn btn-outline-primary mt-1 py-1 ms-2'>
                    contact us
                </Link>
            </p>
        </div>
    )
}

export default IsNotLogin
