'use client';

import { GuildsListManager } from '@discord-dashboard/react/dist/GuildsListManager';
import GuildsList from '../../components/GuildsList';
import Navbar from "../../components/Navbar";

const GuildsPage: React.FC = () => {
    return (
        <>
        <GuildsListManager>
            <Navbar />
            <GuildsList />
        </GuildsListManager>
        </>
    );
};

export default GuildsPage;
