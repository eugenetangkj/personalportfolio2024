export const menuLinks = [
    {
        route:"#about",
        id: "about",
        label: "About Me"
    },
    {
        route:"#experience",
        id: "experience",
        label: "Experience"
    },
    {
        route:"#projects",
        id: "projects",
        label: "Projects"
    },
    {
        route: "#volunteering",
        id: "volunteering",
        label: "Volunteering"
    },
    {
        route:"#contact",
        id: "contact",
        label: "Contact"
    },
]

export const values = [
    {
        label: "Tech",
        imageSource: "/assets/icons/about-tech.png",
        content: "I specialize in software engineering, with experience in web, app and game development.",
        delay: "0.5s"
    },
    {
        label: "Design",
        imageSource: "/assets/icons/about-design.png",
        content: "I prioritize user experience in my products, possessing knowledge about the design life cycle and prototyping skills.",
        delay: "1s"
    },
    {
        label: "Community",
        imageSource: "/assets/icons/about-community.png",
        content: "I actively contribute to my community, using my knowledge to solve problems and help those in need.",
        delay: "1.5s"
    },
]

export const experiences = [
    {
        date: 'May 2024 - August 2024',
        title: 'Information Technology Developer Intern at CPF Board',
        award: 'Received a testimonial from the Senior Deputy Director',
        techStack: 'Java, Java Spring, JUnit, IBM DB2, Data Studio, RTC Jazz, Jenkins, SoapUI',
        content:[
            'Contributed to the Special Account closure build at Retirement Decumulation Systems Department',
            'Amended 6 services for 55 Withdrawal using PayNow to accommodate changes in logic and computation',
            'Developed 3 APIs for a new system aimed at facilitating the withdrawal of new Retirement Account inflows for eligible members',
            "Updated the backend logic for a UI screen used in CPF Board's internal business portal",
            'Created 3 batch jobs to verify the validity of account numbers for CPF accounts and the eligibility of members for a valid Retirement Account',
        ],
        links: [
            {
                type: 'Testimonial',
                url: 'https://drive.google.com/file/d/1Ig-5dhbEmFXJIj97JXCICiSPIsbkazNz/view?usp=sharing'
            },
        ],
        delay: "0.5s"
    },
    {
        date: 'May 2023 - August 2023',
        title: 'Information Technology Intern at CBM Pte Ltd',
        award: 'Received a testimonial from the Chief Technology Officer',
        techStack: 'Flutter, PHP Laravel, Voyager, HTML, CSS, JavaScript, jQuery, MySQL, Figma',
        content:[
            'Co-built a full-stack project management system for automation of report generation, reducing the number of platforms needed from 3 to 1',
            'Designed hi-fidelity prototype for the mobile application with Figma and implemented it with Flutter',
            'Created a web admin dashboard with HTML, CSS and JavaScript',
            'Built APIs using PHP Laravel for connection with a MySQL database',
        ],
        links: [
            {
                type: 'Report',
                url: 'https://drive.google.com/file/d/1OVaX2yEKCLlXgbeOe2o8GBRRkmyf6O1T/view?usp=sharing'
            },
            {
                type: 'Testimonial',
                url: 'https://drive.google.com/file/d/1JErUjBbBnqrAHjo04Hc_KzrbOioeU0GU/view?usp=sharing'
            },
            {
                type: 'Figma',
                url: 'https://www.figma.com/file/1qLkgNfX1tY87gBl1ytPa8/Project-Reporting-App?type=design&node-id=0%3A1&mode=design&t=79MzopOjf4ntEe8l-1'
            }
        ],
        delay: "1s"
    },

    {
        date: 'May 2023 - August 2023',
        title: 'Advisor for NUS Orbital 2023',
        award: 'Awarded with the Best Advisor Award',
        techStack: 'Unity, Software Engineering',
        content:[
            'Provided guidance and technical know-how to 11 teams of Year 1 undergraduates for a 3-month long software engineering project',
            'Enabled all teams to complete the program with 3 teams achieving Artemis (Extreme), the highest level of achievement for Orbital teams',
        ],
        links: [
            {
                type: 'Award',
                url: 'https://credentials.nus.edu.sg/399b9cca-a52f-4630-9c98-139f631bf743'
            }
        ],
        delay: "1.5s"
    },
]

