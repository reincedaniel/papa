<template>
  <div>
    <span class="cursor-pointer q-mx-md text-grey-7">Entrar com:</span>
    <q-btn
      class="q-mt-sm"
      round
      icon="mdi-google"
      no-caps
      size="md"
      outline
      color="blue-7"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: "OAuthComponent",
});
</script>

<style lang="scss" scoped></style>
