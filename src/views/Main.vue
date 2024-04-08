<template>
	<div class="photo">
		<h1 class="photo__header">Уникальное<br>Твоё</h1>
		<img :src="imageUrl">
		<div class="photo__footer">
			<div class="photo__footer__slogan">
				<h2 class="photo__footer__slogan__h2">Выбери украшение ручной работы или закажи своё</h2>
			</div>
			<div class="photo__buttons row">
				<button class="photo__buttons__catalog" @click="toCatalog">каталог</button>
				<button class="glass photo__buttons__order" @click="tgOpen">заказать
					своё</button>

			</div>
		</div>
	</div>
	<div class="row rings__header">
		<div></div>
		<!-- <button class="jewerly__header__new">новинка</button> -->
		<div>
			<h1>Обручальные кольца</h1>
			<h2 class="rings__header__slogan">Закажите или сделайте<br>друг для друга на мастер-классе</h2>
		</div>
	</div>
	<div class="row imgs">
		<img class="imgs__item" v-for="img in imgs" :src="img" />
	</div>
	<p class="order_rings cursor_pointer" @click="tgOpen">
		Заказать кольца</p>
	<div class="new">
		<div class="new__header">
			<h1 style="opacity: 0.4;">новинки</h1>
		</div>
		<JewerlyItem v-for="item in noveltyList" :name="item.name" :cost="item.cost" :size="item.size" :src="item.src"
			:key="item.src"></JewerlyItem>
		<p class="new__catalog cursor_pointer" @click="toCatalog">
			Посмотреть каталог</p>
	</div>
	<div class="mk">
		<h1 class="mk__header">Мастер-классы</h1>
		<MkItem></MkItem>
	</div>
</template>
  
<script setup>
import JewerlyItem from '@/components/JewerlyItem.vue';
import ROUTES_NAMES from '@/constants/routesNames'
import { useCatalogStore } from '@/stores/catalog.store'
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import MkItem from '@/components/MkItem.vue'
import JEWERLY_KEYS from "@/constants/jewerlyKeys"
import { openTg } from '../functions/openTg';
const store = useCatalogStore();
const router = useRouter();
const { catalogList } = storeToRefs(store);
const imgs = ["/img/main/ring_1.jpg", "/img/main/ring_2.jpg", "/img/main/ring_3.jpg", "/img/main/ring_4.jpg"]
onMounted(() => {
	store.getCatalogList();
})

const noveltyList = computed(() => {
	return catalogList.value.filter(item => item.keys.includes(JEWERLY_KEYS.NEW))
})
function toCatalog() {
	router.push({ name: ROUTES_NAMES.Catalog });
	window.scrollTo(0, 0);
}

const imageUrl = new URL('/img/main/landing_photo.jpg', import.meta.url).href

function tgOpen() {
	openTg()
}

</script>
  
<style lang="scss" scoped>
img {
	width: 100%;
}

.photo {
	position: relative;
	margin: 4px;

	&__header {
		position: absolute;
		top: 4px;
		right: 4px;
		color: var(--white);
	}

	&__footer {
		position: absolute;
		width: 100%;
		bottom: 12px;
		padding: 0px 8px;

		&__slogan {
			display: flex;
			justify-content: flex-end;
			border-right: 1px solid rgba(255, 255, 255);
			padding-right: 8px;

			&__h2 {
				width: 178px;
				height: 48px;
				color: var(--white);
			}
		}
	}

	&__buttons {
		margin-top: 24px;

		&__catalog {
			flex: 1;
			background-color: var(--white);
			color: var(--black) !important;
			margin-right: 4px;
			border-radius: 64px;
		}

		&__order {
			flex: 1;
			color: var(--white);
		}
	}
}

.order_rings {
	text-decoration: underline;
	margin-top: 24px;
	margin-right: 16px;
	text-align: end;
	font-family: Golos;
}

.rings__header {
	margin: 48px 4px 0px 4px;
	justify-content: space-between;
	padding-right: 4px;
	padding-left: 10px;

	&__slogan {
		margin-top: 8px;
		padding-right: 8px;
		border-right: 1px solid rgba(0, 0, 0, .32);
	}
}

.imgs {
	overflow-x: auto;
	overflow-y: hidden;
	margin: 24px 4px 0px 4px;
	gap: 4px;

	&__item {
		width: 95%;
	}
}

.new {
	background: var(--secondary-header);
	margin-top: 48px;
	padding: 0px 4px;

	&__header {
		padding: 6px 4px 0px 4px;
		height: 40px;
		border-bottom: 1px solid rgba(0, 0, 0, .32);
		stroke-opacity: 32%;
	}

	&__catalog {
		text-decoration: underline;
		margin-top: 32px;
		padding-bottom: 16px;
		margin-right: 4px;
		text-align: end;
		font-family: Golos;

	}
}

.mk {
	margin: 48px 4px 0px 4px;

	&__header {
		padding-right: 4px;
		margin-bottom: 8px;
	}
}
</style> 