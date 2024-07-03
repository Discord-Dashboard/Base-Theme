'use client';

import MainHeader from '../components/headers/MainHeader';
import { ThemeSettingsProvider } from '../context/ThemeSettingsContext';

export default function Home() {
  return (
    <ThemeSettingsProvider>
      <main>
        <MainHeader />
      </main>
    </ThemeSettingsProvider>
  );
}
