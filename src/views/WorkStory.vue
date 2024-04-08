<template>
    <div style="background: var(--secondary-header);">
        <h1 class="subheader" style="margin-right: 8px;">{{ route_name }}</h1>
        <div style="display: grid;
                grid-template-columns: 1fr;
                grid-row-gap: 32px;
                margin-top: 17px;">
            <StoryItem v-for="story in stories" :title="story.title" :year="story.year" :text="story.text" :src="story.src"
                :key="story.src"></StoryItem>
        </div>
    </div>
</template>
  
<script>

import StoryItem from '@/components/StoryItem.vue';
export default {
    name: 'WorkStory',
    components: {
        StoryItem
    },
    computed: {
        route_name() {
            return this.$route.meta.route_name
        }
    },
    data() {
        return {
            stories: [
                {
                    year: "2023",
                    title: "Кольцо c хризолитом",
                    text: " Кольцо с\u00a0хризолитом для\u00a0Маши из\u00a0Москвы. У\u00a0Маши есть уморительный песель брабансон Яков Соломонович, блог в\u00a0телеге про\u00a0книги и\u00a0цветы\u00a0(и\u00a0Соломоныча) и\u00a0три моих кольца",
                    src: "story_item_2.jpg"
                },
                {
                    year: "2023",
                    title: "Кулон с опалами",
                    text: "Кулон с\u00a0двумя сногсшибательными австралийскими опалами для\u00a0прекрасной Светланы из\u00a0Москвы. Сложно сосчитать, сколько моих украшений отправилось к\u00a0Светлане, нежно ценю наше виртуальное знакомство",
                    src: "story_item_4.jpg"
                },
                {
                    year: "2023",
                    title: "Сет колец",
                    text: "Сет из\u00a0двух колец для\u00a0Юли из\u00a0Москвы. Благодаря нашему общему увлечению - парфюмерии - общаемся теперь каждый день. Люблю-целую! ",
                    src: "story_item_5.jpg"
                },
                {
                    year: "2023",
                    title: "Кольцо c жемчужинами",
                    text: "Это кольцо с\u00a0двумя жемчужинами отправилось в\u00a0Италию к\u00a0Кате. Катя работает на\u00a0винодельне и\u00a0иногда я\u00a0думаю, что\u00a0на\u00a0месте этого кольца должна быть\u00a0я",
                    src: "story_item_8.jpg"
                },
                {
                    year: "2022",
                    title: "Обручальные кольца",
                    text: "Одни из\u00a0самых необычных и\u00a0нестандартных обручальных колец, что\u00a0я\u00a0делала. Совсем непохожи на\u00a0классические обручалки, но\u00a0тем\u00a0и\u00a0интересны",
                    src: "story_item_3.jpg"
                },
                {
                    year: "2022",
                    title: "Печатка с перламутром",
                    text: "Печатка с\u00a0перламутром для\u00a0дорогой подруги\u00a0(и\u00a0классного мастера маникюра) Регины из\u00a0Краснодара. Уже лет пять мы\u00a0общаемся и\u00a0вместе бегаем. Ни\u00a0разу не\u00a0видела её\u00a0без\u00a0этого кольца",
                    src: "story_item_6.jpg"
                },
                {
                    year: "2021",
                    title: "Кольцо c хризолитом",
                    text: "Было сделано для Юлии из\u00a0Саратова. У\u00a0нее есть уже пять моих колец. Это\u00a0было\u00a0вторым",
                    src: "story_item_1.jpg"
                },
                {
                    year: "2021",
                    title: "Кольцо с горным хрусталём",
                    text: "Одна из\u00a0самых любимых форм колец - с\u00a0прозрачным окошком из\u00a0горного хрусталя или\u00a0кварца. Они\u00a0разлетелись по\u00a0нескольким городам, и\u00a0будут разлетаться ещё",
                    src: "story_item_7.jpg"
                },
            ]
        }
    }
}
</script>
<style scoped></style>
  