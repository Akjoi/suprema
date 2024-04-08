<template>
	<div :style="{ width: width }" class="view_container">
		<Menu />
		<RouterView />
		<Footer />
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Menu from '@/components/Menu.vue';
import Footer from '@/components/footer/Footer.vue';
import { onMounted, ref } from 'vue';

const width = ref('100%')
onMounted(() => {
	if (!isPhone()) width.value = '475px';
})
function isPhone() {
	return navigator.maxTouchPoints > 0 && /Android|iPhone/i.test(navigator.userAgent);
}
</script>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	justify-content: center;
}

</style>