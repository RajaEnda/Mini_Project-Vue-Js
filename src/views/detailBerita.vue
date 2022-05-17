<template>
  <v-container style="margin-bottom: 50px;">

    <ApolloQuery
    :query="require('../graphql/news.gql')"
    :variables="{ id: newsId }"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      
      <div v-else-if="data" class="result apollo">
        <div style="margin-top: 100px; margin-bottom: 50px;">
          <h1 style="margin-bottom: 30px;">{{ data.News_berita_by_pk.judul }}</h1>
              <v-row>
                
                <v-col cols="4">
                  <img style="border-radius:10px; width: 400px; background-color: white;" :src="data.News_berita_by_pk.image_path" />
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="5" style="background-color:white; border-radius: 15px;">
              <h3>{{data.News_berita_by_pk.kategori}}</h3>              
              <p>{{data.News_berita_by_pk.deskripsi}}</p>
              <h5>Disukai oleh {{ data.News_berita_by_pk.like }} orang</h5>
          
            </v-col>
          
              </v-row>
        </div>
        <v-btn @click=" ()=> redirectTo('/list')" style="background-color:#98FB98; padding: 15px; margin-left: 400px; margin-right: auto;">Kembali</v-btn>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
  </v-container>
</template>

<script>
export default {
  name: "DetailPage",
  computed: {
    newsId() {
      return this.$route.params.id;
    },
  },
  methods:{
         redirectTo(){
        this.$router.push('/list')
        },
  }
};
</script>
