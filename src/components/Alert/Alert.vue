<template>
  <v-alert
    style="
      position: absolute;
      left: 50%;
      top: 30%;
      z-index: 9999;
      transform: translate(-50%, -50%);
    "
    density="compact"
    :type="type"
    :title="title"
    :text="text"
  ></v-alert>
</template>

<script>
export default {
  props: {
    type: String, 
    title: String, 
   text: String, 
  },
};
</script>
