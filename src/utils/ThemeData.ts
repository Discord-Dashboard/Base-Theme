export type ThemeData = {
  set_up: boolean;
  theme: 'light' | 'dark';
  navigation: {
    name: string;
    href: string;
  }[];
  footer: {
    company: {
      name: string;
    };
    main: {
      name: string;
      href: string;
    }[];
    social: {
      name: string;
      href: string;
      icon: (props: any) => any;
    }[];
  };
};

export const defaultThemeData: ThemeData = {
  set_up: false,
  theme: 'light',
  navigation: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Set up',
      href: '/theme',
    },
  ],
  footer: {
    company: {
      name: 'Assistants Technologies',
    },
    main: [],
    social: [],
  },
};
