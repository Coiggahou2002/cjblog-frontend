<template>
  <div>


  <v-app-bar
      app
      color="rgb(93,101,134)"
      dark
      elevation="1"
  >
    <div class="d-flex align-center">
<!--      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
      />-->
    </div>
    <v-btn
        target="_blank"
        text
        @click="toBlogs"

    >
      <span>首页</span>
    </v-btn>
    <v-btn
        target="_blank"
        text

    >
      <span>分类</span>
    </v-btn>

    <v-btn
        target="_blank"
        @click="toTags"
        text

    >
      <span>标签</span>
    </v-btn>

    <v-btn
        :to="{name: 'new_blog'}"
        text

    >
      <span>新增文章</span>
    </v-btn>

    <v-spacer></v-spacer>

<!--    <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>-->
    <v-col cols="2">
      <v-text-field
          class="my-2"
          single-line
          solo
          background-color="rgb(63,69,94)"
          flat
          hide-details="true"
          placeholder="Search"
      ></v-text-field>
    </v-col>

  </v-app-bar>

  <v-main id="main-container">

    <router-view name="main"></router-view>
  </v-main>


  </div>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },
    methods: {
      toBlogs() {
        this.$router.push('/home')
      },
      toTags() {
        this.$router.push('/home/tags')
      }
    }
  }
</script>

<style scoped>

</style>