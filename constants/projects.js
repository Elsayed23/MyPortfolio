/**
 * Project portfolio categories:
 * - static-ui: Landing pages, marketing sites, UI-only challenges
 * - web-app: Client-heavy SPAs and interactive front-end apps
 * - full-stack: Apps with integrated backend / API / database
 *
 * Each project may include:
 * - description?: string — short summary shown on cards (optional)
 * - code?: string — repository URL; omit if private or N/A
 */
export const projectCategories = [
    { id: 'all', label: 'All' },
    { id: 'static-ui', label: 'Static UI' },
    { id: 'web-app', label: 'Web apps' },
    { id: 'saas', label: 'SaaS' },
];

export const projectCategoryLabels = {
    'static-ui': 'Static UI',
    'web-app': 'Web app',
    'saas': 'SaaS',
};

export const projectsData = [
    {
        thumbnailImage: require('../images/flexisrv_crm.png'),
        title: 'Flexisrv CRM',
        demo: 'https://crm.flexisrv.com',
        category: 'saas',
        description: "FlexiSRV CRM is an all-in-one CRM designed for automotive dealerships. It centralizes lead management, sales pipelines, and customer interactions in one platform. Dealerships can capture leads, track deals, and manage communications efficiently."
    },
    {
        thumbnailImage: require('../images/kemet.png'),
        title: 'Travel Company',
        demo: 'https://elsayed23.github.io/Kemettraveluae/',
        code: 'https://github.com/Elsayed23/Kemettraveluae',
        category: 'static-ui',
    },
    {
        thumbnailImage: require('../images/quran.png'),
        title: 'َQuran App',
        demo: 'https://elsayed23.github.io/quran/',
        code: 'https://github.com/Elsayed23/quran',
        category: 'web-app',
        description: 'Interactive Quran reader with surah navigation and a clean reading experience.',
    },
    {
        thumbnailImage: require('../images/pokemon.png'),
        title: 'Pokemons Wallet',
        demo: 'https://elsayed23.github.io/pokemons-wallet/',
        code: 'https://github.com/Elsayed23/pokemons-wallet',
        category: 'web-app',
    },
    // {
    //     thumbnailImage: require('../images/nike.png'),
    //     title: 'Nike',
    //     demo: 'https://elsayed23.github.io/nike/',
    //     code: 'https://github.com/Elsayed23/nike',
    //     category: 'static-ui',
    // },
    // {
    //     thumbnailImage: require('../images/restoran.png'),
    //     title: 'Restoran',
    //     demo: 'https://elsayed23.github.io/Restoran/',
    //     code: 'https://github.com/Elsayed23/Restoran',
    //     category: 'static-ui',
    // },
    {
        thumbnailImage: require('../images/todo-app.png'),
        title: 'Todo App',
        demo: 'https://elsayed23.github.io/todo-app/',
        code: 'https://github.com/Elsayed23/todo-app',
        category: 'web-app',
    },
    // {
    //     thumbnailImage: require('../images/GPT-3.png'),
    //     title: 'GPT-3_jsm',
    //     demo: 'https://elsayed23.github.io/GPT-3/',
    //     code: 'https://github.com/Elsayed23/GPT-3',
    //     category: 'static-ui',
    // },
    {
        thumbnailImage: require('../images/local_face.png'),
        title: 'Local Face store',
        demo: 'https://elsayed23.github.io/local_face_store/',
        code: 'https://github.com/Elsayed23/local_face_store',
        category: 'static-ui',
    },
    {
        thumbnailImage: require('../images/recipes.png'),
        title: 'Recipes App',
        demo: 'https://elsayed23.github.io/RecipesApp/',
        code: 'https://github.com/Elsayed23/RecipesApp',
        category: 'web-app',
    },
    {
        thumbnailImage: require('../images/qrcode-generator.png'),
        title: 'QR-Code Generator',
        demo: 'https://elsayed23.github.io/qr-codeGenerator/',
        code: 'https://github.com/Elsayed23/qr-codeGenerator',
        category: 'web-app',
    },
    {
        thumbnailImage: require('../images/fresh-cart.png'),
        title: 'Fresh Cart (e-commerce)',
        demo: 'https://elsayed23.github.io/e-commerce-freshCart/',
        code: 'https://github.com/Elsayed23/e-commerce-freshCart',
        category: 'web-app',
    },
    {
        thumbnailImage: require('../images/doml.png'),
        title: 'Doml',
        demo: 'https://elsayed23.github.io/doml/',
        code: 'https://github.com/Elsayed23/doml',
        category: 'static-ui',
    },
    {
        thumbnailImage: require('../images/ocean.png'),
        title: 'Ocean',
        demo: 'https://ocean-next-js.vercel.app/',
        code: 'https://github.com/Elsayed23/ocean_Next.js',
        category: 'static-ui',
    },
    {
        thumbnailImage: require('../images/flight_booking.png'),
        title: 'Flight Booking',
        demo: 'https://elsayed23.github.io/flight_booking/',
        code: 'https://github.com/Elsayed23/flight_booking',
        category: 'static-ui',
    },
    {
        thumbnailImage: require('../images/NFT-market.png'),
        title: 'NFT-marketplace',
        demo: 'https://elsayed23.github.io/NFT-Marketplace/',
        code: 'https://github.com/Elsayed23/NFT-Marketplace',
        category: 'static-ui',
    },
    // {
    //     thumbnailImage: require('../images/hosting.png'),
    //     title: 'eco-Hosting',
    //     demo: 'https://elsayed23.github.io/eco-hosting/',
    //     code: 'https://github.com/Elsayed23/eco-hosting',
    //     category: 'static-ui',
    // },
    // {
    //     thumbnailImage: require('../images/gym.png'),
    //     title: 'GYMSTER (Gym)',
    //     demo: 'https://elsayed23.github.io/Gym/',
    //     code: 'https://github.com/Elsayed23/Gym',
    //     category: 'static-ui',
    // },
    // {
    //     thumbnailImage: require('../images/coffee.png'),
    //     title: 'Coffee',
    //     demo: 'https://elsayed23.github.io/coffee/',
    //     code: 'https://github.com/Elsayed23/coffee',
    //     category: 'static-ui',
    // },
    // {
    //     thumbnailImage: require('../images/twitter-clone.png'),
    //     title: 'Twitter clone',
    //     demo: 'https://elsayed23.github.io/twitter-clone/',
    //     code: 'https://github.com/Elsayed23/twitter-clone',
    //     category: 'static-ui',
    // },
    // {
    //     thumbnailImage: require('../images/lugx.png'),
    //     title: 'Lugx',
    //     demo: 'https://elsayed23.github.io/lugx/',
    //     code: 'https://github.com/Elsayed23/lugx',
    //     category: 'static-ui',
    // },
    // {
    //     thumbnailImage: require('../images/huddle.png'),
    //     title: 'Huddle',
    //     demo: 'https://elsayed23.github.io/huddle-landing/',
    //     code: 'https://github.com/Elsayed23/huddle-landing',
    //     category: 'static-ui',
    // },
    // {
    //     thumbnailImage: require('../images/fylo.png'),
    //     title: 'Fylo',
    //     demo: 'https://elsayed23.github.io/fylo-landing/',
    //     code: 'https://github.com/Elsayed23/fylo-landing',
    //     category: 'static-ui',
    // },
    // {
    //     thumbnailImage: require('../images/clipboard.png'),
    //     title: 'Clipboard',
    //     demo: 'https://elsayed23.github.io/landing-p-a-g-e/',
    //     code: 'https://github.com/Elsayed23/landing-p-a-g-e',
    //     category: 'static-ui',
    // },
    // {
    //     thumbnailImage: require('../images/spec-page.png'),
    //     title: 'Special page',
    //     demo: 'https://elsayed23.github.io/Spec-page/',
    //     code: 'https://github.com/Elsayed23/Spec-page',
    //     category: 'static-ui',
    // },
    {
        thumbnailImage: require('../images/memeGenerator.png'),
        title: 'Meme Generator',
        demo: 'https://elsayed23.github.io/MemeGenerator/',
        code: 'https://github.com/Elsayed23/MemeGenerator',
        category: 'web-app',
    },
    // {
    //     thumbnailImage: require('../images/spec-design.png'),
    //     title: 'Special design',
    //     demo: 'https://elsayed23.github.io/special-design/',
    //     code: 'https://github.com/Elsayed23/special-design',
    //     category: 'static-ui',
    // },
    {
        thumbnailImage: require('../images/calculator.png'),
        title: 'Calculator App (front-end-mentor)',
        demo: 'https://elsayed23.github.io/calculator-app/',
        code: 'https://github.com/Elsayed23/calculator-app',
        category: 'web-app',
    },
    {
        thumbnailImage: require('../images/age_calculator.png'),
        title: 'Age calculator (front-end-mentor)',
        demo: 'https://elsayed23.github.io/age_calculator/',
        code: 'https://github.com/Elsayed23/age_calculator',
        category: 'web-app',
    },
];
