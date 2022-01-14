import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go"
import { Projects } from "../../data/Projects";
import { SectionHeading } from "../Styles/common/SectionHeading.styled";
import { ProjectDescription, ProjectImageContainer, SingleProject, SlantedCard, StyledProjectsSection, Tags } from "../Styles/sections/projectsSection.styled";

export const ProjectsSection =()=>{
return(
<>
<StyledProjectsSection id="projects">
    <SectionHeading>
        <h1>Projects</h1>
        <p>Here are some of my projects</p>
    </SectionHeading>
    <div>
        {Projects && Projects.map((project,index)=>(
            <SingleProject key={index}>
                <ProjectImageContainer href={project.projectlink} target="_blank" rel="noreferrer" >
                    <img src={project.thumbnail} alt={project.title}/>
                    <SlantedCard/>
                </ProjectImageContainer>
                <ProjectDescription>
                    <h1>
                        {project.title}
                    </h1>
                    <Tags>
                        {project.tags && project.tags.map((tag,tagindex)=>(
                            <span key={tagindex}>{tag}</span>
                        ))}
                    </Tags>
                    <p>{project.paragraph}</p>
                    <div>
                        <a href={project.codelink} target="_blank" rel="noreferrer">
                            <FaGithub/>
                            <span>View Repository</span>
                        </a>
                        <a href={project.projectlink} target="_blank" rel="noreferrer">
                            <GoLinkExternal/>
                            <span>{project.projectlinktext}</span>
                        </a>
                    </div>
                </ProjectDescription>
            </SingleProject>
        ))}
    </div>
</StyledProjectsSection>
<hr/>
</>
);
};