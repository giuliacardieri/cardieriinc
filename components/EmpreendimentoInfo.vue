<template>
  <div class="empreendimento-info">
    <section class="empreendimento-info__wrapper">
      <img
        class="empreendimento-info__image"
        :src="data?.Foto?.data?.attributes?.url"
        :alt="data?.Nome"
      />
      <div class="empreendimento-info__text-wrapper">
        <div class="empreendimento-info__text">
          <h2 class="empreendimento-info__h2">{{ data?.Nome }}</h2>
          <p class="empreendimento-info__p">
            {{ data?.Descricao }}
          </p>
          <div class="empreendimento-info__icons">
            <IconTextGroup
              v-if="!data?.Comercial"
              iconName="bed"
              iconLabel="Cama"
              :label="getQuartosLabel(data)"
            />
            <IconTextGroup
              v-else
              iconName="building"
              iconLabel="Prédio Comercial"
              label="Comercial"
            />
            <IconTextGroup
              iconName="ruler-vertical"
              iconLabel="Metragem"
              :label="`${data?.Metragem} m²`"
            />
            <IconTextGroup
              v-if="data?.Vagas"
              iconName="car"
              iconLabel="Vagas"
              :label="`${data?.Vagas} Vaga${data?.Vagas !== 1 ? 's' : ''}`"
            />
            <IconTextGroup
              v-if="data?.Bairro"
              iconLabel="Marcador de mapa"
              iconName="map-marker-alt"
              :label="data?.Bairro"
            />
          </div>
        </div>
        <div class="empreendimento-info__entregue">
          <h3 v-if="data?.Entregue">
            Empreendimento entregue em {{ data?.Entrega }}
          </h3>
          <h3 v-else>
            Previsão de entrega em
            {{ data?.Entrega }}
          </h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  data: { type: Object },
  id: { type: String },
});

function getQuartosLabel(data) {
  let string = "";
  if (data?.Dormitorios) string += `${data?.Dormitorios} Dormitórios`;
  if (data?.Dormitorios && data?.Suites) string += "(";
  if (data?.Suites) string += `${data?.Suites} Suite`;
  if (data?.Suites !== "1") string += "s";
  if (data?.Dormitorios && data?.Suites) string += ")";
  return string;
}
</script>

<style scoped>
.empreendimento-info__wrapper {
  align-items: stretch;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1200px) {
  .empreendimento-info__wrapper {
    max-height: 650px;
  }
}

@media (min-width: 768px) {
  .empreendimento-info__wrapper {
    flex-direction: row;
  }
}

.empreendimento-info__image {
  object-fit: cover;
  width: 40%;
}
@media (max-width: 799px) {
  .empreendimento-info__image {
    width: 100%;
  }
}

.empreendimento-info__text-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  justify-content: space-between;
}

.empreendimento-info__h2 {
  margin-bottom: 2rem;
  position: relative;
}

.empreendimento-info__h2:after {
  background-color: var(--yellow);
  bottom: -0.75rem;
  content: "";
  height: 6px;
  left: 0;
  position: absolute;
  width: 3rem;
}

@media (min-width: 768px) {
  .empreendimento-info__text-wrapper {
    width: 60%;
  }
}

.empreendimento-info__text {
  font-size: 1.25rem;
  padding: 2rem;
}

.empreendimento-info__entregue {
  background-color: var(--yellow);
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
}

.empreendimento-info__icons {
  margin-top: 1rem;
}

.planta__image {
  cursor: zoom-in;
  margin-top: 3rem;
  max-height: 500px;
  max-width: 100%;
}

.lazer__item {
  align-items: center;
  display: flex;
}

.lazer__icon {
  margin-right: 0.5rem;
}

.empreendimento__video-wrapper {
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
}

.empreendimento__iframe {
  height: 100%;
  left: 0;
  min-height: 400px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1 !important; /* youtube sets a very high value for z-index and we need important */
}
</style>
