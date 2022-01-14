import { SectionHeading } from "../Styles/common/SectionHeading.styled";
import { ContactInfo, DetailsWrapper, ImageWrapper, StyledContactSection } from "../Styles/sections/ContactSection.styled";
import {MdEmail} from "react-icons/md";
import {FaWhatsapp} from "react-icons/fa";
export const ContactSection =()=>{
    return(
        <>
        <StyledContactSection id="contact">
            <SectionHeading>
                <h1> Contact Me</h1>
                <p>Get In Touch</p>
            </SectionHeading>
            <DetailsWrapper>
                <ContactInfo>
                <p>Get In Touch With Me</p>

                <p>
                    <i>
                        
                        
                    I'd love if you reached out to me. Contact me by Mail, Phone number or my Socials.
                </i>
                </p>
                <div>
                    <a href="mailto:iamrewash@gmail.com"><MdEmail/>
                    <span>iamrewash@gmail.com</span></a>

                    <a href=" https://wa.me/+91-9883090782 "><FaWhatsapp/>
                    <span>9883090782</span></a>
                </div>
                </ContactInfo>
                <ImageWrapper>
                        <img src="./images/nishinoya.jpg" alt="contact" />
                    </ImageWrapper>
            </DetailsWrapper>
        </StyledContactSection>
        <hr/>
        </>
    );
};