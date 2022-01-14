import { FooterNav, MadebyRewash, StyledFooter } from "../Styles/layout/Footer.styled";

export const Footer =()=>{
    return(
        <>
        <StyledFooter>
            <FooterNav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact" >Contact</a>
            </FooterNav>
            <MadebyRewash>
                Made By Rewash Chettri With React
            </MadebyRewash>
            <div>
                &copy; Rewash Chettri
            </div>
        </StyledFooter>
        </>
    );
};