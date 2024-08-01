<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="my-background">
      <q-toolbar>
        <q-toolbar-title>
          <LogoComponent
            text-class="text-white"
            size-icon="25px"
            color-icon="white"
          ></LogoComponent>
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="menu"
          color="white"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="poppins-regular">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import LogoComponent from "src/components/UI/LogoComponent/LogoComponent.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Login",
    caption: "Auth",
    icon: "login",
    link: "https://quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

onMounted(() => {
  leftDrawerOpen.value = false;
});
</script>

<style lang="scss" scoped>
.my-background {
  background-color: teal;
}
</style>
