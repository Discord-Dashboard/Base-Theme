'use client';

import React, { useEffect, useState } from 'react';

import { useGuildOptionsManager } from '@discord-dashboard/react/dist/GuildOptionsManager';
import ErrorComponent from './ErrorComponent';
import FormTypes from './FormTypes';
import {
    type TGuildData,
    TGuildOptionsUpdate,
} from '@discord-dashboard/typings/dist/React';
import SaveModal from './SaveModal';
import { useUpdate } from '../../context/UpdateContext';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useGuildCateoriesManager } from '@discord-dashboard/react/dist/GuildCategoriesManager';

const GuildsOptions: React.FC<{ id: string }> = ({ id }) => {
    const options = useGuildOptionsManager();
    const category = useGuildCateoriesManager();
    const [isOpen, setIsOpen] = useState(false);
    //const [options, setOptions] = useState(useGuildOptionsManager());

    const [safeData, setSafeData] = useState<TGuildOptionsUpdate>({
        id: id,
        options: [],
    });

    if (options.loading) return <>loading</>;

    if (options.error) return <ErrorComponent error={options.error} />;

    const optionsData: TGuildData[] = options.data || [];

    // console.log('Options: ' + JSON.stringify(optionsData));
    console.log('isOpen: ' + isOpen);

    const saveData = async (data: TGuildOptionsUpdate) => {
        console.log('Data: ' + JSON.stringify(data));
        const updateData: TGuildOptionsUpdate[] = [];
        updateData.push(data);
        options.updateData(updateData);
        setSafeData({
            id: id,
            options: [],
        });
    };

    const resetData = () => {
        location.reload();
    };

    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}

            <div
                aria-live="assertive"
                className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
            >
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition show={isOpen}>
                        <div className="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
                            <div className="p-4">
                                <div className="flex items-start">
                                    {/*<div className="flex-shrink-0 pt-0.5">*/}
                                    {/*    <img*/}
                                    {/*        alt=""*/}
                                    {/*        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"*/}
                                    {/*        className="h-10 w-10 rounded-full"*/}
                                    {/*    />*/}
                                    {/*</div>*/}
                                    <div className="ml-3 w-0 flex-1">
                                        <p className="text-sm font-medium text-gray-900">
                                            Changes seen!
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Do you want to save?
                                        </p>
                                        <div className="mt-4 flex">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    saveData(safeData)
                                                }
                                                className="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Save
                                            </button>
                                            <button
                                                type="button"
                                                onClick={resetData}
                                                className="ml-3 inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                Discard
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsOpen(false);
                                            }}
                                            className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            <span className="sr-only">
                                                Close
                                            </span>
                                            <XMarkIcon
                                                aria-hidden="true"
                                                className="h-5 w-5"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

            {/*<SaveModal isOpen={isOpen} />*/}
            <div>
                {optionsData.length > 0 ? (
                    optionsData.map((category) => (
                        <div
                            className="flex flex-1 flex-col p-8"
                            id={category.id}
                        >
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-xl">
                                {category.id} category
                            </h1>
                            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8">
                                {category.options.map((option) => (
                                    <li
                                        key={option.id}
                                        className="col-span-1 flex flex-col divide-y divide-gray-500 rounded-lg bg-white text-center shadow bg-gray-50 hover:bg-gray-200"
                                    >
                                        <FormTypes
                                            key={option.id}
                                            formType={option.type}
                                            option={option}
                                            category={category.id}
                                            isOpen={isOpen}
                                            setIsOpen={setIsOpen}
                                            setSafeData={setSafeData}
                                            safeData={safeData}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p className="col-span-1 text-center">No data available</p>
                )}
            </div>
        </>
    );
};

export default GuildsOptions;
