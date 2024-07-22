'use client';

import MainFooter from '../components/footers/MainFooter';
import MainHeader from '../components/navs/MainHeader';
import SetUp from '../components/set_up/SetUp';
import { useThemeSettingsStore } from '../state/ThemeStore';

export default function Home({ children }) {
  const { themeSettings } = useThemeSettingsStore();

  if (!themeSettings.data.set_up)
    return (
      <>
        <MainHeader />
        <SetUp />
        <MainFooter />
      </>
    );

  return (
    <>
      <MainHeader />

      <MainFooter />
    </>
  );
}
