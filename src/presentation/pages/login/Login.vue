<script setup lang="ts">
import { defineProps, PropType, ref, inject } from 'vue'
import { Authentication, Validation } from "../../protocols"

const { authentication, currentAccount, validation } = defineProps({
  authentication: Object as PropType<Authentication>,
  validation: Object as PropType<Validation>,
  currentAccount: Function as PropType<any>,
})

const email = ref<string>('')
const password = ref<string>('')
const fieldErrror = ref<string>('')
const valid = ref<boolean>(true)

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
  } catch (error) {
    console.error(error)
  } finally {
    console.log('finally')
  }
}
</script>

<template>
  <div>
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
</template>
<style scoped>
</style>
