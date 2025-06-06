export default function LanguageToggle() {

    const switchLanguage = (e) => {
        const toggle: HTMLInputElement = e.currentTarget;
        const languageSwitches = toggle.querySelectorAll('.switch');
        languageSwitches.forEach((languageSwitch) => {
            languageSwitch.classList.toggle('switch-on');
        });
        // ToDo : Add animated transition in CSS
    }

    return (
        <label onClick={switchLanguage} id="toggle" className="flex flex-row justify-between items-center gap-1.5 h-[2.5em] bg-accent rounded-full text-sm px-1 py-3 cursor-pointer">
            {/* ToDo : Integrate the checkbox to the multilingual handler */}
            {/* <input id="language-toggle" className="hidden" type="checkbox" /> */}
            <span className="switch switch-on">PL</span>
            <span className="switch">FR</span>
        </label>
    )
}