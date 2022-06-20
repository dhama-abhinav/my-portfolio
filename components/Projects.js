import React from "react";
import { Project } from "../components/Project";
import AIRBNB from "../public/assets/projects/airbnb.PNG";
import AMAZON from "../public/assets/projects/amazon.PNG";
import COVID from "../public/assets/projects/covid.PNG";
import GOOGLE from "../public/assets/projects/google.PNG";
import HULU from "../public/assets/projects/hulu.PNG";

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#473bf3] font-semibold">
          Projects
        </p>
        <h2 className="py-4">What I have Built:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Project title={"AMAZON"} projectURL="/amazon" url={AMAZON} />
          <Project title={"COVID"} projectURL="/covid" url={COVID} />
          <Project title={"GOOGLE"} projectURL="/google" url={GOOGLE} />
          <Project title={"HULU"} projectURL="/hulu" url={HULU} />
          <Project title={"AIRBNB"} projectURL="/airbnb" url={AIRBNB} />
        </div>
      </div>
    </div>
  );
};
