import React from 'react';
import Link from 'next/link';

import Button from '@discord-dashboard/react/dist/Button';

const Page: React.FC = () => {
    return (
        <div>
            <h1>
                Hello, this is <i>Base Theme</i>
            </h1>
            <Link href="/dashboard">Go to Dashboard?</Link>

            <Button />
        </div>
    );
};

export default Page;
