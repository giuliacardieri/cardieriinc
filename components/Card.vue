<template>
  <NuxtLink class="card" :to="url">
    <div class="card__image-wrapper">
      <img
        class="card__image"
        :src="data?.Foto?.data?.attributes?.url"
        :alt="data.Nome"
      />
    </div>
    <div class="card__text">
      <h3 class="card__h3">{{ data.Nome }}</h3>
      <IconTextGroup
        v-if="data.Bairro"
        iconLabel="Marcador de mapa"
        iconName="map-marker-alt"
        :label="data.Bairro"
      />
      <IconTextGroup
        v-if="data.Dormitorios || data.Suites"
        iconLabel="Cama"
        iconName="bed"
        :label="getSuitesLabel(data)"
      />
      <IconTextGroup
        v-if="data.Comercial"
        iconLabel="Prédio comercial"
        iconName="building"
        label="Comercial"
      />
      <IconTextGroup
        v-if="data.Metragem"
        iconLabel="Metragem"
        iconName="ruler-vertical"
        :label="`${data.Metragem} m²`"
      />
      <IconTextGroup
        v-if="data.Vagas"
        iconLabel="Vagas"
        iconName="car"
        :label="`${data.Vagas} Vaga${parseInt(data?.Vagas) < 2 ? '' : 's'}`"
      />
      <IconTextGroup
        v-if="data.Entrega"
        iconLabel="Calendário"
        iconName="calendar-alt"
        :label="`${
          data.Entregue ? 'Entregue em' : 'Previsão de entrega para'
        } ${data.Entrega}`"
      />
      <div class="card__cta">
        <h4>Quero saber mais!</h4>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  data: { type: Object },
  url: { type: String },
});

function getSuitesLabel(data) {
  let label = "";
  if (data.Dormitorios) label += `${data.Dormitorios} Dorms`;
  if (data.Dormitorios && data.Suites) label += " e ";
  if (data.Suites) label += `${data.Suites} Suítes`;
  return label;
}
</script>

<style scoped>
.card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  position: relative;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
    height: 400px;
  }
}

.card:hover {
  background-color: var(--yellow);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.card__image-wrapper {
  border-bottom: 5px solid var(--yellow);
  border-right: none;
  display: flex;
  flex-shrink: 0;
  position: relative;
  width: 100%;
}

@media (min-width: 768px) {
  .card__image-wrapper {
    border-bottom: none;
    border-right: 5px solid var(--yellow);
    width: 40%;
  }
}

.card__image-wrapper:after {
  background-color: transparent;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 0.3s ease-in-out;
  width: 100%;
}

.card__item:hover .card__image-wrapper:after {
  background-color: rgba(0, 0, 0, 0.25);
}

.card__image {
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  object-fit: cover;
  object-position: 50% 15%;
  width: 100%;
}

.card__text {
  color: var(--blue);
  padding: 2rem;
}

.card__h3 {
  margin-bottom: 1.5rem;
}

.card__cta {
  bottom: 0;
  box-sizing: border-box;
  opacity: 0;
  position: absolute;
  padding: 1rem 0;
  transition: opacity 0.3s ease-in-out;
}

.cards-list__item:hover .card__cta {
  opacity: 1;
}
</style>
