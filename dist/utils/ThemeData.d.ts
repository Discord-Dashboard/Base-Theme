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
export declare const defaultThemeData: ThemeData;
