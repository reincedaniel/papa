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
            color="teal"
            v-model="userName"
            label="E-mail *"
            hint="Ex.: exemplo@exemplo.com"
            type="email"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Campo Obrigatório']"
          />
          <q-input
            outlined
            color="teal"
            v-model="password"
            label="Palavra-Passe *"
            lazy-rules
            type="password"
            hint="******"
            :rules="[(val) => (val && val.length > 0) || 'Campo Obrigatório']"
          />

          <div class>
            <span class="cursor-pointer text-teal-9"
              >Esqueci a palavra-passe</span
            >
          </div>

          <q-toggle
            left-label
            v-model="remember"
            class="text-grey-7"
            label="Lembrar-me"
            color="teal-9"
          />

          <div>
            <q-btn
              class="full-width"
              label="Entrar"
              type="submit"
              no-caps
              size="lg"
              color="teal-9"
            />
          </div>
          <div>
            <q-btn
              class="full-width"
              label="Cadastrar"
              outline
              no-caps
              size="lg"
              color="pink-9"
              to="/auth/signup"
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
  name: "SignInComponent",
});
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import LogoComponent from "src/components/UI/LogoComponent/LogoComponent.vue";
import OAuthComponent from "src/components/UI/OAuthComponent/OAuthComponent.vue";

const $q = useQuasar();
const router = useRouter();

const userName = ref(null);
const password = ref(null);
const remember = ref(false);

const onSubmit = () => {
  if (remember.value !== true) {
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

    router.push("/dashboard/home");
  }
};

const onReset = () => {
  userName.value = null;
  password.value = null;
  remember.value = false;
};
</script>

<style lang="scss" scoped></style>
