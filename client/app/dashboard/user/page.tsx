'use client';

import React from 'react';
import { SessionProvider } from '../../../context/SessionContext';
import UserContent from '../../components/UserContent';

const Page: React.FC = () => {
    return (
        <SessionProvider>
            <UserContent />
        </SessionProvider>
    );
};

export default Page;
