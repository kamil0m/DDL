import React from 'react';
import FormInputProps from '../models/interfaces/FormInputProps';
import validateFormInput from './validateFormInput';

export default function Input({ label, type, id, placeholder, value, onChange, t }: FormInputProps) {
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setErrorMessage(validateFormInput(e.target.value, type, t));
    };

    const commonProps = {
        name: id,
        id,
        value,
        onChange,
        onBlur: handleBlur,
        placeholder,
        required: id !== 'phone',
        className: "w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-1.5",
    };

    return (
        <label htmlFor={id} className="flex relative flex-col font-medium mb-2">
            {label}
            {type !== "textarea" ? (
                <input type={type} {...commonProps} />
            ) : (
                <textarea {...commonProps} className={`${commonProps.className} h-32 resize-none mb-3`} />
            )}
            <span className="absolute bottom-1 translate-y-full w-full text-center text-red-500 text-xs italic">
                {errorMessage}
            </span>
        </label>
    );
}
