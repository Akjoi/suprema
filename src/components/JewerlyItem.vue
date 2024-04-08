<template>
    <div class="jewerly">
        <div class="jewerly__header">
            <div class="row">
                <SecondaryButton text="новинка" style="margin-top: 3px;" v-show="isNew"></SecondaryButton>
                <div>
                    <h1>{{ name }}</h1>
                    <h2>{{ cost + " ₽" }}</h2>
                </div>
            </div>

        </div>
        <div class="row order">
            <div class="order__item" v-for="img in src" :key="img">
                <img :src="`/img/catalog/${img}`" />
                <div class="order__item__header cursor_pointer" v-show="showOrder" @click="openTg">
                    <h2 class="link order__item__header__btn">заказать</h2>
                </div>
            </div>
        </div>
        <div class="size row">
            <h2 class="size__description">Размер</h2>
            <h2>{{ size }}</h2>
        </div>
    </div>
</template>
  
<script>
import SecondaryButton from './SecondaryButton.vue';
import { openTg } from '@/functions/openTg';
export default {
    name: 'JewerlyItem',
    components: {
        SecondaryButton
    },
    props: {
        name: { type: String, required: true },
        cost: { type: String, required: true },
        isNew: { type: Boolean, required: false, default: false },
        src: { type: Array, required: true },
        showOrder: { type: Boolean, required: false, default: true },
        size: { type: String, required: true },
    },
    methods: {
        openTg() {
            openTg()
        }
    }
}
</script>
<style lang="scss" scoped>
img {
    width: 100%;
    margin-top: 4px;
}

.jewerly {
    padding-top: 16px;
    padding-bottom: 8px;

    &__header {
        margin-right: 4px;
        display: flex;
        justify-content: flex-end;

        &__new {
            background-color: rgba(255, 255, 255, 0);
            border-radius: 24px;
            border: 1px solid var(--black);
            font-size: 13px;
            margin-right: 6px;
            margin-top: 3px;
            height: 16px;
            line-height: 0px;
            padding: 1px 6px;
        }
    }
}

.order {
    overflow-x: auto;
    overflow-y: hidden;
    gap: 4px;

    &__item {
        position: relative;
        min-width: 95%;

        &__header {
            position: absolute;
            width: 90px;
            height: 30px;
            top: 12px;
            right: 0px;

            &__btn {
                color: var(--white);
                padding-right: 12px;
            }
        }
    }


}

.size {
    display: flex;
    justify-content: flex-end;
    margin-right: 4px;

    &__description {
        margin-right: 8px;
        opacity: 0.4;
    }
}
</style>
 