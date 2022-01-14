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
            <p>s  rerumincidunt nam quibusdam officia culpa nulla animi, perspiciatis ad reiciendis numquam! Excepturi ipsum maxime dolorem voluptas id vero accusantium officia numquam architecto, quis cum beatae nostrum quisquam porro eaque quibusdam alias aut est perspiciatis assumenda commodi at necessitatibus eius totam. Consectetur, fugiat architecto. Ipsum voluptate quidem voluptatum. Dicta assumenda, animi illo tempora possimus eaque exercitationem? Itaque enim sed illum excepturi ea rem quia provident neque praesentium! Delectus rerum obcaecati tempora suscipit ullam, cum, ducimus nulla amet harum repellendus similique aliquam aliquid! Quas accusamus error dolore perferendis necessitatibus nulla. Molestias, sequi asperiores.</p>
        <p>x laborecidunt commodi blanditiis dicta necessitatibus, ipsum enim quos doloremque, ratione maxime explicabo. Fugiat assumenda porro aliquid recusandae est dolore itaque ex voluptates vitae rem, ad quasi quia, delectus iusto quibusdam nam a, non blanditiis earum consequatur placeat quisquam soluta libero. Nisi magnam voluptatum facere voluptas. Ullam autem beatae ipsum iure adipisci cupiditate. Soluta ducimus dicta id quibusdam ipsam libero quia adipisci quis, sit commodi nihil sed perspiciatis et eius ut saepe possimus enim, sint distinctio beatae iste vel corrupti sunt! Quaerat.</p>
        <CTAButton href="#" target="_blank">
            Get My Resume
        </CTAButton>
        </AboutContent>
    </StyledAboutSection>
    <hr></hr>
    </>
}