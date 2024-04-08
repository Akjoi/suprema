<template>
    <div class="mclass">
        <img class="mclass__img" :src="imageUrl" />
        <div class="mclass__top">
            <div class="mclass__top__slogan">
                <h2 class="mclass__top__slogan__h2">Вы своими руками делаете украшение<br>Я помогаю и рассказываю</h2>
            </div>
            <button v-if="showMore" class="glass mclass__top__btn" @click="toMk">Подробнее</button>
        </div>
        <button class="glass mclass__bottom" @click="openTg">записаться на мастер-класс</button>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';
import ROUTES_NAME from "@/constants/routesNames"
import { openTg } from '../functions/openTg';

const imageUrl = new URL('/img/mk/mk_main.JPG', import.meta.url).href
const router = useRouter();
function toMk() {
    router.push({ name: ROUTES_NAME.MasterClass });
    window.scrollTo(0, 0);
}

const proprs = defineProps({
    showMore: {
        type: Boolean,
        default: true
    }
})

</script>
<style lang="scss" scoped>
.mclass {
    position: relative;

    &__img {
        width: 100%;
    }

    &__top {
        position: absolute;
        top: 8px;
        right: 8px;
        display: flex;
        flex-direction: column;

        &__slogan {
            padding-right: 8px;
            border-right: 1px solid rgba(255, 255, 255, .5);

            &__h2 {
                color: var(--white);

            }
        }

        &__btn {
            margin-right: 8px;
            align-self: end;
            margin-top: 8px;
            width: fit-content;
            color: var(--white);
        }
    }

    &__bottom {
        position: absolute;
        bottom: 12px;
        right: 8px;
        left: 8px;
        color: var(--white);

    }
}
</style>
  