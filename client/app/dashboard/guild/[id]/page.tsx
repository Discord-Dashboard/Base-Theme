'use client';

import Navbar from '../../../components/Navbar';
import { GuildOptionsManager } from '@discord-dashboard/react/dist/GuildOptionsManager';
import GuildOption from '../../../components/GuildOption';
import { UpdateProvider } from '../../../../context/UpdateContext';
import { GuildCategoriesManager } from '@discord-dashboard/react/dist/GuildCategoriesManager';
import GuildCateories from '../../../components/GuildCategories';

const GuildsPage: React.FC = ({ params }: { params: { id: string } }) => {
    return (
        <>
            {/*<GuildOptionsManager guildId={params.id}>*/}
            {/*    <UpdateProvider>*/}
            {/*        <Navbar />*/}
            {/*        <GuildOption />*/}
            {/*    </UpdateProvider>*/}
            {/*</GuildOptionsManager>*/}
            <GuildCategoriesManager id={params.id}>
                <Navbar />
                <GuildCateories />
            </GuildCategoriesManager>
        </>
    );
};

export default GuildsPage;
