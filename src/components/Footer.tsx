import Logo from "./Logo"
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import FooterNav from "./FooterNav";
import FooterConditions from "./FooterConditions";

export default function Footer() {
  return (
    <div className="container flex flex-row justify-between h-[300px] my-20 text-darkgrey text-lg font-light bg-dots">
      <div className="flex flex-row max-w-1/2 gap-6">

        <div className="flex flex-col justify-between max-w-1/2 gap-6">
          < Logo size="h-[8rem] w-auto" />
          <p className="">
            Sed ut perspiciatis undmnis is iste
            natus error sit amet voluptatem
            totam rem aperiam.
          </p>
          <div className="flex flex-col gap-2">
            <p>Important contact Name</p>
            <div className="flex flex-row items-center gap-2">
              <BsTelephone className="text-blue"/>
              <span className="text-black">(+33) 06 66 66 66 66</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          < FooterNav />
          < FooterConditions />
        </div>

      </div>
      <div className="flex flex-col">
        <h5>Follow Us On</h5>
        <div className="flex flex-col mt-10 gap-4">
          <a target="_blank" href="https://www.facebook.com/p/Dzien-dobry-Lille-Bonjour-Lille-61559848594019/" className="button-blue w-[2rem] h-[2rem] inline-flex items-center justify-center rounded-full">
            <FaFacebookF />
          </a>
          <p className="">© 2025 DDL</p>
        </div>
      </div>
    </div>
  )
}
