'use client';

<<<<<<< Updated upstream
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
=======
import { GuildsListManager } from '@discord-dashboard/react/dist/GuildsListManager';
import Navbar from "../../../components/Navbar";
import {GuildOptionsManager} from "@discord-dashboard/react/dist/GuildOptionsManager";
import GuildOption from "../../../components/GuildOption";


const GuildsPage: React.FC = ({params}: { params: { id: string }}) => {
    return (
        <>
            <GuildOptionsManager guildId={params.id}>
>>>>>>> Stashed changes
                <Navbar />
                <GuildOption />
            </GuildOptionsManager>
        </>
    );
};

<<<<<<< Updated upstream
export default GuildPage;
=======
export default GuildsPage;
>>>>>>> Stashed changes
