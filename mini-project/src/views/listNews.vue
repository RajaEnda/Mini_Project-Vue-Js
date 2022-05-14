<template>
  <v-container>

    <div class="body" style="margin-top:50px;">
   <ApolloQuery :query="require('../graphql/news.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <v-row>
            <v-col cols="3" v-for="news in data.News_berita" :key="news.id">
              <v-card :loading="loading" class="mx-auto my-12" height="480">
                <v-img height="300" :src="news.image_path"></v-img>

                <v-card-title>{{ news.judul }}</v-card-title>

             

                <v-card-actions>
              

                  <v-text>
                    Disukai oleh {{news.like}} orang
                  </v-text>

                 
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
  name : "listPage",
  data (){
    return {
      text_id:"",
    };
  },
  methods: {
  },
  }
   

</script>
