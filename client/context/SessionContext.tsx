// app/context/SessionContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@discord-dashboard/typings/dist/User';

interface SessionData {
    user?: User;
}

interface SessionContextType {
    sessionData: SessionData | null;
    updateSessionData: (data: SessionData) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
    const [sessionData, setSessionData] = useState<SessionData | null>(null);

    const updateSessionData = (data: SessionData) => {
        setSessionData(data);
    };

    useEffect(() => {
        async function initSession() {
            try {
                const response = await fetch('/api/auth/me');
                const data = await response.json();
                setSessionData({
                    ...sessionData,
                    user: data,
                });
            } catch (error) {
                console.error('Błąd podczas inicjalizacji sesji:', error);
            }
        }

        initSession();
    }, []);

    return (
        <SessionContext.Provider value={{ sessionData, updateSessionData }}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
}
