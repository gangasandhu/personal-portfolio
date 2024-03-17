import React from 'react'

const Footer = () => {
    return (
        <div id='footer' className='footer text-secondary p-4 mt-4 text-center'>
            <hr />
            Copyright &copy; {new Date().getFullYear()}. Ganga Singh
        </div>
    )
}

export default Footer
