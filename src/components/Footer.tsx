import Logo from "./Logo"
import { BsTelephone } from "react-icons/bs";


export default function Footer() {
  return (
    <div className="container">
      <div className="flex flex-row w-1/2">
        <div className="flex flex-col">
          < Logo size="h-[3rem] w-[3rem]" />
          <p className="text-gray">
            Sed ut perspiciatis undmnis is iste
            natus error sit amet voluptatem
            totam rem aperiam.
          </p>
          <div className="flex flex-col">
            <p>Important contact Name</p>
            <div className="flex flex-row">
              <BsTelephone />
              <span className="text-gray">(+33)666666666</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h5>Strony</h5>
          </div>
          <div className="flex flex-col">
            <h5>Warunki</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
