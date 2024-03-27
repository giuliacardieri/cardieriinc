<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :class="[{ 'button--secondary': secondary }, 'button']"
  >
    <slot></slot>
  </a>
  <button v-else :class="[{ 'button--secondary': secondary }, 'button']">
    <slot></slot>
  </button>
</template>
<script setup>
defineProps({
  href: { type: String },
  target: { type: String, default: "_self" },
  secondary: { type: Boolean, default: false },
});
</script>
<style scoped>
.button {
  border: 0;
  border-radius: var(--border-radius);
  cursor: pointer;
  display: inline-block;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 2rem;
  margin: 1rem 0 0 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform 300ms ease-in-out;
}

.button:hover,
.button:focus,
.button:active {
  transform: scale(1.05);
}

@media (max-width: 1199px) {
  .button {
    text-align: center;
  }
}

.button:not(.button--secondary) {
  background-color: var(--blue);
  color: white;
}

.button--secondary {
  background-color: var(--yellow);
  color: var(--blue);
}
</style>
