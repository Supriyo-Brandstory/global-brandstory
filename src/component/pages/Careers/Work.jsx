import CommonGridBoxBlack from "@/component/pages/common/CommonGridBoxBlack";

export const Work = () => {
    const data = [
        {
          icon: "/images/Careers/1.png",
          title: "Ownership Without Overhead",
          content: "You’re trusted from day one. No micromanaging—just space to explore, experiment and excel."
        },
        {
          icon: "/images/Careers/2.png",
          title: "Teams That Actually Feel Like Teams",
          content: "Collaboration without ego. Support without conditions. Wins that are shared."
        },
        {
          icon: "/images/Careers/3.png",
          title: "Growth Without Guesswork",
          content: "We invest in you—your skills, your ideas, and your path forward. Learn, lead, repeat."
        },
        {
          icon: "/images/Careers/4.png",
          title: "Work That Hits Different",
          content: "From campaigns to digital experiences—your work will matter to clients and audiences."
        }
    ];
  return (
     <CommonGridBoxBlack title="What It's Like to Work Here" data={data} />
  );
};