<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from "vue";
const runtimeConfig = useRuntimeConfig();

onMounted(async () => {
  let cookieBotHTML = document.createElement("script");
  let id = runtimeConfig.public.cookiebot;
  cookieBotHTML.setAttribute("id", "CookieDeclaration");
  cookieBotHTML.setAttribute(
    "src",
    `https://consent.cookiebot.com/${id}/cd.js`
  );
  document.head.appendChild(cookieBotHTML);
  let cookieBotScript = document.createElement("script");
  cookieBotScript.setAttribute("src", "https://consent.cookiebot.com/uc.js");
  cookieBotScript.setAttribute("id", "Cookiebot");
  cookieBotScript.setAttribute("data-cbid", id);
  cookieBotScript.setAttribute("data-blockingmode", "auto");
  document.head.appendChild(cookieBotScript);
});
</script>
