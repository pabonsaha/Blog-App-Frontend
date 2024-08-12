<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2 v-if="blog.welcomeScreen">{{ blog.title }}</h2>
        <h2 v-else>{{ blog.title }}</h2>
        <p v-if="blog.welcomeScreen">{{ blog.blogPost }}</p>
        <p v-else class="content-preview">{{ blog.blogHtml }}</p>
        <router-link v-if="blog.welcomeScreen" class="link link-light" to="#">
          Login/Register<Arrow class="arrow arrow-light" />
        </router-link>
        <router-link v-else class="link" to="#">
          View The Blog<Arrow class="arrow" />
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img
        v-if="blog.welcomeScreen"
        :src="`/src/assets/blogPhotos/${blog.photo}.jpg`"
        alt=""
      />
      <img
        v-else
        :src="`/src/assets/blogPhotos/${blog.blogCoverPhoto}.jpg`"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
  props: ["blog"],
  components: {
    Arrow,
  },
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgb(0, 0, 0, 0.06);

  @media (min-width: 700px) {
    .blog-wrapper {
      min-height: 650px;
      max-height: 650px;
      flex-direction: column;
    }
  }
  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    width: inherit;
    height: inherit;
    flex: 4;
    order: 2;

    @media (min-width: 700) {
      order: 1;
    }
    @media (min-width: 800) {
      flex: 3;
    }
    div {
      max-width: 540px;
      padding: 72px 24px;
      text-align: justify;
      @media (min-width: 700px) {
        padding: 0 24px;
      }
      h2 {
        font-size: 32px;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 24px;
        @media (min-width: 700px) {
          font-size: 40px;
        }
      }

      p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.7;
      }

      .content-preview {
        font-size: 13px;
        max-height: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 250px;
      }

      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: 0.5s ease-in all;

        &:hover {
          border-bottom-color: #303030;
        }
      }

      .link-light {
        &:hover {
          border-bottom-color: azure;
        }
      }
    }
  }

  .blog-photo {
    width: 100%;
    order: 1;
    flex: 3;
    box-shadow: 0 4px 6px -1px rgb(0, 0, 0, 0.06);

    @media (min-width: 700px) {
      order: 2;
    }

    @media (min-width: 700px) {
      flex: 4;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
  }
}

.no-user:first-child {
  background-color: #303030;
  color: white;
}
</style>
