'use client';

import { GuildsListManager } from '@discord-dashboard/react/dist/GuildsListManager';
import GuildsList from '../../components/GuildsList';

const GuildsPage: React.FC = () => {
    return (
        <GuildsListManager>
            <GuildsList />
        </GuildsListManager>
    );
};

export default GuildsPage;
