import Link from "next/link"
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
    return (
      <div className='h-24 flex items-center justify-between'>
        {/* Left */}
        <div className="md:hidden lg:block w-[20%]">
            <Link href="/" className='font-bold text-xl text-blue-500'>ISLAMIC SOCIAL</Link>
        </div>

        {/* Center */}
        <div className="hidden md:flex w-50%">
            {/* Links */}
            <div className="flex gap-6 text-gray-600">
              <Link href="/" className="flex gap-2 items-center">
                <Image src="/home.png" alt="homepage" width={16} height={16} />
                <span>Homepage</span>
              </Link>

              <Link href="/" className="flex gap-2 items-center">
                <Image src="/friends.png" alt="homepage" width={16} height={16} />
                <span>Friends</span>
              </Link>

              <Link href="/" className="flex gap-2 items-center">
                <Image src="/stories.png" alt="homepage" width={16} height={16} />
                <span>Stories</span>
              </Link>
            </div>
        </div>

        {/* Right */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
            <MobileMenu />
        </div>
      </div>
    )
  }
  
  export default Navbar