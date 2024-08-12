<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'home' }"
            >Laravel Vue Blog</router-link
          >
          <ul>
            <li>
              <a href="#"><youTube class="svg-icon"></youTube></a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon"></twitter></a>
            </li>
            <li>
              <a href="#"><instagram class="svg-icon"></instagram></a>
            </li>
            <li>
              <a href="#"><linkdin class="svg-icon"></linkdin></a>
            </li>
          </ul>
        </div>

        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'home' }">Home</router-link>
            <router-link class="link" :to="{name:'blogs'}"
              >Blogs</router-link
            >
            <router-link v-if="user" class="link" to="#"
              >Create Post</router-link
            >
            <router-link v-if="!user" class="link" :to="{name:'login'}"
              >Login/Register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2023 All Right Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkdin from "../assets/Icons/linkedin-brands.svg";

export default {
  components: {
    youTube,
    twitter,
    instagram,
    linkdin,
  },
};
</script>

<style scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;
}

footer .container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

@media (min-width: 800px) {
  footer .container {
    flex-direction: row;
    gap: 0px;
  }
}

footer .container>div{
    display: flex;
    flex: 1;
}
footer .container .left{
    gap: 32px;
    color: white;
    flex-direction: column;
    align-items: center;

}

@media (min-width: 800px) {
    footer .container .left{
    flex-direction: row;
    align-items: initial;
    gap: 0px;
  }
}


@media (min-width: 800px) {
  .header{
    text-align: initial;
  }
}

.header{
  text-align: center;
    font-size: 24px;
    color: white;
    text-decoration: none;
    font-weight: 600;
}
ul{
    gap: 16px;
    list-style: none;
    display: flex;
}

.col-1, .col-2{
    gap: 32px;
    display: flex;
    flex: 1;
}

@media (min-width: 800px) {
    .col-1, .col-2{
    gap: 0px;
  }
}

.col-1{
    flex-direction: column;
}

.col-1 h2{
    text-align: center;
}

@media (min-width: 800px) {
    .col-1 h2{
    text-align: initial;
  }
}

.col-1 ul
{
    margin-top: auto;
}
.col-1 ul li{
    display: flex;
    align-items: center;
}

.col-1 ul li .svg-icon{
    width: 24px;
    height: auto;
    color: white;
}

.col-2 ul{
    height: 100%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}

@media (min-width: 800px) {
    .col-2 ul{
    flex-direction: column;
  }

}
.col-2 ul .link{
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-decoration: none;
}

.right{
    gap: 32px;
    color: wheat;
    align-items: center;
    flex-direction: column;
}
@media (min-width: 800px) {
    .right{
    align-items: flex-end;
    gap: 0;
  }

}

.right p{
    margin-top: auto;
}

</style>
