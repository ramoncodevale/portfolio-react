import images from "./images"

const contentHome = [
    {
        paragraph1: "Olá Sou o Ramon,",
        paragraph2: "Desenvolvedor Frontend",
        image: images.Avatar,
        curriculo: images.Curriculo,
    }
]

const contentAbout = [
    {
        text: "Eu sou o Ramon tenho 23 anos, estou me especializando na linguagem Javascript. Estou disposto a crescer profissionalmente,com muita dedicação e sempre buscando conhecimento na área de programação que estou gostando bastante e busco evoluir a cada dia, e estou me desafiando para crescer na área para me tornar um grande profissional e estou procurando oportunidades para adquirir experiência.",
        image: images.Perfil,
    }
]

const contentSkills = [
    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
        title: 'Html',
    },

    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        title: 'Css',
    },

    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        title: 'JavaScript',
    },


    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        title: 'React',
    },

    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        title: 'Figma',
    },

    {
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        title: "tailwind",
    },
]

const contentProject = [
    {
        image: images.Honey,
        title: "Website Honey",
        linkProject: "https://funny-figolla-636536.netlify.app/",
        linkGithub: "https://github.com/ramoncodevale/website-honey",
    },

    {
        image: images.Card3d,
        title: 'Card 3d',
        linkProject: "https://cheery-fairy-b2fa58.netlify.app/",
        linkGithub: "https://github.com/ramoncodevale/card-nike-3d",
    },

    {
        image: images.Watch,
        title: "Website Watch",
        linkProject: "https://calm-chaja-59a321.netlify.app/",
        linkGithub: "https://github.com/ramoncodevale/Watch",
    },

    {
        image: images.Food,
        title: "Website Food",
        linkProject: "https://aesthetic-lily-514443.netlify.app/",
        linkGithub: "https://github.com/ramoncodevale/Website-food",
    },
]

const contentContact = [
    {
     image: images.Contact,
     number: '19 99414-5510',
     email: 'ramonvalentim88@gmail.com',
    },
]


export default { contentHome, contentAbout, contentSkills, contentProject, contentContact}