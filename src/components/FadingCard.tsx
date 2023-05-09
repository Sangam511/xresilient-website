import Image from "next/image";

interface CardProps {
  title: string;
  image?: string;
}

const Card = ({ title = "Card Title", image = "https://source.unsplash.com/100x100/?metaverse" }: CardProps) => {
  return (
    <div className="relative rounded-t-xl border-2 border-primary border-b-0 w-full bg-gradient-to-b from-white/20 to-transparent backdrop-filter backdrop-blur-sm">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/50 overflow-hidden border-2 border-primary">
          <Image
            src={image}
            alt="Image"
            fill
            sizes="16"
            className="object-cover rounded-full border-primary border-2"
          />
        </div>
      </div>
      <div className="pt-20 pb-60">
        <h2 className="text-4xl font-bold text-center">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
