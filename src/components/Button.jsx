import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            className={`px-4 py-2 rounded-sm transition duration-200 focus:outline-none ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
