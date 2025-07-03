import { EventNews } from "../models/interfaces/EventNews";

export function isSoon(item: EventNews): boolean {
    const daysThreshold = 7;
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (!item.Data_wydarzenia) {
        return false;
    }

    const pubDate = new Date(item.Data_wydarzenia);
    pubDate.setHours(0, 0, 0, 0);
    const diff = Math.floor((today.getTime() - pubDate.getTime()) / (1000 * 60 * 60 * 24));

    return diff >= 0 && diff <= daysThreshold;
}

export function isNew(item: EventNews): boolean {
    const daysThreshold = 1;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!item.Data_wydarzenia) {
        return false;
    }

    const eventDate = new Date(item.Data_wydarzenia);
    eventDate.setHours(0, 0, 0, 0);
    const diffTime = today.getTime() - eventDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays <= daysThreshold;
}

export function publishedDaysAgo(item: EventNews): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!item.Data_publikacji) {
        return 0;
    }

    const pubDate = new Date(item.Data_publikacji);
    pubDate.setHours(0, 0, 0, 0);
    const diff = Math.floor((today.getTime() - pubDate.getTime()) / (1000 * 60 * 60 * 24));

    return diff >= 0 ? diff : 0;
}