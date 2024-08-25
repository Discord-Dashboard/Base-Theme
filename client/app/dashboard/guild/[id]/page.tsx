'use client';

import Navbar from '../../../components/Navbar';
import { GuildOptionsManager } from '@discord-dashboard/react/dist/GuildOptionsManager';
import GuildOption from '../../../components/GuildOption';

const GuildsPage: React.FC = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <GuildOptionsManager guildId={params.id}>
                <Navbar />
                <GuildOption />
            </GuildOptionsManager>
        </>
    );
};

export default GuildsPage;
