import dynamic from "next/dynamic";
import { HomeComponent } from "@/components/home";

export const metadata = {
  title: "Anastasia Benedeti | Real Estate Associate",
};

const index = () => {
  return <HomeComponent />;
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
