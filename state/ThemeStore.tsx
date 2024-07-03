'use client';

import SetUp from '../components/set_up/SetUp';
import { ThemeData } from '../src/utils/ThemeData';
import { useEffect } from 'react';
import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';

type ThemeSettings = {
  loading: boolean;
  data: ThemeData | null;
};

type ThemeSettingsState = {
  themeSettings: ThemeSettings;
  setThemeSettings: (newThemeSettings: ThemeSettings) => void;
  fetchThemeSettings: () => void;
};

const initialThemeSettings: ThemeSettings = {
  loading: true,
  data: null,
};

export const themeSettingsStore = createStore<ThemeSettingsState>((set) => ({
  themeSettings: initialThemeSettings,
  setThemeSettings: (newThemeSettings) =>
    set({ themeSettings: newThemeSettings }),
  fetchThemeSettings: async () => {
    const response = await fetch('/api/theme');
    const data = await response.json();
    set({ themeSettings: { loading: false, data } });
  },
}));

export const useThemeSettingsStore = () => useStore(themeSettingsStore);

export const WrapThemeStore = ({ children }) => {
  const { themeSettings, fetchThemeSettings } = useThemeSettingsStore();

  useEffect(() => {
    fetchThemeSettings();
  }, []);

  if (themeSettings.loading) return <h1>Loading...</h1>;

  return children;
};
