// ========================================================
// * HEADER & NAVIGATION BAR
// ========================================================

/* Assets Import */
import brandIcon from "../assets/sprites/logo-crown.svg";
import brandText from "../assets/sprites/logo-text.svg";

/* Content */
const HEADER = {
    topBar: {
        enable: true,
        text: "[New] Introducing cutting-edge telemedicine equipment solutions! More Information ->",
        href: "https://mediaindonesia.com/humaniora/560191/pt-dksi-luncurkan-solusi-peralatan-telemedice-teranyar",
    },
    brand: {
        icon: {
            src: brandIcon,
            alt: "A regal crown design representing DKSI, with intricate details and a majestic presence.",
        },
        text: {
            enable: true,
            src: brandText,
            alt: 'A black and white image of the letters "DKSI" written in a bold font on a plain background.',
        },
    },
    links: [
        {
            name: "Services",
            href: "/",
        },
        {
            name: "Company",
            href: "/",
        },
        {
            name: "Partners",
            href: "/",
        },
    ],
    highlightLink: {
        name: "Contact",
        href: "/",
    },
};

// ========================================================
// * SECTION: HERO
// ========================================================

/* Assets Import */
import imageShowcase from "../assets/img/achieved.png";

/* Content */
const SECTION_HERO = {
    tagline: ["Empowering Possibilities", "Unleashing Solutions"],
    paragraph:
        "Harness the power of cutting-edge ICT solutions to propel your business forward and stay ahead in today's competitive landscape.",
    linkText: "Discover more about us",
    imageShowcase: {
        src: imageShowcase,
        alt: "Muhammad Yasin, CEO of DKSI, achieved Diktistek's Best Partner award.",
        href: "https://soloaja.co/read/muhammad-yasin-pengusaha-muda-semarang-raih-anugerah-mitra-terbaik-diktiristek",
    },
};

// ========================================================
// * SECTION: OFFER
// ========================================================

/* Assets Import */
import offeringSprite1 from "../assets/sprites/offering/talented-team.svg";
import offeringSprite2 from "../assets/sprites/offering/online-support.svg";
import offeringSprite3 from "../assets/sprites/offering/best-consulting.svg";
import offeringSprite4 from "../assets/sprites/offering/reliable-partner.svg";

/* Content */
const SECTION_OFFERING = [
    {
        sprite: offeringSprite1,
        offer: "Unlocking potential with our talented Team",
        description:
            "Experience the power of innovation and collaboration with our talented team. We are here to unlock the full potential of your projects and dreams.",
    },
    {
        sprite: offeringSprite2,
        offer: "Empowering your journey with dedicated online support",
        description:
            "At our core, we're here to empower your journey. Our dedicated online support is your trusted companion every step of the way.",
    },
    {
        sprite: offeringSprite3,
        offer: "Transforming businesses with best consulting solutions",
        description:
            "Feel the transformation as we provide top-notch consulting services to elevate your business to new heights.",
    },
    {
        sprite: offeringSprite4,
        offer: "Your reliable partner in success",
        description:
            "Count on us to be your steadfast companion on the journey to success. Together, we'll conquer new heights.",
    },
];

// ========================================================
// * SECTION: OVERVIEW
// ========================================================

const SECTION_OVERVIEW = [
    {
        index: "clients",
        count: 129,
        indicator: "+",
        info: "Satisfying clients with the exceptional services",
    },
    {
        index: "solutions",
        count: 250,
        indicator: "+",
        info: "Transformative ICT solutions implemented",
    },
    {
        index: "partners",
        count: 100,
        indicator: "+",
        info: "Trusted partners empowering our success",
    },
    {
        index: "response",
        count: 99.9,
        indicator: "%",
        info: "Fast response & always at your service",
    },
];

// ========================================================
// * SECTION: SERVICES
// ========================================================

/* Assets Import */
import servicesSprite1 from "../assets/sprites/services/smartclass.svg";
import servicesSprite2 from "../assets/sprites/services/plantation.svg";
import servicesSprite3 from "../assets/sprites/services/consultancy.svg";
import servicesSprite4 from "../assets/sprites/services/education.svg";

import servicesIllustration from "../assets/illustration/section-services.svg";

