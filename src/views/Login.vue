<template>
  <div class="form-wrap">
    <form action="" class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{name:'register'}">Register</router-link>
      </p>
      <h2>Login to DailyBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="email" placeholder="Email" v-model="email">
          <Email class="icon"/>
        </div>
        <span class="error" v-if="errorList['email']">{{ errorList['email'][0] }}</span>
        <div class="input">
          <input type="password" placeholder="password" v-model="password">
          <Password class="icon"/>
        </div>
        <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
      </div>
      <router-link class="forgot-password" :to="{name: 'forgotPassword'}">Forgot Your Password?</router-link>
      <button @click.prevent="login">Sign In</button>
      <div class="angle">

      </div>
    </form>
    <div class="background">

    </div>
  </div>
</template>

<script>
import Email from '../assets/Icons/envelope-regular.svg';
import Password from '../assets/Icons/lock-alt-solid.svg';
import {useToast} from "vue-toastification";
import {useUserStore} from '../store/userStore';
import axios from 'axios';

export default {
  components: {Email, Password},
  data() {
    return {
      email: null,
      password: null,
      errorMessage: false,
      errorList: [],
    }
  },
  methods: {
    async login() {
      if (this.email !== '' && this.password !== '') {
        this.errorMessage = false;
        this.errorList = [];

        this.error = false;
        this.errorMessage = '';
        await axios.post(import.meta.env.VITE_APP_API_URL + '/login', {
          email: this.email,
          password: this.password,
        })
            .then((data) => {
              useUserStore().setUser(data.data);
              this.$router.push({name: 'home'});
              useToast().success(data.data.message);
            })
            .catch((error) => {
              this.errorList = error?.response?.data?.errors ?? [];
              this.errorMessage = error?.response?.data?.message;
            });

        return;

      }

      this.errorMessage = 'Fill email and password field';
      return;

    }
  }

}

</script>

<style lang="scss">

.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90vh;
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: #000;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px) {
      padding: 0px 50px;

    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;

      @media (max-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;
          border-radius: 5px;

          &:focus {
            outline: none;
          }
        }

        .icon {
          width: 12px;
          position: absolute;
          left: 6px;
        }
      }

    }

    .forgot-password {
      text-decoration: none;
      color: black;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease-in-out;

      &:hover {
        border-color: #303030;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: white;
      transform: rotateZ(3deg);
      width: 60;
      height: 100%;

      @media (max-width: 900px) {
        display: initial;
      }

    }

  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url('../assets/background.png');
    width: 100%;
    height: 100%;

    @media(min-width: 900px) {
      display: initial;
    }
  }


}

</style>