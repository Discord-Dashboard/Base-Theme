'use client';

import React from 'react';

import { EnvelopeIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid';

import Link from 'next/link';
import { useGuildsListManager } from '@discord-dashboard/react/dist/GuildsListManager';
import ErrorComponent from './ErrorComponent';

const GuildsList: React.FC = () => {
    const guilds = useGuildsListManager();

    if (guilds.loading) return <>loading</>;

    if (guilds.error) return <ErrorComponent error={guilds.error} />;

    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
            {guilds.data.map((guild) => (
                <li
                    key={guild.id}
                    className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                >
                    <div className="flex flex-1 flex-col p-8">
                        {guild.icon ? (
                            <img
                                alt=""
                                src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`}
                                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                            />
                        ) : (
                            <img
                                alt=""
                                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9SQPECzgcPKRCOblMiLjWjx1XliS_u8D7g&s`}
                                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                            />
                        )}
                        <h3 className="mt-6 text-sm font-medium text-gray-900">
                            {guild.name}
                        </h3>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            {/*<div className="flex w-0 flex-1">*/}
                            {/*    <a*/}
                            {/*        href={`mailto:${person.email}`}*/}
                            {/*        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"*/}
                            {/*    >*/}
                            {/*        <EnvelopeIcon*/}
                            {/*            aria-hidden="true"*/}
                            {/*            className="h-5 w-5 text-gray-400"*/}
                            {/*        />*/}
                            {/*        Email*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                            <div className="-ml-px flex w-0 flex-1">
                                <Link
                                    href={`/dashboard/guild/${guild.id}`}
                                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                                >
                                    <WrenchScrewdriverIcon
                                        aria-hidden="true"
                                        className="h-5 w-5 text-gray-400"
                                    />
                                    Go to Dashboard
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default GuildsList;
