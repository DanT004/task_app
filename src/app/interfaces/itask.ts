import { Time } from "@angular/common";

export interface Itask {
    title:string;
    description:string;
    category:string;
    priority_level:string;
    progress_level:string;
    task_date:Date;
    task_time:Time;
};

