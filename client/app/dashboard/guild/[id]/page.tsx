'use client';

import Navbar from '../../../components/Navbar';
import {
    GuildOptionsManager,
    useGuildOptionsManager,
} from '@discord-dashboard/react/dist/GuildOptionsManager';
import GuildOption from '../../../components/GuildOptions';

const GuildPage: React.FC = ({ params }: { params: { id: string } }) => {
    //const guild = useGuildOptionsManager();

    //console.log('Guild: ' + guild);
    return (
        <>
            <GuildOptionsManager>
                <Navbar />
                <GuildOption />
            </GuildOptionsManager>
        </>
    );
};

export default GuildPage;
