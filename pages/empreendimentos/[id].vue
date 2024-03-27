<template>
  <main class="main">
    <EmpreendimentoInfo v-if="loaded" :data="data?.data?.attributes" />
    <section v-if="data?.data?.attributes?.Galeria?.data" class="main__section">
      <h2>Galeria de Fotos</h2>
      <Carousel :data="data?.data?.attributes" />
    </section>
    <section
      v-if="!data?.data?.attributes?.Comercial"
      class="main__section main__section--blue"
    >
      <h2>Lazer</h2>
      <div
        v-if="checkLazer(data?.data?.attributes)"
        class="icon-text-groups icon-text-groups--horizontal"
      >
        <IconTextGroup
          v-if="data?.data?.attributes?.Lazer?.SalaoDeFestas"
          iconName="bed"
          iconLabel="Cama"
          label="Salão de Festas"
        />
        <IconTextGroup
          v-if="data?.data?.attributes?.Lazer?.Brinquedoteca"
          iconName="gamepad"
          iconLabel="Controle de vídeo game"
          label="Salão de Jogos ou Brinquedoteca"
        />
        <IconTextGroup
          v-if="data?.data?.attributes?.Lazer?.Gourmet"
          iconName="utensils"
          iconLabel="Utensílios de cozinha"
          label="Area Gourmet"
        />
        <IconTextGroup
          v-if="data?.data?.attributes?.Lazer?.Piscina"
          iconName="swimming-pool"
          iconLabel="Piscina"
          label="Piscina"
        />
        <IconTextGroup
          v-if="data?.data?.attributes?.Lazer?.Quadra"
          iconName="futbol"
          iconLabel="Bola de futebol"
          label="Quadra Poliesportiva"
        />
        <IconTextGroup
          v-if="data?.data?.attributes?.Lazer?.Academia"
          iconName="dumbbell"
          iconLabel="Peso de academia"
          label="Academia"
        />
        <IconTextGroup
          v-if="data?.data?.attributes?.Lazer?.Lavanderia"
          iconName="users"
          iconLabel="Máquina de lavar"
          label="Lavanderia"
        />
        <IconTextGroup
          v-if="data?.data?.attributes?.Lazer?.Playground"
          iconName="baby"
          iconLabel="Peso de academia"
          label="Playground"
        />
      </div>
      <p v-else>
        Ops! As opções de lazer desse prédio não estão disponíveis no momento.
        Entre em contato para saber mais.
      </p>
    </section>
    <section
      v-if="data?.data?.attributes?.Plantas?.data"
      class="main__section main__section--gray"
    >
      <h2>Plantas</h2>
      <Planta :data="data?.data?.attributes?.Plantas"></Planta>
    </section>
    <Map
      v-if="data?.data?.attributes?.Latitude"
      :lat="data?.data?.attributes?.Latitude"
      :lng="data?.data?.attributes?.Longitude"
      :end="data?.data?.attributes?.Endereco"
      :bairro="data?.data?.attributes?.Bairro"
      :heading="data?.data?.attributes?.Nome"
    />
    <CTA></CTA>
  </main>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const id = route.params.id;

definePageMeta({
  layout: "empreendimento",
});

const loaded = ref(false);
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(
  `${runtimeConfig.public.apiUrl}/empreendimentos/${id}?populate=*`,
  {
    lazy: true,
    server: false,
    onResponse() {
      loaded.value = true;
    },
  }
);

useSeoMeta({
  title: () => `${data?.value?.data?.attributes?.Nome} | Cardieri Inc`,
  ogTitle: () => `${data?.value?.data?.attributes?.Nome} | Cardieri Inc`,
  robots: "index, follow",
  googlebot: "index, follow",
  canonical: () =>
    `https://cardieri.com.br/empreendimentos/${data?.value?.data.id}`,
  ogUrl: () =>
    `https://cardieri.com.br/empreendimentos/${data?.value?.data.id}`,
  description:
    "Construimos empreendimentos de qualidade, com ótimo custo-benefício, acabamento diferenciado e valorização após a entrega.",
  ogDescription:
    "Construimos empreendimentos de qualidade, com ótimo custo-benefício, acabamento diferenciado e valorização após a entrega.",
  ogImage: () =>
    `${data?.value?.data?.attributes?.Foto?.data?.attributes?.url}`,
  ogType: "website",
  twitterCard: "summary_large_image",
});

function checkLazer(data) {
  if (data?.Comercial) return false;
  if (
    !data?.Lazer?.Academia &&
    !data?.Lazer?.Brinquedoteca &&
    !data?.Lazer?.Lavanderia &&
    !data?.Lazer?.Gourmet &&
    !data?.Lazer?.Piscina &&
    !data?.Lazer?.Playground &&
    !data?.Lazer?.Quadra &&
    !data?.Lazer?.SalaoDeFestas
  )
    return false;
  return true;
}
</script>

<style scoped>
.icon-text-groups--horizontal {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
</style>
