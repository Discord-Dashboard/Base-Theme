'use client';

import React from 'react';

import { EnvelopeIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid';

import Link from 'next/link';
import { useGuildsListManager } from '@discord-dashboard/react/dist/GuildsListManager';
import ErrorComponent from './ErrorComponent';
import { useGuildOptionsManager } from '@discord-dashboard/react/dist/GuildOptionsManager';

const GuildOption: React.FC = () => {
    const guild = useGuildOptionsManager();

    console.log('Guild: ' + JSON.stringify(guild));

    if (guild.loading) return <>loading</>;

    if (guild.error) return <ErrorComponent error={guild.error} />;

    return <h1>Guild Page</h1>;
};

export default GuildOption;
