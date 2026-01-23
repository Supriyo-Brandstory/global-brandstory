import CommonLinks from "@/component/pages/common/CommonLinks";

export const Openings = () => {
       const jobs = [
           { title: "Digital Marketing Manager (Search) (Cape Town)" },
           { title: "Web Development" },
           { title: "Graphic Designer" },
           { title: "Content Writer" },
           { title: "PPC Executive" },
           { title: "Copy Writer" },
   
           { title: "Digital Marketing Manager (Search) (Cape Town)" },
           { title: "Web Development" },
       ];
   
  return (
     <CommonLinks
                title="Current Openings"
                data={jobs}
                activeIndex={0}
            />
  );
};