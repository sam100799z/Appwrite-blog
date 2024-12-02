import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className="w-[75%]">
            {label && (
                <label
                    htmlFor={id}
                    className="inline-block mb-1 pl-1 text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                className={`px-3 py-2 rounded-sm bg-white text-black outline-none focus:bg-gray-50 hover:shadow-md focus:ring-2 focus:ring-primary transition duration-200 border border-gray-300 w-full ${className}`}
                ref={ref}
                {...props}
            />
        </div>
    );
})

export default Input