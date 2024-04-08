<template>
    <footer>
        <div class="footer_body">
            <h2 class="subheader">сайт:</h2>
            <FooterNavigation />
            <div class="row footer_body__buttons">
                <button class="footer_body__buttons__qa" @click="tgOpen">задать вопрос</button>
                <button class="footer_body__buttons__catalog" @click="toCatalog">каталог</button>
            </div>
        </div>
        <div class="footer_end">
            <h2>© Дарья Тихонова</h2>
            <h2 class="subheader">доставка по всей России</h2>
        </div>
    </footer>
</template>
  
<script setup>
import FooterNavigation from "./FooterNavigation.vue"
import { useRouter } from "vue-router";
import ROUTES_NAMES from "@/constants/routesNames";
import { openTg } from "@/functions/openTg";
const router = useRouter();
function toCatalog() {
    router.push({ name: ROUTES_NAMES.Catalog });
    window.scrollTo(0, 0);
}

function tgOpen() {
    openTg()
}

</script>
<style lang="scss" scoped>
.footer_body {
    margin: 48px 4px 0px 4px;
    border-top: 1px solid rgba(0, 0, 0, .32);
    padding: 24px 8px 0px 8px;

    &__buttons {
        margin-top: 63px;

        &__qa {
            flex: 1;
            margin-right: 4px;
            background: var(--white);
            color: var(--black) !important;
            border: 1px solid var(--black);
        }

        &__catalog {
            flex: 1;
            color: var(--white);
            background: var(--black);
            border-radius: 64px;
        }
    }
}

.footer_end {
    margin: 16px 8px 48px 4px;
    border-top: 1px solid rgba(0, 0, 0, .32);
    padding: 12px 4px;
}
</style>
  