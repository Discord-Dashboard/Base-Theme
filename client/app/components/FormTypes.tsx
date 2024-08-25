import React from 'react';
import { TGuildData } from '../../../index';
import { useGuildOptionsManager } from '@discord-dashboard/react/dist/GuildOptionsManager';

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
    const options = useGuildOptionsManager();

    switch (formType) {
        // Add your switch cases here
        case 'TextInput':
            return (
                <div className="w-full max-w-md mx-auto space-y-4 p-6">
                    <div className="space-y-2">
                        <label
                            htmlFor="textInput"
                            className="text-lg font-semibold"
                        >
                            Enter Your Text
                        </label>
                        <p className="text-sm text-muted-foreground">
                            Please provide the text you'd like to save.
                        </p>
                    </div>
                    <input
                        id="textInput"
                        type="text"
                        placeholder="Type here..."
                        value={option.value}
                        className="rounded-md text-center border border-gray-300 focus:border-indigo-600"
                        // onChange={}
                    />
                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    // onClick={handleSave}*/}
                    {/*    className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                    {/*>*/}
                    {/*    Save*/}
                    {/*</button>*/}
                </div>
                // <div>
                //     <label
                //         htmlFor="email"
                //         className="block text-sm font-medium leading-6 text-gray-900"
                //     >
                //         {option.id}
                //     </label>
                //     <div className="mt-2">
                //         <input
                //             id={option.id}
                //             name="text"
                //             type="text"
                //             value={option.value}
                //             className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                //             />
                //         </div>
                //     </div>
            );
    }
};

export default FormTypes;
