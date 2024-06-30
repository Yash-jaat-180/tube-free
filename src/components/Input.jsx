import React, { useId } from 'react'

const Input = React.forwardRef(function Input(
    { label,
        placeholder,
        type,
        ...props
    }, ref) {
        const id = useId()
    return (
        <div className='my-[0.4vw]'>
            <div className='text-white text-[1.1vw] p-2'>
                <label htmlFor="name"><span className='text-red-700'>* </span>{label}</label>
            </div>
            <input
                className='text-white text-[1.1vw] p-2 border-[1px] outline-none bg-black border-white rounded-md w-[25vw]'
                type={`${type}`}
                placeholder={`${placeholder}`}
                {...props}
                ref={ref}
                id={id}
            />
        </div>
    )
})


export default Input
