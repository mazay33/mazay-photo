<template>
<div class="container">
<div class="gallery">
    <router-link
        v-for="(photo, i) in photos"
        :photo="photo"
        :key="i"
        :to="{name: 'Photo', params: {category: categoryId, index: i }}"
    >
        <img :src='photo.src'>
    </router-link>
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
        categoryId() {
            return this.$route.params.id
        },
        photos() {
            return this.categories.find(el => el.category === this.categoryId).photos
        }
    },
};
</script>

