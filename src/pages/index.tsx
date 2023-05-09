import { Meta } from "@/layouts/Meta";
import Main from "@/templates/Main";
import styles from "@/styles/Home.module.css";
import Card from "@/components/FadingCard";
import SmallServiceCard from "@/components/SmallServiceCard";
import LargeServiceCard from "@/components/LargeServiceCard";
import AboutCard from "@/components/AboutCard";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";
import { useState } from "react";
import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  // TODO change baseURL to your own
  baseURL: "https://example.com/",
  timeout: 1000,
});

const Index = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!data.name || !data.email || !data.message) {
        alert("Please fill all the fields");
        return;
      }
      const res = await axiosInstance.post("/", data);
      console.log(res);
      setData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Main
      meta={
        <Meta
          title="X-resilient"
          description="X-resilient website made with Next.js."
        />
      }
    >
      <section
        className={`bg-black min-h-screen w-full px-4 lg:px-[8%] flex flex-col justify-center items-center ${styles.linebg}`}
      >
        <div
          className={`flex flex-col items-center w-full md:w-[50%] h-[60vh] justify-center gap-8`}
        >
          <h4 className="text-center text-4xl md:text-6xl text-white font-bold">
            End-to-End Solution For Web3 Development
          </h4>
          <span className="text-white/50 text-center text-xl md:text-2xl">
            Designing, Development, Deployment of NFT&apos;s , Daap, Smart
            Contract Ready to work with Entertainment, Crypto, Financial
            Industry
          </span>
          <button className="bg-white text-black text-xl md:text-2xl px-16 py-4 rounded-full h-fit">
            Get Started
          </button>
        </div>
        <div className="grid grid-cols-1 gap-20 md:gap-16 lg:gap-4 md:grid-cols-2 lg:grid-cols-4 mt-20 w-full">
          {/* TODO provide image source as prop, see first one for url example and second for static asset */}
          <Card
            title="Metaverse"
            image="data:image/jpeg;base64,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"
          />
          <Card title="NFT Collection" image="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" />
          <Card title="DAPP" image="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/957329/ethereum-name-service-dapp-tutorial-08de2d66b422d12b766420857f0428b6.png"/>
          <Card title="Token" image="https://blog.liquid.com/hubfs/Crypto-Coin-vs-Token.jpg"/>
        </div>
      </section>

      <section
        className={`bg-black min-h-screen w-full px-4 lg:px-[8%] flex flex-col mt-10 md:mt-20 gap-20 pb-40 ${styles.revlinebg}`}
      >
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* TODO provide image source as prop, see first one for  example */}
          <SmallServiceCard
            image="https://tokyotechie.com/images/crypto-coin-devlopment.png"
            title="Token Development"
            description="With our token development services, you can transform your business, unlock new revenue streams, and engage with a global community of digital enthusiasts. Discover the power of tokens with Xresilient, your trusted partner in blockchain innovation."
          />
          <SmallServiceCard 
          image="https://i0.wp.com/thefulcrum.ca/wp-content/uploads/2023/02/nft-2-scaled.jpg?fit=2560%2C1404&ssl=1"
          title="NFT Designin, Development"
          description="With our NFT design and development services, you can unleash your creativity, establish digital ownership, and engage with a global community of collectors and enthusiasts. Discover the power of NFTs with Xresilient, your trusted partner in unlocking the potential of the digital art and collectibles market."/>
          <SmallServiceCard 
          image="https://venturebeat.com/wp-content/uploads/2022/10/GettyImages-1363709340-BlackSalmon-e1672419836160.jpg?fit=2270%2C1135&strip=all"
          title="DEX, CEX Development"
          description="With our DEX and CEX development services, you can create a secure, reliable, and user-centric exchange platform that caters to the needs of traders worldwide. Experience the future of trading with Xresilient, your trusted partner in building innovative and scalable exchange solutions."/>
        </div>
        <div className="grid rid-cols-1 md:grid-cols-2 gap-8">
          {/* TODO provide image source as prop, see first one for  example */}
          <LargeServiceCard
            image="https://miro.medium.com/v2/resize:fit:1400/1*qSDGiOam_R2PwVBYbtpcWA.jpeg"
            title="Web2 to Web3 Transformation"
            description="With our Web2 to Web3 transformation services, you can unlock new levels of transparency, security, and user empowerment. Embrace the decentralized web with Xresilient, your trusted partner in Web3 innovation."
          />
          <LargeServiceCard 
          image="https://www.xrtoday.com/wp-content/uploads/2022/10/What_Web3_Going_2023-1280x720.jpg"
          title="Web3 Consultation and Services"
          description="With our Web3 consultation and services, you can unlock the true potential of decentralized technologies, transform your business, and thrive in the new decentralized era. Embrace the future of the internet with Xresilient, your trusted partner in Web3 innovation and success."/>
        </div>
      </section>

      <section className="bg-black min-h-screen w-full px-4 lg:px-[20%] flex flex-col mt-10 md:mt-20 gap-28 items-center">
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
          About Us
        </h2>

        <div className="flex flex-col md:flex-row md:gap-40 gap-8">
          <AboutCard
            image="/assets/sangam.jpg"
            name="Sangam Patil"
            role="Founder & CEO"
          />
          <AboutCard 
          image="/assets/tanuj.jpg"
          name="Tanuj Baware"
          role="Founder"/>
        </div>
      </section>

      <section
        className={`bg-black min-h-screen w-full px-4 lg:px-[8%] mt-10 md:mt-20 items-center ${styles.toprightgradient}`}
      >
        <div className="flex flex-col items-center w-full justify-center gap-20 border-4 border-primary rounded-2xl pt-8 px-4 md:px-20 pb-40">
          <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row md:gap-20 gap-8 w-full">
            <div className="flex flex-col gap-8 text-left">
              <h3 className="text-white text-2xl md:text-4xl font-bold">
                Let&apos;s discuss on something
                <span className="text-primary"> cool</span> together
              </h3>
              <span className="text-white text-xl md:text-2xl font-bold p-8">
                <HiMail className="text-primary text-3xl inline-block mr-2" />
                sxtitsolutions@gmail.com
              </span>
              <span className="text-white text-xl md:text-2xl font-bold p-8 border-4 border-primary rounded-2xl bg-primary/50">
                <HiPhone className="text-primary text-3xl inline-block mr-2" />
                +91 9172378503<br></br>
                <HiPhone className="text-primary text-3xl inline-block mr-2" />
                +91 8408888799<br></br>
                <HiPhone className="text-primary text-3xl inline-block mr-2" />
                +91 9325831463
              </span>
              <span className="text-white text-xl md:text-2xl font-bold p-8">
                <HiLocationMarker className="text-primary text-3xl inline-block mr-2" />
                Yewalewadi, Pune, Maharashtra 411048.
              </span>
            </div>
            <div className="flex flex-col gap-8 bg-white rounded-2xl p-8 w-full border-primary border-4">
              <h5 className="text-black text-lg md:text-2xl">Your Name</h5>
              <input
                type="text"
                className="bg-white text-black text-xl md:text-2xl px-4 py-2 rounded-2xl border-2 border-primary"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <h5 className="text-black text-lg md:text-2xl">Your Email</h5>
              <input
                type="email"
                className="bg-white text-black text-xl md:text-2xl px-4 py-2 rounded-2xl border-2 border-primary"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              <h5 className="text-black text-lg md:text-2xl">Your Message</h5>
              <textarea
                className="bg-white text-black text-xl md:text-2xl px-4 py-2 rounded-2xl border-2 border-primary"
                name="message"
                value={data.message}
                onChange={handleChange}
              />
              <button
                onClick={handleSubmit}
                className="bg-primary text-white text-lg md:text-2xl px-4 md:px-16 py-4 rounded-2xl h-fit w-fit flex items-center gap-2 hover:bg-primary/80 transition-all"
              >
                <BsFillSendFill className="text-lg md:text-2xl inline-block mr-2" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black w-full px-4 lg:px-[8%] flex flex-col mt-10 md:mt-20 gap-10 md:w-[40%] text-left">
        <h5 className="text-white text-xl md:text-2xl font-bold">
          X-Resilient
        </h5>
        <span className="text-gray-300 text-base md:text-xl">
          A venture by SXT IT Solutions.
        </span>
      </section>

      <footer className="border-t-2 border-gray-500 flex w-full justify-center items-center mt-10 md:mt-20 text-center p-8">
        <span className="text-gray-300">© 2023 X-Resilient. All Rights Resereved.<br></br>
        Designed by Team <a href="https://www.xresilient.com/">xresilient.com</a></span>
      </footer>
    </Main>
  );
};

export default Index;
