import { Dashboard } from '@discord-dashboard/core';
import Theme from '@discord-dashboard/typings/dist/Dashboard/Theme';
export default class BaseTheme implements Theme {
    name: string;
    id: string;
    docs_url: string;
    Initialize(dashboard: Dashboard): Promise<void>;
}
