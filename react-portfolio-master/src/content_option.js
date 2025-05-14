const logotext = "Lujain";
const meta = {
    title: "Lujain Almomani",
    description: "I'm Lujain Almomani data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I'm Lujain Almomani",
    animated: {
        first: "I Do Cool Things",
        second: "I LOVE Side Quests",
        third: "I Develop Mobile Apps",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "about me",
    aboutme: "I am a passionate Telecom and Internet of Things (IoT) Engineer with expertise in designing and deploying scalable communication networks and connected devices. With a strong background in wireless protocols, network optimization, and embedded systems, I thrive on developing innovative solutions that bridge the gap between hardware and software. At the intersection of telecommunications and IoT, I leverage my skills to create reliable, secure, and efficient systems that drive digital transformation and unlock new possibilities across various industries. I am committed to continuous learning and collaboration, always seeking to stay at the forefront of emerging technologies to deliver impactful results.",
};
const worktimeline = [
    {
        jobtitle: "Research Intern",
        where: "University of Wollongong (UOWD)",
        date: "Sept 2024 - Present",
        description: "Pioneering ML-driven intrusion detection for vehicular networks. Developed an ML-based IDS for VANETs with 97% accuracy, pushing the boundaries of cybersecurity in IoT ecosystems.",
        achievements: [
            "Developed ML-based IDS with 97% accuracy",
            "Published research on VANET security",
            "Implemented advanced system optimization techniques"
        ],
        type: "research"
    },
    {
        jobtitle: "Clubs Director - Student Government",
        where: "Rochester Institute of Technology (RIT)",
        date: "Apr 2023 - Sept 2023",
        description: "Transformed campus engagement through strategic leadership and community-building initiatives.",
        achievements: [
            "Led university clubs and organized impactful events",
            "Earned Best Leadership award",
            "Strengthened community engagement"
        ],
        type: "leadership"
    },
    {
        jobtitle: "Business Intelligence Intern",
        where: "Jordan Payments & Clearance Company (JOPACC)",
        date: "July 2023 - Aug 2023",
        description: "Leveraged data-driven insights to enhance business decision-making and reporting processes.",
        achievements: [
            "Developed key presentation & quarterly reports",
            "Utilized Power BI for data visualization",
            "Improved reporting and ETL processes"
        ],
        type: "business"
    },
    {
        jobtitle: "Academic Break",
        where: "Personal Development",
        date: "Continuous Learning Period",
        description: "Dedicated time for skill enhancement, certification acquisition, and strategic personal growth.",
        achievements: [
            "Completed Nano Degree in Agile Software Development",
            "Participated in McKinsey Forward Learners Program",
            "Engaged in PWC Elevate Me Program"
        ],
        type: "break"
    }
];

const skills = [
    // Technical Skills
    {
        name: "Python",
        value: 90,
    },
    {
        name: "C++",
        value: 85,
    },
    {
        name: "Cybersecurity",
        value: 85,
    },
    {
        name: "Machine Learning",
        value: 85,
    },
    {
        name: "Deep Learning",
        value: 80,
    },
    {
        name: "Data Analysis",
        value: 80,
    },
    {
        name: "Network Design",
        value: 75,
    },
    {
        name: "IoT Systems",
        value: 75,
    },
    {
        name: "Embedded Systems",
        value: 70,
    },
    // Soft Skills
    {
        name: "Leadership",
        value: 85,
    },
    {
        name: "Strategic Planning",
        value: 80,
    },
    {
        name: "Research & Innovation",
        value: 85,
    },
    {
        name: "Collaborative Communication",
        value: 85,
    },
    {
        name: "Problem Solving",
        value: 90,
    },
    {
        name: "Agile Methodology",
        value: 75,
    }
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};