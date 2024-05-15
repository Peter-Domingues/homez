import Wrapper from "./layout-wrapper/wrapper";
import HomeComponent from "@/components/home";

export const metadata = {
  title: "Anastasia Benedeti | Real Estate Associate",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <HomeComponent />
    </Wrapper>
  );
}
