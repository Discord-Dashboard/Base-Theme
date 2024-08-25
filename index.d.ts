export interface TGuildData {
    id: string;
    meta: any;
    options: {
        id: string;
        type: string;
        meta: {
            core: any;
        };
        value: any;
        disabled?: boolean;
    }[];
}
