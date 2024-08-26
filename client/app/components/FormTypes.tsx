import React, { useEffect, useState } from 'react';
import { TGuildOptionsUpdate } from '@discord-dashboard/typings/dist/React';

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
    category: string;
    isOpen: boolean;
    safeData: TGuildOptionsUpdate;
    setSafeData: React.Dispatch<React.SetStateAction<TGuildOptionsUpdate>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormTypes: React.FC<FormTypesProps> = ({
    formType,
    option,
    category,
    isOpen,
    setIsOpen,
    safeData,
    setSafeData,
}) => {
    const [value, setValue] = useState(option.value);

    // console.log(
    //     'Category: ' +
    //         category +
    //         ', Option: ' +
    //         option.id +
    //         ', Value: ' +
    //         option.value,
    // );

    useEffect(() => {
        console.log('Updated value:', value);
    }, [value]);

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        optionId: string,
    ) => {
        setValue(e.target.value);

        setIsOpen(true);

        // Find the existing option with the same id
        const existingOptionIndex = safeData.options.findIndex(
            (option) => option.id === optionId,
        );

        if (existingOptionIndex !== -1) {
            // Update the existing option's value
            const updatedOptions = [...safeData.options];
            updatedOptions[existingOptionIndex].value = e.target.value;
            setSafeData({
                ...safeData,
                options: updatedOptions,
            });
        } else {
            // If the option doesn't exist, create a new one
            const updatedOptions = [
                ...safeData.options,
                { id: optionId, value: e.target.value },
            ];
            setSafeData({
                ...safeData,
                options: updatedOptions,
            });
        }
    };

    switch (formType) {
        // Add your switch cases here
        case 'TextInput':
            return (
                <div className="w-full max-w-md mx-auto space-y-4 p-6">
                    <div className="space-y-2">
                        <label
                            htmlFor={option.id}
                            className="text-lg font-semibold"
                        >
                            {option.meta.core.name ?? option.id}
                        </label>
                        <p className="text-sm text-muted-foreground">
                            {option.meta.core.description ?? ''}
                        </p>
                    </div>
                    <input
                        id={option.id}
                        type="text"
                        placeholder="Type here..."
                        value={value}
                        className="rounded-md text-center border border-gray-300 focus:border-indigo-600"
                        onChange={(event) => onChange(event, option.id)}
                    />
                </div>
            );
    }
};

export default FormTypes;
