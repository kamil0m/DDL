import Logo from "./Logo"
import { FaFacebookF } from "react-icons/fa";
import FooterNav from "./FooterNav";
import FooterConditions from "./FooterConditions";
import { useTranslation } from "react-i18next";


export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="container flex flex-row justify-between h-[250px] my-20 text-darkgrey text-lg font-light bg-dots">
      <div className="flex flex-row xmax-w-1/2 gap-15">

        <div className="flex flex-col justify-between xmax-w-3/5 gap-6">
          < Logo size="h-[8rem]" />
          <p className="max-w-[20rem]">
            Sed ut perspiciatis undmnis is iste
            natus error sit amet voluptatem
            totam rem aperiam.
          </p>
        </div>

        <div className="flex flex-row gap-6">
          < FooterNav />
          < FooterConditions />
        </div>

      </div>
      <div className="flex flex-col">
        <h5>{t("footer.followus")}</h5>
        <div className="flex flex-col mt-10 gap-4">
          <a target="_blank" href="https://www.facebook.com/p/Dzien-dobry-Lille-Bonjour-Lille-61559848594019/" className="button-blue w-[2rem] h-[2rem] inline-flex items-center justify-center rounded-full">
            <FaFacebookF />
          </a>
          <p className="">{t("footer.copyrights")}</p>
        </div>
      </div>
    </div>
  )
}
