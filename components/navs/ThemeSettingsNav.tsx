'use client';

import { useUserData } from '../../state/UserStore';
import GrapeEditor from '../dnd/GrapeEditor';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  {
    name: 'Theme',
    href: '#',
    icon: HomeIcon,
    content: <h1>Theme</h1>,
  },
  {
    name: 'Navigation',
    href: '#',
    icon: UsersIcon,
    content: <h1>Navigation</h1>,
  },
  {
    name: 'Footer',
    href: '#',
    icon: FolderIcon,
    content: <h1>Footer</h1>,
  },
  {
    name: 'Pages',
    href: '#',
    icon: CalendarIcon,
    content: <GrapeEditor />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ThemeSettingsNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [nowSelected, setNowSelected] = useState('Theme');

  const { userSession } = useUserData();

  return (
    <>
      <div>
        <Dialog
          className="relative z-50 lg:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    className="-m-2.5 p-2.5"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul className={'pb-6'}>
                        <Link
                          href="/"
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          <span aria-hidden="true">{'<'}</span> Go back home
                        </Link>
                      </ul>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => setNowSelected(item.name)}
                          >
                            <a
                              href={item.href}
                              className={classNames(
                                item.name === nowSelected
                                  ? 'bg-gray-50 text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.name === nowSelected
                                    ? 'text-indigo-600'
                                    : 'text-gray-400 group-hover:text-indigo-600',
                                  'h-6 w-6 shrink-0',
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-12 w-auto"
                src="/vector-logo.png"
                alt="Discord-Dashboard"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className={'pb-6'}>
                    <Link
                      href="/"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      <span aria-hidden="true">{'<'}</span> Go back home
                    </Link>
                  </ul>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        onClick={() => setNowSelected(item.name)}
                      >
                        <a
                          href={item.href}
                          className={classNames(
                            item.name === nowSelected
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.name === nowSelected
                                ? 'text-indigo-600'
                                : 'text-gray-400 group-hover:text-indigo-600',
                              'h-6 w-6 shrink-0',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src={
                        userSession.user!.avatar
                          ? `https://cdn.discordapp.com/avatars/${userSession.user!.id}/${userSession.user!.avatar}.png?size=128`
                          : `https://cdn.discordapp.com/embed/avatars/0.png?size=128`
                      }
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">
                      {userSession.user!.global_name}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Theme Settings
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-50"
              src={
                userSession.user!.avatar
                  ? `https://cdn.discordapp.com/avatars/${userSession.user!.id}/${userSession.user!.avatar}.png?size=128`
                  : `https://cdn.discordapp.com/embed/avatars/0.png?size=128`
              }
              alt=""
            />
          </a>
        </div>

        <main className="lg:pl-72">
          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            {navigation.find((nav) => nav.name === nowSelected).content}
          </div>
        </main>
      </div>
    </>
  );
}
