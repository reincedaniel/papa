<template>
  <div>
    <span class="satisfy-regular text-bold" :class="props.textClass">
      Tâmbula<q-icon
        name="mode_of_travel"
        :color="colorIcon"
        :size="props.sizeIcon"
      ></q-icon>
    </span>
  </div>
</template>

<script setup>
defineOptions({
  name: "LogoComponent",
});

const props = defineProps({
  textClass: {
    type: String,
    default: () => "text-h3 text-teal-9",
  },
  sizeIcon: {
    type: String,
    default: () => "35px",
  },
  colorIcon: {
    type: String,
    default: () => "pink-9",
  },
});
</script>

<style lang="scss" scoped></style>
