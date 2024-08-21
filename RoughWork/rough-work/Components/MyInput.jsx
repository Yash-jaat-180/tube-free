import React, { forwardRef } from 'react'

function MyInput({ label }, ref) {
    return (
        <label>
            {label}
            <input ref={ref} />
        </label>
    )
}

export default React.forwardRef(MyInput)
