<template>
    <div class="filter">
        <h1 class="subheader" style="margin-right: 4px;">{{ route_name }}</h1>
        <div class="filter__list" ref="filtersRef">
            <h2 class="filter__list__item cursor_pointer" :class="{ active: currentFilter == FILTERS.BRASLET }"
                @click="changeCurrentFilter(FILTERS.BRASLET)">браслеты</h2>
            <h2 class="filter__list__item cursor_pointer" :class="{ active: currentFilter == FILTERS.KULON }"
                @click="changeCurrentFilter(FILTERS.KULON)">кулоны</h2>
            <h2 class="filter__list__item cursor_pointer" :class="{ active: currentFilter == FILTERS.SERGA }"
                @click="changeCurrentFilter(FILTERS.SERGA)">серьги</h2>
            <h2 class="filter__list__item cursor_pointer" :class="{ active: currentFilter == FILTERS.RING }"
                @click="changeCurrentFilter(FILTERS.RING)">кольца</h2>
            <h2 class="filter__list__item cursor_pointer" :class="{ active: currentFilter == FILTERS.NEW }"
                @click="changeCurrentFilter(FILTERS.NEW)">новинки</h2>
            <!-- <h2 id="end" class="filter__list__item cursor_pointer" :class="{ active: currentFilter == FILTERS.ALL }"
                @click="changeCurrentFilter(FILTERS.ALL)">все</h2> -->
        </div>
        <h2 v-if="currentList.length === 0" class="subheader" style="text-align: center;">Out of stock</h2>
        <JewerlyItem v-for="item in currentList" :isNew="item.keys.includes(FILTERS.NEW)" :name="item.name"
            :cost="item.cost" :size="item.size" :src="item.src" :key="item.src"></JewerlyItem>
        <p class="cursor_pointer" :style="{ textAlign: order_align, marginRight: order_margin}" @click="openTg">
            Заказать своё</p>
    </div>
</template>
  
<script setup>


import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import JewerlyItem from '@/components/JewerlyItem.vue';
import JEWERLY_KEYS from "@/constants/jewerlyKeys"
import { useCatalogStore } from '@/stores/catalog.store'
import { storeToRefs } from 'pinia';
import { openTg } from '@/functions/openTg';
const filtersRef = ref(null);
const store = useCatalogStore();
const { catalogList } = storeToRefs(store);
const route = useRoute();
const FILTERS = {
    // ALL: "ALL",
    NEW: JEWERLY_KEYS.NEW,
    RING: JEWERLY_KEYS.RING,
    SERGA: JEWERLY_KEYS.SERGA,
    KULON: JEWERLY_KEYS.KULON,
    BRASLET: JEWERLY_KEYS.BRASLET
}

const currentFilter = ref(FILTERS.NEW)
onMounted(() => {
    store.getCatalogList();
    filtersRef.value.scrollTo({
        left: filtersRef.value.scrollLeft += 400,
        behavior: 'smooth',
    })
    filtersRef.value.s
})

const currentList = computed(() => {
    // if (currentFilter.value == FILTERS.ALL) return catalogList.value
    return catalogList.value.filter(item => item.keys.includes(currentFilter.value))
})

const route_name = computed(() => {
    return route.meta.route_name
})

const order_align = computed(() => {
    if (currentList.value.length === 0) return "center"
    return "end"
})

const order_margin = computed(() => {
    if (currentList.value.length === 0) return "0px"
    return "8px"
})

function changeCurrentFilter(filter) {
    window.scrollTo(0, 0);
    currentFilter.value = filter
}
</script>
<style lang="scss" scoped>
p {
    margin-top: 24px;
    font-family: Golos;
    text-decoration: underline;
}

::-webkit-scrollbar {
    display: none;
}

.filter {
    padding: 0px 4px;

    &__list {
        margin-top: 8px;
        padding: 8px 4px;
        position: sticky;
        background-color: white;
        z-index: 2;
        top: 40px;
        overflow-x: scroll;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 0px;
        grid-template-columns: repeat(6, 1fr);

        &__item {
            width: fit-content;
            text-align: center;
            padding: 8px 12px;
        }
    }

    :after {
        background: url("arrow.svg");
    }
}


.active {
    color: var(--white);
    border-radius: 24px;
    background: black;
}
</style>
  