import React from 'react';
import FormInputProps from '../models/interfaces/FormInputProps';
import validateFormInput from './validateFormInput';

export default function Input({ label, type, id, placeholder, value, onChange }: FormInputProps) {
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setErrorMessage(validateFormInput(e.target.value, type));
    };

    const commonProps = {
        name: id,
        id,
        value,
        onChange,
        onBlur: handleBlur,
        placeholder,
        required: true,
        className: "w-full px-4 py-2 text-white bg-gray-600 rounded-lg focus:outline-none",
    };

    return (
        <label htmlFor={id} className="flex relative flex-col text-white font-medium mb-2">
            {label}
            {type !== "textarea" ? (
                <input type={type} {...commonProps} />
            ) : (
                <textarea {...commonProps} className={`${commonProps.className} h-40`} />
            )}
            <span className="absolute bottom-0 translate-y-full w-full text-center text-red-500 text-xs italic">
                {errorMessage}
            </span>
        </label>
    );
}