export const techProjects = [
    {
        title: 'Shooting Portals',
        award: "Awarded with the Judge's Choice Award",
        imageUrl: "/assets/projects/tech/shooting-portals.png",
        description:
            "Shooting Portals is a PC 2D puzzle-based platformer. The game revolves around Pulse, an inventor residing in the Portal Galaxy. His dog, Orbit, accidentally entered into an unknown galaxy. Hence, it is up to you to rescue Orbit.",
        techStack: 'Unity, Microsoft Azure PlayFab',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/shooting-portals'
            },
            {
                type: 'Game',
                url: 'https://play.unity.com/mg/other/webgl-builds-200053'
            },
            {
                type: 'Report',
                url: 'https://drive.google.com/file/d/11h6WRXqXDVpQG3aI2ndPNVduVhvQHkQb/view?usp=sharing'
            },
            {
                type: 'Video',
                url: 'https://drive.google.com/file/d/1MleumkdFqX2PaIDkdod2K9Xsbv8X6CP_/view?usp=sharing',
            },
            {
                type: 'Award',
                url: 'https://credentials.nus.edu.sg/9a5838fc-ea3e-4a9c-a523-dce0334166d7'
            }
        ],
    },
    {
        title: 'Computer, Easy Lah!',
        award: "No Award",
        imageUrl: "/assets/projects/tech/cel.png",
        description:
            "Computer, Easy Lah! is an initiative that provides an interactive learning platform for senior adults to recap and practice the content taught in computer classes. It is built for Work Live Digital, and is supported by partners such as Family Central and Chua Chu Kang IT Centre.",
        techStack: 'Next.JS, Figma',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/computereasylah'
            },
            {
                type: 'Website',
                url: 'https://www.cel.land/home'
            },
            {
                type: 'Report',
                url: 'https://drive.google.com/file/d/1FGqIKk6Bs9N6xLL4YPxFLb2dhNYuqj_D/view?usp=sharing'
            },
           
        ],
    },
    {
        title: 'ITS Automated Testing Engine',
        award: "No Award",
        imageUrl: "/assets/projects/tech/automated-testing-engine.png",
        description:
            "This is an automated testing tool that uses black box testing to test the Intelligent Tutoring System (ITS) developed at the Programming Languages and Software Engineering lab at School of Computing, NUS. It uses metamorphic testing, modifying base programs into semantically equivalent ones for bug detection.",
        techStack: 'Python, PyTest, OpenAI, Docker',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/automated-testing-engine'
            },
            {
                type: 'Report',
                url: 'https://drive.google.com/file/d/1joECPLurtMKJaCMSh3EGzQ-k1OD-6axp/view?usp=sharing'
            },
            {
                type: 'Slides',
                url: 'https://drive.google.com/file/d/1cQyXycC204YvFOlOkbM2NV0cHbpeQs4T/view?usp=sharing'
            },
           
        ],
    },
    {
        title: 'Good Goods',
        award: "No Award",
        imageUrl: "/assets/projects/tech/goodgoods.png",
        description:
            "Singaporeans recognise the importance of social enterprises and are willing to support them, but finding these businesses remains a significant challenge. Thus, Good Goods is a RAG-powered discovery platform that makes it easier for consumers to discover social enterprises based on their product needs.",
        techStack: 'Next.JS, Tailwind CSS, Flowbite, MongoDB, OpenAI',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/good-goods'
            },
            {
                type: 'Website',
                url: 'https://goodgoods.vercel.app/'
            },
        ],
    },
    {
        title: 'neatnotes',
        award: "No Award",
        imageUrl: "/assets/projects/tech/neatnotes.png",
        description:
            "neatnotes is a notes-taking Android mobile application that is designed for users to easily create and manage their notes on the go. It has a simplistic yet functional interface, providing features such as user authentication, notes-taking and PDF generation.",
        techStack: 'Flutter, Firebase, Figma',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/neatnotes'
            },
            {
                type: 'Figma',
                url: 'https://www.figma.com/file/PPykJwYKVNBqVYFTJwzMPw/NeatNotes?type=design&node-id=0%3A1&t=9VcbUMcaPIIuP8sx-1'
            },
            {
                type: 'Video',
                url: 'https://www.youtube.com/watch?v=PKrr3AFPh2I'
            },
           
        ],
    },
    {
        title: 'InternBuddy',
        award: "No Award",
        imageUrl: "/assets/projects/tech/internbuddy.png",
        description:
            "InternBuddy is a desktop application designed for Computing undergraduates to systematically track and manage their internship applications. It is available on the Windows, macOS and Linux operating systems.",
        techStack: 'Java, JavaFX, Jackson, JUnit5, TestFX',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/internbuddy'
            },
            {
                type: 'Website',
                url: 'https://ay2223s2-cs2103t-t14-3.github.io/tp/'
            },
           
        ],
    },
    {
        title: 'Work Live Digital Website',
        award: "No Award",
        imageUrl: "/assets/projects/tech/wld-website.png",
        description:
            "A brand new website for Work Live Digital, a social impact initiative that provides free basic computer workshops to young seniors above 50 and connects them to opportunities to further their skills after completing the workshops.",
        techStack: 'Next.JS, Tailwind CSS, Flowbite, Figma',
        links: [
            {
                type: 'Website',
                url: 'https://worklivedigital.vercel.app/'
            },
        ],
    },
    {
        title: 'Roar of the Dinosaur',
        award: "No Award",
        imageUrl: "/assets/projects/tech/roar-of-the-dinosaur.png",
        description:
            "Help Rex, the leader of the dinosaurs, save the Dinosaur Galaxy from an incoming meteor. Use his unique platform-spawning mechanics to collect celestial stones across 4 differently-themed galaxies in order to stop the meteor.",
        techStack: 'GameMaker',
        links: [
            {
                type: 'Game',
                url: 'https://gx.games/games/rryabp/roar-of-the-dinosaur/tracks/7ad14fa6-402a-4c27-9233-2eacb1d1305a/'
            },
            {
                type: 'Windows',
                url: 'https://drive.google.com/file/d/1II9ysWtYbrSGd8MeHqiSmrUUTxIs5cSU/view?usp=sharing'
            },
            {
                type:'Video',
                url:'https://youtu.be/CWsUNjrUly8'
            },
            {
                type: 'Report',
                url: 'https://drive.google.com/file/d/1wYb7FbXSC6W-Wh4Q7zeqfiAHVOrmdi1y/view?usp=sharing'
            },
           
        ],
    },
    {
        title: 'Finterest',
        award: "No Award",
        imageUrl: "/assets/projects/tech/finterest.png",
        description:
            "Finterest is an AI-powered financial news web app where you can dive deep into the world of finance. Chat with AI to gain deeper insights about financial articles, and generate summaries of articles if you are short of time.",
        techStack: 'Next.JS, Firebase, OpenAI, Figma',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/qreoct/finterest'
            },
            {
                type: 'Website',
                url: 'https://finterest3216.vercel.app/'
            },
        ],
    },
    {
        title: 'mood',
        award: "No Award",
        imageUrl: "/assets/projects/tech/mood.png",
        description:
            "mood is a personal journal web application that allows you to create/edit journal entries, upload images, meditate and view profile information. Start writing journal entries today!",
        techStack: 'HTML, CSS, JavaScript, Django, SQLite',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/mood'
            },
            {
                type: 'Video',
                url: 'https://www.youtube.com/watch?v=1PuJjJNb6qI&feature=youtu.be'
            },
        ],
    },
    {
        title: 'Personal Portfolio 2023',
        award: "No Award",
        imageUrl: "/assets/projects/tech/personal-portfolio-2023.png",
        description:
            "My 2023 personal portfolio website, designed by myself and created using Tailwind CSS. I went for a simplistic and clean look, and utilised Tailwind to create a responsive interface.",
        techStack: 'HTML, CSS, JavaScript, Tailwind CSS',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/personalportfolio2023'
            },
            {
                type: 'Website',
                url: 'https://personalportfolio2023-eugenetang.vercel.app/'
            },
        ],
    },
    {
        title: "ET's Planet",
        award: "No Award",
        imageUrl: "/assets/projects/tech/etplanet.png",
        description:
            "My 2022 personal portfolio website, made fully responsive through the usage of vanilla CSS's media queries. The design mainly revolves around the concept of aliens/planets since ET is an acronym for both my name 'Eugene Tang' and extraterrestrials.",
        techStack: 'HTML, CSS, JavaScript',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/etplanet'
            },
            {
                type: 'Website',
                url: 'https://eugenetangkj.github.io/etplanet/'
            },
        ],
    },
    {
        title: "BooBot",
        award: "No Award",
        imageUrl: "/assets/projects/tech/boobot.png",
        description:
            "BooBot is a text-based GUI task manager application that helps you to keep track of your tasks, saving time and ensuring that you are on track. With BooBot, you do not have to worry about missing any deadlines anymore.",
        techStack: 'Java, JavaFx, JUnit5',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/boobot'
            },
            {
                type: 'Website',
                url: 'https://eugenetangkj.github.io/boobot/'
            },
        ],
    },
    {
        title: "MdNotes",
        award: "No Award",
        imageUrl: "/assets/projects/tech/mdnotes.png",
        description:
            "MdNotes is a desktop web application that allows you to create and preview notes in Markdown. Your documents are saved to the cloud, allowing for cross-device access.",
        techStack: 'ReactJS, Firebase',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/mdnotes'
            },
            {
                type: 'Website',
                url: 'https://mdnotes-docs.netlify.app/'
            },
            {
                type: 'Figma',
                url: 'https://www.figma.com/file/V9vrHPMETXE0PbabuL5yrH/MdNotes'
            }
        ],
    },
    {
        title: "Threads",
        award: "No Award",
        imageUrl: "/assets/projects/tech/threads.png",
        description:
            "This is a simplified clone of Meta's Threads application, built as an educational project. Post threads, comment on others' posts, and join communities to find like-minded individuals.",
        techStack: 'Next.JS, MongoDB, Clerk, UploadThing, shadcn',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/threads'
            },
            {
                type: 'Website',
                url: 'https://threads-topaz-eta.vercel.app/'
            },
        ],
    },
    {
        title: "Multiplication Mania",
        award: "No Award",
        imageUrl: "/assets/projects/tech/multiplication-mania.png",
        description:
            "Multiplication Mania is a simple multiplication game hosted on the web. You have to correctly answer 10 questions to obtain the Multiplication Crystal, a proof that one is good in multiplication.",
        techStack: 'ReactJS',
        links: [
            {
                type: 'GitHub',
                url: 'https://github.com/eugenetangkj/multiplication-mania'
            },
            {
                type: 'Website',
                url: 'https://multiplication-mania.netlify.app/'
            },
        ],
    },
];


