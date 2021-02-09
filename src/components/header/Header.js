import React, { useContext } from 'react';
import Headroom from 'react-headroom';
import './Header.css';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  techStack,
  educationInfo,
  bigProjects,
} from '../../portfolio';

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkillsProgress = techStack.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewEducation = educationInfo.display;
  const viewProject = bigProjects.display;

  return (
    <Headroom>
      <header className={isDark ? 'dark-menu header' : 'header'}>
        <a href='' className='logo'>
          <span className='grey-color'> &lt;</span>
          <span className='logo-name'>{greeting.username}</span>
          <span className='grey-color'>/&gt;</span>
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label
          className='menu-icon'
          htmlFor='menu-btn'
          style={{ color: 'white' }}
        >
          <span className={isDark ? 'navicon navicon-dark' : 'navicon'}></span>
        </label>
        <ul className={isDark ? 'dark-menu menu' : 'menu'}>
          {viewSkills && (
            <li>
              <a href='#skills'>기술 스택</a>
            </li>
          )}
          {viewSkillsProgress && (
            <li>
              <a href='#skills-container'>기술 능력</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href='#education'>학력</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href='#experience'>경험</a>
            </li>
          )}
          {viewProject && (
            <li>
              <a href='#projects'>프로젝트</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href='#opensource'>오픈 소스</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href='#achievements'>성과</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href='#blogs'>블로그</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href='#talks'>이야기</a>
            </li>
          )}
          <li>
            <a href='#contact'>문의</a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
