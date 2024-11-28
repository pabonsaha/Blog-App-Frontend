<template>
    <div class="form-wrap">
        <form action="" class="register">
            <p class="login-register">
                Already have an account?
                <router-link class="router-link" :to="{name:'login'}">Login</router-link>
            </p>
            <h2>Create Your DailyBlogs Account</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="First Name" v-model="firstName">
                    <User class="icon"/>
                </div>
                <div class="input">
                    <input type="text" placeholder="Last Name" v-model="lastName">
                    <user class="icon"/>
                </div>
                <div class="input">
                    <input type="text" placeholder="username" v-model="username">
                    <User class="icon"/>
                </div>
                <span class="error" v-if="errorList['userName']">{{ errorList['userName'][0] }}</span>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <Email class="icon"/>
                </div>
                <span class="error" v-if="errorList['email']">{{ errorList['email'][0] }}</span>
                <div class="input">
                    <input type="password" placeholder="password" v-model="password">
                    <Password class="icon"/>
                </div>
                <span class="error" v-if="errorList['password']">{{ errorList['password'][0] }}</span>
                <div v-show="error" class="error">
                    {{ this.errorMessage }}
                </div>
            </div>

            <button @click.prevent="register">Sign Up</button>
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
import User from '../assets/Icons/user-alt-light.svg';
import { useUserStore } from '../store/userStore';
import axios from 'axios';
import { useToast } from "vue-toastification";


export default{
    components:{
        Email,Password,User
    },
    data(){
        return{
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            password:'',
            error: null,
            errorMessage: '',
            errorList : [],
        }
    },

    methods:{
        async register()
        {
            this.errorList = [];

            if(this.email !== '' && this.password!== '' && this.firstName!== '' && this.lastName!== '' && this.username !== '')
            {
                this.error = false;
                this.errorMessage= '';
                await axios.post(import.meta.env.VITE_APP_API_URL + '/registration',{
                    firstName: this.firstName,
                    lastName: this.lastName,
                    userName: this.username,
                    email: this.email,
                    password: this.password,
                }).then((data)=>
                {
                    useUserStore().setUser(data.data);
                    this.$router.push({name:home});
                    useToast().success(data.data.message);

                }).catch((error)=>
                {
                    this.errorList = error.response.data.errors;
                });

                return;

            }
            this.error = true;
            this.errorMessage = "Please Fill out all the fields!";

            return;
        }
    }
}

</script>


<style lang="scss" scoped>

.register{
    h2{
        max-width: 350px;
    }
}

</style>