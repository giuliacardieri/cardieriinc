<template>
  <Modal v-show="modalIsVisible" @close-modal="closeModal()">
    <img
      class="planta--grande"
      :src="data?.data?.[0].attributes?.url"
      :alt="data?.data?.[0].attributes?.alternativeText"
    />
  </Modal>
  <img
    @click="showModal()"
    class="planta"
    :src="data?.data?.[0].attributes?.url"
    :alt="data?.data?.[0].attributes?.alternativeText"
  />
</template>
<script setup>
import { ref } from "vue";

defineProps({
  data: { type: Object },
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
.planta {
  cursor: zoom-in;
  max-height: 400px;
  max-width: 100%;
}

.planta--grande {
  max-height: 800px;
  max-width: 100%;
}
</style>
