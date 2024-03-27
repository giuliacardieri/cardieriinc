<template>
  <div :class="[{ 'form--dark': darkMode }, 'form']">
    <p v-if="submitted">Informações enviadas com sucesso!</p>
    <FormKit
      type="form"
      id="contatoForm"
      @submit-invalid="showErrors"
      submit-label="Enviar"
      @submit="submitForm"
    >
      <FormKit
        outer-class="form-group"
        type="text"
        name="Assunto"
        label="Nome do empreendimento ou assunto*"
        placeholder="Edifício Positano"
        validation="required|alpha_spaces:latin|length:3,25"
      />
      <FormKit
        outer-class="form-group"
        type="text"
        name="Nome"
        label="Nome*"
        placeholder="Maria da Silva"
        validation="required|alpha_spaces:latin|length:3,25"
      />
      <FormKit
        outer-class="form-group"
        type="text"
        name="Email"
        label="Email*"
        placeholder="mariasilva@gmail.com"
        validation="required|email"
      />
      <FormKit
        outer-class="form-group"
        type="text"
        name="Telefone"
        label="Telefone*"
        placeholder="15997442211"
        validation="required|contains_numeric|length:11"
      />
      <FormKit
        outer-class="form-group"
        type="text"
        name="Mensagem"
        label="Mensagem*"
        placeholder="Oi, tudo bem? Quero saber mais informações sobre o Edifício Positano!"
        validation="required|length:3,200"
      />
    </FormKit>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  format: { type: String },
  darkMode: { type: Boolean, default: false },
});

const submitted = ref(false);

async function submitForm(payload) {
  const runtimeConfig = useRuntimeConfig();
  useFetch(`${runtimeConfig.public.apiUrl}/contatos`, {
    method: "POST",
    body: { data: payload },
  }).then(() => {
    document.getElementById("contatoForm").reset();
    submitted.value = true;
  });
}

function showErrors() {
  hasErrors.value = true;
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}

.form--dark :deep(.formkit-label) {
  color: var(--blue);
}

.form :deep(.formkit-form) {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 800px;
}

.form :deep(.formkit-label) {
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
}

.form :deep(.formkit-input) {
  background-color: transparent;
  border: 1px solid var(--blue);
  border-radius: var(--border-radius);
  box-sizing: border-box;
  color: var(--blue);
  padding: 0.75rem;
  width: 100%;
}

.form :deep(.formkit-input[type="submit"]) {
  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;
  font-weight: bold;
  margin-top: 1rem;
  text-transform: uppercase;
  transition: transform 300ms ease-in-out;
  width: min-content;
}

.form :deep(.formkit-input[type="submit"]:hover),
.form :deep(.formkit-input[type="submit"]:focus) {
  transform: scale(1.05);
}

.form ::placeholder {
  color: var(--blue);
}

.form :deep(.formkit-message) {
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
