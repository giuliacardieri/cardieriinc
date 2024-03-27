<template>
  <div class="hero">
    <div
      class="hero__container"
      :style="{ backgroundImage: `url('${image}')` }"
    >
      <div class="hero__text">
        <h1>{{ title }}</h1>
        <v-button v-if="button" secondary @click="showModal()">{{
          ctaText
        }}</v-button>
      </div>
      <Modal v-show="modalIsVisible" @close-modal="closeModal()">
        <h2>Entre em contato</h2>
        <p class="p--dark">
          Podemos ajudar em alguma coisa? Precisa de mais informações?
        </p>
        <Form darkMode />
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: { type: String },
  image: { type: String },
  button: { type: Boolean, default: true },
  ctaText: { type: String },
});

const modalIsVisible = ref(false);

function showModal() {
  modalIsVisible.value = true;
}

function closeModal() {
  modalIsVisible.value = false;
}
</script>

<style scoped>
.hero {
  color: white;
  width: 100%;
}

.hero__container {
  align-items: stretch;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  min-height: 500px;
}

.hero__text {
  align-items: flex-start;
  background-color: var(--dark-blue);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 8rem;
  width: 100%;
}

@media (max-width: 1199px) {
  .hero__text {
    padding: 4rem;
  }
}

@media (max-width: 799px) {
  .hero__text {
    padding: 2rem;
  }
}
</style>
