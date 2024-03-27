<template>
  <footer class="footer">
    <div class="logo">
      <a class="logo__link" href="/">
        <img class="logo__img" src="/img/logo.svg" alt="Construtora Cardieri" />
      </a>
    </div>
    <div class="footer__center">
      <nav class="footer__icons-wrapper">
        <ul class="footer__ul">
          <li class="footer__li">
            <a
              href="https://www.youtube.com/channel/UCK1eqlRZXOS1g0-Bn7zGzIw"
              target="_blank"
              class="footer__a"
              aria-label="Link para o YouTube"
            >
              <font-awesome-icon
                aria-label="Ícone do Youtube"
                class="footer__icon footer__icon--social"
                :icon="['fab', 'youtube']"
              ></font-awesome-icon>
            </a>
          </li>
          <li class="footer__li">
            <a
              href="https://www.facebook.com/inccardieri/"
              target="_blank"
              class="footer__a"
              aria-label="Link para o Facebook"
            >
              <font-awesome-icon
                aria-label="Ícone do Facebook"
                class="footer__icon footer__icon--social"
                :icon="['fab', 'facebook-f']"
              ></font-awesome-icon>
            </a>
          </li>
          <li class="footer__li">
            <a
              href="https://www.instagram.com/cardieriinc/"
              target="_blank"
              class="footer__a"
              aria-label="Link para o Instagram"
            >
              <font-awesome-icon
                aria-label="Ícone do Instagram"
                class="footer__icon footer__icon--social"
                :icon="['fab', 'instagram']"
              ></font-awesome-icon>
            </a>
          </li>
        </ul>
      </nav>
      <p class="footer__copyright">
        Acesse nossa
        <NuxtLink to="/privacidade" class="footer__a"
          >Política de Privacidade</NuxtLink
        >
      </p>
      <p class="footer__copyright">Copyright {{ ano }} Construtora Cardieri</p>
    </div>
    <div class="footer__contact">
      <div class="footer__contact-icon">
        <font-awesome-icon
          class="footer__icon"
          :icon="['fas', 'phone']"
        ></font-awesome-icon>
        <p class="footer__contact-p">
          {{ formatPhone(info?.attributes?.TelefoneFixo) }}
        </p>
      </div>
      <div class="footer__contact-icon">
        <font-awesome-icon
          class="footer__icon"
          :icon="['fab', 'whatsapp']"
        ></font-awesome-icon>
        <p class="footer__contact-p">
          <a
            class="footer__a"
            :href="`https://api.whatsapp.com/send?phone=55${info?.attributes?.Whatsapp}`"
            target="blank"
            >{{ formatPhone(info?.attributes?.Whatsapp) }}</a
          >
        </p>
      </div>
      <div class="footer__contact-icon">
        <font-awesome-icon
          class="footer__icon"
          :icon="['fas', 'envelope']"
        ></font-awesome-icon>
        <p class="footer__contact-p">
          <a
            class="footer__contact-a"
            :href="`mailto:${info?.attributes?.Email}`"
            >{{ info?.attributes?.Email }}</a
          >
        </p>
      </div>
      <div class="footer__contact-icon">
        <font-awesome-icon
          class="footer__icon"
          :icon="['fas', 'bulding']"
        ></font-awesome-icon>
        <p class="footer__contact-p">{{ info?.attributes?.Endereco }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  info: { type: Object },
});
const ano = ref(2023);
const today = new Date();
ano.value = today.getFullYear();

function formatPhone(number) {
  if (!number) return "";
  number = number.replace(/\D/g, "");
  number = number.replace(/(\d{2})(\d)/, "($1) $2");
  number = number.replace(/(\d)(\d{4})$/, "$1-$2");
  return number;
}
</script>

<style scoped>
.footer {
  align-items: flex-end;
  background-color: var(--blue);
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 6rem;
  position: relative;
}

.logo__img {
  max-width: 150px;
}

.footer__copyright {
  font-size: 0.8rem;
  text-align: center;
}

.footer__contact-icon {
  align-items: center;
  display: flex;
}

.footer__icon {
  margin-right: 0.5rem;
}

.footer__icons-wrapper {
  margin-bottom: 1.5rem;
}

.footer__ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.footer__li {
  list-style: none;
}

.footer__li:not(:last-child) {
  padding-right: 1rem;
}

.footer__a,
.footer__contact-a {
  color: white;
}

.footer__icon--social {
  height: 2rem;
  width: 2rem;
}

.footer__contact-p {
  margin: 0 0 0.5rem 0;
}

@media (max-width: 1023px) {
  .logo {
    margin: auto;
  }

  .footer {
    padding: 1rem 2rem;
    text-align: center;
  }

  .footer__center {
    order: 3;
    width: 100%;
  }

  .footer__contact {
    margin: 1rem 0;
    width: 100%;
  }

  .footer__contact-icon {
    justify-content: center;
  }

  .footer__ul {
    justify-content: center;
  }
}
</style>
