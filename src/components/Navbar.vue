<template>

<v-app-bar
      absolute
      color="#98fb98"
      dark
      style="margin-bottom:50px;"
      
            >
      <v-toolbar-title  @click="() => redirectFor('/')" style="margin-left:50px;">Title</v-toolbar-title>
      <v-toolbar-title  @click="() => redirectTo('/list')" style="margin-left:50px;">List Berita</v-toolbar-title>

      
      <v-btn icon style="margin-left:1000px;">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab  @click="() => redirectToPage('/teknologi')">Teknologi</v-tab>
          <v-tab  @click="() => redirectToPageSocial('/sosial')">Sosial</v-tab>
          <v-tab @click="() => redirectToPageEkonomi('/ekonomi')">Ekonomi</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    
</template>

<script>
export default {
    name: "navbarPage",

    methods:{
         redirectTo(){
        this.$router.push('/list')
        },
        redirectFor(){
        this.$router.push('/')
        },
        redirectToPage(){
        this.$router.push('/teknologi')
        },
        redirectToPageSocial(){
        this.$router.push('/Sosial')
        },
        redirectToPageEkonomi(){
        this.$router.push('/ekonomi')
        },
    },
}
</script>