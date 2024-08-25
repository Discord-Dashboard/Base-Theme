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
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
            {optionsData.length > 0 ? (
                optionsData.map((category) => (
                    <li
                        key={category.id}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                        <div className="flex flex-1 flex-col p-8">
                            <h1>{category.id}</h1>
                            {category.options.map((option) => (
                                <div key={option.id}>
                                    <FormTypes
                                        formType={option.type}
                                        option={option}
                                    />
                                </div>
                            ))}
                        </div>
                    </li>
                ))
            ) : (
                <li className="col-span-1 text-center">No data available</li>
            )}
        </ul>
    );
};

export default GuildsOptions;
