<template>
    <div class="blog-card">
        <div class="icons" v-show="editPost">
            <div class="icon">
                <Edit class="edit"/>
            </div>
            <div class="icon">
                <Delete class="delete"/>
            </div>
        </div>
        <img :src="`/src/assets/blogCards/${post?.blogCoverPhoto}.jpg`" alt="" >
        <div class="info">
            <h4>{{ post.blogTitle }}</h4>
            <h6>Posted on: {{ post.blogDate }}</h6>
            <router-link class="link" to="#">
                View The Post <Arrow class="arrow"/>
            </router-link>
        </div>
    </div>
</template>

<script>

import Arrow from '../assets/Icons/arrow-right-light.svg';
import Edit from '../assets/Icons/edit-regular.svg';
import Delete from '../assets/Icons/trash-regular.svg';
import { useBlogsStore } from '../store/blogStore';

export default{
    props:['post'],
    components:{Arrow,Edit,Delete},

    computed:{
        editPost(){
            return useBlogsStore().editPost;
        }
    },
}

</script>


<style lang="scss" scoped>

.blog-card{
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: white;
    min-height: 420px;
    transition-duration: 0.7s ease-in-out;

    &:hover{
        transform: rotateZ(-1deg) scale(1.03);
        box-shadow: 0 4px 6px -1px rgb(0, 0, 0, 0.06);
    }

    .icons{
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;

        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: white;
            transition: 0.5 ease all;

            &:hover{
                background-color: #303030;

                .edit,.delete{
                    path{
                        fill: white;
                    }
                }
            }
            &:nth-child(1)
            {
                margin-right: 8px;
            }
            .edit,.delete{
                pointer-events: none;
                height: 15px;
                width: auto;
            }
        }
    }

img{
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
}

.info{
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;

    h4{
        padding-bottom: 8px;
        font-size: 20px;
        font-weight: 300;
    }

    h6{
        font-weight: 400;
        font-size: 12px;
        padding-bottom: 16px;
    }

    .link{
        display: inline-flex;
        align-items: center;
        margin-top: auto;
        font-weight: 500;
        padding-top: 20px;
        font-size: 12px;
        padding-bottom: 4px;
        transition: 0.5s ease-in all;
        &:hover{
            color: rgb(48, 48, 48, 0.8);
        }

        .arrow{
            width: 10px;
        }
    }
}


}

</style>