<template>
  <v-card>
    <v-card-title>Enviar resultados por email</v-card-title>

    <v-card-text>
      <v-form
        ref="form"
        lazy-validation
        v-model="valid"
        @keyup.native.enter="send"
      >
        <v-text-field
          v-model="email"
          label="E-mail"
          :rules="[email_rule]"
          outlined
          clearable
          clear-icon="fas fa-times"
          color="secondary"
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn color="primary text--secondary" @click="send" :disabled="!valid">
        Enviar
      </v-btn>
      <v-btn color="red" text @click="cancel">Cancelar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { email_rule } from "../utils/form";

export default {
  data: () => ({
    valid: false,
    email: "",
  }),
  methods: {
    email_rule: email_rule,
    cancel() {
      this.$emit("cancel");
    },
    send() {
      if (this.$refs.form.validate()) {
        this.$emit("send", this.email);
      }
    },
  },
};
</script>
