<template>
  <section class="infobar">
    <div class="infobar__item">
      <h3 class="infobar__h3">{{ getYear() }}</h3>
      <p class="infobar__p">Anos de história</p>
    </div>
    <div class="infobar__item">
      <h3 class="infobar__h3">70</h3>
      <p class="infobar__p">Empreendimentos Entregues</p>
    </div>
    <div class="infobar__item">
      <h3 class="infobar__h3">+200</h3>
      <p class="infobar__p">Mil metros construídos</p>
    </div>
  </section>
</template>
<script setup>
function getYear() {
  let date = new Date();

  return date.getFullYear() - 1964;
}
</script>

<style scoped>
.infobar {
  background-color: var(--yellow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 8rem;
  text-align: center;
}
@media (max-width: 1024px) {
  .infobar {
    padding: 2rem 3rem;
  }
}

@media (min-width: 768px) {
  .infobar {
    flex-direction: row;
  }
}

.infobar__h3 {
  font-size: 4rem;
}

.infobar__p {
  font-size: 1.25rem;
}
@media (max-width: 1024px) {
  .infobar__h3 {
    font-size: 2.5rem;
  }
}
</style>
