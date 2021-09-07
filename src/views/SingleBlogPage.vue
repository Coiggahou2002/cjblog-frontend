<template>
  <div id="top-wrapper">
    <v-container>
      <v-card
          class="mx-auto mt-5 mb-12"
          max-width="1000"
      >
        <v-img
            class="align-end"
            height="200px"
            :src="blog.bannerPicture"
        >
        </v-img>
        <div class="px-2 pt-4 pb-8">
          <v-card-title class="text-h4">
            {{ blog.title }}
          </v-card-title>
          <v-card-subtitle class="py-2">
            {{ blog.createTime }}
          </v-card-subtitle>
          <v-card-text class="pb-0 text--primary">
            <div>{{ blog.digest }}</div>
          </v-card-text>
        </div>

        <v-divider></v-divider>
        <mavon-editor
            ref="md"
            :box-shadow="false"
            style="border: none;z-index: 1; height: auto"
            v-model="blog.content"
            :toolbars-flag="false"
            :editable="false"
            default-open="preview"
            :subfield="false"
            previewBackground="#ffffff"
            code-style="atom-one-light"
            :ishljs="true"
        />
        <v-divider/>
        <v-row class="mt-4 pb-4" justify="center">
          <v-col cols="auto">
            <v-btn color="error" v-if="blog.appreciationOn">
              赞赏作者
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn color="success">
              分享到微信
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleBlogPage",
  data () {
    return {
      blog: {}
    }
  },
  mounted() {
    this.loadBlogContent();
  },
  methods: {
    loadBlogContent() {
      let blogId = this.$route.params.blogId;
      axios({
        url: 'http://localhost:9000/admin/blog/get_content_by_id',
        method: 'get',
        params: {
          id: blogId
        }
      }).then(resp => {
        console.log(resp);
        this.blog = resp.data;
      })
    }
  }
}
</script>

<style scoped>


#top-wrapper {
  background-color: rgb(250, 250, 250);
}

</style>

<style>
pre code {
  background-color: rgba(0,0,0,0) !important;
}
</style>