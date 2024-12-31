import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, error, ...props }) => {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className={`mt-1 block w-full rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm
          ${error ? 'border-red-300' : 'border-gray-300'}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormInput;