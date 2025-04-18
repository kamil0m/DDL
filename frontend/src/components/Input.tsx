import React, { useState } from 'react';
import FormInputProps from '../models/interfaces/FormInputProps';
import validateFormInput from './validateFormInput';

export default function Input({ label, type, id, placeholder }: FormInputProps) {
    const [inputData, setInputData] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setErrorMessage('');
        setInputData(e.target.value);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        setErrorMessage(validateFormInput(e.target.value, type));
        
    }

  if (type !== "textarea") {return (
    <label htmlFor="name" className="flex relative flex-col text-white font-medium mb-2"> {label}
        
        <input
            type={type}
            name={id}
            id={id}
            value={inputData}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            className="w-full px-4 py-2 text-white bg-gray-600 rounded-lg focus:outline-none"
            required
        />
        <span className="absolute bottom-0 translate-y-full w-full text-center text-red-500 text-xs italic">{errorMessage}</span>

    </label>
  )}

  else if (type === "textarea") {return (
    <label htmlFor="name" className="flex relative flex-col text-white font-medium mb-2"> {label}
        
        <textarea
            name={id}
            id={id}
            value={inputData}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            className="w-full px-4 py-2 h-40 text-white bg-gray-600 rounded-lg focus:outline-none"
            required
        />
        <span className="absolute bottom-0 translate-y-full w-full text-center text-red-500 text-xs italic">{errorMessage}</span>

    </label>
  )}
}