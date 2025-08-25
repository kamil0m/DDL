import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import NavBar from "./NavBar";
import HeaderButtons from "./HeaderButtons";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  
  const handleLanguageChange = (newLang: string) => {
    console.log('Language changed to:', newLang);
    // + if needed additional logic for example: localStorage updates, etc.
  };

  return (
    <header className="lg:fixed flex justify-center bg-white z-20 w-full shadow-sm">
      <div className="container flex flex-row justify-between items-center w-full py-4 text-xl">
        <div className="flex flex-row justify-between lg:justify-start items-center gap-10 w-full">
          < Logo size="h-[3rem] lg:h-[4rem] w-auto" />
          <div className="lg:hidden flex">
            <LanguageToggle onLanguageChange={handleLanguageChange} />
          </div>
          <div className="lg:hidden flex">
            <HamburgerMenu />
          </div>
          <div className="hidden lg:block">
            < NavBar />
          </div>
          {/* < SearchBar /> */}
        </div>
        <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:min-w-[30rem]">
          <LanguageToggle onLanguageChange={handleLanguageChange} />
          <HeaderButtons />
        </div>
      </div>
    </header>
  )
}
