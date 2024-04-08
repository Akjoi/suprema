<template>
    <div class="jewerly">
        <div class="jewerly__top">
            <h1>{{ header }}</h1>
            <div class="jewerly__top__subheader">
                <SecondaryButton text="записаться" @click="openTg"></SecondaryButton>
                <h2>{{ subHeader }}</h2>
            </div>
        </div>
        <div class="row imgs">
            <div class="imgs__item" v-for="img in imgs" :key="img">
                <img :src="'/img/mk/offer/' + img">
                <h2 class="link imgs__item__btn">пример</h2>
            </div>
        </div>

    </div>
</template>
  
<script setup>
import { openTg } from '@/functions/openTg';
import SecondaryButton from './SecondaryButton.vue';

const proprs = defineProps({
    header: {
        type: String
    },
    subHeader: {
        type: String
    },
    actionText: {
        type: String,
        default: ""
    },
    imgs: {
        type: Array
    }
})
</script>
<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}

h2 {
    white-space: pre;
}

.jewerly {

    &__top {
        margin-right: 4px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        gap: 4px;

        &__subheader {
            gap: 12px;
            width: fit-content;
            display: flex;
            flex-direction: row;
            align-self: flex-end;
        }
    }
}


.imgs {
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 8px;
    gap: 4px;

    &__item {
        min-width: 95%;
        position: relative;

        &__btn {
            position: absolute;
            top: 12px;
            right: 12px;
            color: var(--white);
        }
    }
}
</style>
 