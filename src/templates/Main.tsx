import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}
    <Navbar />
    <main className="bg-black flex flex-col text-white pt-24 lg:pt-36">{props.children}</main>
  </div>
);

export default Main;
