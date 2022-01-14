import { SectionHeading } from "../Styles/common/SectionHeading.styled";
import { IconWrapper, SingleSkill, SkillsItems, StyledSkillsSection } from "../Styles/sections/SkillsSection.styled";
import {GrReactjs} from "react-icons/gr";
import {MdDeveloperMode} from "react-icons/md";
import {FaLaptopCode} from "react-icons/fa"

export const SkillsSection =()=>{
    return(
        <>
        <StyledSkillsSection id="skills">
            <SectionHeading>
                <h1>Skills</h1>
                <p>Here are some of my Skills</p>
            </SectionHeading>
            <SkillsItems>
                <SingleSkill>
                    <IconWrapper>
                        <GrReactjs/>
                        
                    </IconWrapper>
                    
                    <h1>Web development</h1>
                    <p>I develop full stack web applications using MERN Stack (Mongodb,Express,React,Node) , Html, CSS, Javascript. I also have knowledge of many web technologies like Angular Js,php,laravel
                        Next js,bootstrap,tailwind css, styled components, material ui, firebase and Github.
                    </p>
                </SingleSkill>

                <SingleSkill>
                    <IconWrapper>
                        <MdDeveloperMode/>
                        
                    </IconWrapper>
                    
                    <h1>App Development</h1>
                    <p>I develop mobile applications using Kotlin and React Native and . I have knowledge of Android Studio and Databases.<p/>
                    </p>
                </SingleSkill>

                <SingleSkill>
                    <IconWrapper>
                        <FaLaptopCode/>
                        
                    </IconWrapper>
                    
                    <h1>Programming Languages And Technologies</h1>
                    <p>I have a good knowledge of Java and I have knowledge of many programming languages like C, C++, Python, Kotlin,Javascript and other technologies including MySql, Github and Vs Code<p/>
                    </p>
                </SingleSkill>
            </SkillsItems>
        </StyledSkillsSection>
        <hr/>
        </>
    );
};