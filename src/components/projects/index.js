import React from 'react'
import Icon1 from '../../images/undraw-hacker-mind-6-y85.svg'
import Icon2 from '../../images/MrRoboto.png'
import Icon3 from '../../images/undraw_mathematics_-4-otb.svg'

import { ProjectsContainer, ProjectsH1, ProjectsH2, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsP } from './projectsElements'

const projects = () => {
  return (
    <ProjectsContainer id ="contact">
        <ProjectsH1>Some of my projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard> 
                <ProjectsIcon src={Icon1}/>
                <ProjectsH2>Created with Javascript</ProjectsH2>
                <ProjectsP>Project created with Javascript and React</ProjectsP>
            </ProjectsCard>
            <ProjectsCard> 
                <ProjectsIcon src={Icon2}/>
                <ProjectsH2>Created with Javascript</ProjectsH2>
                <ProjectsP>Project created with Javascript and React</ProjectsP>
            </ProjectsCard>
            <ProjectsCard> 
                <ProjectsIcon src={Icon3}/>
                <ProjectsH2>Created with Javascript</ProjectsH2>
                <ProjectsP>Project created with Javascript and React</ProjectsP>
            </ProjectsCard>
        </ProjectsWrapper>

    </ProjectsContainer>
  )
}

export default projects