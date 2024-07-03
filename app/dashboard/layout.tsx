'use client';

import SetUp from '../../components/set_up/SetUp';
import { useThemeSettingsStore } from '../../state/ThemeStore';

export default function DashboardPage({ children }) {
  const { themeSettings } = useThemeSettingsStore();

  if (!themeSettings.data.set_up) return <SetUp />;

  return <div>{children}</div>;
}
