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
// * FOOTER
// ========================================================

/* Assets Import */
import brandTextWhite from "../assets/sprites/logo-text-white.svg";

/* Content */
const FOOTER = {
    brand: {
        icon: {
            src: brandIcon,
            alt: "A regal crown design representing DKSI, with intricate details and a majestic presence.",
        },
        text: {
            enable: true,
            src: brandTextWhite,
            alt: 'A black and white image of the letters "DKSI" written in a bold font on a plain background.',
        },
        description:
            "Harness the power of cutting-edge ICT solutions to propel your business forward and stay ahead in today's competitive landscape.",
    },
    socialButton: [
        {
            platform: "instagram",
            link: "https://www.instagram.com/duakawansejahteraindonesia/",
        },
        {
            platform: "linkedin-box",
            link: "https://www.linkedin.com/company/pt-dua-kawan-sejahtera-indonesia/about/",
        },
        {
            platform: "facebook-box",
            link: "https://www.facebook.com/duakawansejahteraindonesia/",
        },
    ],
    section: {
        contact: {
            title: "Contact",
            list: [
                {
                    type: "mail-open",
                    at: "sales@dksi.co.id",
                },
                {
                    type: "phone",
                    at: "+62 298 343-6504",
                },
                {
                    type: "smartphone",
                    at: "+62 823-2702-696",
                },
            ],
        },
        hours: {
            title: "Working Hours",
            text: ["Mon – Fri: 8:00 am to 5:00 pm", "Sat - Sun: Closed"],
        },
        address: [
            {
                title: "Office Jakarta",
                text: [
                    "Jl. Letjen M.T Haryono No.Kav 22,",
                    "RT 10/RW 09, Tebet Tim.,",
                    "Kec. Tebet, Kota Jakarta",
                    "Selatan, Daerah Khusus Ibukota",
                    "Jakarta 12820",
                ],
            },
            {
                title: "Office Salatiga",
                text: [
                    "Kalipanggang, RT.04/RW.10,",
                    "Candirejo, Tuntang,",
                    "Kab. Semarang, Salatiga",
                ],
            },
        ],
    },
    copyright: {
        logo: {
            enable: true,
            src: brandIcon,
            alt: "A regal crown design representing DKSI, with intricate details and a majestic presence.",
        },
        name: "PT Dua Kawan Sejahtera Indonesia",
        text: "Copyrights © 2023. All rights reserved.",
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
import companyIllustration from "../assets/illustration/section-company.svg";

/* Content */
const SECTION_COMPANY = {
    header: {
        title: "Empowering %Growth Together",
        heading: "From Humble Beginnings to Shared Success Stories",
        description:
            "At 'Empowering Growth Together', we take pride in our journey as a company. Starting from humble beginnings, we have grown steadily, building strong partnerships and achieving remarkable milestones along the way.",
    },
    // Timestamp presentation limited to 6
    timeline: [
        {
            id: "timeline1",
            icon: {
                src: timelineIcon1,
                alt: "Iconic image of a golden house with a radio, representing modern home automation",
            },
            showcaseImage:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Established in 2019, we embarked on our journey.",
            description:
                "In 2019, our journey commenced with ambitious aspirations for success within the industry. We embarked on this journey with a steadfast commitment to excellence and continuous growth, driven by our dedication to serving our valued clients.",
        },
        {
            id: "timeline2",
            icon: {
                src: timelineIcon2,
                alt: "Golden house with a gear icon symbolizing innovation and functionality",
            },
            title: "Providing PC Notebooks through E-Katalog LKPP.",
            description:
                "We embarked on our journey by introducing PC notebooks via E-Katalog LKPP. This marked our initial stride in delivering innovative solutions to meet the diverse needs of our customers.",
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
    about: {
        content: {
            heading: "Why %should you% choose us for your %Business%?",
            item: [
                {
                    title: "Always as Professional Partner",
                    description:
                        "We excel in delivering innovative, tailored solutions for your business, ensuring success in the dynamic world of technology.",
                },
                {
                    title: "Proper steps for solutions",
                    description:
                        "We deliver efficient problem-solving with effective steps for optimal business solutions.",
                },
            ],
        },
    },
    illustration: {
        src: companyIllustration,
        alt: "",
    },
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
    FOOTER,
};
