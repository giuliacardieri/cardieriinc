<template>
  <Hero
    :image="data?.data?.attributes?.Hero?.Imagem?.data?.attributes?.url"
    :title="data?.data?.attributes?.Hero?.Titulo"
    ctaText="Entre em contato"
    ctaModal
  ></Hero>
  <main class="main">
    <section class="main__section">
      <h2>Empreendimentos</h2>
      <CardsList />
    </section>
    <CTA></CTA>
  </main>
</template>

<script setup>
import { ref } from "vue";

const loaded = ref(false);
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(
  `${runtimeConfig.public.apiUrl}/empreendimentos-pagina?populate[0]=Hero&populate[1]=Hero.Imagem`,
  {
    lazy: true,
    server: false,
    onResponse() {
      loaded.value = true;
    },
  }
);

useSeoMeta({
  title: "Empreendimentos | Cardieri Inc",
  robots: "index, follow",
  googlebot: "index, follow",
  canonical: "https://cardieri.com.br/empreendimentos",
  description:
    "Construimos empreendimentos de qualidade, com ótimo custo-benefício, acabamento diferenciado e valorização após a entrega.",
  ogDescription:
    "Construimos empreendimentos de qualidade, com ótimo custo-benefício, acabamento diferenciado e valorização após a entrega.",
  ogTitle: "Empreendimentos | Cardieri Inc",
  ogImage: () =>
    `${data?.value?.data?.attributes?.Hero?.Imagem?.data?.attributes?.url}`,
  ogUrl: "https://cardieri.com.br/empreendimentos",
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>

<style scoped></style>
