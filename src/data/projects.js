const projects = [
    {
        name: "Polygone",
        subtitle: "Colorful puzzle game built with JavaScript and deployed as a mobile application",
        color: "#CC3333",
        tags: ["Independent Project", "Android", "iOS", "Cordova"],
        links: [
            {title: "App Store", url: "https://itunes.apple.com/us/app/polygone/id1071733351?ls=1&mt=8"},
            {title: "Play Store", url: "https://play.google.com/store/apps/details?id=com.ashaysheth.puzzle"},
            {title: "Showcase", url: "https://behance.net/gallery/32618193/Polygone"},
            {title: "Repository", url: "https://github.com/ashays/polygone"}
        ]
    }, {
        name: "Stackfolio",
        subtitle: "Modern analytics platform and loan asset management service for banks",
        description: "Stackfolio, a FinTech startup based in Atlanta, is modernizing loan trading for banks through a powerful data platform. I developed multiple analytics tools including a highly customizable widget-based peer-group comparison report builder and a bank level portfolio overview \"scorecard.\" Additionally, I built a news aggregation and subscription service to gather and deliver relevant news stories to consumers and banks.",
        job: {title: "Front-End Web Developer", dates: "2015 to 2017"},
        color: "#3EAF3A",
        tags: ["Stackfolio", "Python-Django", "MongoDB", "Zurb Foundation", "Chart.js"],
        links: [
            {title: "Stackfolio App", url: "http://stackfolio.com/"}
        ]
    }, {
        name: "ConnectEd",
        subtitle: "Utility built for educators to make the classroom more engaging, interactive, and smart",
        description: "Built to utilize the technology already in schools to empower students and educators, ConnectEd is an easy to use and simple to integrate responsive web application that takes the questions and content uploaded by the teacher to auto-magically create fun, real-time games to play in the classroom with students. ConnectEd also provides educators with data about how each student is performing and where the class as a whole is having trouble.",
        color: "#1abc9c",
        tags: ["Georgia Tech", "Firebase", "UX Design"],
        links: [
            {title: "Prototype", url: "https://ashays.github.io/interactive-game/"},
            {title: "Repository", url: "https://github.com/ashays/interactive-game"}
        ]
    }, {
        name: "Herald",
        subtitle: "Messenger chat-bot aiming to make government more accessible",
        color: "#3f82a5",
        tags: ["Independent Project", "Chat-bot", "Messenger Bot", "Node.js", "Express.js"]
    }, {
        name: "NG Beta",
        subtitle: "Web application and member-portal for a large student service organization",
        color: "#F13C11",
        tags: ["North Gwinnett Beta Club", "PHP", "MySQL"],
        links: [
            {title: "NG Beta Site", url: "http://nghsbeta.com/"},
            {title: "Showcase", url: "https://behance.net/gallery/12919135/North-Gwinnett-Beta-Club"}
        ]
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
        name: "DevRoast",
        subtitle: "Data analysis of over 10K hackathon projects' Git activity, awards won, and team size",
        color: "#009dd9",
        tags: ["SwampHacks Hackathon", "D3.js", "MongoDB"],
        awards: ["Nielsen Best Measurement Hack, SwampHacks 2016"]
    }, {
        name: "YouthReach",
        subtitle: "Creative website redesign submission for non-profit organization built using WordPress",
        color: "#1773BB",
        tags: ["WEBChallenge Competition", "WordPress", "PHP"],
        awards: ["Grand Prize, TAG-Ed’s WEBChallenge Competition 2014"],
        links: [
            {title: "YouthReach Site", url: "http://youthreach.org/"}
        ]
    }, {
        name: "Guide.me",
        subtitle: "Collaborative guidance application design and development built using Meteor.js",
        description: "Guide.me is a \"collaborative guidance\" web application built as a software engineering intern at then OpenSpan (now Pegasystems) as a potential new product development for the company. The project's goal was to provide call center and customer service agents a means to intuitively bulid forms and fill these forms out with customers collaboratively, hassle-free, and in real-time.",
        job: {title: "Software Engineering Intern", dates: "2015"},
        color: "#ee6e73",
        tags: ["OpenSpan", "Meteor.js", "AWS", "Materialize.css"],
    }, {
        name: "Royal Flush",
        subtitle: "Simple poker probabilities calculator and utility built with JavaScript",
        color: "#4BA8A5",
        tags: ["Independent Project"]
    }, {
        name: "Decentralized",
        subtitle: "Twitter-like peer-to-peer content sharing platform with no centralized database of information",
        description: "As an undergraduate researcher at Georgia Tech's social computing lab, my project was to build a peer-to-peer content sharing platform modeled after Twitter that demonstrates the capabilities of IPFS, a decentralized and completely unrestricted storage protocol.",
        color: "#1ea1f3",
        tags: ["GT Social Computing Lab", "IPFS", "Git"]
    }, {
        name: "Acing APHG",
        subtitle: "An AP Human Geography study application for Android and iOS built with PhoneGap",
        color: "#2C5D98",
        tags: ["Independent Project", "Android", "iOS", "PhoneGap", "Cordova"],
        links: [
            {title: "Play Store", url: "https://play.google.com/store/apps/details?id=com.acingap.humangeography"},
            {title: "App Store", url: "https://itunes.apple.com/us/app/acing-ap-human-geography/id463108685?ls=1&mt=8"}
        ]
    }, {
        name: "Hack G3",
        subtitle: "Organizer for Georgia Tech's third annual hackathon, one of the largest in the nation",
        description: "Attracting thousands of hackers from around the nation, HackGT, Georgia Tech's official annual hackathon, is a weekend of learning, innovation, and building. In just 36 hours, students form teams, develop ideas, and build them into reality. Hack G3 was themed around \"Healthy Hacking\" and had a budget of 150K, sponsorships from several Fortune 500 companies, almost 200 high-caliber project submissions (ranging from web and mobile apps to VR and wearable tech), thousands of dollars worth of prizes, and, most importantly, over a thousand happy hackers.",
        color: "#cd0073",
        tags: ["Hack GT", "Experience Design"],
        links: [
            {title: "Hack G3 Site", url: "https://fall2016.hack.gt/"}
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