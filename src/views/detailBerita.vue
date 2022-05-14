<template>
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
        <div style="margin-top: 80px">
          <h1>{{ data.News_berita_by_pk.judul }}</h1>
          <h1>{{ data.News_berita_by_pk.like }}</h1>
          <img :src="data.News_berita_by_pk.image_path" />
        </div>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: "DetailPage",
  computed: {
    newsId() {
      return this.$route.params.id;
    },
  },
};
</script>
