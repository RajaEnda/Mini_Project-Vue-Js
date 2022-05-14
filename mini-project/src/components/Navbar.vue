<template>

    <v-app-bar
        fixed
        dense
        color="#98FB98"
        dark
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        style="height:65px;
        margin-bottom:50px;"
      >
        
  
        <v-toolbar-title @click=" ()=> redirectFor('/')" style="font-size:40px; margin-left: 20px;">Beritaku</v-toolbar-title>
        <v-toolbar-title @click=" ()=> redirectTo('/list')" style="font-size:20px; margin-left: 100px;">list Berita</v-toolbar-title>

        <v-spacer></v-spacer>
        
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