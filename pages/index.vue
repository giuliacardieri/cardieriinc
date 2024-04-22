<template>
  <Hero
    :image="
      data?.data?.attributes?.Hero?.Imagem?.data?.attributes?.formats?.large
        ?.url
    "
    :title="data?.data?.attributes?.Hero?.Titulo"
    ctaText="Entre em contato"
    ctaModal
  ></Hero>
  <main class="main">
    <section class="main__section">
      <h2>Lançamentos</h2>
      <CardsList lancamentos />
    </section>
    <CTA></CTA>
  </main>
</template>

<script setup>
import { ref } from "vue";

useSeoMeta({
  title: "Cardieri Inc",
  robots: "index, follow",
  googlebot: "index, follow",
  canonical: "https://cardieri.com.br",
  description:
    "Construtora há 60 anos no mercado de Sorocaba-SP, garantindo qualidade e acabamento diferenciado em nossos empreendimentos.",
  ogDescription:
    "Construtora há 60 anos no mercado de Sorocaba-SP, garantindo qualidade e acabamento diferenciado em nossos empreendimentos.",
  ogTitle: "Cardieri Inc",
  ogImage:
    "https://res.cloudinary.com/du9aie2jo/image/upload/v1704775488/large_home_f94d811f7d.jpg",
  ogUrl: "https://cardieri.com.br/",
  ogType: "website",
  twitterCard: "summary_large_image",
});

const loaded = ref(false);
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(
  `${runtimeConfig.public.apiUrl}/home?populate[0]=Hero&populate[1]=Hero.Imagem`,
  {
    lazy: true,
    server: false,
    onResponse() {
      loaded.value = true;
    },
  }
);
</script>

<style scoped></style>
