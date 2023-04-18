<template>
  <q-layout view="lhh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> ShidenCrust Singular Minter dApp </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
