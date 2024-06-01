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
                    icon: "mingcute:earth-line",
                    prefix: "environment/",
                    children: [
                        { text: "Đất", icon: "mingcute:earth-line", link: "soil" },
                        { text: "Tự nhiên và con người", icon: "mingcute:earth-line", link: "nature-and-human" },
                        { text: "Vạn vật kết nối", icon: "mingcute:earth-line", link: "connection-of-everything" },
                    ],
                },
                {
                    text: "Sức khoẻ",
                    icon: "solar:health-bold",
                    prefix: "health/",
                    children: [
                        { text: "Bài học sau cơn bạo bệnh", icon: "solar:health-bold", link: "sick" },
                        { text: "Cân bằng giữa tiền bạc và sức khoẻ", icon: "solar:health-bold", link: "balance" },
                    ],
                },
            ],
        }
    ],
});
