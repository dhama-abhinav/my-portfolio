import React from 'react'
import { SkillSets } from '../components/SkillSets'
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import AWS from '../public/assets/skills/aws.png';
import Vercel from '../public/assets/skills/vercel.svg';
import Image from 'next/image';

export const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What I can do</h2>
        </div>
        <div className='pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
            <SkillSets title={"HTML"} url={Html}  />
            <SkillSets title={"CSS"} url={Css}  />
            <SkillSets title={"JAVASCRIPT"} url={Javascript}  />
            <SkillSets title={"REACT JS"} url={ReactImg}  />
            <SkillSets title={"NEXT JS"} url={Vercel}  />
            <SkillSets title={"TAILWIND"} url={Tailwind}  />
            <SkillSets title={"GITHUB"} url={Github}  />
            <SkillSets title={"AWS"} url={AWS}  />
            <SkillSets title={"FIREBASE"} url={Firebase}  />
            <SkillSets title={"TAILWIND"} url={Tailwind}  />
        </div>
    </div>
  )
}
