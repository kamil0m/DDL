import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  
  // ToDo: Add search functionality

  return (
    <div>
        <form className="flex flex-row">
            <label htmlFor="search" className="flex flex-row items-center border-2 border-gray-300 rounded-lg p-2 focus-within:border-accent">
                <FiSearch className="mx-2"/>
                <input id="search" type="text" placeholder="Szukaj..." className="focus:outline-none" />
            </label>
        </form>
    </div>
  )
}
