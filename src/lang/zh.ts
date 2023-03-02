export default {
  menu: {
    home: "主页",
    experience: "个人经历",
    projects: "项目",
    publications: "发表文章",
    education: "教育经历",
  },
  icon: {
    email: "邮箱",
    github: "GitHub",
    cv: "简历",
    google: "谷歌学术",
  },
  hi: "你好，我是",
  name: "王雅楠",
  intro:
    "富有创造力和责任心的前端开发人员，拥有超过 5 年的前端开发经验。精通 JavaScript 和 Vue。对 UI/UX、Node.js 和 Python 充满热情。",
  skills: {
    title: "技能",
    list: [
      {
        title: "开发",
        content:
          "JavaScript, jQuery, Vue, React, TypeScript, D3.js, echarts, Sass, Less, Tailwindcss, Element Plus, Antd, Eslint, Stylelint, Figma",
      },
      {
        title: "部署",
        content: "Webpack, Docker, Nginx, CI/CD",
      },
      { title: "办公", content: "Git, Confluence, JIRA, Teams, Outlook" },
    ],
  },
  education: [
    {
      title: "西安电子科技大学",
      date: "2015.09-2018.06",
      major: "电子工程学院硕士",
      courses: {
        title: "课程",
        content:
          "计算智能 (91), 算法设计技术与方法 (91), 现代机器学习理论 (80), 自然计算 (88), 智能感知与先进计算新发展 (86), 高性能计算实验 (85). 满分: 100",
      },
      gpa: { title: "GPA", content: "85.29 / 100 ( 估算: 3.36 / 4 )" },
      icon: "xidian",
    },
    {
      title: "桂林电子科技大学",
      date: "2011.09-2015.06",
      major: "信息与通信学院学士",
      courses: {
        title: "课程",
        content:
          "概率论 (95), 高等数学 AI (98), 线性代数 B (96), 复变函数 B (96), 信号与系统分析 (93), C语言程序设计A (96). 满分: 100",
      },
      gpa: { title: "GPA", content: "估算: 3.58 / 4" },
      icon: "guidian",
    },
  ],
  experience: [
    {
      date: "2022.05.05 - now",
      title: "负责3个应用网站的开发.",
      type: "developer",
    },
    {
      date: "2022.10.10",
      title:
        "讲座: Person Re-Identification: Synthetic Data And Model Generalization, in IJCB 2022, Oct. 10th, 2022.",
      type: "research",
    },
    {
      date: "2022.05.05",
      title: "转前端工程师.",
      type: "developer",
    },
    {
      date: "2022.03.03",
      title: "一篇文章发表在 CVPR, 2022.",
      type: "research",
    },
    {
      date: "2021.07.28",
      title: "作为网站主席参与IJCB 2022.",
      type: "developer",
    },
    {
      date: "2020.07.27",
      title: "一篇文章发表在 ACM MM, 2020.",
      type: "research",
    },
    {
      date: "2020.01.05",
      title: "转研究工程师.",
      type: "research",
    },
    {
      date: "2018.12.26-2020.01.05",
      title: "开发3个应用网站",
      type: "developer",
    },
    {
      date: "2018.12.26",
      title: "加入人工智能起源研究院 (IIAI), Abu Dhabi, UAE 作为全栈工程师.",
      type: "developer",
    },
    {
      date: "2018.09.01 - 2018.12.25",
      title: "加入金山云作为前端工程师，负责两个应用网站的开发",
      type: "developer",
    },
    {
      date: "2018.07.01 - 2018.08.30",
      title: "加入凡普金科作为前端工程师，负责一个应用网站的开发.",
      type: "developer",
    },
    {
      date: "2018.06.30",
      title: "获得西电硕士学位，电子与通信工程专业.",
      type: "research",
      link: "/education",
    },
    {
      date: "2017.11.01 - 2018.02.01",
      title: "加入凡普金科作为前端实习生，负责一个应用网站的开发.",
      type: "developer",
    },
    {
      date: "2015.09.01 - 2018.06.29",
      title: "作为全栈工程师开发11个官方网站，2个应用系统和一个小程序.",
      type: "developer",
    },
    {
      date: "2015.06.30",
      title: "获得桂电学士学位，电子科学与技术专业.",
      type: "research",
      link: "/education",
    },
  ],
  projects: {
    tab: {
      developer: "作为开发人员",
      researcher: "作为研究人员",
    },
    type: {
      company: "公司项目",
      personal: "个人项目",
    },
    label: {
      intro: "简介",
      technology: "我用到的技术",
    },
    developer: [
      {
        title: "个人主页",
        date: "2023.02-now",
        intro: "我的个人主页。",
        technology:
          "Vue cli, Vue 3, TypeScript, I18n, Sass, Tailwindcss, iconfont, Element Plus, Eslint, Deployed in GitHub.",
        classfication: "personal",
        github:
          "https://ghbtns.com/github-btn.html?user=Yanan-Wang-cs&repo=Yanan-Wang-cs.github.io&type=star&count=true",
      },
      {
        title: "IIAI: 算法平台 -- Rodin Console",
        date: "2022.08-now",
        intro:
          "包括文本/文件/图片/语音的机器翻译，文件字符识别，语音转文本和文本转语音.",
        technology:
          "Vue cli, Vue 3, TypeScript, I18n, Vuex, Sass, Font Awesome, Tailwindcss, Element Plus, Eslint, Stylelint, Figma, Docker, CI/CD, Deployed in cloud service.",
        classfication: "company",
      },
      {
        title: "IIAI: 一站式登录平台 -- IIAI oAuth",
        date: "2022.10-now",
        intro: "用户登陆后可以访问多个其他域名的服务.",
        technology:
          "Vite, Vue 3, TypeScript, Sass, Tailwindcss, Eslint, Figma, Docker, CI/CD, Deployed in cloud service.",
        classfication: "company",
      },
      {
        title: "IIAI: 官方网站 -- IIAI website",
        date: "2022.05-now",
        intro: "IIAI 官方网站",
        technology:
          "Nuxt, Vue 2, TypeScript, I18n, Sass, D3, Tailwindcss, Eslint, Stylelint, Figma, Docker, CI/CD, Deployed in cloud service.",
        classfication: "company",
      },
      {
        title: "Calorie-Calculator",
        date: "2023.01-now",
        intro: "记录食物卡路里的网站",
        technology: "React18, antd, Sass, Tailwindcss, iconfont, Eslint",
        classfication: "personal",
        github: "https://github.com/Yanan-Wang-cs/Calorie-Calculator",
      },
      {
        title: "IIAI: 官方网站 -- IJCB 2022",
        date: "2021.07-2022.10",
        intro:
          "INTERNATIONAL JOINT CONFERENCE ON BIOMETRICS (IJCB 2022) 官方网站.",
        technology: "Vue cli, Vue 2, Less, Eslint, Deployed in OBS",
        classfication: "company",
      },
      {
        title: "IIAI: 算法应用平台 -- Facecard",
        date: "2019.01-2019.10",
        intro:
          "在CVPR2019期间使用的移动应用，包含登陆注册模块，人脸检测和识别功能，并可以添加人物信息，并将人物分组识别.",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Element UI, Eslint, Nodejs, Express, Swagger, Mysql, Deployed in public machine.",
        classfication: "company",
      },
      {
        title: "IIAI: 应用系统 -- 阿拉伯人脸标注系统",
        date: "2019.03-2019.07",
        intro:
          "被用于标注阿拉伯人脸的网站，包括登陆注册模块，标注模块，质量检测模块和结果导出模块。",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Element UI, Eslint, Nodejs, Express, Swagger, Mysql, Docker, Deployed in private network.",
        classfication: "company",
      },
      {
        title: "IIAI: 应用系统 -- 模型质量检测平台",
        date: "2018.12-2019.07",
        intro:
          "被用于检测模型质量的网站，通过上传训练好的模型和测试数据库，可以展示模型判断错误的样例。",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Element UI, Eslint, Nodejs, Express, Swagger, Mysql, Docker, Deployed in private network.",
        classfication: "company",
      },
      {
        title: "金山云: 标注平台 -- 37度标注系统",
        date: "2018.09-2018.11",
        intro:
          "可用来为人工智能标注数据的平台，包括语音文本标注，图片和视频像素级标注。",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Eslint, Docker, Deployed in cloud services.",
        classfication: "company",
      },
      {
        title: "金山云: 算法平台 -- 人脸检测安防系统",
        date: "2018.09-2018.11",
        intro: "通过检测监控视频中的人脸并识别人员身份实现安防的系统。",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Eslint, Deployed in private network.",
        classfication: "company",
      },
      {
        title: "Finup: 借贷平台 -- 钱站",
        date: "2017.11-2018.08",
        intro: "用户可以通过该平台借款",
        technology:
          "Vue cli, Vue 2, Vuex, Less, Eslint, Docker, Deployed in cloud services.",
        classfication: "company",
      },
      {
        title: "西电: 校园项目",
        date: "2015.09-2018.06",
        intro:
          "包括: \n11个官方网站: 1) 就业办官网, 2) 微电子学院官网, 3) 电信工程官网, 4) 电子信息青年学者论坛2016官网, 5) 华山青年学者国际论坛IFHS2017官网, 6) 计算机学院官网, 7) 空间科学与技术学院官网, 8) 软件工程实践教学中心官网, 9) 生命科学技术学院仿真实验教学中心官网, 10) 学术英语阅读精品课程, 11) 大学英语精品课程。 \n2个应用网站: 文明宿舍评选系统和会议室预约系统。 \n1个小程序: 西电导航小程序。",
        technology:
          "HTML, CSS, jQuery, DeDe, ThinkPHP, Mysql, PhotoShop, Deployed in campus machine.",
        classfication: "company",
      },
    ],
    researcher: [
      {
        title: "计算机视觉行人重识别 -- ClonedPerson",
        date: "2021.05-2022.04",
        intro:
          "ClonedPerson是一个更真实的虚拟数据库。我们提出了一个方案，将真实图片中的衣服直接映射到虚拟人物身上，并设计了两个方法，registered clothes mapping 和 homogeneous cloth expansion, 并提出了一个相似性-多样性的扩展策略去扩展人物ID。最终，通过在Unity3D中的渲染，我们生成了一个更真实的虚拟数据库，包含5621个ID和88万张图片。实验结果表明在ClonedPerson数据库上训练的模型具有更好的泛化性，超过了当前流行的真实数据库和虚拟数据库。",
        technology: "Python, Pytorch, Unity, C#, MakeHuman",
        github:
          "https://ghbtns.com/github-btn.html?user=Yanan-Wang-cs&repo=ClonedPerson&type=star&count=true",
        img: "/image/clonedperson.png",
        classfication: "company",
      },
      {
        title: "计算机视觉行人重识别 -- RandPerson",
        date: "2020.01-2021.04",
        intro:
          "RandPerson是第一个虚拟合成的ReID数据库，拥有模拟真实世界的摄像网络和多人同时运动。我们设计了一个方法来生成大规模的随机纹理图，并且使用它们来创建虚拟人物。通过在生成的数据库上训练ReID模型，我们首次证明了在虚拟数据上训练的模型在未知数据集上的泛化性能更好，超过了在真实数据库上训练的模型。",
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
