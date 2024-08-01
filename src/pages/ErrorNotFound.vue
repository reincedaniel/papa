<template>
  <div
    class="fullscreen bg-teal-9 text-white text-center q-pa-md flex flex-center poppins-regular"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h4" style="opacity: 0.4">Oops. Nada encontrado...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="teal-9"
        unelevated
        icon="home"
        rounded=""
        to="/dashboard/home"
        label=""
        size="lg"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "ErrorNotFound",
});
</script>
