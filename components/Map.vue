<template>
  <section :class="[{ 'map--white': white }, 'map']">
    <div class="map__text-wrapper">
      <h2 class="map__header">{{ heading }}</h2>
      <div class="map__icon-wrapper">
        <font-awesome-icon
          aria-label="Marcador de mapa"
          class="map__icon"
          :icon="['fas', 'map-marker-alt']"
        ></font-awesome-icon>
        <p :class="[{ 'map__p--blue': white }, 'map__p']">
          {{ end }} - {{ bairro }}
        </p>
      </div>
      <div class="map__icon-wrapper" v-if="tel">
        <font-awesome-icon
          aria-label="Telefone"
          class="map__icon"
          :icon="['fas', 'phone']"
        ></font-awesome-icon>
        <p :class="[{ 'map__p--blue': white }, 'map__p']">
          <a class="map__a" :href="`tel:+55${tel}`"> {{ formatPhone(tel) }}</a>
        </p>
      </div>
    </div>
    <GMapMap class="map__content" :center="center" :zoom="18">
      <GMapMarker
        title="Mapa"
        :key="index"
        v-for="(m, index) in markers"
        :position="m?.position"
        :clickable="true"
        :draggable="true"
        @click="center = m?.position"
      />
    </GMapMap>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  lat: { type: String, default: "-23.509482" },
  lng: { type: String, default: "-47.462124" },
  embed: { type: Boolean, default: false },
  end: { type: String },
  bairro: { type: String },
  heading: { type: String },
  tel: { type: String },
  white: { type: Boolean },
});

const lat = computed(() => parseFloat(props?.lat));
const lng = computed(() => parseFloat(props?.lng));
const markers = ref([]);
const center = ref({
  lat: lat?.value,
  lng: lng?.value,
});

function addMarker() {
  const marker = {
    lat: lat?.value,
    lng: lng?.value,
  };
  markers.value.push({ position: marker });
}

function formatPhone(number) {
  if (!number) return "";
  number = number.replace(/\D/g, "");
  number = number.replace(/(\d{2})(\d)/, "($1) $2");
  number = number.replace(/(\d)(\d{4})$/, "$1-$2");
  return number;
}
addMarker();
</script>

<style scoped>
.map__text-wrapper {
  padding: 2.5rem 8rem 0 8rem;
  text-align: center;
}

@media (max-width: 799px) {
  .map__text-wrapper {
    padding: 2rem 4rem 0 4rem;
  }
}
@media (max-width: 799px) {
  .map__text-wrapper {
    padding: 2rem 2.5rem 0 2.5rem;
  }
}

.map__header {
  margin-bottom: 1rem;
}

.map__content :deep .vue-map {
  min-height: 400px;
}

.map__icon-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.map__icon {
  height: 1.5rem;
  margin-right: 0.5rem;
  width: 1.5rem;
}
</style>
