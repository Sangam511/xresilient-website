import Image from "next/image";

interface LargeServiceCardProps {
  image?: string;
  title?: string;
  description?: string;
}

const LargeServiceCard = ({
  image = "https://source.unsplash.com/300x300/?web3",
  title = "Web2 to Web3 Transformation",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa voluptate corrupti tempora doloremque nemo ratione? Earum cumque deserunt cum dignissimos unde, dolore, excepturi non iure et, veritatis officia eveniet consequatur.",
}: LargeServiceCardProps) => {
  return (
    <div
      className={`flex flex-col w-full h-full bg-white/10 rounded-3xl border-primary border-2 backdrop-filter backdrop-blur-sm p-12 gap-6 pb-40`}
    >
      <div className="h-28 w-28 rounded-full">
        <Image
          src={image}
          alt="web3"
          width={112}
          height={112}
          className="rounded-full border-2 border-primary"
        />
      </div>

      <h4 className="text-white text-2xl font-bold">{title}</h4>

      <span className="text-white text-xl">{description}</span>
    </div>
  );
};

export default LargeServiceCard;
