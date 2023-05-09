import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineClose } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { BsReddit } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-10 w-full py-4 shadow-md transition-transform px-4 lg:px-[8%] pt-4 lg:pt-14 bg-black/70`}
    >
      <div className="flex flex-col">
        <div className="flex h-16 items-center justify-between">
          {/* TODO change all links */}
          <Link href="/" className="">
            <Image
              // TODO change to /assets/imageName.extension
              src="/assets/logo1.png"
              alt="x-resilient logo"
              width={150}
              height={100}
            />
          </Link>
          <div className="flex w-full">
            <ul className="hidden items-center lg:flex justify-evenly w-full lg:px-20 gap-4">
              <li>
                <Link
                  href="#services"
                  className={`text-2xl font-medium text-white hover:border-b-2 border-primary`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={`text-2xl font-medium text-white hover:border-b-2 border-primary`}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className={`text-2xl font-medium text-white hover:border-b-2 border-primary`}
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="hidden items-center lg:flex self-end gap-4">
              <li>
                <Link href="github.com">
                  <AiOutlineGithub
                    className={`text-5xl font-medium text-white hover:color-primary`}
                  />
                </Link>
              </li>
              <li>
                <Link href="discord.com">
                  <RiDiscordFill
                    className={`text-5xl font-medium text-white hover:color-primary`}
                  />
                </Link>
              </li>
              <li>
                <Link href="reddit.com">
                  <BsReddit
                    className={`text-5xl font-medium text-white hover:color-primary`}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              {isMenuOpen ? (
                <AiOutlineClose
                  className="h-8 w-8"
                  color="white"
                  onClick={toggleMenu}
                />
              ) : (
                <GiHamburgerMenu
                  className="h-8 w-8"
                  color="white"
                  onClick={toggleMenu}
                />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col items-start gap-4 lg:hidden">
            <ul className="mt-4 flex flex-col items-start gap-4 lg:hidden">
              <li>
                <Link
                  href="/"
                  className={`mr-4 px-3 py-2 text-lg font-medium text-white hover:border-b-2`}
                  style={{
                    borderColor: "#F18500",
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`mr-4 px-3 py-2 text-lg font-medium text-white hover:border-b-2`}
                  style={{
                    borderColor: "#F18500",
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`mr-4 px-3 py-2 text-lg font-medium text-white hover:border-b-2`}
                  style={{
                    borderColor: "#F18500",
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="flex items-start gap-4 lg:hidden">
              <li>
                <Link href="github.com">
                  <AiOutlineGithub
                    className={`text-5xl font-medium text-white hover:color-primary`}
                  />
                </Link>
              </li>
              <li>
                <Link href="discord.com">
                  <RiDiscordFill
                    className={`text-5xl font-medium text-white hover:color-primary`}
                  />
                </Link>
              </li>
              <li>
                <Link href="reddit.com">
                  <BsReddit
                    className={`text-5xl font-medium text-white hover:color-primary`}
                  />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    // <nav className="bg-transparent flex flex-col md:flex-row items-start md:justify-between px-4 md:px-[8%] fixed pt-4 md:pt-16 w-full">
    //   <div className="flex items-center justify-center">
    //     <Image
    //       src="https://source.unsplash.com/150x80?random"
    //       alt="logo"
    //       height={80}
    //       width={150}
    //     />
    //   </div>
    //   <div className="hidden md:flex justify-evenly items-center w-full">
    //     <Link href="#services">
    //       <span className="text-white hover:text-primary cursor-pointer text-2xl">
    //         Services
    //       </span>
    //     </Link>
    //     <Link href="#about">
    //       <span className="text-white hover:text-primary cursor-pointer text-2xl">
    //         About us
    //       </span>
    //     </Link>
    //     <Link href="#contact">
    //       <span className="text-white hover:text-primary cursor-pointer text-2xl">
    //         Contact us
    //       </span>
    //     </Link>
    //   </div>
    //   <div className="flex gap-8 justify-center items-center">
    //     <Link href="github.com">
    //       <AiOutlineGithub className="text-white hover:text-primary cursor-pointer text-4xl" />
    //     </Link>
    //     <Link href="discord.com">
    //       <RiDiscordFill className="text-white hover:text-primary cursor-pointer text-4xl" />
    //     </Link>
    //     <Link href="reddit.com">
    //       <BsReddit className="text-white hover:text-primary cursor-pointer text-4xl" />
    //     </Link>
    //   </div>
    //   <div className="md:hidden flex items-center justify-center">
    //     <GiHamburgerMenu
    //       className="text-white hover:text-primary cursor-pointer text-4xl"
    //       onClick={toggleMenu}
    //     />
    //   </div>
    // </nav>
  );
};

export default Navbar;
