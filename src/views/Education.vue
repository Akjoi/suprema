<template>
    <ContentBody>
        <div class="education">
            <div>
                <h2>Курс состоит из 10 занятий по 6 часов. В итоге у вас будет готово 5-7 украшений (зависит от сложности
                    того,
                    что вы выберете). Вы получите все необходимые навыки для самостоятельной работы и дальнейшего изучения
                    профессии</h2>
                <br>
                <h2>Дальше я опишу содержание курса, и это не будет план каждого занятия - ведь вы сами выбираете то, что
                    будете делать: кулон, кольцо, серьги, и сложность конкретного изделия</h2>
                <br>
                <h2>
                    Отработать выпиловку мы можем за один урок, но вы можете выбрать сложное колье с ажурными выпиленными
                    деталями - на это потребуется больше времени.
                    Или вам захочется чуть больше времени посвятить закрепке камней, или восковому моделированию - сделать
                    не две модели, а четыре. Программа очень гибкая, и отработать необходимые навыки мы можем на разных
                    украшениях
                </h2>
                <img class="education__img" :src="image0">
            </div>


            <div class="education__article">
                <h1>Содержание курса</h1>
                <h1>1. Подготовка материалов</h1>
                <h2>Плавка металла, изготовление припоя. Разбираемся, что такое проба, как сделать нужную, учимся отливать
                    слитки, прокатывать пластины и проволоку</h2>
                <img class="education__img" :src="image1">

            </div>
            <div class="education__article">
                <h1>2. Пайка</h1>
                <h2>Учимся паять крупные и мелкие детали разными горелками и способами. Отрабатываем сложную пайку мелких
                    деталей, чаще всего делаем цепочку. Не обязательно именно ее, можно сделать браслет или серьги из
                    множества мелких деталей</h2>
                <img class="education__img" :src="image2">

            </div>
            <div class="education__article">
                <h1>3. Обработка поверхностей</h1>
                <h2>Шлифовка и полировка. Получение полуматовой, матовой поверхности и зеркального глянца</h2>
                <img class="education__img" :src="image3">

            </div>
            <div class="education__article">
                <h1>4. Ковка, чеканка</h1>
                <h2>Учимся придавать металлу разные фактуры и текстуры с помощью молотков, вальцов, чеканов, штампов</h2>
                <img class="education__img" :src="image4">

            </div>
            <div class="education__article">
                <h1>5. Выпиловка</h1>
                <h2>Лобзик - один из главных инструментов - им мы не только выпиливаем ажурные тонкие узоры. Он используется
                    практически на всех этапах ручного монтажа - отпилить кусок серебра для будущего кольца, выпилить каст
                    для камня, форму для будущего украшения из пластины металла</h2>
                <img class="education__img" :src="image5">

            </div>
            <div class="education__article">
                <h1>6. Закрепка камней</h1>
                <h2>Глухой каст и крапанная закрепка, по желанию можно добавить ещё пару видов закрепки</h2>
                <img class="education__img" :src="image6">

            </div>
            <div class="education__article">
                <h1>7. Восковое моделирование</h1>
                <h2>Подготовка восковок и последующая обработка отлитых в серебре моделей.</h2>
                <img class="education__img" :src="image7">

            </div>
            <div class="education__article">
                <h1>Занятия</h1>
                <h2>Вы сами можете выбрать украшения, которые хотите сделать, прислать референсы и эскизы. Например,
                    закрепить камни мы можем куда угодно - в серьги, в кулон, в кольцо. Так же и с выпиловкой ажурного
                    рисунка, и с фактурами - можно сделать любое украшение, главное - отработать техники
                    <br><br>
                    В моей в мастерской можно <a href="https://t.me/Supremasilver">арендовать</a> место для последующей
                    самостоятельной работы. И, конечно, всегда можно рассчитывать на мои подсказки и помощь
                    (Краснодар)
                    <br><br>
                    Стоимость обучения составляет 60 000 ₽
                    <br><br>
                    В стоимость входят 50 грамм серебра, 3 разных камня для ваших украшений и другие необходимые расходники
                </h2>
            </div>
            <p class="cursor_pointer" @click="openTg">
                Записаться на обучение</p>
        </div>
    </ContentBody>
</template>
<script setup>
import { openTg } from '@/functions/openTg';
import ContentBody from "@/components/ContentBody.vue"


const image0 = new URL('/img/education/0.PNG', import.meta.url).href
const image1 = new URL('/img/education/1.PNG', import.meta.url).href
const image2 = new URL('/img/education/2.JPG', import.meta.url).href
const image3 = new URL('/img/education/3.JPG', import.meta.url).href
const image4 = new URL('/img/education/4.JPG', import.meta.url).href
const image5 = new URL('/img/education/5.PNG', import.meta.url).href
const image6 = new URL('/img/education/6.JPG', import.meta.url).href
const image7 = new URL('/img/education/7.JPG', import.meta.url).href



</script>
<style lang="scss" scoped>
p {
    font-family: Golos;
    text-decoration: underline;
    text-align: end;
}

h2 {
    color: #323232;
}

a {
    color: #0088cc;
}

.education {
    margin-right: 4px;
    gap: 48px;
    display: flex;
    flex-direction: column;

    &__article {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__img {
        padding-left: 4px;
        margin-top: 4px;
        width: 100%;
    }
}
</style>
  