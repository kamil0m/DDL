import { useTranslation } from 'react-i18next'


export function ImportantBadge() {
    const { t } = useTranslation();

    return (
        <span className="bg-orange text-white font-medium text-sm sm:text-base md:text-lg px-2 py-1 rounded">
            {t("news.badges.important")}
        </span>
    );
}

export function SoonBadge() {
    const { t } = useTranslation();

    return (
        <>  <span className="bg-blue text-white font-medium text-sm sm:text-base md:text-lg px-2 py-1 rounded">
            {t("news.badges.soon")}
        </span>
        <span className="mx-1/2 border-1 border-gray-300 h-7 inline-block"></span>
        </>
      
        
    );
}

export function NewBadge() {
    const { t } = useTranslation();

    return (
        <span className="bg-skyblue text-white font-medium text-sm sm:text-base md:text-lg px-2 py-1 rounded">
            {t("news.badges.new")}
        </span>
    );
}

export function PublishedBadge({ daysAgo }: { daysAgo: number }) {
    const { t } = useTranslation();

    return (
        <span className="bg-green text-white font-medium text-sm sm:text-base md:text-lg px-2 py-1 rounded">
            {t("news.badges.published")} {daysAgo} {t("news.badges.days")}
        </span>
    );
}