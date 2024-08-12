<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage = "modalMessage" v-on:close-modal="closeModal" />
    <Loading v-if="loading"/>
    <div class="form-wrap">
      <form action="" class="reset">
        <p class="login-register">
                Back To
                <router-link class="router-link" :to="{name:'login'}">Login?</router-link>
            </p>
        <h2>Reset Password</h2>
        <p class="login-register">
          Forgot your password? Enter your email to reset it
        </p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <Email class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";

export default {
  components: {
    Email,
    Modal,
    Loading,
  },

  data()
  {
    return{
      email : null,
      modalActive: false,
      modalMessage: '',
      loading: false,
    }
  },

  methods:{
    resetPassword()
    {
      this.loading = true;
      this.modalMessage = 'If your accout exit, you will get an email';

      setTimeout(()=> {
         this.loading = false;
         this.modalActive = true;
      }
      ,2000);
    },
    closeModal() {
      this.modalActive = false;
      this.modalMessage = '';
    }
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;

  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
