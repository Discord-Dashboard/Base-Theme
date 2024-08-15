'use client';

import { useSession } from '../../context/SessionContext';

export default function UserContent() {
    const { sessionData, updateSessionData } = useSession();

    if (!sessionData) {
        return <div>Loading...</div>;
    }

    if (!sessionData.user) {
        return <div>Not logged in!</div>;
    }

    return (
        <main>
            <p>{JSON.stringify(sessionData)}</p>
        </main>
    );
}
