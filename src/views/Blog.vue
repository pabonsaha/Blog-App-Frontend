<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCard
        :post="post"
        v-for="(post, index) in sampleBlogCards"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import { useBlogsStore } from "../store/blogStore";

export default {
  components: { BlogCard },
  data() {
    return {};
  },
  computed: {
    sampleBlogCards() {
      return useBlogsStore().sampleBlogCards;
    },
    editPost: {
      get() {
        return useBlogsStore().editPost;
      },
      set(payload) {
        useBlogsStore().toggleEditPost(payload);
      },
    },
  },
  beforeDestroy() {
    useBlogsStore().toggleEditPost(false);
  },
};
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;
  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;
    span {
      margin-right: 16px;
    }

    input[type="checkbox"] {
      position: relative;
      -webkit-appearance: none;
      background: white;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1 rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1 rgba(0, 0, 0, 0.6);
    }

    input:checked[type="checkbox"]:before {
      background: #f00404b2;
      left: 52px;
    }
  }
}
</style>
