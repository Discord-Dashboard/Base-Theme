'use client';

import Navbar from '../../../../components/Navbar';
import { GuildOptionsManager } from '@discord-dashboard/react/dist/GuildOptionsManager';
import GuildOption from '../../../../components/GuildOption';
import { GuildCategoriesManager } from '@discord-dashboard/react/dist/GuildCategoriesManager';

const GuildsPage: React.FC = ({
    params,
}: {
    params: { id: string; category: string };
}) => {
    return (
        <>
            <GuildCategoriesManager id={params.id}>
                <GuildOptionsManager id={params.id}>
                    <Navbar />
                    <GuildOption id={params.category} />
                </GuildOptionsManager>
            </GuildCategoriesManager>
        </>
    );
};

export default GuildsPage;
