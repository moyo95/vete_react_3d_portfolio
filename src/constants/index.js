import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "React.js およびその他の関連テクノロジーを使用した Web アプリケーションの開発と保守。",
            "デザイナー、プロダクト マネージャー、その他の開発者を含む部門を超えたチームと協力して、高品質の製品を作成します。",
            "レスポンシブデザインを実装し、ブラウザ間の互換性を確保します。",
            "コードレビューに参加し、他の開発者に建設的なフィードバックを提供します。",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "React.js およびその他の関連テクノロジーを使用した Web アプリケーションの開発と保守。",
            "デザイナー、プロダクト マネージャー、その他の開発者を含む部門を超えたチームと協力して、高品質の製品を作成します。",
            "レスポンシブデザインを実装し、ブラウザ間の互換性を確保します。",
            "コードレビューに参加し、他の開発者に建設的なフィードバックを提供します。",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "React.js およびその他の関連テクノロジーを使用した Web アプリケーションの開発と保守。",
            "デザイナー、プロダクト マネージャー、その他の開発者を含む部門を超えたチームと協力して、高品質の製品を作成します。",
            "レスポンシブデザインを実装し、ブラウザ間の互換性を確保します。",
            "コードレビューに参加し、他の開発者に建設的なフィードバックを提供します。",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "React.js およびその他の関連テクノロジーを使用した Web アプリケーションの開発と保守。",
            "デザイナー、プロダクト マネージャー、その他の開発者を含む部門を超えたチームと協力して、高品質の製品を作成します。",
            "レスポンシブデザインを実装し、ブラウザ間の互換性を確保します。",
            "コードレビューに参加し、他の開発者に建設的なフィードバックを提供します。",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Amazon での商品の価格変更を追跡してユーザーに通知し、ユーザーが最安値を見つけられるようにする Web アプリケーションを開発しました。',
        link: '#',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: '人気のディスカッション プラットフォーム「Threads」のフルスタック レプリカを作成し、ユーザーが投稿してスレッド形式の会話に参加できるようにしました。',
        link: '#',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: '市場で車を検索して比較し、車の購入プロセスを合理化するためのモバイル アプリを設計および構築しました。',
        link: '#',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Instagram の完全なクローンを構築し、ユーザーが使い慣れたソーシャル メディア環境で写真を共有し、友人とつながることができるようにします。',
        link: '#',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: '不動産物件検索を容易にし、買い手と売り手を結び付ける、不動産リスト用の Web アプリケーションを開発しました。',
        link: '#',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'AI を活用して、長いテキスト コンテンツやブログから簡潔で有益な要約を自動的に生成するアプリ。',
        link: '#',
    }
];