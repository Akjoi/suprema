<template>
    <main class="content_body">
        <h1 class="subheader route_name">{{ route_name }}</h1>
        <div class="content_body__slot">
            <slot></slot>

        </div>
    </main>
</template>
<script setup>

const route = useRoute();
import { computed } from 'vue';
import { useRoute } from 'vue-router'

const route_name = computed(() => {
    return route.meta.route_name
})
</script>

<style lang="scss" scoped>
.content_body {
    background: var(--secondary-header);
    padding: 0px 4px 16px 4px;

    &__slot {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
}

.route_name {
    margin-bottom: 24px;
    margin-right: 4px;
}
</style>