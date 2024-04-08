<template>
    <ContentBody class="mk_body">
        <MkItem :showMore="false"></MkItem>
        <h2 class="margin_4">Не нужно никаких навыков<br>У каждого получится классное
            украшение<br>Все, что нужно - референсы для ваших
            будущих украшений<br>и одежда, которую не жалко</h2>
        <MkOffer v-for="item in mkItems" :header="item.header" :subHeader="item.subHeader" :imgs="item.imgs"></MkOffer>
        <div class="group">
            <h1>Групповой</h1>
            <h2 class="group__subheader">Одновременно проводится для 3 человек<br>
                Делаем простые кольца или кулоны без камней</h2>
            <div class="group__list">
                <div v-for="item in group__list" class="group__list__item">
                    <SecondaryButton text="записаться" @click="openTg"></SecondaryButton>
                    <h2> {{ item.text }} </h2>
                </div>
            </div>
        </div>
        <div class="bricks">
            <h1 class="bricks__header">Как это было</h1>
            <div class="bricks__list">
                <img :src="`/img/mk/gallery/${src}`" v-for="src in brick_images" :key="src">
            </div>
            <p class="bricks__sign cursor_pointer" @click="openTg">
                Записаться на мастер-класс</p>
        </div>

    </ContentBody>
</template>
  
<script setup>
import ContentBody from "@/components/ContentBody.vue"
import MkItem from "@/components/MkItem.vue"
import MkOffer from "@/components/MkOffer.vue"
import { ref } from "vue";
import { openTg } from "@/functions/openTg";
import SecondaryButton from "@/components/SecondaryButton.vue";
const group__list = ref([
    {
        text: "4 февраля (четверг) 12:00\nосталось 3 места\n5 000 ₽\n~ 6 часов"
    },
    {
        text: "10 февраля (суббота) 12:00\nосталось 3 места\n5 000 ₽\n~ 6 часов"
    }
])

const brick_images = ref([
    "IMG_0563.PNG",
    "IMG_0564.PNG",
    "IMG_3937.JPG",
    "IMG_4933.JPG",
    "IMG_1514.JPG",
    "IMG_3152.JPG",
    "IMG_3452.JPG",
    "IMG_1523.JPG",
    "IMG_3453.JPG",
    "IMG_3454.JPG",
    "IMG_3455.JPG",
    "IMG_3456.JPG",
    "IMG_3458.JPG",
    "IMG_3459.JPG"
])

const mkItems = ref([
    {
        header: "Персональный",
        subHeader: "Простое кольцо или кулон\n7 000 ₽\n~ 5 часов",
        imgs: ["personal_1_1.JPG", "personal_1_2.JPG", "personal_1_3.JPG"]
    },
    {
        header: "Персональный",
        subHeader: "Кольцо или кулон с камнем\n8 000 ₽\n~ 6 часов",
        imgs: ["personal_2_1.JPG", "personal_2_2.JPG", "personal_2_3.JPG"]
    },
    {
        header: "Персональный с моделированием",
        subHeader: "Моделируем украшение в воске\nОтливаем, шлифуем, крепим камень\n10 000 ₽\n2 дня по 4 часа (интервал неделя)",
        imgs: ["personal_3_1.JPG", "personal_3_2.JPG", "personal_3_3.JPG"]
    },
    {
        header: "Обручальные кольца",
        subHeader: "Сделайте друг для друга\nуникальные обручальные кольца\n14 000 ₽\n~ 6 часов",
        imgs: ["rings_1.jpg", "rings_3.jpg", "rings_2.jpg"]
    }
])

</script>
<style lang="scss" scoped>
img {
    width: 100%;
}

.mk_body {
    background: var(--white);
}

h2 {
    white-space: pre;
}

.margin_4 {
    margin-right: 4px;
    margin-left: 4px;
    color: #323232;
}

.group {
    margin-right: 4px;


    &__subheader {
        margin-top: 4px;
    }

    &__list {
        margin-top: 24px;
        gap: 48px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;

        &__item {
            gap: 12px;
            display: flex;
            flex-direction: row;
            align-self: flex-end;
        }

    }
}

.bricks {

    &__header {
        margin-right: 4px;
    }

    &__list {
        margin-top: 6px;
        column-count: 3;
        column-gap: 4px;
    }

    &__sign {
        margin-top: 24px;
        font-family: Golos;
        text-decoration: underline;
        text-align: end;
    }
}
</style>
  