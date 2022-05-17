<template>
  <v-app
    style="background-color: #f0fff0; margin-bottom: 250px; margin-top: 100px"
  >
    <v-container>
      <div class="head">
        <h2 style="margin-left: 100px; color: white">
          DUNIA HARUS TAHU DAN KAMU JUGA!
        </h2>
        <br />
        <br />
        <h3 style="margin-left: 100px; color: white">Baca Sekarang Disini</h3>
        <br />
        <br />
        <v-btn
          @click="() => redirectToPage('/list')"
          style="
            background-color: white;
            border-radius: 50px;
            margin-left: 100px;
          "
          >Show More</v-btn
        >
      </div>

      <div
        style="
          padding-top: 100px;
          margin-left: 0px;
          background-color: #f0fff0;
          height: 500px;
        "
      >

      <h2>Berita Terpopuler</h2>
        <v-row style="margin-bottom: 100px">
          <ApolloQuery :query="require('../graphql/newsLimit.gql')">
            <template v-slot="{ result: { loading, error, data } }">
              <!-- Loading -->
              <div v-if="loading" class="loading apollo">Loading...</div>

              <!-- Error -->
              <div v-else-if="error" class="error apollo">
                An error occurred
              </div>

              <!-- Result -->
              <div v-else-if="data" class="result apollo">
                <v-row>
                  <v-col
                    cols="3"
                    v-for="news in data.News_berita"
                    :key="news.id"
                  >
                    <v-card
                      :loading="loading"
                      class="mx-auto my-12"
                      height="480"
                    >
                      <v-img height="250" :src="news.image_path"></v-img>

                      <v-card-title>
                        <router-link :to="`/detail/${news.id}`">{{
                          news.judul
                        }}</router-link>
                      </v-card-title>

                      

                      <v-card-actions> </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </div>

              <!-- No result -->
              <div v-else class="no-result apollo">No result :(</div>
            </template>
          </ApolloQuery>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      drawer: true,
    };
  },
  computed: {},
  methods: {
    redirectToPage() {
      this.$router.push("/list");
    },
  },
  mounted() {},
};
</script>

<style>
.head {
  background-image: url(https://i.postimg.cc/7Zpw0X8z/images-5.jpg);
  background-size: auto, auto;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: 600px, 300px;
  background-color: #98fb98;
  height: 400px;
  width: 1150px;
  padding-top: 100px;
}
</style>
