'use client';

import { useThemeSettingsStore } from '../../state/ThemeStore';

export default function MainFooter() {
  const { themeSettings } = useThemeSettingsStore();

  return (
    <footer className="bg-white mt-auto">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-6 pt-20 sm:pt-24 lg:px-8">
        {themeSettings.data.footer.main.length > 0 && (
          <nav
            className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            {themeSettings.data.footer.main.map((item) => (
              <div key={item.name} className="pb-6">
                <a
                  href={item.href}
                  className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
        )}
        {themeSettings.data.footer.social.length > 0 && (
          <div className="mt-10 flex justify-center space-x-10">
            {themeSettings.data.footer.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
        <p
          className={`${
            themeSettings.data.footer.main.length > 0 ||
            themeSettings.data.footer.social.length > 0
              ? 'mt-10 '
              : ''
          }text-center text-xs leading-5 text-gray-500`}
        >
          &copy; {new Date().getFullYear()}{' '}
          {themeSettings.data.footer.company.name}. All rights reserved.
          <br />
          Powered with {'<3'} by Discord-Dashboard from Assistants Technologies
        </p>
      </div>
    </footer>
  );
}
