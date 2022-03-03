import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkExt, SideBtnWrap, SidebarRoute  } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="projects" onClick={toggle}>
                    Projects
                </SidebarLink>
                <SidebarLink to="education" onClick={toggle}>
                    Education
                </SidebarLink>
                <SidebarLink to="about" onClick={toggle}>
                    About Me
                </SidebarLink>
                <SidebarLinkExt href="https://mega.nz/file/HpVDyCRT#Iyg7WUiyPdjjI5BUgRWVKdr1Z1yms9oJpLIqxVW4ABk"
                  target="_blank">
                    CV
                </SidebarLinkExt>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="contact" onClick={toggle}>
                    Write Me!
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar
