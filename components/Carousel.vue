<template>
  <div class="carousel">
    <div class="carousel__highlight">
      <div class="carousel__img-wrapper">
        <img
          class="carousel__highlight-img"
          :src="data?.Galeria?.data?.[currentPhoto].attributes?.url"
          :alt="data?.Galeria?.data?.[currentPhoto].attributes?.alternativeText"
        />
      </div>
    </div>
    <div class="carousel__content">
      <button
        :disabled="currentPhoto === 0"
        class="carousel__button carousel__button--top"
        @click="prevCarousel()"
      >
        <font-awesome-icon
          class="carousel__icon"
          :icon="['fas', 'chevron-up']"
        ></font-awesome-icon>
      </button>
      <button
        :disabled="currentPhoto === data?.Galeria?.data.length - 1"
        class="carousel__button carousel__button--bottom"
        @click="nextCarousel()"
      >
        <font-awesome-icon
          class="carousel__icon"
          :icon="['fas', 'chevron-down']"
        ></font-awesome-icon>
      </button>
      <div class="carousel__items-wrapper">
        <div class="carousel__items" :style="{ transform: transformStyle }">
          <div
            @click="changePhoto(index)"
            v-for="(photo, index) in data?.Galeria?.data"
            :key="photo.attributes?.url + '-' + index"
            :class="[
              { 'carousel__item--current': index === currentPhoto },
              'carousel__item',
            ]"
          >
            <img
              class="carousel__img"
              :src="photo?.attributes?.url"
              :alt="photo.attributes?.alternativeText"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";

const props = defineProps({
  data: { type: Object },
});

const windowWidth = ref(window?.innerWidth);

watchEffect(() => {
  const updateWidth = () => {
    windowWidth.value = window?.innerWidth;
  };
  window?.addEventListener("resize", updateWidth);
  onUnmounted(() => {
    window?.removeEventListener("resize", updateWidth);
  });
});

const maxPhoto = computed(() => props.data.Galeria.data.length);
const tileSize = 158;
const currentPhoto = ref(0);
const transformValue = ref(0);

const transformStyle = computed(() => {
  const direction = windowWidth.value >= 768 ? "Y" : "X";
  return `translate${direction}(${transformValue.value}px)`;
});

function prevCarousel() {
  if (currentPhoto.value > 0) {
    currentPhoto.value--;
    transformValue.value += tileSize * 1;
  }
}

function nextCarousel() {
  if (currentPhoto.value < maxPhoto.value - 1) {
    currentPhoto.value++;
    transformValue.value -= tileSize * 1;
  }
}

function changePhoto(index) {
  const distance = index - currentPhoto.value;
  if (distance !== 0) {
    transformValue.value -= tileSize * distance;
    currentPhoto.value = index;
  }
}
</script>

<style scoped>
.carousel {
  display: grid;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .carousel {
    gap: 2rem;
    grid-template-columns: 3fr 1fr;
  }
}

.carousel__img-wrapper {
  background-color: var(--medium-gray);
  display: flex;
  justify-content: center;
}

.carousel__highlight-img {
  max-height: 500px;
  object-fit: cover;
}
@media (max-width: 799px) {
  .carousel__highlight-img {
    max-height: 50vh;
  }
}

.carousel__content {
  box-sizing: border-box;
  max-height: 500px;
  padding: 2rem 0;
  position: relative;
  overflow-y: hidden;
}

.carousel__items-wrapper {
  height: 100%;
  overflow: hidden;
}

.carousel__items {
  display: flex;
  min-height: 40px;
  transition: transform 0.5s ease-in-out;
}

@media (min-width: 768px) {
  .carousel__items {
    flex-direction: column;
    height: 100%;
  }

  .carousel__item {
    margin-bottom: 0.5rem;
    margin-right: 0;
  }
}

.carousel__item {
  cursor: pointer;
  margin-right: 1rem;
}

.carousel__item:not(.carousel__item--current) {
  opacity: 0.5;
}

.carousel__img {
  height: 100%;
  min-width: 150px;
  object-fit: cover;
  width: 100%;
}

@media (min-width: 768px) {
  .carousel__img {
    max-height: 150px;
    min-width: 0;
    object-fit: cover;
  }
}

.carousel__button:not(:disabled) {
  cursor: pointer;
}

.carousel__button:disabled {
  opacity: 0.25;
}

.carousel__button {
  background-color: transparent;
  border: 0;
  margin: auto;
  position: absolute;
  z-index: 1;
}

.carousel__button--bottom {
  bottom: 0;
  right: 0;
  top: 0;
  transform: rotate(-90deg);
}

.carousel__button--top {
  bottom: 0;
  left: 0;
  top: 0;
  transform: rotate(-90deg);
}

@media (min-width: 768px) {
  .carousel__button {
    left: 0;
    right: 0;
  }

  .carousel__button--bottom {
    bottom: -0.5rem;
    top: auto;
    transform: rotate(0deg);
  }

  .carousel__button--top {
    bottom: auto;
    top: -0.5rem;
    transform: rotate(0deg);
  }
}

.carousel__icon {
  color: var(--blue);
  height: 3rem;
  width: 3rem;
}
</style>
