'use client';

import React from 'react';

import { useGuildOptionsManager } from '@discord-dashboard/react/dist/GuildOptionsManager';
import ErrorComponent from './ErrorComponent';
import FormTypes from './FormTypes';
import { type TGuildData } from '../../../index';

const GuildsOptions: React.FC = () => {
    const options = useGuildOptionsManager();

    if (options.loading) return <>loading</>;

    if (options.error) return <ErrorComponent error={options.error} />;

    const optionsData: TGuildData[] = options.data || [];

    console.log('Option: ' + JSON.stringify(options.data));
    console.log('OptionType: ' + typeof options.data);

    return (
        <div>
            {optionsData.length > 0 ? (
                optionsData.map((category) => (
                    <div className="flex flex-1 flex-col p-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-xl">
                            {category.id} category
                        </h1>
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8">
                            {category.options.map((option) => (
                                <li
                                    key={option.id}
                                    className="col-span-1 flex flex-col divide-y divide-gray-500 rounded-lg bg-white text-center shadow"
                                >
                                    <div key={option.id}>
                                        <FormTypes
                                            formType={option.type}
                                            option={option}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p className="col-span-1 text-center">No data available</p>
            )}
        </div>
    );
};

export default GuildsOptions;
