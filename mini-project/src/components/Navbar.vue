<template>

    <v-app-bar
        fixed
        dense
        color="#98FB98"
        dark
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        style="height:65px;"
      >
        

        <v-toolbar-title @click=" ()=> redirectFor('/')" style="font-size:40px; margin-left: 20px;">Beritaku</v-toolbar-title>
        <v-toolbar-title @click=" ()=> redirectTo('/list')" style="font-size:20px; margin-left: 100px;">list Berita</v-toolbar-title>

        <v-spacer></v-spacer>
         <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Regular"
          ></v-text-field>
        </v-col>



        <v-btn icon style="margin-right:80px;">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
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
    },
}
</script>