<template>
  <section class="CTA">
    <h2 class="CTA__h2">Quer mais informações sobre nossos empreendimentos?</h2>
    <VButton @click="showModal()">Entre em contato agora</VButton>
  </section>
  <Modal v-show="modalIsVisible" @close-modal="closeModal()">
    <h2>Entre em contato</h2>
    <p>Podemos ajudar em alguma coisa? Precisa de mais informações?</p>
    <Form />
  </Modal>
</template>

<script setup>
import { ref } from "vue";

const modalIsVisible = ref(false);

function showModal() {
  modalIsVisible.value = true;
}

function closeModal() {
  modalIsVisible.value = false;
}
</script>

<style scoped>
.CTA {
  align-items: center;
  background-color: var(--yellow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 4rem;
  text-align: center;
}

@media (max-width: 1024px) {
  .CTA {
    padding: 3rem 2rem;
  }
}
@media (max-width: 799px) {
  .CTA {
    padding: 2rem 2.5rem;
  }
}

.CTA__h2 {
  color: var(--blue);
  text-transform: uppercase;
}
</style>
