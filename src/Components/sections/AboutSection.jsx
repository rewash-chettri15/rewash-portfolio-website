import { CTAButton } from "../Styles/common/CTAButton.styled"
import { AboutContent, ImageContainer, StyledAboutSection ,StyledImage, StyledHeading, GradientCircle, DarkCircle, StyledEmoji} from "../Styles/sections/AboutSection.styled"

export const AboutSection =()=>{
    return <>
    <StyledAboutSection id="about">
        <ImageContainer>
            <StyledImage src="./images/rewashpc.png" alt="rewash chetttri"/>
            <DarkCircle/>
            <GradientCircle/>
        </ImageContainer>
        <AboutContent>
            <StyledHeading>
                Hello/Konnichiwa <StyledEmoji>🧧</StyledEmoji>
            </StyledHeading>
            <p> Hello, My name is Rewash Chettri. I am from Darjeeling, West Bengal, India. This is my portfolio website made with React and Styled Components. I have good knowledge of development and I am a great tech enthusiast.

            </p>
        <p>I am currently pursuing my BTECH in Computer Science And Engineering from Lovely Professional University, Punjab. I completed my class 10th from Cambridge English School, Kurseong (ICSE) and my 12th from Army Public Sukna (CBSE).</p>
        
        <p> I have a good knowledge of web development and many other technologies and languages. I am also UI/UX enthusiast with many creative ideas. I have great interest in web 3.0 and also want to explore the world of blockchain. I am also a digital artist.</p>
        <CTAButton href="https://drive.google.com/file/d/1hp4wLz7bnhwhEvo_zXWTklnstCUNig2V/view?usp=sharing" target="_blank">
            Get My Resume
        </CTAButton>
        </AboutContent>
    </StyledAboutSection>
    <hr></hr>
    </>
}