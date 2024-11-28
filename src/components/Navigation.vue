<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'home' }">Daily</router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'blogs' }">Blog</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" v-if="!userInfo" :to="{ name: 'login' }"
          >Login/Register
          </router-link
          >
          <div
              class="profile"
              v-on:click="toogleProfileMenu($event)"
              v-if="userInfo"
              ref="profile"
          >
            <span>User</span>
            <div v-show="profileMenu" class="profile-menu">
              <div class="info">
                <p class="initials"></p>
                <div class="right">
                  <p>{{ userInfo.name }}</p>
                  <p>{{ userInfo.email }}</p>
                </div>
              </div>
              <div class="options">
                <div class="option">
                  <router-link class="option" to="#">
                    <userIcon class="icon"/>
                    <p>Profile</p>
                  </router-link>
                </div>
                <div class="option">
                  <router-link class="option" to="#">
                    <adminIcon class="icon"/>
                    <p>Admin</p>
                  </router-link>
                </div>
                <div @click="signOutUser" class="option">
                  <signOutIcon class="icon"/>
                  <p>Sign Out</p>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>

    <MenuIcon class="menu-icon" v-show="mobile" @click="toggleMobileNav"/>

    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'blogs' }">Blog</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" v-if="!userInfo" :to="{ name: 'login' }"
        >Login/Register
        </router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import MenuIcon from "../assets/Icons/bars-regular.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";
import {useUserStore} from "@/store/userStore";
import axios from "axios";

export default {
  components: {
    MenuIcon,
    userIcon,
    adminIcon,
    signOutIcon,
  },

  data() {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: null,
      userInfo: null,
      profileMenu: false,
    };
  },

  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    toogleProfileMenu($event) {
      if ($event.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },

    async signOutUser() {
      let config = {
        headers: {
          Authorization: 'Bearer ' + useUserStore().getToken(),
        }
      }
      await axios
          .post(import.meta.env.VITE_APP_API_URL + "/signout",{} ,config)
          .then((data) => {
            useUserStore().setUser(data.data);
            this.$router.push({name: "home"});
            useToast().success(data.data.message);
          })
          .catch((error) => {
            console.log(error, "here");
            this.errorList = error?.response?.data?.errors ?? [];
            this.errorMessage = error?.response?.data?.message;
          });
    },
  },

  created() {
    this.userInfo = useUserStore().getUser();

    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(255, 255, 255);
  padding: 0 25px;
  box-shadow: 0 4px 6px -1 rgba(0, 0, 0, 0.1), 0 2px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
}

header .link {
  cursor: pointer;
  font-weight: 500;
  padding: 0 8px;
  transition: 0.3s color ease;
}

header .link:hover {
  color: #1eb8b8;
}

nav {
  display: flex;
  padding: 25px 0;
}

header nav .branding {
  display: flex;
  align-items: center;
}

header nav .branding .header {
  font-weight: 600;
  font-size: 24px;
  color: black;
  text-decoration: none;
}

.nav-links {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
}

.nav-links ul {
  display: flex;
  align-items: center;
  margin-right: 32px;
}

.nav-links ul .link {
  margin-right: 32px;
}

.nav-links ul .link:last-child {
  margin-right: 0px;
}

.profile {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #303030;

  span {
    pointer-events: none;
  }
}

.profile .profile-menu {
  position: absolute;
  top: 60px;
  right: 0;
  width: 250px;
  background-color: #303030;
  box-shadow: 0 4x 6px -1px rgba(0, 0, 0, 0.1),
  0px 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.profile .profile-menu .info {
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid white;
}

.profile .profile-menu .info .initials {
  position: initial;
  width: 40px;
  height: 40px;
  background-color: #fff;
  color: #303030;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}

.profile .profile-menu .info .initials .right {
  flex: 1;
  margin-left: 24px;
}

.profile .profile-menu .info .initials .right p:nth-child(1) {
  font-size: 14px;
}

.profile .profile-menu .info .initials .right p:nth-child(1),
p:nth-child(3) {
  font-size: 12px;
}

.profile .profile-menu .options {
  padding: 15px;
}

.profile .profile-menu .options .option {
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.profile .profile-menu .options .option:last-child {
  margin-bottom: 0px;
}

.profile .profile-menu .options .option .icon {
  width: 18px;
  height: auto;
}

.profile .profile-menu .options .option p {
  font-size: 14px;
  margin-left: 12px;
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}

.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;
}

.mobile-nav .link {
  padding: 15px 0;
  color: whitesmoke;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
