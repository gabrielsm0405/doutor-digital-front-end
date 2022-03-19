<template>
  <v-container fill-height fluid class="primary">
    <v-card class="mx-auto pa-7 rounded-xl" width="1000" height="550" >
      <v-row justify="center" align="center">
        <v-col sm="4" cols="12">
          <v-card-title class="text-h3">Sobre nós</v-card-title>
          <v-card-subtitle class="text-h5 mt-6">Equipe técnica</v-card-subtitle>
          <v-card-text>
            <p>Fernando Maciano de Paula Neto</p>
            <p>Gabriel Souza Marques</p>
            <p>Gabriel Silva de Oliveira</p> 
            <p>Amanda Soares de Castro Moraes</p>
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
            <v-btn
              color="primary text--secondary"
              @click="$router.push('/home')"
              >Home</v-btn
            >
          </v-card-text>
        </v-col>
        <v-col v-if="!$vuetify.breakpoint.mobile">
          <v-row justify="center" align="center">
            <v-img src="../assets/lunamik-team-work_4x.webp" contain max-width="600" max-height="600" />
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
