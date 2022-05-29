<template>
<div class="container">
    <div class="intro">
        <div class="intro__item" v-for="(category, i) of categories" :key="i">
            <div class="intro__img">
                <router-link :to="{name: 'Album', params: {id: category.category}}">
                    <img :src="category.img" alt="">
                </router-link>
            </div>
            <div class="intro__title">{{category.title}}</div>
        </div>
    </div>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    computed: {
        ...mapState([
            'categories'
        ]),
        photos() {
            return this[`${this.$route.params.id}`]
        }
    },
};
</script>