<template>
  <v-container fill-height fluid class="primary">
    <v-card class="mx-auto pa-7 rounded-xl" width="500">
      <v-card-title>
        <v-row class="text-h4 mb-2 text-break text-center" justify="center">
          DOUTOR INTELIGENTE
        </v-row>
        <v-row justify="center">
          <v-img
            src="../assets/logo.png"
            contain
            max-width="150"
            max-height="150"
          />
        </v-row>
      </v-card-title>

      <v-card-text class="my-auto mt-5">
        <v-form
          ref="form"
          lazy-validation
          v-model="valid"
          @keyup.native.enter="login"
        >
          <v-text-field
            v-model="key"
            label="Chave de acesso"
            :rules="[non_empty_rule]"
            outlined
            clearable
            clear-icon="fas fa-times"
            color="secondary"
            prepend-icon="fas fa-key"
          ></v-text-field>

          <v-file-input
            v-model="file"
            :rules="[non_empty_rule]"
            accept="image/*"
            prepend-icon="fas fa-images"
            label="Radiografia"
            outlined
            clear-icon="fas fa-times"
            color="secondary"
          ></v-file-input>
        </v-form>

        <v-row justify="center" class="mt-5">
          <v-btn
            color="primary text--secondary"
            :disabled="!valid"
            @click="login"
            >Enviar</v-btn
          >
        </v-row>
      </v-card-text>

      <v-row justify="center" align="center" class="ma-0">
        <v-col sm="6" cols="12">
          <div class="mx-auto text-center">
            <i>Centro de informática - CIn UFPE</i>
          </div>
        </v-col>
        <v-col sm="6" cols="12">
          <v-img
            class="mx-auto"
            src="../assets/cin_logo.png"
            contain
            height="100"
          />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-btn text color="text--primary" @click="$router.push('/aboutUs')">
          Sobre nós
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { non_empty_rule } from "../utils/form";
import { mapActions } from "vuex";

export default {
  data: () => ({
    valid: false,
    key: "",
    file: null,
  }),
  methods: {
    non_empty_rule: non_empty_rule,
    ...mapActions("inference", ["getInference"]),
    login() {
      if (this.$refs.form.validate()) {
        this.getInference({ key: this.key, file: this.file }).then(() => {
          this.$router.push("/home");
        });
      }
    },
  },
};
</script>