export const designProjects = [
    {
        title: 'ClosetLogue',
        award: "No Award",
        imageUrl: "/assets/projects/design/closetlogue.png",
        description:
            "ClosetLogue is a mobile UX design project that provides a highly-customised interface to simplify the process of outfit selection for youths, such that dressing well can be hassle and stress-free.",
        techStack: 'Design Life Cycle, Balsamiq, Figma',
        links: [
            {
                type: 'Figma',
                url: 'https://www.figma.com/proto/WP2tj31qhJKM5NbFqecc9I/CS3240-Group-11-G3-High-Fidelity-Prototype?page-id=0%3A1&type=design&node-id=1-3007&viewport=652%2C400%2C0.04&t=1FpJpuswkiqnPkMS-1&scaling=scale-down&starting-point-node-id=1%3A3007&show-proto-sidebar=1&mode=design'
            },
            {
                type: 'Website',
                url: 'https://project0902.wixsite.com/closetlogue'
            },
        ],
    },
    {
        title: 'CampusCollab',
        award: "No Award",
        imageUrl: "/assets/projects/design/campuscollab.png",
        description:
            "CampusCollab is a UX design project revolving around a gamified mobile application that is designed to connect NUS students for efficient recruitment of participants for surveys and studies.",
        techStack: 'Design Life Cycle, Figma',
        links: [
            {
                type: 'Figma',
                url: 'https://www.figma.com/proto/XM2FUlYNmmueSCpvl3NBco/Hi-Fidelity-Prototype-Draft-4?page-id=0%3A1&type=design&node-id=317-8392&viewport=10321%2C1420%2C0.96&t=DpBBt0jDZ9ae7zzp-1&scaling=scale-down&starting-point-node-id=317%3A8392&show-proto-sidebar=1&mode=design'
            },
            {
                type: 'Report',
                url: 'https://drive.google.com/file/d/1sZXfgF9J-gjk8yYb53cxMJgppY1Nz8_-/view?usp=sharing'
            },
        ],
    },
    {
        title: 'ShareCar',
        award: "No Award",
        imageUrl: "/assets/projects/design/sharecar.png",
        description:
            "ShareCar is a car sharing mobile UX design project that aims to connect car owners with potential customers while protecting the interests of both parties.",
        techStack: 'Design Life Cycle, Balsamiq, Figma',
        links: [
            {
                type: 'Figma',
                url: 'https://www.figma.com/proto/Z5NYAwaHV62sMLTeLvrIdv/ShareCar?page-id=0%3A1&node-id=1%3A2&starting-point-node-id=1%3A2&scaling=scale-down'
            },
            {
                type: 'Report',
                url: 'https://drive.google.com/file/d/1UBxyh1g8bX6E4rND1yOop-IeGyJmk6fH/view'
            },
        ],
    },
    {
        title: 'CampusVibe',
        award: "No Award",
        imageUrl: "/assets/projects/design/campusvibe.png",
        description:
            "CampusVibe is a UX project revolving around a specialised platform dedicated to simplifying the process of organising and hosting virtual team-building sessions. It is targeted towards Singapore University students.",
        techStack: 'Design Life Cycle, Miro',
        links: [
            {
                type: 'Report',
                url: 'https://drive.google.com/file/d/1uPPm3-2hFveVWaJOQVpa12a2O6HaNTG1/view?usp=sharing'
            },
        ],
    },




]


