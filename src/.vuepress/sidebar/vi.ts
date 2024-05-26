import { sidebar } from "vuepress-theme-hope";

export const viSidebar = sidebar({
    "/": [
        "",
        {
            text: "Bài viết",
            icon: "pen-to-square",
            prefix: "/posts/",
            children: [
                {
                    text: "Môi trường",
                    icon: "earth",
                    prefix: "environment/",
                    children: [
                        { text: "Đất", icon: "earth", link: "soil" },
                        { text: "Tự nhiên và con người", icon: "earth", link: "nature-and-human" },
                    ],
                },
            ],
        }
    ],
});
