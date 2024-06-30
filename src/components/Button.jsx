import React from 'react'

function Button({
    content,
    className = "",
    textColor,
    ...props
}) {
    return (
            <button 
            className={`text-${textColor} py-[0.5vw] px-[0.9vw] font-medium ${className}`}
            {...props}
            >{content}</button>
        
    )
}

export default Button
