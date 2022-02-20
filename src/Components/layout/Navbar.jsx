import {useState} from "react";
import { NavItems } from "../../data/NavItems";
import { LineOne, LineThree, LineTwo, Logo,MenuIcon, Nav, NavItemStyled, NavLink, NavList, Profile, SocialIcons } from "../Styles/layout/Nav.styled"
import{FaLinkedin} from "react-icons/fa";
import{FaGithub} from "react-icons/fa";
import{FaFacebook} from "react-icons/fa";
import{FaInstagram} from "react-icons/fa";
import { CTAButton } from "../Styles/common/CTAButton.styled";
import useScrollDirection from "../../hooks/useScrollDirection";


export const Navbar =() =>{
    const[menuOpen,setMenuOpen]=useState(false);
    const scrollDirection=useScrollDirection("down");
    
    return (
        <>
        <Nav scrollDirection={scrollDirection}>
        
            <div>
                <a href="#hero-section">
                   <Logo src="./images/whitelogo.jpg"/> 
                </a>
            </div>
            <MenuIcon menuOpen={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>
                <LineOne menuOpen={menuOpen}/>
                <LineTwo menuOpen={menuOpen}/>
                <LineThree menuOpen={menuOpen}/>
            </MenuIcon>
            <NavList menuOpen={menuOpen}>
                {NavItems && NavItems.map((navItem,index)=>(
                    <NavItemStyled key={index} index={index} menuOpen={menuOpen} onClick={()=>setMenuOpen(false)}>
                        {navItem.isProfile ? (
                            <NavLink href="#hero-section">
                                <Profile>
                                    <img src="./images/rewashpc.png" alt="Rewash Chettri"/>
                                    <span>Rewash Chettri</span>
                                </Profile>
                            </NavLink>
                        ): null}
                        {navItem.text ? (
                            <NavLink href={navItem.href}>{navItem.text}</NavLink>
                        ): null}
                        {
                            navItem.hasSocialIcons ? 
                                <SocialIcons>
                                    <NavLink href="https://www.linkedin.com/in/rewash-chettri-188b72192" target="_blank">
                                    <FaLinkedin/>
                                    </NavLink>
                                    <NavLink href="https://github.com/rewash-chettri15" target="_blank">
                                    <FaGithub/>
                                    </NavLink>
                                    <NavLink href="https://www.facebook.com/rewash.swagchettri" target="_blank">
                                    <FaFacebook/>
                                    </NavLink>
                                    <NavLink href="https://www.instagram.com/iamrewash/" target="_blank">
                                    <FaInstagram/>
                                    </NavLink>
                                </SocialIcons>
                            :null
                        }
                         {navItem.hasCTA ? (
                             <CTAButton href="https://drive.google.com/file/d/1hp4wLz7bnhwhEvo_zXWTklnstCUNig2V/view?usp=sharing" target="_blank">
                                 Download Resume
                             </CTAButton>
                         ): null}
                    </NavItemStyled>
                        
                ))}
                
            </NavList>
        
        </Nav>
        </>
    );
};