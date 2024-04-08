<template>
    <button class="sec_btn">{{ text }}</button>
</template>
<script setup>

const proprs = defineProps({
    text: {
        type: String,
        default: true
    }
})
</script>

<style lang="scss" scoped>
.sec_btn {
    background-color: rgba(255, 255, 255, 0);
    border-radius: 24px;
    border: 1px solid var(--black);
    color: var(--black) !important;
    font-size: 13px;
    margin-right: 6px;
    height: 19px;
    // line-height: 0px !important;
    padding: 1px 6px 4px 6px;
}
</style>