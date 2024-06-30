import Theme from "@discord-dashboard/typings/dist/Dashboard/Theme";
import { Dashboard } from "@discord-dashboard/core";
export default class BaseTheme implements Theme {
    name: string;
    Initialize(dashboard: Dashboard): Promise<void>;
}
