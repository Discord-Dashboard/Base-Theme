'use client';

import React from 'react';

import Link from 'next/link';
import { useGuildsListManager } from '@discord-dashboard/react/dist/GuildsListManager';
import ErrorComponent from './ErrorComponent';

const GuildsList: React.FC = () => {
    const guilds = useGuildsListManager();

    if (guilds.loading) return <>loading</>;

    if (guilds.error) return <ErrorComponent error={guilds.error} />;

    return (
        <ul>
            {guilds.data.map((guild) => (
                <li key={guild.id}>
                    {guild.name}{' '}
                    <Link href={`/manage/guild/${guild.id}`}>
                        Go to Dashboard
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default GuildsList;
