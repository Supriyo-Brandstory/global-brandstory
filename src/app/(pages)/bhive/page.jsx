import { Banner } from "@/component/pages/Bhive/Banner";
import { Stats } from "@/component/pages/Bhive/Stats";

const BhivePage = () => {
  return (
    <>
      <Banner />
      <Stats />
    </>
  );
};

export default BhivePage;

export const metadata = {
  title: "Bhive | Global Brandstory",
  description: "Bhive page for Global Brandstory",
};
