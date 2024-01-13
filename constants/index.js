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
        route:"#contact",
        id: "contact",
        label: "Contact"
    },
]

export const values = [
    {
        label: "Tech",
        imageSource: "/assets/icons/about-tech.png",
        content: "I specialize in software engineering and database systems, with experience in web, app and game development.",
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
        date: 'May 2023 - August 2023',
        title: 'Information Technology Intern at CBM Pte Ltd',
        award: 'Received a recommendation letter from the Chief Technology Officer',
        techStack: 'Flutter, PHP Laravel, Voyager, HTML, CSS, Javascript, jQuery, MySQL, Figma',
        content:[
            'Co-built a full-stack project management system for automation of report generation, reducing the number of platforms needed from 3 to 1',
            'Designed hi-fidelity prototype for the mobile application with Figma and implemented it with Flutter',
            'Created a web admin dashboard with HTML, CSS and JavaScript',
            'Built APIs using PHP Laravel  connect to MySQL database',
        ],
        links: [
            {
                type: 'Report',
                url: 'https://drive.google.com/file/d/1OVaX2yEKCLlXgbeOe2o8GBRRkmyf6O1T/view?usp=sharing'
            },
            {
                type: 'Figma',
                url: 'https://www.figma.com/file/1qLkgNfX1tY87gBl1ytPa8/Project-Reporting-App?type=design&node-id=0%3A1&mode=design&t=79MzopOjf4ntEe8l-1'
            }
        ]
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
        links: []
    },



]