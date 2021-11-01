<template>
  <v-card max-width="500">
    <v-card-title>{{ message }}</v-card-title>

    <v-card-actions>
      <v-spacer />
      <v-btn text @click="yes">Sim</v-btn>
      <v-btn text color="red" @click="no">Não</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "Você confirma sua ação?",
    },
  },
  methods: {
    yes() {
      this.$emit("yes");
    },
    no() {
      this.$emit("no");
    },
  },
};
</script>
