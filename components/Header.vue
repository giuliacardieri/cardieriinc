<template>
  <header class="header" aria-label="navegação do cabeçalho">
    <nav class="nav">
      <div class="hamburger">
        <button @click="toggleNav()" class="hamburger__button">
          <font-awesome-icon
            aria-label="Hamburger icon"
            class="hamburger__icon"
            :icon="['fas', 'bars']"
          ></font-awesome-icon>
        </button>
      </div>
      <div class="logo">
        <NuxtLink class="logo__link" to="/">
          <img
            class="logo__img"
            src="/img/logo.svg"
            alt="Construtora Cardieri"
          />
        </NuxtLink>
      </div>
      <ul
        :class="[{ 'nav__list--hidden': !state.navMobileVisible }, 'nav__list']"
      >
        <li
          @click="closeNav()"
          v-for="(item, index) in navData"
          :key="index"
          class="nav__item"
        >
          <NuxtLink @click="closeNav()" :to="item.href" class="nav__link">{{
            item.text
          }}</NuxtLink>
        </li>
      </ul>
      <ul class="nav__cta">
        <li class="nav__cta-item">
          <a
            class="nav__cta-link"
            :href="`tel:+55${info?.attributes?.TelefoneFixo}`"
            target="blank"
          >
            <font-awesome-icon
              aria-label="Telefone"
              class="nav__icon"
              icon="phone"
            ></font-awesome-icon>
            {{ formatPhone(info?.attributes?.TelefoneFixo) }}
          </a>
        </li>
        <li class="nav__cta-item">
          <a
            class="nav__cta-link"
            :href="`https://api.whatsapp.com/send?phone=5515${info?.attributes?.Whatsapp}`"
            target="blank"
          >
            <font-awesome-icon
              aria-label="Whatsapp"
              class="nav__icon"
              :icon="['fab', 'whatsapp']"
            ></font-awesome-icon>
            {{ formatPhone(info?.attributes?.Whatsapp) }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { reactive } from "vue";
defineProps({
  hero: { type: Boolean, default: false },
  info: { type: Object },
});

const state = reactive({ navMobileVisible: false });
const navData = ref([
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Empreendimentos",
    href: "/empreendimentos/",
  },
  {
    text: "Quem Somos",
    href: "/institucional/",
  },
  {
    text: "Contato",
    href: "/contato/",
  },
]);

function toggleNav() {
  if (!state.navMobileVisible) showNav();
  else closeNav();
}
function showNav() {
  state.navMobileVisible = !state.navMobileVisible.value;
}
function closeNav() {
  state.navMobileVisible = false;
}

function formatPhone(number) {
  if (!number) return "";
  number = number.replace(/\D/g, "");
  number = number.replace(/(\d{2})(\d)/, "($1) $2");
  number = number.replace(/(\d)(\d{4})$/, "$1-$2");
  return number;
}
</script>

<style scoped>
.header {
  background-color: var(--blue);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 2;
}

.hamburger {
  align-items: center;
  bottom: 0;
  display: flex;
  margin: auto;
  position: absolute;
  top: 0;
}

@media (min-width: 1000px) {
  .hamburger {
    display: none;
  }
}

.hamburger__button {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2rem;
}

.nav {
  align-items: stretch;
  display: flex;
  margin: 0 0 0 2rem;
}

@media (min-width: 1200px) {
  .nav {
    margin: 0 6rem;
  }
}

.logo {
  display: flex;
}

@media (max-width: 999px) {
  .logo {
    margin-left: 4rem;
  }
}

.logo__link {
  align-items: flex-end;
  display: flex;
}

.logo__img {
  width: var(--logo-max-width);
}

.nav__list {
  align-self: flex-end;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease-in-out;
}

@media (max-width: 768px) {
  .nav__list {
    width: 100%;
  }
}

@media (max-width: 999px) {
  .nav__list {
    background-color: var(--blue);
    flex-direction: column;
    height: calc(100vh - 114px);
    justify-content: flex-start;
    left: 0;
    min-width: 50%;
    padding: 2rem;
    position: absolute;
    top: 114px;
  }

  .nav__list--hidden {
    position: absolute;
    left: -110%;
  }
}

.nav__item {
  margin-left: -1.5rem;
  list-style: none;
}

.nav__link {
  color: white;
  display: block;
  font-size: 1.25rem;
  margin: 0 1.5rem;
  padding: 0 0 0.75rem 0;
  position: relative;
  text-decoration: none;
}

@media (min-width: 1000px) {
  .nav__link:after {
    background-color: var(--yellow);
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    transition: width 0.3s ease-in-out;
    width: 0%;
  }
  .nav__link:hover:after,
  .nav__link:focus:after,
  .nav__link:active:after {
    width: 100%;
  }
}

@media (max-width: 999px) {
  .nav__link {
    font-size: 2rem;
  }
}

.nav__icon.svg-inline--fa {
  height: 1.25rem;
  margin-right: 0.25rem;
  width: 1.25rem;
}

.nav__cta {
  align-items: center;
  background-color: var(--yellow);
  color: var(--blue);
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  justify-content: center;
  margin: 0;
  margin-left: auto;
  padding: 1rem 4rem;
}

@media (max-width: 800px) {
  .nav__cta {
    display: none;
  }
}

.nav__cta-item {
  list-style: none;
}

.nav__cta-item--bold {
  font-weight: bold;
  text-transform: uppercase;
}

.nav__cta-item:not(:last-child) {
  margin-bottom: 0.5rem;
}

.nav__cta-link {
  align-items: center;
  color: var(--blue);
  font-weight: bold;
  display: flex;
  justify-content: center;
  text-decoration: none;
}

.nav__cta-link:focus,
.nav__cta-link::hover {
  text-decoration: underline;
}
</style>
