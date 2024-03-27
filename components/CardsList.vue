<template>
  <div class="cards-list">
    <p v-if="!loaded">Carregando...</p>
    <Card
      v-for="(item, index) in data?.data"
      :key="index"
      class="cards-list__item"
      :url="'/empreendimentos/' + item?.id + '/'"
      :data="item?.attributes"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  lancamentos: { type: Boolean, default: false },
});

const loaded = ref(false);
const runtimeConfig = useRuntimeConfig();
let url = `${runtimeConfig.public.apiUrl}/empreendimentos?populate=*&sort=Entrega:desc`;
if (props.lancamentos) url += `&filters[Lancamento][$eq]=true`;
const { data } = await useFetch(url, {
  lazy: true,
  server: false,
  onResponse() {
    loaded.value = true;
  },
});
</script>

<style scoped>
.cards-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

@media (max-width: 1024px) {
  .cards-list {
    grid-template-columns: minmax(0, 1fr);
  }
}

.cards-list__item {
  box-sizing: border-box;
}
</style>
