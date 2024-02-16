const HEADER = {
    topBar: {
        enable: true,
        text: "[New] Introducing cutting-edge telemedicine equipment solutions! More Information ->",
        href: "https://mediaindonesia.com/humaniora/560191/pt-dksi-luncurkan-solusi-peralatan-telemedice-teranyar",
    },
    brand: {
        icon: {
            src: "./src/assets/sprites/logo-crown.svg",
            alt: "A regal crown design representing DKSI, with intricate details and a majestic presence.",
        },
        text: {
            enable: true,
            src: "./src/assets/sprites/logo-text.svg",
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

const SECTION_HERO = {
    tagline: ["Empowering Possibilities", "Unleashing Solutions"],
    paragraph:
        "Harness the power of cutting-edge ICT solutions to propel your business forward and stay ahead in today's competitive landscape.",
    linkText: "Discover more about us",
    imageShowcase: {
        src: "./src/assets/img/achieved.png",
        alt: "Muhammad Yasin, CEO of DKSI, achieved Diktistek's Best Partner award.",
        href: "https://soloaja.co/read/muhammad-yasin-pengusaha-muda-semarang-raih-anugerah-mitra-terbaik-diktiristek",
    },
};

const SECTION_OFFERING = [
    {
        sprite: "./src/assets/sprites/offering/talented-team.svg",
        offer: "Unlocking potential with our talented Team",
        description:
            "Experience the power of innovation and collaboration with our talented team. We are here to unlock the full potential of your projects and dreams.",
    },
    {
        sprite: "./src/assets/sprites/offering/online-support.svg",
        offer: "Empowering your journey with dedicated online support",
        description:
            "At our core, we're here to empower your journey. Our dedicated online support is your trusted companion every step of the way.",
    },
    {
        sprite: "./src/assets/sprites/offering/best-consulting.svg",
        offer: "Transforming businesses with best consulting solutions",
        description:
            "Feel the transformation as we provide top-notch consulting services to elevate your business to new heights.",
    },
    {
        sprite: "./src/assets/sprites/offering/reliable-partner.svg",
        offer: "Your reliable partner in success",
        description:
            "Count on us to be your steadfast companion on the journey to success. Together, we'll conquer new heights.",
    },
];

export { HEADER, SECTION_HERO, SECTION_OFFERING };
