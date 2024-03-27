<template>
  <p class="icon-text-group">
    <font-awesome-icon
      :aria-label="iconLabel"
      class="icon-text-group__icon"
      :icon="[iconType, iconName]"
    ></font-awesome-icon>
    {{ label }}
  </p>
</template>
<script setup>
defineProps({
  iconLabel: { type: String },
  iconName: { type: String },
  label: { type: String },
  iconType: { type: String, default: "fas" },
});
</script>
<style scoped>
.icon-text-group {
  margin-bottom: 0.75rem;
}

.icon-text-group__icon.svg-inline--fa {
  height: 1.25rem;
  margin-right: 0.25rem;
  width: 1.25rem;
}
</style>
