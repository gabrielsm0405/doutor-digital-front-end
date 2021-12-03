<template>
  <v-snackbar v-model="alert" top color="error" timeout="5000" class="headline">
    <v-icon class="mr-5">fas fa-exclamation-triangle</v-icon>
    {{ message }}
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    alert: false,
    message: "",
  }),
  computed: {
    ...mapState(["alertMessage"]),
  },
  watch: {
    alertMessage() {
      this.alert = true;
      if (this.alertMessage != "") this.message = this.alertMessage;
    },
  },
};
</script>
