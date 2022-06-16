import { Navigation } from "./navigation";

export interface Menu {
    icon: string;
    id: number;
    navigationList: Navigation[];
    order: number;
    title: string;
    subRoute?: string;
}