export const volunteeringExperiences = [
    {
        date: 'December 2023 - February 2024',
        title: 'Volunteer at Family Central',
        type: 'elderly',
        isOngoing: false,
        content:[
            'Designed and led a workshop on Google Gemini for 80 senior adults',
            'Received a letter of affirmation from Family Central'
        ],
        delay: "0.5s"
    },
    {
        date: 'October 2022 - December 2022',
        title: 'Mentor at CampusImpact',
        type: 'teach',
        isOngoing: false,
        content:[
            'Planned and executed academic and enrichment activities with a Primary 4 student',
        ],
        delay: "1s"
    },
    {
        date: 'December 2021 - Present',
        title: 'Volunteer at Work Live Digital',
        type: 'elderly',
        isOngoing: true,
        content:[
            'Curated booklets on basic computer usage',
            'Facilitated computer classes for senior adults',
            'Built a website for Work Live Digital'
        ],
        delay: "1.5s"
    },
    {
        date: 'February 2020 - October 2020',
        title: 'Student Teacher at CDAC Singapore',
        type: 'teach',
        isOngoing: false,
        content:[
            'Gave academic support in the subjects of Mathematics and Science for a Primary 6 student',
        ],
        delay: "2s"
    },
    {
        date: 'April 2017 - April 2018',
        title: 'Organising Committee at Prison Fellowship Singapore',
        type: 'organise',
        isOngoing: false,
        content:[
            'Led a team of 5 to offer weekly tuition support and organise enrichment activities',
            'Fund-raised $143.90 through sales of self-baked biscuits that were decorated by the beneficiary',
        ],
        delay: "2.5s"
    },
]