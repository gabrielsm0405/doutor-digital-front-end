<template>
  <v-container fluid class="primary">
    <v-row class="my-10 px-5" align="center" justify="center">
      <v-img
        src="../assets/logo.png"
        contain
        max-width="100"
        max-height="100"
      />
      <div class="ml-5 text-h3 text-break text-center">HEALTH CLOUD</div>
    </v-row>

    <v-card class="mx-auto pa-10 rounded-tr-xl" max-width="700">
      <v-card v-for="(inference, i) in inferences" :key="i" class="my-5">
        <v-row align="center" justify="center" class="ma-0">
          <v-col sm="8" cols="12">
            <v-img src="../assets/heatmap.png" contain max-height="400" />
          </v-col>
          <v-col sm="4" cols="12">
            <v-row
              class="text-h5 font-weight-black text-break"
              justify="center"
            >
              {{ inference.pathology }}
            </v-row>
            <v-row justify="center" class="mb-5"
              >({{ inference.probability * 100 }}%)</v-row
            >
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    <v-btn
      elevation="2"
      fab
      fixed
      left
      bottom
      x-large
      @click="backConfirmation = true"
    >
      <v-icon>fas fa-arrow-left</v-icon>
    </v-btn>

    <v-btn
      elevation="2"
      fab
      fixed
      right
      bottom
      x-large
      @click="openEmailForm = true"
    >
      <v-icon>fas fa-envelope</v-icon>
    </v-btn>

    <v-dialog persistent v-model="backConfirmation" max-width="500">
      <ConfirmationBox
        message="Voltar para a tela inicial?"
        @yes="back"
        @no="backConfirmation = false"
      />
    </v-dialog>

    <v-dialog persistent v-model="openEmailForm" max-width="800">
      <MailForm @cancel="openEmailForm = false" @send="sendEmail" />
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import ConfirmationBox from "../components/ConfirmationBox.vue";
import MailForm from "../components/MailForm.vue";

export default {
  data: () => ({
    inferences: [
      {
        pathology: "Massa",
        probability: 0.95,
      },
      {
        pathology: "Cardiomegalia",
        probability: 0.48,
      },
    ],
    backConfirmation: false,
    openEmailForm: false,
  }),
  components: {
    ConfirmationBox,
    MailForm,
  },
  methods: {
    ...mapActions("auth", ["signout"]),
    back() {
      this.signout().then(() => this.$router.push("/signin"));
    },
    sendEmail(email) {
      this.openEmailForm = false;

      console.log("SEND EMAIL", email);
    },
  },
};
</script>
