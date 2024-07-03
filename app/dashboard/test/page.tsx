'use client';

import { useThemeSettingsStore } from '../../../state/ThemeStore';

export default function TestDashboardPage() {
  const { themeSettings, fetchThemeSettings } = useThemeSettingsStore();

  return <a>{JSON.stringify(themeSettings)}</a>;
}
