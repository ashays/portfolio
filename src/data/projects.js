const projects = [
    {
        name: "Wholeheartedly",
        highlight: true,
        subtitle: "Tool that tracks your spending and highlights how the brands you shop at support their workers, build their communities, and impact the planet—so you can put your money where your values are",
        description: "Wholeheartedly is a personal, passion project I designed, built, launched, and marketed as a way to make corporate social responsibility metrics accessible and understandable, and to help people align their spending with their values. This included aggregating data from various nonprofits into a business directory and publishing as an iOS app, Chrome extension, and web app with search functionality, user authentication, integration with a user’s bank or credit card, push notifications, and spend analytics",
        color: "#9857d6",
        graphics: [
            {source: "https://drive.google.com/uc?id=1-WVZWFYDxtYxA4Fu33c7lLb2-1WCYQFB", description: "Onboarding", width: 250},
            {source: "https://drive.google.com/uc?id=12cG1_T_uJff-l2jX26Pq6hHWlZ1z6WRK", description: "Business scores", width: 250},
            {source: "https://drive.google.com/uc?id=13RM5h_addryYenIIBw8ocvzfHAvKahJR", description: "Track spend", width: 250}
        ],
        tags: ["Independent Project", "iOS", "Chrome Extension", "ReactJS", "React Native", "Node.js", "Google Cloud Functions", "Netlify Functions", "Firestore", "Plaid"],
        links: [
          {title: "Wholeheartedly Site", url: "https://wholeheartedly.xyz/"},
          {title: "App Store", url: "https://apps.apple.com/us/app/wholeheartedly/id1603125055", icon: "fab fa-app-store"},
          {title: "Chrome Web Store", url: "https://chrome.google.com/webstore/detail/wholeheartedly/moipnphogpagnhlkmnpelmiakodfljab", icon: "fab fa-chrome"}
        ]
    }, {
        name: "Polygone",
        subtitle: "Colorful puzzle game built with JavaScript and deployed as a mobile application",
        color: "#CC3333",
        graphics: [
            {source: "https://drive.google.com/uc?id=0B-gK06RAbRk5dFVoMTRIbW5BX2c", description: "App Home", width: 250},
            {source: "https://drive.google.com/uc?id=0B-gK06RAbRk5Rk5wcW5ieTM3QTA", description: "App Gameplay", width: 280},
            {source: "https://drive.google.com/uc?id=0B-gK06RAbRk5VDdsWFc5ZnRTalE", description: "App Instructions", width: 250}
        ],
        tags: ["Independent Project", "Android", "iOS", "Cordova"],
        links: [
            {title: "App Store", url: "https://itunes.apple.com/us/app/polygone/id1071733351?ls=1&mt=8", icon: "fab fa-app-store"},
            {title: "Play Store", url: "https://play.google.com/store/apps/details?id=com.ashaysheth.puzzle", icon: "fab fa-google-play"},
            {title: "Showcase", url: "https://behance.net/gallery/32618193/Polygone", icon: "fab fa-behance"},
            {title: "Repository", url: "https://github.com/ashays/polygone", icon: "fab fa-github"}
        ]
    }, {
        name: "Guide.me",
        subtitle: "Collaborative guidance application design and development built using Meteor.js",
        description: "Guide.me is a \"collaborative guidance\" web application built as a software engineering intern at then OpenSpan (now Pegasystems) as a potential new product development for the company. The project's goal was to provide call center and customer service agents a means to intuitively bulid forms and fill these forms out with customers collaboratively, hassle-free, and in real-time.",
        job: {title: "Software Engineering Intern", company: "OpenSpan", dates: "2015"},
        color: "#ee6e73",
        tags: ["OpenSpan", "Meteor.js", "AWS", "Materialize.css"],
    }, {
        name: "BEAST",
        subtitle: "Code-first design system built specifically for touchscreen, ATM interfaces",
        description: "One of my first projects at Capital One, at around the same time the lane was discussing modernizing our ATM software stack, was a UI component library we called BEAST that aimed to create a standardized language for our ATM experiences that followed the guidelines and principles of Capital One's global design system Gravity but including components built specifically for touchscreen, machine experiences. It was a design-led effort that started as a component library for our tech partners to use to rapidly build ATM experiences, standardize the front-end code on our ATMs, and deliver a consistent and unified experience across these ATM experiences that align back to other Capital One experiences. And it has indeed created a very tightly-knit relationship between the designers and engineers on our team. We’ve since adjusted the dynamic slightly as to where our tech partners have taken greater ownership over building and maintaining the UI components. And as we built out design principles and a design library, the UI component library grew into a more fully-fledged design system including design principles and best practices along with a Figma library. Most recently, BEAST has been part of the ongoing Gravity Unification efforts to consolidate the numerous localized design systems.",
        job: {title: "Creative technologist and UX designer", company: "Capital One", dates: "2017 to present"},
        color: "#0D74AF",
        graphics: [
            {source: "https://drive.google.com/uc?id=1QVlA-9CFQk94vhtLjUHoJNqHGQh3Uczq", description: "Screen templates", width: 800}
        ],
        tags: ["Capital One", "Creative technology", "Design systems", "Web Components", "UI Library"]
    }, {
        name: "ATM Simulator",
        subtitle: "Rapid, high-fidelity prototyping tool for stakeholder alignment and user testing",
        description: "A design-led and owned initiative that mimics the digital ATM experience, though built completely independently from the ATM software. The tool gives us and our partners visibility and accessibility into the existing ATM experience and serves as a rapid, high-fidelity prototyping tool for concept and usability testing.",
        job: {title: "Creative technologist and UX designer", company: "Capital One", dates: "2017 to present"},
        color: "#013D5B",
        tags: ["Capital One", "Creative technology", "ReactJS", "Prototyping", "User research"]
    }, {
        name: "Hack G3",
        subtitle: "Organizer for Georgia Tech's third annual hackathon, one of the largest in the nation",
        description: "Attracting thousands of hackers from around the nation, HackGT, Georgia Tech's official annual hackathon, is a weekend of learning, innovation, and building. In just 36 hours, students form teams, develop ideas, and build them into reality. Hack G3 was themed around \"Healthy Hacking\" and had a budget of 150K, sponsorships from several Fortune 500 companies, almost 200 high-caliber project submissions (ranging from web and mobile apps to VR and wearable tech), thousands of dollars worth of prizes, and, most importantly, over a thousand happy hackers.",
        color: "#cd0073",
        graphics: [
            {source: "https://drive.google.com/uc?id=0B-gK06RAbRk5LWNwZUppQ3B3SkljTUpmcjBobmoxb2Yxbzhv", description: "HackGT Site", width: 800}
        ],
        tags: ["Hack GT", "Experience Design"],
        links: [
            {title: "Hack G3 Site", url: "https://fall2016.hack.gt/"}
        ]
    }, {
        name: "NG Beta",
        subtitle: "Web application and member-portal for a large student service organization",
        color: "#F13C11",
        graphics: [
            {source: "https://drive.google.com/uc?id=1otXXInbHXZSyc3G14wJkevGSZVgPK5_O", description: "Beta Home", width: 680},
            {source: "https://drive.google.com/uc?id=1XA7WGzl1hYV9N5_wA_eXTqDojtex2UPs", description: "Mobile Event Page", width: 140},
        ],
        tags: ["North Gwinnett Beta Club", "PHP", "MySQL"],
        links: [
            {title: "NG Beta Site", url: "http://nghsbeta.com/"},
            {title: "Showcase", url: "https://behance.net/gallery/12919135/North-Gwinnett-Beta-Club", icon: "fab fa-behance"}
        ]
    }, {
        name: "Stackfolio",
        subtitle: "Modern analytics platform and loan asset management service for banks",
        description: "Stackfolio, a FinTech startup based in Atlanta, is modernizing loan trading for banks through a powerful data platform. I developed multiple analytics tools including a highly customizable widget-based peer-group comparison report builder and a bank level portfolio overview \"scorecard.\" Additionally, I built a news aggregation and subscription service to gather and deliver relevant news stories to consumers and banks.",
        job: {title: "Front-End Web Developer", company: "Stackfolio", dates: "2015 to 2017"},
        color: "#3EAF3A",
        graphics: [
            {source: "https://drive.google.com/uc?id=0B-gK06RAbRk5UzFjMGtjNVRhaWhfTmFra2FLdE1wM0VackNF", description: "Scorecard", width: 800}
        ],
        tags: ["Stackfolio", "Python-Django", "MongoDB", "Zurb Foundation", "Chart.js"],
        links: [
            {title: "Stackfolio App", url: "http://stackfolio.com/"}
        ]
    }, {
        name: "Mobile check deposit",
        highlight: true,
        subtitle: "An updated mobile check deposit experience with a focus on transparency and simplicity and based on features from stakeholder vision exercises and learnings from discovery and concept research",
        description: "After joining this team, I led a vision exercise to align all our various stakeholders to the 3-year-out goal-state for the mobile check deposit experience. This vision work included concepts like proactive push notifications and messaging, a simplified deposit experience, instant funds availability, no limits or restrictions on check type, step-up-style restrictive endorsement, and simplified error handling. This was followed by exploratory user research with a variety of check deposistors across channels to test these concepts and understand what ideas were the most exciting for customers—especially teller and ATM check depositors. Upcoming tech work and initiatives provided a larger opportunity to make progress towards these vision-states of the mobile check deposit experience, from transparency around deposit timelines (and giving users funds availability information before they complete their deposits) to earlier error processing and handling (how about recognizing errors right as you snap a picture of your check rather than the day after your deposit?) to simplification of the happy-path deposit experience (via a shift to a more linear flow and tech enhancements like reading and auto-populating the check amount) and to help solve two of the biggest customer pain points and reasons for are calling in regards to mobile check deposit (high failure rates during today’s deposit process and funds availability, with customers needing funds faster)",
        job: {title: "Creative technologist and UX designer", company: "Capital One", dates: "2017 to present"},
        color: "#128020",
        tags: ["Capital One", "Mobile UX design", "Vision mapping", "Concept research"]
    }, {
        name: "Decentralized",
        subtitle: "Twitter-like peer-to-peer content sharing platform with no centralized database of information",
        description: "As an undergraduate researcher at Georgia Tech's social computing lab, my project was to build a peer-to-peer content sharing platform modeled after Twitter that demonstrates the capabilities of IPFS, a decentralized and completely unrestricted storage protocol.",
        color: "#1ea1f3",
        tags: ["GT Social Computing Lab", "IPFS", "Git"]
    }, {
        name: "Pebble Pickup",
        subtitle: "Smartwatch app that presents a pick up line from Twitter at the flick of the wrist",
        color: "#67BD80",
        tags: ["MHacks Hackathon", "Strap", "Kimono Labs"],
        awards: ["Best use of Strap, MHacks V"]
        // links: [
        //     {title: "Article", url: "http://blog.straphq.com/2015/01/27/strap-kit-apps-won-mhacks/"}
        // ]
    }, {
        name: "ConnectEd",
        subtitle: "Utility built for educators to make the classroom more engaging, interactive, and smart",
        description: "Built to utilize the technology already in schools to empower students and educators, ConnectEd is an easy to use and simple to integrate responsive web application that takes the questions and content uploaded by the teacher to auto-magically create fun, real-time games to play in the classroom with students. ConnectEd also provides educators with data about how each student is performing and where the class as a whole is having trouble.",
        color: "#1abc9c",
        tags: ["Georgia Tech", "Firebase", "UX Design"],
        links: [
            {title: "Prototype", url: "https://ashays.github.io/interactive-game/"},
            {title: "Repository", url: "https://github.com/ashays/interactive-game", icon: "fab fa-github"}
        ]
    }, {
        name: "Royal Flush",
        subtitle: "Simple poker probabilities calculator and utility built with JavaScript",
        color: "#4BA8A5",
        tags: ["Independent Project"]
    }, {
        name: "Acing APHG",
        subtitle: "An AP Human Geography study application for Android and iOS built with PhoneGap",
        color: "#2C5D98",
        graphics: [
            {source: "https://drive.google.com/uc?id=1yMzfmCxYr9fpI2EELTeHQTTJ3kaxVWCi", description: "App Home", width: 275},
            {source: "https://drive.google.com/uc?id=1KsXS7PFnCeez8dmgG5LXzuKj7QXV2Blm", description: "Learn It", width: 245},
            {source: "https://drive.google.com/uc?id=1uXjygpzLjHRvhU-_GaFSxUd3N7aQajh1", description: "Review It", width: 275}
        ],
        tags: ["Independent Project", "Android", "iOS", "PhoneGap", "Cordova"],
        links: [
            {title: "Play Store", url: "https://play.google.com/store/apps/details?id=com.acingap.humangeography", icon: "fab fa-google-play"},
            {title: "App Store", url: "https://itunes.apple.com/us/app/acing-ap-human-geography/id463108685?ls=1&mt=8", icon: "fab fa-app-store"}
        ]
    }, {
        name: "Herald",
        subtitle: "Messenger chat-bot aiming to make government more accessible",
        color: "#3f82a5",
        tags: ["Independent Project", "Chat-bot", "Messenger Bot", "Node.js", "Express.js"]
    }, {
        name: "DevRoast",
        subtitle: "Data analysis of over 10K hackathon projects' Git activity, awards won, and team size",
        color: "#009dd9",
        tags: ["SwampHacks Hackathon", "D3.js", "MongoDB"],
        awards: ["Nielsen Best Measurement Hack, SwampHacks 2016"]
    }, {
        name: "YouthReach",
        subtitle: "Creative website redesign submission for non-profit organization built using WordPress",
        color: "#1773BB",
        graphics: [
            {description: "YouthReach Site", width: 800, source: "https://drive.google.com/uc?id=1rOar8ebgVZq0E7-mD8Oweq9hOylhWsCB"}
        ],
        tags: ["WEBChallenge Competition", "WordPress", "PHP"],
        awards: ["Grand Prize, TAG-Ed’s WEBChallenge Competition 2014"],
        links: [
            {title: "YouthReach Site", url: "http://youthreach.org/"}
        ]
    }, {
        name: "Pick-a-Ticket",
        subtitle: "Web app concept and prototype for discovering events and buying tickets online",
        color: "#2A2C31",
        tags: ["WEBChallenge Competition"],
        awards: ["Grand Prize, TAG-Ed’s WEBChallenge Competition 2013"]
    }
];

export default projects;