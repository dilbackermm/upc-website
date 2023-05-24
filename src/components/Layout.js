import React from 'react'

const Layout = ({ children, className = "" }) => {
    return (
        <div className={` w-full h-full inline-block z-0 bg-light p-28  2xl:p-24 xl:20 lg:p-12 md:p-10 sm:p-8 xs:6 ${className}`}>
            {children}
        </div>
    )
}

export default Layout