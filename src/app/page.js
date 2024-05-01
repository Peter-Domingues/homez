import Home_V1 from "./(home)/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "Anastasia Benedeti | Real Estate Associate",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V1 />
    </Wrapper>
  );
}
