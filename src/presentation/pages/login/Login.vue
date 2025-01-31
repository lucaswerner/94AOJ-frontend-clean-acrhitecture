<script setup lang="ts">
import { defineProps, PropType, ref, inject, defineComponent  } from 'vue'
import { Authentication, Validation } from "../../protocols"
import { useRouter } from 'vue-router';

const router = useRouter();
const { authentication, currentAccount, validation } = defineProps({
  authentication: Object as PropType<Authentication>,
  validation: Object as PropType<Validation>,
  currentAccount: Function as PropType<CurrentAccountAdapter>,
})

const email = ref<string>('')
const password = ref<string>('')
const fieldErrror = ref<string>('')
const valid = ref<boolean>(true)

const redirectToHome = () => {
  router.push({ name: 'Home' });
}

const changeValue = (event: Event) => {
  const { name, value } = event.target as HTMLInputElement
  fieldErrror.value = validation.validate(name, value)
  valid.value = Boolean(validation.validate(name, value))
}

const login = async () => {
  const params = {
    login: email.value,
    password: password.value
  }
  try {
    const response = await authentication.auth(params)
    currentAccount.set(response)
    redirectToHome()
  } catch (error) {
    console.error(error)
  } finally {
    console.log('finally')
  }
}
</script>

<template>
  <v-row
    align="center"
    no-gutters
    class="login-containter"
  >
  <div class="login-containter__form">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        density="compact"
        id="email"
        v-model="email"
        placeholder="Email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        @input="changeValue"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Senha

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Esqueceu sua senha?</a>
      </div>

      <v-text-field
        :type="'password'"
        id="password"
        density="compact"
        placeholder="Senha"
        v-model="password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
      ></v-text-field>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="login()"
        :disabled="valid"
        block
      >
        Entrar
      </v-btn>
    </v-card>
  </div>
</v-row>
</template>
<style scoped>
  .login-containter{
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  .login-containter__form{
    min-width: 400px;
  }
</style>
