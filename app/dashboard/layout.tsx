'use client';

import MainFooter from '../../components/footers/MainFooter';
import MainHeader from '../../components/navs/MainHeader';
import SetUp from '../../components/set_up/SetUp';
import { useThemeSettingsStore } from '../../state/ThemeStore';

export default function DashboardPage({ children }) {
  const { themeSettings } = useThemeSettingsStore();

  if (!themeSettings.data.set_up) return <SetUp />;

  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
