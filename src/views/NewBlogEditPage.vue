<template>
  <div id="top-wrapper">
    <v-container>
      <v-card
          class="mx-auto my-5"
          max-width="1000"
      >
        <v-img
            class="align-end"
            :height="bannerHeight"
            :src="newBlog.bannerPicture"
        />
        <v-card-title class="text-h5">
          <div class="text-h5">编辑您的新文章</div>
          <v-spacer/>
          <v-btn
              depressed
              outlined
              color="grey"
              @click="isDialogOpen = true"
              :src="newBlog.bannerPicture"
          >
            <v-icon left>mdi-upload</v-icon>
            上传文章头图
          </v-btn>
        </v-card-title>
        <v-card-subtitle>Edit and publish your new article</v-card-subtitle>
        <div class="my-3">
          <v-row class="mx-2">
            <v-col cols="12" class="py-2">
              <v-text-field
                  placeholder="文章标题"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-file-edit-outline"
                  v-model="newBlog.title"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-2">
            <v-col cols="8" class="py-2">
              <v-text-field
                  placeholder="副标题（可选）"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-subtitles-outline"
                  v-model="newBlog.subtitle"
              >
              </v-text-field>
            </v-col>
            <v-col cols="4" class="py-2">
              <v-text-field
                  placeholder="作者"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-fountain-pen-tip"
                  v-model="newBlog.author"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-2">
            <v-col class="py-2">
              <v-select
                  v-model="tagsOfNewBlog"
                  :items="existTags"
                  prepend-inner-icon="mdi-tag-multiple-outline"
                  chips
                  clearable
                  clear-icon="mdi-close"
                  hide-details="auto"
                  label="标签（至少一个）"
                  multiple
                  solo
                  outlined
                  flat
                  dense
              ></v-select>
