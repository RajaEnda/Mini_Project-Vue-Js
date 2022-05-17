<template>
<v-app style="background-color:#F0FFF0;">
<Navbar />
<v-container>
    
    <router-view />

</v-container>


<Footer />    
</v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name:"defaultPage",
    components:{ Navbar, Footer },
};
</script>