<template>
  <Header :info="data?.data" />
  <slot />
  <Map
    heading="Conheça nosso escritório"
    :end="data?.data?.attributes?.Endereco"
    :bairro="data?.data?.attributes?.Bairro"
    :tel="data?.data?.attributes?.TelefoneFixo"
  ></Map>
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
