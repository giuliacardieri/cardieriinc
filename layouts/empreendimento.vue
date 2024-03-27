<template>
  <Header :info="data?.data" />
  <slot />
  <Footer :info="data?.data" />
</template>

<script setup>
import { ref } from "vue";
const loaded = ref(false);

const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(
  `${runtimeConfig.public.apiUrl}/informacao-geral?populate*`,
  {
    lazy: true,
    server: false,
    onResponse() {
      loaded.value = true;
    },
  }
);
</script>
