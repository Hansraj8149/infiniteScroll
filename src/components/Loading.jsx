import React from 'react'
import Loader from '../utils/loader.gif'
const Loading = () => {
    return (
        <div className='d-flex align-items-center mt-5 mb-5 items-center justify-content-center'>
            <img src={Loader} alt="Loader" />
        </div>
    )
}

export default Loading