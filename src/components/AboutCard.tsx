import Image from "next/image";

import { AiOutlineGithub } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { BsReddit } from "react-icons/bs";
import Link from "next/link";

interface AboutCardProps {
  image?: string;
  name?: string;
  role?: string;
}

const AboutCard = ({image="https://source.unsplash.com/1000x1000/?portrait" , name="Tanuj Baware", role="Founder"}: AboutCardProps) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-[75%] h-full border-4 border-primary rounded-t-2xl border-b-0">
        <Image
          src={image}
          width={1000}
          height={1000}
          className="rounded-t-xl"
          alt="Portrait"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full bg-black rounded-2xl border-4 border-primary p-10 gap-6">
        <h4 className="text-white text-2xl font-bold text-center">
          {name}
        </h4>
        <span className="text-xl text-center text-gray-300 font-medium">
          {role}
        </span>
        <div className="flex gap-4">
          {/* TODO change links */}
          <Link href="github.com">
            <AiOutlineGithub className="text-4xl text-white hover:text-primary transition-colors cursor-pointer" />
          </Link>
          <Link href="discord.com">
            <RiDiscordFill className="text-4xl text-white hover:text-primary transition-colors cursor-pointer" />
          </Link>
          <Link href="reddit.com">
            <BsReddit className="text-4xl text-white hover:text-primary transition-colors cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
