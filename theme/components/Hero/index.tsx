import { HomeHero } from 'rspress/theme';

export interface Hero {
    name: string;
    text: string;
    tagline: string;
    image?: {
        src: string;
        alt: string;
    };
    actions: {
        text: string;
        link: string;
        theme: 'brand' | 'alt';
    }[];
}

const heroList: Hero[] = [
    { name: 'Ken Xu', text: 'ckken', tagline: 'FrontEnd Developer', image: { src: 'https://avatars.githubusercontent.com/u/3890513?v=4', alt: 'ckken' }, actions: [{ text: 'Follow', link: 'https://github.com/ckken', theme: 'brand' }] }
]

const ShowHomeHero = () => {
    return (
        <HomeHero frontmatter={{ hero: heroList[0] }} />
    )
}

export default ShowHomeHero