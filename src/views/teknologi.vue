<template>
    <v-container style="margin-top:50px; margin-bottom:50px;">

    <div class="body" style="margin-top:50px;">
   <ApolloQuery :query="require('../graphql/Teknologi.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
        <h1 style="margin-bottom:10px;">List Berita Terbaru & Populer</h1>
          <v-row>
            <v-col cols="4" v-for="news in data.News_Kategori_by_pk.berita" :key="news.id">
              <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="news.image_path"
    >
      <v-card-title></v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
     <router-link :to="`/detail/${news.id}`">{{news.judul}}
                  </router-link>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>
        <h4>
          {{news.kategori}}
        </h4>
      </div>


      <div>Disukai sebanyak {{news.like}}</div>
    </v-card-text>

    <v-card-actions>
     

      <v-btn
        color="orange"
        text
      >
      <router-link :to="`/detail/${news.id}`">
        Baca selebihnya!
                  </router-link>
      </v-btn>
    </v-card-actions>
  </v-card>

            </v-col>
          </v-row>
        </div>

             

                 

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
  </v-container>
</template>

<script>
export default {
    name:"teknologiPage",
}
</script>