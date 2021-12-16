<template>
  <v-container fluid class="primary">
    <v-row class="my-10 px-5" align="center" justify="center">
      <v-img src="../assets/logo.png" contain max-width="50" max-height="50" />
      <div class="ml-5 text-h4 text-break text-center">DOUTOR INTELIGENTE</div>
    </v-row>

    <v-card class="mx-auto pa-10 rounded-tr-xl" max-width="700">
      <v-card v-for="(inference, i) in response" :key="i" class="my-5">
        <v-row align="center" justify="center" class="ma-0">
          <v-col sm="7" cols="12">
            <v-img :src="inference.heatmap_link" contain max-height="400" />
          </v-col>
          <v-col sm="5" cols="12">
            <v-row
              class="text-h5 font-weight-black text-break"
              justify="center"
            >
              {{ inference.pathology }}
            </v-row>
            <v-row justify="center" class="mb-5"
              >({{ (inference.prediction * 100).toFixed(2) }}%)</v-row
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
import { mapActions, mapState } from "vuex";
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
  computed: {
    ...mapState("inference", ["response"]),
  },
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