/* Content */
const SECTION_SERVICES = {
    header: {
        title: "Services that %we provide",
        heading: "Discover the range of exceptional services we offer.",
        description:
            "From strategic consulting to cutting-edge solutions, we are dedicated to delivering excellence every step of the way.",
    },
    services: [
        {
            name: "Smart Class",
            description:
                "Revolutionizing learning with cutting-edge tech and interactive methods.",
            img: {
                src: servicesSprite1,
                alt: "",
            },
        },
        {
            name: "Planning",
            description:
                "Innovative strategies and meticulous execution for effective organizational planning.",
            img: {
                src: servicesSprite2,
                alt: "",
            },
        },
        {
            name: "Consultancy",
            description:
                "Pioneering strategic guidance for business growth and digital transformation.",
            img: {
                src: servicesSprite3,
                alt: "",
            },
        },
        {
            name: "Education",
            description:
                "Empowering minds through innovative education and personalized learning.",
            img: {
                src: servicesSprite4,
                alt: "",
            },
        },
    ],
    illustration: {
        src: servicesIllustration,
        alt: "Two men wearing hard hats and safety vests are working together on a construction project.",
    },
};

// ========================================================
// * SECTION: COMPANY
// ========================================================

/* Assets Import */
import timelineIcon1 from "../assets/sprites/timeline-icon/timeline1.svg";
import timelineIcon2 from "../assets/sprites/timeline-icon/timeline2.svg";
import timelineIcon3 from "../assets/sprites/timeline-icon/timeline3.svg";
import timelineIcon4 from "../assets/sprites/timeline-icon/timeline4.svg";
import timelineIcon5 from "../assets/sprites/timeline-icon/timeline5.svg";
import timelineIcon6 from "../assets/sprites/timeline-icon/timeline6.svg";

/* Content */
const SECTION_COMPANY = {
    // Timestamp presentation limited to 6
    timeline: [
        {
            id: "timeline1",
            icon: {
                src: timelineIcon1,
                alt: "Iconic image of a golden house with a radio, representing modern home automation",
            },
            title: "Established in 2019, we embarked on our journey.",
            description:
                "Our journey started in 2019 with aspirations for industry success. Committed to excellence and growth for our valued clients.",
        },
        {
            id: "timeline2",
            icon: {
                src: timelineIcon2,
                alt: "Golden house with a gear icon symbolizing innovation and functionality",
            },
            title: "Providing PC Notebooks through E-Katalog LKPP.",
            description:
                "We started by offering PC notebooks through E-Katalog LKPP, marking the first step towards providing innovative solutions to our customers.",
        },
        {
            id: "timeline3",
            icon: {
                src: timelineIcon3,
                alt: "Gleaming gold house featuring a square box structure on its rooftop",
            },
            title: "Expanded our services to include cutting-edge CCTV Security Systems.",
            description:
                "As we evolved, our commitment to safety and security led us to offer state-of-the-art CCTV Security Systems.",
        },
        {
            id: "timeline4",
            icon: {
                src: timelineIcon4,
                alt: "Golden building icon, symbolizing elegance and strength",
            },
            title: "Our expertise extends to designing and building innovative applications.",
            description:
                "Our expertise goes beyond boundaries, empowering businesses with futuristic solutions for the digital landscape.",
        },
        {
            id: "timeline5",
            icon: {
                src: timelineIcon5,
                alt: "Square-shaped brown building with glass windows",
            },
            title: "Providing high-quality audiovisual solutions.",
            description:
                "We enhance experiences and communication through advanced technology, elevating interactions and engagements.",
        },
        {
            id: "timeline6",
            icon: {
                src: timelineIcon6,
                alt: "Sophisticated brown and gold building icon, showcasing modern architecture",
            },
            title: "Encompass structured Cabling Systems (SCS) for seamless connectivity.",
            description:
                "We offer efficient Structured Cabling Systems (SCS) for seamless connectivity, ensuring uninterrupted data flow and smooth operations.",
        },
    ],
};

// ========================================================
// * CONTENT EXPORT
// ========================================================

export {
    HEADER,
    SECTION_HERO,
    SECTION_OFFERING,
    SECTION_OVERVIEW,
    SECTION_SERVICES,
    SECTION_COMPANY,
};
