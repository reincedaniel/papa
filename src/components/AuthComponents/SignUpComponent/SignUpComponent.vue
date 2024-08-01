<template>
  <div class="row justify-center items-center full-height poppins-semibold">
    <div class="col-12 col-sm-8 col-md-4 col-lg-3">
      <div class="q-pa-md">
        <div class="text-center q-my-xl">
          <LogoComponent></LogoComponent>
        </div>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm">
          <q-input
            outlined
            v-model="descName"
            label="Nome / Organização"
            hint="Ex.: Fazenda Nzila"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-input
            outlined
            v-model="userName"
            label="E-mail *"
            hint="Ex.: exemplo@exemplo.com"
            type="email"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-input
            outlined
            v-model="password"
            label="Palavra-Passe *"
            lazy-rules
            type="password"
            hint="******"
            :rules="[(val) => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-input
            outlined
            v-model="confirmPassword"
            label="Confirmar Palavra-Passe *"
            lazy-rules
            type="password"
            hint="******"
            :rules="[(val) => (val && val.length > 0) || 'Campo Obrigatório']"
          />

          <div>
            <q-btn
              class="full-width"
              label="Cadastrar"
              no-caps
              size="lg"
              type="submit"
              color="teal-9"
            />
          </div>
          <div>
            <q-btn
              class="full-width"
              label="Já tenho uma conta"
              no-caps
              outline
              size="lg"
              color="pink-9"
              to="/auth/signin"
            />
          </div>

          <OAuthComponent
            class="justify-center items-center column q-mt-md"
          ></OAuthComponent>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "SignUpComponent",
});

import { useQuasar } from "quasar";
import { ref } from "vue";
import LogoComponent from "src/components/UI/LogoComponent/LogoComponent.vue";
import OAuthComponent from "src/components/UI/OAuthComponent/OAuthComponent.vue";

const $q = useQuasar();

const descName = ref(null);
const userName = ref(null);
const password = ref(null);
const confirmPassword = ref(null);

const onSubmit = () => {
  if (descName.value == null && userName.value == null) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
};

const onReset = () => {
  descName.value = null;
  userName.value = null;
  password.value = false;
  confirmPassword.value = false;
};
</script>

<style lang="scss" scoped></style>
