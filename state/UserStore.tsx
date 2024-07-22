'use client';

import { User } from 'discord-oauth2';
import { useEffect } from 'react';
import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';

type UserStore = {
  loading: boolean;
  user?: User;
};

type UserSessionState = {
  userSession: UserStore;
  setUser: (user: UserStore) => void;
  fetchUserData: () => void;
};

const initialUserStore: UserStore = {
  loading: true,
  user: null,
};

export const userStore = createStore<UserSessionState>((set) => ({
  userSession: initialUserStore,
  setUser: (newUserData) => set({ userSession: newUserData }),
  fetchUserData: async () => {
    try {
      const response = await fetch('/api/auth/whoami');
      set({
        userSession: {
          loading: false,
          user: response.status === 200 ? await response.json() : null,
        },
      });
    } catch {
      set({ userSession: { loading: false, user: null } });
      return null;
    }
  },
}));

export const useUserData = () => useStore(userStore);

export const WrapUserStore = ({ children }) => {
  const { userSession, fetchUserData } = useUserData();

  useEffect(() => {
    fetchUserData();
  }, []);

  if (userSession.loading) return <h1>Loading user data...</h1>;

  return children;
};
