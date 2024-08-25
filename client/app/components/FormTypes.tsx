import React from 'react';
import { TGuildData } from '../../../index';

interface FormTypesProps {
    formType: string;
    option: {
        id: string;
        type: string;
        meta: {
            core: any;
        };
        value: any;
        disabled?: boolean;
    };
}

const FormTypes: React.FC<FormTypesProps> = ({ formType, option }) => {
    console.log('Form Type: ' + formType);

    switch (formType) {
        // Add your switch cases here
        case 'TextInput':
            return (
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        {option.id}
                    </label>
                    <div className="mt-2">
                        <input
                            id={option.id}
                            name="text"
                            type="text"
                            value={option.value}
                            className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            );
    }
};

export default FormTypes;
