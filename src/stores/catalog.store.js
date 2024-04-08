import { defineStore } from "pinia";
import { ref } from "vue";
import JEWERLY_KEYS from "../constants/JewerlyKeys";

export const useCatalogStore = defineStore('catalogStore', () => {

    const catalogList = ref([]);

    function getCatalogList() {
        catalogList.value = [
            {
                keys: [JEWERLY_KEYS.RING, JEWERLY_KEYS.NEW],
                name: "Кольцо с аметистом",
                cost: "4 500",
                src: ["IMG_4333.jpg", "IMG_4334.jpg", "IMG_4335.jpg"],
                size: "16"
            },
            {
                keys: [JEWERLY_KEYS.RING, JEWERLY_KEYS.NEW],
                name: "Печатка-сердце",
                cost: "5 000",
                src: ["IMG_3961.jpg", "IMG_4354.jpg", "IMG_3962.jpg"],
                size: "16.5"
            },
            {
                keys: [JEWERLY_KEYS.RING, JEWERLY_KEYS.NEW],
                name: "Кольцо с жемчужиной",
                cost: "7 500",
                src: ["IMG_4332.jpg", "IMG_4329.jpg", "IMG_4371.jpg"],
                size: "18.5"
            },
            {
                keys: [JEWERLY_KEYS.RING, JEWERLY_KEYS.NEW],
                name: "Нежная печатка с горячей эмалью ",
                cost: "6 500",
                src: ["IMG_3953.jpg", "IMG_4341.jpg", "IMG_4373.jpg"],
                size: "17.5"
            },
            {
                keys: [JEWERLY_KEYS.RING, JEWERLY_KEYS.NEW],
                name: "Цветы",
                cost: "14 000",
                src: ["IMG_3960.jpg", "IMG_3959.jpg", "IMG_3958.jpg"],
                size: "подвину от 17.5 до 18.5"
            },
            {
                keys: [JEWERLY_KEYS.RING],
                name: "Печатка с чёрным агатом",
                cost: "6 800",
                src: ["IMG_3471.jpg", "IMG_3563.jpg", "IMG_3564.jpg"],
                size: "17.5"
            },
            {
                keys: [JEWERLY_KEYS.RING],
                name: "Фольга",
                cost: "6 000",
                src: ["IMG_3467.jpg", "IMG_3568.jpg", "IMG_3569.jpg"],
                size: "16.5"
            },
            {
                keys: [JEWERLY_KEYS.RING],
                name: "Простое",
                cost: "4 000",
                src: ["IMG_3753.jpg", "IMG_3567.jpg", "IMG_3565.jpg"],
                size: "18.5"
            },
            {
                keys: [JEWERLY_KEYS.RING],
                name: "Волна",
                cost: "6 000",
                src: ["IMG_3572.jpg", "IMG_3468.jpg", "IMG_3571.jpg"],
                size: "18"
            },
            {
                keys: [JEWERLY_KEYS.RING],
                name: "Кольцо-линза с горным хрусталём",
                cost: "6 000",
                src: ["IMG_3500.jpg", "IMG_3501.jpg", "IMG_2756.jpg"],
                size: "16"
            },
        ];
    }

    return {
        catalogList,
        getCatalogList
    }
});