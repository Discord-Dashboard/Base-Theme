'use client';

import SetUp from '../components/set_up/SetUp';
import { useThemeSettingsStore } from '../state/ThemeStore';

export default function Home({ children }) {
  const { themeSettings } = useThemeSettingsStore();

  if (!themeSettings.data.set_up) return <SetUp />;

  return <a>xd</a>;
}
