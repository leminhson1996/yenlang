import { navbar } from "vuepress-theme-hope";

export const viNavbar = navbar([
    "/",
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
                ],
            },
        ],
    }
]);
