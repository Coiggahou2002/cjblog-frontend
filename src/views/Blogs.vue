<template>
  <div id="top-wrapper">
    <v-container class="main-cols-wrapper" >
      <v-row>

        <v-col cols="12" sm="8">
          <div v-for="(blog, index) in blogs" v-bind:key="index">
            <v-card
                class="mx-auto ma-6 mb-13 blog-preview-card"
                elevation="3"
            >
              <v-img
                  class="align-end"
                  height="200px"
                  :src="blog.bannerPicture"
              >

              </v-img>
              <v-card-title>{{ blog.title }}</v-card-title>
              <v-card-subtitle class="py-2">{{ blog.createTime }}</v-card-subtitle>

              <v-card-text class="pb-0 text--primary">
                <div>{{ blog.digest }}</div>
              </v-card-text>


              <v-divider class="mt-6 mx-4"></v-divider>


              <v-card-actions>

                <div v-for="(tag, index) in blog.tags" v-bind:key="index">
                  <v-chip
                      class="ml-2"
                      @click="lights"
                      outlined
                  >
                    {{ tag.name }}
                  </v-chip>
                </div>

                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    :to="{name: 'blog_content', params: {blogId: blog.id}}"
                >
                  阅读更多
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>

        <v-col cols="0" sm="4">
          <v-card
              class="mx-auto my-8"
              max-width="600"
              elevation="1"
          >
            <v-card-title><v-icon class="mr-2">mdi-tag</v-icon>标签</v-card-title>
            <v-divider/>
            <div class="px-2 py-1">
              <span v-for="(tag, index) in tags" v-bind:key="index">
              <v-chip
                  class="mx-1 my-2"
                  outlined
              >
                {{ tag.name }}
              </v-chip>
            </span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>



    <v-pagination
        v-model="page"
        :length="6"
    ></v-pagination>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Blogs",
  data () {
    return {
      page: 1,
      blogs: [],
      tags: []
    }
  },
  mounted() {
    this.getBlog();
    this.getTags();
  },
  methods: {
    lights() {

    },
    getBlog() {
      axios({
        url: 'http://localhost:9000/admin/blog/get_all_previews',
        method: 'get'
      }).then(resp => {
        console.log(resp);
        this.blogs = resp.data;
      })
    },
    getTags() {
      axios({
        url: 'http://localhost:9000/admin/tag/get_top_tags_by_limit',
        method: 'get',
        params: {
          limit: 2
        }
      }).then(resp => {
        console.log(resp);
        this.tags = resp.data;
      })
    }
  }
}
</script>

<style scoped>
.main-cols-wrapper {
  max-width: 1100px;
}
#top-wrapper {
  background-color: rgb(250, 250, 250);
}
/*.blog-preview-card {*/
/*  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;*/
/*}*/
</style>