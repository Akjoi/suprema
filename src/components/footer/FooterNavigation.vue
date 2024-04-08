<template>
    <div>
        <div style="display: flex; flex-direction: column; align-items: end;">
            <h1 @click="toCatalog" class="cursor_pointer">каталог</h1>
            <h1 class="menu_item cursor_pointer" @click="toArchive">архив работ</h1>
            <h1 class="menu_item cursor_pointer" @click="toMC">мастер-классы</h1>
            <h1 class="menu_item cursor_pointer" @click="toEducation">обучение</h1>
            <h1 class="menu_item cursor_pointer" @click="toAbout">о мастерской</h1>
            <h1 @click="toMain" class="menu_item cursor_pointer">главная</h1>
            <h2 class="subheader" style="margin-top: 40px;">Пишите по поводу покупки<br>и любым вопросам </h2>
            <h2 class="subheader menu_item">telegram:</h2>
            <h1 class="link cursor_pointer" @click="openTg">@Supremasilver</h1>
            <h2 class="subheader menu_item">whatsapp:</h2>
            <h1 class="link cursor_pointer" @click="toWA">+7 (928) 223-01-40</h1>
        </div>

    </div>
</template>
  
<script>
import ROUTES_NAMES from "@/constants/routesNames"
import { openTg } from "@/functions/openTg"
export default {
    name: 'FooterNavigation',
    emits: ["onNavigate"],
    methods: {
        toArchive() {
            this.navigate(ROUTES_NAMES.WorkStory);
        },
        toMC() {
            this.navigate(ROUTES_NAMES.MasterClass);
        },
        toEducation() {
            this.navigate(ROUTES_NAMES.Education);
        },
        toCatalog() {
            this.navigate(ROUTES_NAMES.Catalog);
        },
        toAbout() {
            this.navigate(ROUTES_NAMES.About);
        },
        toMain() {
            this.$emit("onNavigate");
            this.$router.push("/");
            window.scrollTo(0,0);
        },
        navigate(name) {
            this.$emit("onNavigate");
            this.$router.push({ name: name });
            window.scrollTo(0,0);
        },
        toWA() {
            window.open("https://wa.me/79282230140")
        },
        openTg() {
            openTg()
        }
    }
}
</script>
<style scoped>
.menu_item {

    width: fit-content;
    margin-top: 12px;
}
</style>
  