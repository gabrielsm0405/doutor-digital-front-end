<template>
  <v-app>
    <Alert />
    <Spinner />
    <router-view />
  </v-app>
</template>

<script>
import Spinner from "./components/Spinner.vue";
import Alert from "./components/Alert.vue";

export default {
  components: {
    Spinner,
    Alert,
  },
};
</script>
