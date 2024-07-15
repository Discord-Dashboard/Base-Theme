'use client';

import MainFooter from '../components/footers/MainFooter';
import MainHeader from '../components/navs/MainHeader';
import SetUp from '../components/set_up/SetUp';
import { useThemeSettingsStore } from '../state/ThemeStore';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function Home({ children }) {
  const { themeSettings } = useThemeSettingsStore();

  const { data } = useSession();

  if (!themeSettings.data.set_up)
    return (
      <>
        <MainHeader />
        <button
          onClick={() => signIn('discord')}
          className="text-base py-3 px-4 bg-[#5865F2]"
        >
          Login
        </button>
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
