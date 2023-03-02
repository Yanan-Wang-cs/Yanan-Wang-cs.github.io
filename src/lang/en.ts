export default {
  menu: {
    home: "HomePage",
    experience: "Experience",
    projects: "Projects",
    publications: "Publications",
    education: "Education",
  },
  icon: {
    email: "Email",
    github: "GitHub",
    cv: "CV",
    google: "GoogleScholar",
  },
  hi: "MY NAME IS",
  name: "Yanan Wang",
  intro:
    "Creative and responsible front-end developer with more than +5 years of experience in front-end development. Proficient in JavaScript and Vue. Passionate about UI/UX, Node.js, and Python.",
  skills: {
    title: "Skills",
    list: [
      {
        title: "Development",
        content:
          "JavaScript, jQuery, Vue, React, TypeScript, D3.js, echarts, Sass, Less, Tailwindcss, Element Plus, Antd, Eslint, Stylelint, Figma",
      },
      {
        title: "Deployment",
        content: "Webpack, Docker, Nginx, CI/CD",
      },
      { title: "Office", content: "Git, Confluence, JIRA, Teams, Outlook" },
    ],
  },
  education: [
    {
      title: "Xidian University",
      date: "2015.09-2018.06",
      major:
        "Master of Engineering, majored in Electronics and Telecommunications Engineering",
      courses: {
        title: "Courses",
        content:
          "Computation Intelligence (91), Algorithm Design Technology and Methods (91), Modern Machine Learning Theory (80), Natural Computation (88), New Advances in IntelliSense and Advanced Computing (86), Experiments on High Performance Computing (85). Full marks: 100",
      },
      gpa: { title: "GPA", content: "85.29 / 100 ( estimated: 3.36 / 4 )" },
      icon: "xidian",
    },
    {
      title: "Guilin University of Electronic Technology",
      date: "2011.09-2015.06",
      major: "Bachelor degree in Electronic Science and Technology",
      courses: {
        title: "Courses",
        content:
          "Probability (95), Advanced Mathematics AI (98), Linear Algebra B (96), Complex Functions B (96), Signal and System Analysis (93), Advanced Programming Language (C) (96). Full marks: 100",
      },
      gpa: { title: "GPA", content: "estimated: 3.58 / 4" },
      icon: "guidian",
    },
  ],
  experience: [
    {
      date: "2022.05.05 - now",
      title: "Responsible for 3 application website development.",
      type: "developer",
    },
    {
      date: "2022.10.10",
      title:
        "Tutorial: Person Re-Identification: Synthetic Data And Model Generalization, in IJCB 2022, Oct. 10th, 2022.",
      type: "research",
    },
    {
      date: "2022.05.05",
      title: "Transfer to front-end engineer.",
      type: "developer",
    },
    {
      date: "2022.03.03",
      title: "One paper is accepted by CVPR, 2022.",
      type: "research",
    },
    {
      date: "2021.07.28",
      title: "Participate in IJCB2022 as the website chair.",
      type: "developer",
    },
    {
      date: "2020.07.27",
      title: "One paper is accepted by ACM MM, 2020.",
      type: "research",
    },
    {
      date: "2020.01.05",
      title: "Transfer to research engineer.",
      type: "research",
    },
    {
      date: "2018.12.26-2020.01.05",
      title: "Developed 3 application websites.",
      type: "developer",
    },
    {
      date: "2018.12.26",
      title:
        "Joined the Inception Institute of Artificial Intelligence (IIAI), Abu Dhabi, UAE as a full-stack engineer.",
      type: "developer",
    },
    {
      date: "2018.09.01 - 2018.12.25",
      title:
        "Joined Kingsoft Cloud, Beijing, China as a front-end engineer, responsible for 2 application websites.",
      type: "developer",
    },
    {
      date: "2018.07.01 - 2018.08.30",
      title:
        "Joined Finup, Beijing, China as a front-end engineer, responsible for 1 application website.",
      type: "developer",
    },
    {
      date: "2018.06.30",
      title:
        "Got my master's degree at Xidian University, China. My major is Electronics and Communications Engineering.",
      type: "research",
      link: "/education",
    },
    {
      date: "2017.11.01 - 2018.02.01",
      title:
        "Joined Finup, Beijing, China as a front-end intern, responsible for 1 application website.",
      type: "developer",
    },
    {
      date: "2015.09.01 - 2018.06.29",
      title:
        "Developed 11 official websites, 2 application websites, and an applet as a full-stack engineer.",
      type: "developer",
    },
    {
      date: "2015.06.30",
      title:
        "Got my bachelor's degree at the Guilin University of Electronic Technology, China. My major is Electronic Science and Technology.",
      type: "research",
      link: "/education",
    },
  ],
  projects: {
    tab: {
      developer: "Work as a developer",
      researcher: "Work as a researcher",
    },
    type: {
      company: "Company Projects",
      personal: "Personal Projects",
    },
    label: {
      intro: "Introduction",
      technology: "Tools I used",
    },
    developer: [
      {
        title: "Homepage",
        date: "2023.02-now",
        intro: "My homepage",
        technology:
          "Vue cli, Vue 3, TypeScript, I18n, Sass, Tailwindcss, iconfont, Element Plus, Eslint, Deployed in GitHub.",
        classfication: "personal",
        github:
          "https://img.shields.io/github/stars/Yanan-Wang-cs/Yanan-Wang-cs.github.io?style=social",
      },
      {
        title: "IIAI: Algorithm application platform -- Rodin Console",
        date: "2022.08-now",
        intro:
          "Including text/document/image/microphone machine translation, document OCR(Optical Character Recognition), ASR(Automatic Speech Recognition), and TTS(Text to Speech).",
        technology:
          "Vue cli, Vue 3, TypeScript, I18n, Vuex, Sass, Font Awesome, Tailwindcss, Element Plus, Eslint, Stylelint, Figma, Docker, CI/CD, Deployed in cloud service.",
        classfication: "company",
      },
      {
        title: "IIAI: OneStop Login -- IIAI oAuth",
        date: "2022.10-now",
        intro: "Users can access different services after getting authority.",
        technology:
          "Vite, Vue 3, TypeScript, Sass, Tailwindcss, Eslint, Figma, Docker, CI/CD, Deployed in cloud service.",
        classfication: "company",
      },
      {
        title: "IIAI: Official website -- IIAI website",
        date: "2022.05-now",
        intro: "IIAI official website",
        technology:
          "Nuxt, Vue 2, TypeScript, I18n, Sass, D3, Tailwindcss, Eslint, Stylelint, Figma, Docker, CI/CD, Deployed in cloud service.",
        classfication: "company",
      },
      {
        title: "Calorie-Calculator",
        date: "2023.01-now",
        intro: "A website to record the food calorie",
        technology: "React18, antd, Sass, Tailwindcss, iconfont, Eslint",
        classfication: "personal",
        github: "https://github.com/Yanan-Wang-cs/Calorie-Calculator",
      },
      {
        title: "IIAI: Official website -- IJCB 2022",
        date: "2021.07-2022.10",
        intro:
          "INTERNATIONAL JOINT CONFERENCE ON BIOMETRICS (IJCB 2022) official website.",
        technology: "Vue cli, Vue 2, Less, Eslint, Deployed in OBS",
        classfication: "company",
      },
      {
        title: "IIAI: Algorithm application application -- Facecard",
        date: "2019.01-2019.10",
        intro:
          "A mobile application used in CVPR 2019, including login/register, face detection, face recognition, personal card, and character grouping.",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Element UI, Eslint, Nodejs, Express, Swagger, Mysql, Deployed in public machine.",
        classfication: "company",
      },
      {
        title: "IIAI: Application system -- Arabic face annotation system",
        date: "2019.03-2019.07",
        intro:
          "A website that is used to annotate Arabic faces. Including login/register, classification operation, quality inspection, and export result.",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Element UI, Eslint, Nodejs, Express, Swagger, Mysql, Docker, Deployed in private network.",
        classfication: "company",
      },
      {
        title: "IIAI: Application system -- Model quality monitoring platform",
        date: "2018.12-2019.07",
        intro:
          "A website that is used to check model results. User upload their model and test dataset, and the website will display the error results made by the model.",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Element UI, Eslint, Nodejs, Express, Swagger, Mysql, Docker, Deployed in private network.",
        classfication: "company",
      },
      {
        title:
          "Kingsoft Cloud: Annotation platform -- 37-celsius annotation platform",
        date: "2018.09-2018.11",
        intro:
          "A website that could label data for the algorithm, including content for audio, bounding-boxes, pixels, and attributes for image and video.",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Eslint, Docker, Deployed in cloud services.",
        classfication: "company",
      },
      {
        title:
          "Kingsoft Cloud: Algorithm platform -- Face detection and recognition platform",
        date: "2018.09-2018.11",
        intro:
          "A website that could detect human faces and recognize them from surveillance video.",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Eslint, Deployed in private network.",
        classfication: "company",
      },
      {
        title: "Finup: Lending platform -- Qianzhan",
        date: "2017.11-2018.08",
        intro: "A website that could let people lend money from the company.",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Eslint, Docker, Deployed in cloud services.",
        classfication: "company",
      },
      {
        title: "Xidian: Campus Internet Application Project",
        date: "2015.09-2018.06",
        intro:
          "\nIncluding: \n11 official website: 1) Student Career Center of Xidian University, 2) School of Microelectronics Website, 3) Department of Telecommunications Engineering, 4) Electronic and Information Engineering Young Scholars' Symposium, 5) International Forum for HUASHAN Scholars, 6) School of Computer Science and Technology, 7) School of Aerospace Science and Technology, 8) Practice Teaching Centre of Software Engineering, 9) Virtual Simulation Experiment Center of School of Life Science and Technology, 10) Academic English Excellent Course, 11) English Course of Aeronautical College. \n2 application websites: Dormitory Evaluation System and Conference room application system. \n1 applets: Smart Campus applets.",
        technology:
          "HTML, CSS, jQuery, DeDe, ThinkPHP, Mysql, PhotoShop, Deployed in campus machine.",
        classfication: "company",
      },
    ],
    researcher: [
      {
        title: "Computer Vision Person re-identification -- ClonedPerson",
        date: "2021.05-2022.04",
        intro:
          "The ClonedPerson is a more realistic virtual dataset. We proposed a pipeline to directly clone the whole outfits from real-world person images to virtual 3D characters, designed two cloning methods, namely registered clothes mapping and homogeneous cloth expansion, and proposed a similarity-diversity expansion strategy to scale up IDs. Finally, by rendering the cloned characters in Unity3D scenes, a more realistic virtual dataset called ClonedPerson is created, with 5,621 identities and 887,766 images. Experimental results show that the model trained on ClonedPerson has a better generalization performance, superior to that trained on other popular real-world and synthetic person re-identification datasets.",
        technology: "Python, Pytorch, Unity, C#, MakeHuman",
        github:
          "https://ghbtns.com/github-btn.html?user=Yanan-Wang-cs&repo=ClonedPerson&type=star&count=true",
        img: "/image/clonedperson.png",
        classfication: "company",
      },
      {
        title: "Computer Vision Person re-identification -- RandPerson",
        date: "2020.01-2021.04",
        intro:
          "The RandPerson is the first synthetic person re-identification dataset with a set-up similar to real video surveillance systems, with a camera network and multiple people moving at the same time. We design a method to generate a large number of random UV texture maps and use them to create different 3D clothing models. By training person re-identification models on these synthesized person images, we demonstrate, for the first time, that models trained on virtual data can generalize well to unseen target images, surpassing the models trained on various real-world datasets.",
        technology: "Python, Pytorch, Unity, C#, MakeHuman",
        github:
          "https://ghbtns.com/github-btn.html?user=VideoObjectSearch&repo=RandPerson&type=star&count=true",
        img: "/image/randperson.png",
        classfication: "company",
      },
    ],
  },
  publications: [
    {
      title:
        "Yanan Wang, Xuezhi Liang, and Shengcai Liao, “Cloning Outfits from Real-World Images to 3D Characters for Generalizable Person Re-Identification.” In IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2022.",
      link: "https://arxiv.org/pdf/2204.02611.pdf",
    },
    {
      title:
        "Shengcai Liao and Yanan Wang, “System, Apparatus, and Method for Cloning Clothings from Real-World Images to 3D Characters”, US Patent No. 17/705,518, Pending.",
    },
    {
      title:
        "Yanan Wang, Shengcai Liao, and Ling Shao, “Surpassing Real-World Source Training Data: Random 3D Characters for Generalizable Person Re-Identification.” In ACM International Conference on Multimedia, 2020.",
      link: "https://arxiv.org/pdf/2006.12774.pdf",
    },
    {
      title:
        'Yanan Wang, Yinfeng Li, Yu Li, and Sen Lin, "Mobile application design for smart community." In J. Huazhong Univ. of Sci. & Tech. (Natural Science Edition), Oct. 2016.',
    },
  ],
};
