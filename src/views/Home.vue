<template>
  <div class="home">
    <BlogPost :blog="welcomeScreen" />
    <BlogPost
      :blog="blog"
      v-for="(blog, index) in sameBlogPost"
      v-bind:key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never Miss a post, Register for your free account today!</h2>
        <router-link class="router-button" to="#"
          >Register for Blogs <Arrow class="arrow arrow-right"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
import { useBlogsStore } from "../store/blogStore";
export default {
  components: { BlogPost, BlogCard, Arrow },

  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        welcomeScreen: true,
        photo: "coding",
      },
      sameBlogPost: [
        {
          title: "This is filter Title",
          blogHtml:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
          blogCoverPhoto: "beautiful-stories",
          photo: "beautiful-stories",
        },
        {
          title: "This is filter Title",
          blogHtml:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
          blogCoverPhoto: "beautiful-stories",
          photo: "beautiful-stories",
        },
      ],
    };
  },

  computed: {
    sampleBlogCards() {
      return useBlogsStore().sampleBlogCards;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 32px;
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      font-size: 14px;
      display: flex;
      text-decoration: none;

      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 48px;
      }
    }
  }
}
</style>
