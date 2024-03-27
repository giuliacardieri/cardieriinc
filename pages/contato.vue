<template>
  <Hero
    :image="data?.data?.attributes?.Hero?.Imagem?.data?.attributes?.url"
    :title="data?.data?.attributes?.Hero?.Titulo"
    ctaText="Entre em contato"
    ctaModal
  ></Hero>
  <main class="main">
    <section class="main__section main__section--blue">
      <h2>Atendimento</h2>
      {{ data?.data?.attributes?.Horarios }}
    </section>
    <section class="main__section">
      <h2>VENDAS</h2>
      <p>Fale com um de nossos corretores diretamente.</p>
      <p>
        <font-awesome-icon
          class="contact__icon"
          :icon="['fab', 'whatsapp']"
        ></font-awesome-icon>
        <a
          aria-label="Entre em contato via whatsapp"
          class="contact__link"
          :href="`https://api.whatsapp.com/send?phone=55${data?.data?.attributes?.WhatsappVendas}`"
          target="_blank"
          >{{ formatPhone(data?.data?.attributes?.WhatsappVendas) }}</a
        >
      </p>
      <p>
        <font-awesome-icon
          class="contact__icon"
          :icon="['fas', 'envelope']"
        ></font-awesome-icon>
        <a
          aria-label="Entre em contato via email"
          class="contact__link"
          :href="`mailto:${data?.data?.attributes?.EmailVendas}`"
          >{{ data?.data?.attributes?.EmailVendas }}</a
        >
      </p>
    </section>
    <section class="main__section main__section--yellow">
      <h2>Entre em contato</h2>
      <p>Podemos ajudar em alguma coisa? Precisa de mais informações?</p>
      <Form />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";

const loaded = ref(false);
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(
  `${runtimeConfig.public.apiUrl}/atendimento?populate[0]=Hero&populate[1]=Hero.Imagem`,
  {
    lazy: true,
    server: false,
    onResponse() {
      loaded.value = true;
    },
  }
);

useSeoMeta({
  title: "Contato | Cardieri Inc",
  robots: "index, follow",
  googlebot: "index, follow",
  canonical: "https://cardieri.com.br/contato",
  description:
    "Entre em contato conosco para conhecer mais sobre nossos lançamentos!",
  ogDescription:
    "Entre em contato conosco para conhecer mais sobre nossos lançamentos!",
  ogTitle: "Contato | Cardieri Inc",
  ogImage: () =>
    `${data?.value?.data?.attributes?.Hero?.Imagem?.data?.attributes?.url}`,
  ogUrl: "https://cardieri.com.br/contato",
  ogType: "website",
  twitterCard: "summary_large_image",
});

function formatPhone(number) {
  if (!number) return "";
  number = number.replace(/\D/g, "");
  number = number.replace(/(\d{2})(\d)/, "($1) $2");
  number = number.replace(/(\d)(\d{4})$/, "$1-$2");
  return number;
}
</script>

<style scoped>
.contact__icon {
  margin-right: 0.5rem;
}
</style>
