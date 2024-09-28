// import { WiSolarEclipse } from "react-icons/wi";
import { MdLightMode } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

export function DarkModeSwitch(): JSX.Element {
  return (
    <div className="fixed bottom-12 right-4 flex items-center justify-between bg-nero w-16 h-8 rounded-full">
      <MdLightMode className="mx-1 text-gray-30" />
      <IoIosMoon size={20} className="mx-1 w-7 h-7 p-1 bg-[#0000FF] rounded-full text-white" />
    </div>
  )
}
