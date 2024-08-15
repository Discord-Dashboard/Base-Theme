import React from 'react';
import Link from 'next/link';

const Page: React.FC = () => {
    return (
        <div>
            <h1>
                Hello, this is <i>Base Theme</i>
            </h1>
            <Link href="/dashboard">Go to Dashboard?</Link>
        </div>
    );
};

export default Page;
