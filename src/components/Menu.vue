<template>
    <div class="menu row">
        <div id="nav-icon" :class="{ open: showMenu }" @click="changeMenuState">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h1 class="cursor_pointer" @click="toMain">Мастерская Дарьи Тихоновой</h1>
        <FooterNavigation @on-navigate="changeMenuState" :style="{ display: displayOptions }" id="nav_menu"
            class="dropdown_menu dropdown_menu-6">
        </FooterNavigation>
    </div>
</template>
  
<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ROUTES_NAME from "@/constants/routesNames"
import FooterNavigation from "./footer/FooterNavigation.vue"

const router = useRouter();
function toMain() {
    router.push({ name: ROUTES_NAME.Main });
    window.scrollTo(0, 0);

}

const showMenu = ref(false);

const displayOptions = computed(() => {
    if (showMenu.value) return "block"
    return "none"
})
function changeMenuState() {
    showMenu.value = !showMenu.value;
}

</script>
<style scoped>
img {
    height: 32px;
    width: 32px;
}

.menu {
    position: sticky;
    background-color: var(--white);
    top: 0;
    height: 40px;
    z-index: 3;
    justify-content: space-between;
    align-items: center;
    margin: 0px 4px;
    padding: 0px 4px;
    border-bottom: 1px solid rgba(0, 0, 0, .32);
    stroke-opacity: 32%;
}

.dropdown_menu {
    background-color: var(--white);
    border-top: 1px solid rgba(0, 0, 0, .32);
    border-left: 1px solid rgba(0, 0, 0);
    border-bottom: 1px solid rgba(0, 0, 0);

    padding-right: 4px;
    padding-top: 24px;
    padding-bottom: 16px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    perspective: 1000px;
}

#nav-icon span:nth-child(1) {
    top: 0px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
    top: 8px;
}

#nav-icon.open span:nth-child(1) {
    top: 8px;
    width: 0%;
    left: 50%;
}

#nav-icon.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

#nav-icon {
    width: 32px;
    height: 12px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
}

#nav-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--black);
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

.dropdown_menu-6 {
    animation: growDown 300ms ease-in-out forwards
}
</style>
  