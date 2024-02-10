import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Sidebar from "./SideBar";

const mobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
      <button className=' md:hidden'>
        <GiHamburgerMenu className=' text-3xl'/>
        </button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar/>
      </SheetContent>
    </Sheet>
  )
}

export default mobileSidebar