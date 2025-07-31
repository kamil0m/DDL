import { useTranslation } from 'react-i18next'


export function ImportantBadge() {
    const { t } = useTranslation();

    return (
        <span className="bg-orange badge">
            {t("news.badges.important")}
        </span>
    );
}

export function SoonBadge() {
    const { t } = useTranslation();

    return (
        <span className="bg-blue badge">
            {t("news.badges.soon")}
        </span>
    );
}

export function NewBadge() {
    const { t } = useTranslation();

    return (
        <span className="bg-skyblue badge">
            {t("news.badges.new")}
        </span>
    );
}

export function PublishedBadge({ daysAgo }: { daysAgo: number }) {
    const { t } = useTranslation();

    return (
        <span className="bg-green badge">
            {t("news.badges.published")} {daysAgo} {t("news.badges.days")}
        </span>
    );
}