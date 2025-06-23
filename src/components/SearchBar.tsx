import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const { t } = useTranslation();

  // ToDo: Add search functionality

  return (
    <div>
      <form className="flex flex-row">
        <label htmlFor="search" className="flex flex-row items-center border-2 border-gray-300 rounded-lg p-2 focus-within:border-accent">
          <FiSearch className="mx-2" />
          <input id="search" type="text" placeholder={t("header.search")} className="focus:outline-none" />
        </label>
      </form>
    </div>
  )
}
