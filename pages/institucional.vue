<template>
  <Hero
    :image="data?.data?.attributes?.Hero?.Imagem?.data?.attributes?.url"
    :title="data?.data?.attributes?.Hero?.Titulo"
    ctaText="Entre em contato"
    ctaModal
  ></Hero>
  <main class="main">
    <section
      v-if="data?.data?.attributes?.Introducao"
      class="main__section markdown"
      v-html="$markdown.render(data?.data?.attributes?.Introducao)"
    ></section>
    <Infobar></Infobar>
    <section
      v-if="data?.data?.attributes?.Filosofia"
      class="main__section main__section--blue markdown"
      v-html="$markdown.render(data?.data?.attributes?.Filosofia)"
    ></section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const loaded = ref(false);
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(
  `${runtimeConfig.public.apiUrl}/quem-sou?populate[0]=Hero&populate[1]=Hero.Imagem`,
  {
    lazy: true,
    server: false,
    onResponse() {
      loaded.value = true;
    },
  }
);

useSeoMeta({
  title: "Quem Somos | Cardieri Inc",
  robots: "index, follow",
  googlebot: "index, follow",
  canonical: "https://cardieri.com.br/institucional",
  description:
    "O arquiteto Rubens Cezar Madureira Cardieri fundou a Construtora Cardieri em 10 de Outubro de 1964 com objetivo de obter o domínio completo das obras que projetava e ampliar seu campo de trabalho. Em 2010 foi criada a Cardieri Incorporações e Construções (Cardieri INC), que substituiu a Construtora Cardieri e passou a ser gerenciada por Cesar e Rubinho Cardieri.",
  ogDescription:
    "O arquiteto Rubens Cezar Madureira Cardieri fundou a Construtora Cardieri em 10 de Outubro de 1964 com objetivo de obter o domínio completo das obras que projetava e ampliar seu campo de trabalho. Em 2010 foi criada a Cardieri Incorporações e Construções (Cardieri INC), que substituiu a Construtora Cardieri e passou a ser gerenciada por Cesar e Rubinho Cardieri.",
  ogTitle: "Quem Somos | Cardieri Inc",
  ogImage: () =>
    `${data?.value?.data?.attributes?.Hero?.Imagem?.data?.attributes?.url}`,
  ogUrl: "https://cardieri.com.br/institucional",
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>

<style scoped></style>
