import { CTAButton } from "../Styles/common/CTAButton.styled";
import { HeroContent, HeroSocialIcons, StyledArrowDown, StyledHeroSection, SocialIcon } from "../Styles/sections/HeroSection.styled";
import {GiNinjaStar} from "react-icons/gi";
import{FaLinkedin} from "react-icons/fa";
import{FaGithub} from "react-icons/fa";
import{FaFacebook} from "react-icons/fa";
import{FaInstagram} from "react-icons/fa";
export const HeroSection=()=>{
    return <StyledHeroSection id="hero-section">
        <HeroContent>
            <h1>Rewash Chettri</h1>
            <h3>|Computer Science Engineer|</h3>
            <p>HTML . CSS . Javascript . React. Next.js .Java</p>
            <div>
                <CTAButton href="#projects">Projects</CTAButton>
                <CTAButton href="#contact" primary margin="0 0 0 20px">Contact Me</CTAButton>
                <CTAButton href="#" target="_blank" margin="10px 0 0 20px">Download CV</CTAButton>
            </div>
        </HeroContent>
        <StyledArrowDown href="#about">
        <GiNinjaStar/>
        </StyledArrowDown>
        <HeroSocialIcons>
            <SocialIcon href="#" target="_blank">
            <FaLinkedin/>
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
                <FaGithub/>
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
                <FaFacebook/>
            </SocialIcon>
            <SocialIcon href="#" target="_blank">
                <FaInstagram/>
            </SocialIcon>
        </HeroSocialIcons>
    </StyledHeroSection>;
};