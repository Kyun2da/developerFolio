/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: '허균',
  title: '안녕하세요 허균입니다.',
  subTitle: emoji('항상 성장을 갈망하고 노력하는 주니어 웹 개발자 입니다.🚀'),
  resumeLink:
    'https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/Kyun2da',
  //linkedin: 'https://www.linkedin.com/in/saadpasta/',
  gmail: 'kyun2dot@gmail.com',
  //gitlab: 'https://gitlab.com/saadpasta',
  //facebook: 'https://www.facebook.com/saad.pasta7',
  medium: 'https://kyun2da.dev',
  blog: 'https://kyun2da.github.io',
  //stackoverflow: 'https://stackoverflow.com/users/10422806/saad-pasta',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: '기술 스택',
  subTitle:
    '자바스크립트 생태계를 좋아해서 자바스크립트와 관련된 기술 스택들을 주로 익혔습니다.',
  skills: [
    emoji('⚡ Express를 활용한 서버 구축이 가능합니다.'),
    emoji(
      '⚡ 리액트를 활용한 SPA 개발이 가능합니다. Redux와 같은 상태 라이브러리를 프로젝트에 접목 시켜본 경험이 있습니다.'
    ),
    emoji(
      '⚡ 시퀄라이즈와 같은 ORM을 사용할 수 있고 보통 Mysql을 사용하여 DB를 설계하고 구축합니다.'
    ),
    emoji(
      '⚡ 현재는 Express는 Nest.js, React에도 TypeScript를 접목시키기 위해 타입스크립트를 열심히 공부중에 있습니다.'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'mysql',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'fab fa-git',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: '세종대학교',
      logo: require('./assets/images/sejong.png'),
      subHeader: '디지털콘텐츠학과(소프트웨어학과)',
      duration: '2015.03 ~ 2021.06 졸업 유예상태',
      desc:
        '프로그래밍 기본을 익히고 적성과 흥미를 찾기위해 이것저것 많은 경험을 해보았습니다.',
      descBullets: [
        'C++을 활용한 게임 만들기',
        '광진구 연계 앱 인벤터 멘토링',
        '데이터 분석 및 데이터 시각화 프로젝트',
        '안드로이드를 활용한 외국인 학교 도움 프로젝트',
        '유니티를 활용한 가구 AR 배치 프로젝트',
      ],
    },
    {
      schoolName: '육군 9사단',
      logo: require('./assets/images/soldier.jpg'),
      duration: '2016.02 ~ 2017.11 병장 만기전역',
    },
    {
      schoolName: '일산동고등학교',
      logo: require('./assets/images/ilsandong.png'),
      duration: '2011.03 ~ 2014.02 졸업',
      desc: '인문계 고등학교',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  display: false,
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend', //Insert stack or technology you have experience in
      progressPercentage: '30%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '30%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '40%',
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'ICT 인턴십 인턴',
      company: '코딩로봇 연구소',
      companylogo: require('./assets/images/codingrobotlab.png'),
      date: '2020.03 ~ 2020.06',
      desc: 'ICT 인턴십으로 학교 연계로 웹 개발 인턴 직무를 수행하였습니다.',
      descBullets: [
        'TypeScript & React 를 활용한 웹 개발 개선',
        'Node.js 서버 개선 및 수정 역할',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'saadpasta', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: '프로젝트',
  subtitle: '가장 성과가 컸던 두개의 프로젝트 입니다.',
  projects: [
    {
      image: require('./assets/images/swbot.png'),
      projectName: '세종대 도와줘 소융봇',
      projectDesc:
        '카카오 오픈빌더를 활용한 세종대 챗봇 서비스 입니다. 기술 스택은 Express.js, Sequelize, mysql2, swagger, nodemon, pm2, fcm, nodemailer, pupeteer등이 있습니다.',
      footerLink: [
        {
          name: '깃허브 페이지 방문하기',
          url: 'https://github.com/kyun2da/sjswbot',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/software.png'),
      projectName: '세종대 사물함 예약 사이트',
      projectDesc:
        '소프트웨어학과 학생들을 위한 사물함 사이트 만들기 대회에서 1등을 수상하였습니다. 2021년 부터 세종대 학생들이 사물함 예약으로 사용될 예정입니다. 기술 스택은 React.js, firebase, redux, github page, material-ui등이 있습니다. 코드는 kyun 브랜치를 참고하시면 됩니다.',
      footerLink: [
        {
          name: '깃허브 페이지 방문하기',
          url: 'https://github.com/kyun2da/sejongCabinet',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('성과 🏆 '),
  subtitle: '상이나 자격증에 관련된 항목입니다.',

  achievementsCards: [
    {
      title: '세종대학교 교내 학술 상',
      subtitle:
        '2019 SW 경시대회 4등, 2020 여름 해커톤 은상, 2020 SW 경시대회 4등, 사물함 예약사이트 경진대회 1등, 2020 겨울 해커톤 은상',
      image: require('./assets/images/sejong.png'),
      footerLink: [
        {
          name: '자격증 보러가기',
          url:
            'https://drive.google.com/file/d/1X3eHiqz4Ons67Ti645yjpNWvP7wjNqSX/view?usp=sharing',
        },
      ],
    },
    {
      title: 'TOPCIT',
      subtitle: '수준3',
      image: require('./assets/images/topcit.jpg'),
      footerLink: [
        {
          name: '자격증 보러가기',
          url:
            'https://drive.google.com/file/d/1Dwr8UeoVt2f5WGVvgQRa4Y3QfYeb_f1W/view?usp=sharing',
        },
      ],
    },

    {
      title: 'TOEIC',
      subtitle: '800',
      image: require('./assets/images/toeic.png'),
      footerLink: [
        {
          name: '자격증 보러가기',
          url:
            'https://drive.google.com/file/d/1kKttOxlZJO3xhxlj6wLO-XsWqqOoUuJU/view?usp=sharing',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('문의 ☎️'),
  subtitle: '저에 대해 더 궁금한 것이 있다면 주저하지말고 연락주세요!',
  number: '010-8010-4857',
  emailAddress: 'kyun2dot@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
