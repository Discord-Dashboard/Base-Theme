import React from 'react';
import Link from 'next/link';

const Page: React.FC = () => {
    return (
        <div>
            <h1>
                <i>Dashboard Page</i>
            </h1>
            <p>
                <Link href="/dashboard/user">Go to User Management Page</Link>
            </p>
            <p>
                <Link href="/dashboard/guilds">Go to Guilds</Link>
            </p>
        </div>
    );
};

export default Page;
