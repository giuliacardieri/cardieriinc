<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <slot></slot>
      <button
        class="button__close"
        aria-label="Fechar janela"
        @click="$emit('close-modal')"
      >
        <font-awesome-icon
          aria-label="Fechar"
          class="button__icon"
          :icon="['fas', 'close']"
        ></font-awesome-icon>
      </button>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.modal-overlay {
  background-color: var(--black-trans);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
}

.modal {
  background-color: var(--white);
  border-radius: var(--border-radius);
  bottom: 0;
  left: 0;
  margin: auto;
  min-height: 500px;
  min-width: 500px;
  padding: 2.5rem;
  position: relative;
  right: 0;
  top: 0;
}
@media (max-width: 799px) {
  .modal {
    min-height: 200px;
    min-width: 200px;
  }
}

.button__close {
  background: transparent;
  border: 0;
  color: var(--blue);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
