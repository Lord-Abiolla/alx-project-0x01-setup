import React from "react";

type ButtonProps = {
    label: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer font-bold"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;