<!--              <v-combobox-->
<!--                  v-model="tagsOfNewBlog"-->
<!--                  :items="existTags"-->
<!--                  chips-->
<!--                  clearable-->
<!--                  label="标签（至少一项）"-->
<!--                  multiple-->
<!--                  prepend-inner-icon="mdi-tag-multiple-outline"-->
<!--                  solo-->
<!--                  dense-->
<!--                  outlined-->
<!--                  flat-->
<!--                  hide-details="auto"-->
<!--              >-->
<!--                <template v-slot:selection="{ attrs, item, select, selected }">-->
<!--                  <v-chip-->
<!--                      v-bind="attrs"-->
<!--                      :input-value="selected"-->
<!--                      close-->
<!--                      small-->
<!--                      @click="select"-->
<!--                      @click:close="removeSingleTag(item)"-->
<!--                  >-->
<!--                    <strong>{{ item }}</strong>&nbsp;-->
<!--                  </v-chip>-->
<!--                </template>-->
<!--              </v-combobox>-->
            </v-col>
          </v-row>
          <v-row class="mx-2 mb-2">
            <v-col class="py-2">
              <v-text-field
                  solo
                  outlined
                  flat
                  name="input-7-4"
                  prepend-inner-icon="mdi-file-outline"
                  label="文章摘要"
                  dense
                  hide-details="auto"
                  v-model="newBlog.digest"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>


        <v-divider/>
        <v-row>
          <v-col>
            <mavon-editor
                id="new-blog-editor"
                ref="md"
                :box-shadow="true"
                style="border: none;
                        z-index: 1;
                        height: 50vh;
                        box-shadow: none;"
                v-model="newBlog.content"
                :toolbars-flag="true"
                :toolbars="toolbarsConfig"
                :editable="true"
                :subfield="true"
                previewBackground="#ffffff"
                code-style="atom-one-light"
                :ishljs="true"
            />
          </v-col>
        </v-row>

        <v-divider/>

        <v-row class="mx-2" justify="start">
          <v-col cols="auto">
            <v-checkbox label="开启赞赏" v-model="newBlog.appreciationOn"></v-checkbox>
          </v-col>
          <v-col cols="auto">
            <v-checkbox label="允许评论" v-model="newBlog.commentOn"></v-checkbox>
          </v-col>
        </v-row>

        <v-row class="mx-1 my-2" justify="end">
          <v-col cols="auto">
            <v-btn
                class="mx-1"
                color="primary"
                depressed
                max-width="100"
                @click="saveAndPublish"
            >
              保存并发布
            </v-btn>
            <v-btn
                class="mx-1"
                color="primary"
                outlined
                depressed
                max-width="100"
                @click="saveDraft"
            >
              保存草稿
            </v-btn>
            <v-btn
                class="mx-1"
                color="grey"
                outlined
                depressed
                max-width="100"
            >
              放弃编辑
            </v-btn>
          </v-col>
        </v-row>

      </v-card>


      <v-dialog v-model="isDialogOpen" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">填写图片外链</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field placeholder="图片链接"
                                required
                                v-model="uploadBannerUrl"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>暂不支持本地上传图片，只支持通过外链方式插入头图</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="cancelBannerUpload">取消</v-btn>
            <v-btn color="blue darken-1" text @click="confirmBannerUpload">确认</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewBlogEditPage",
  mounted() {
    this.getExistTags();
  },
  methods: {
    cancelBannerUpload() {
      this.uploadBannerUrl = '';
      this.isDialogOpen = false;
    },
    confirmBannerUpload() {
      this.newBlog.bannerPicture = this.uploadBannerUrl;
      this.bannerHeight = '200px';
      this.uploadBannerUrl = '';
      this.isDialogOpen = false;
    },
    removeSingleTag (item) {
      this.tagsOfNewBlog.splice(this.tagsOfNewBlog.indexOf(item), 1)
      this.tagsOfNewBlog = [...this.tagsOfNewBlog]
    },
    getExistTags() {
      axios({
        url: 'http://localhost:9000/admin/tag/get_all_tag_names',
        method: 'get'
      }).then(resp => {
        this.existTags = resp.data;
      })
    },
    castTagStringArrayToObjectArray(tagStringArray) {
      let tagObjectArray = new Array();
      for (let tagStringKey in tagStringArray) {
        tagObjectArray.push({
          name: tagStringArray[tagStringKey]
        })
      }
      return tagObjectArray;
    },
    saveArticle() {
      axios({
        url: 'http://localhost:9000/admin/blog/add_new_blog',
        method: 'post',
        data: this.newBlog
      }).then(resp => {
        console.log(resp);
      })
    },
    saveDraft() {
      this.newBlog.isPublished = false;
      axios({
        url: 'http://localhost:9000/admin/blog/add_new_blog',
        method: 'post',
        data: this.newBlog
      }).then(resp => {
        console.log(resp);
      })
    },
    getDatetime() {
      let dateObj = new Date();
      let year = dateObj.getFullYear();
      let month = dateObj.getMonth() + 1;
      let day = dateObj.getDate();
      let hour = dateObj.getHours();
      let minute = dateObj.getMinutes();
      let second = dateObj.getSeconds();
      if (month < 10) month = '0' + month;
      if (day < 10)  day = '0' + day;
      let datetime = year + '-' + month + '-' + day + ' ' + hour + ":" + minute + ':' + second;
      return datetime;
    },
    saveAndPublish() {
      this.newBlog.createTime = this.getDatetime();
      this.newBlog.isPublished = true;
      this.newBlog.tags = this.castTagStringArrayToObjectArray(this.tagsOfNewBlog);
      console.log(this.newBlog);
      axios({
        url: 'http://localhost:9000/admin/blog/add_new_blog',
        method: 'post',
        data: this.newBlog
      }).then(resp => {
        console.log(resp);
      })
    }
  },
  data () {
    return {
      isDialogOpen: false,
      bannerHeight: 0,
      uploadBannerUrl: '',
      existTags: [],
      tagsOfNewBlog: [],
      newBlog: {
        bannerPicture: '',
        title: '',
        subtitle: '',
        author: '',
        content: '',
        isPublished: false,
        appreciationOn: false,
        commentOn: false,
        createTime: '',
        digest: '',
        tags: []
      },
      toolbarsConfig: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: false, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      }
    }
  }
}
</script>

<style scoped>
#top-wrapper {
  background-color: rgb(250, 250, 250);
}

</style>