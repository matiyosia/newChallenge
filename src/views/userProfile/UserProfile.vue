<template>
    <v-file-input
      accept="image/*"
      label="File input"
      v-model="files"
    ></v-file-input>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data: () => ({
      files: [],
    }),
    methods: {
      ...mapActions(['getFile']),
    },
    computed: {
      ...mapGetters(['loading', 'file']),
    },
    watch: {
      files: {
        handler(newFiles) {
          console.log('files', newFiles);
        },
        deep: true, 
      },
    },
  };
  </script>
  