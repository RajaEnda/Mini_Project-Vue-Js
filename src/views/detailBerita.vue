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
        <div style="margin-top: 80px; margin-bottom: 50px;">
          <h1 style="margin-bottom: 20px;">{{ data.News_berita_by_pk.judul }}</h1>
          <img style="border-radius:10px;" :src="data.News_berita_by_pk.image_path" />
          <div style="background-color:white; height: 300px; border-radius:10px;">
            <h4>Disukai oleh {{ data.News_berita_by_pk.like }} orang</h4>
            <p>{{data.News_berita_by_pk.deskripsi}}</p>
          </div>
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
