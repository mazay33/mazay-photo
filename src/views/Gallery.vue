<template>
<div class="container">
    <lightgallery class="gallery"  data-aos="fade-up"
        :settings="{ speed: 400, plugins: plugins,
        download: false,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: true,
        actualSize: false,
        mousewheel: true,
        mode: 'lg-slide'
        }"
        :mobileSettings="{
            controls: false,
            showCloseIcon: false,
            rotate: false
        }"
    >
        <a 
            v-for="photo in photos"
            :key="photo"
            className="gallery-item"
            :data-src="photo.src"
        >
            <img className="img-responsive" data-aos="fade-up" :src="photo.src"/>
        </a>

    </lightgallery>
</div>    
</template>

<script>
import {mapState} from "vuex"

import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgHash from 'lightgallery/plugins/hash'

export default {
    components: {
            Lightgallery,
        },
        data: () => ({
            plugins: [lgThumbnail, lgHash],
        }),
        methods: {
            
        },
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

<style lang="css">
    @import 'lightgallery/css/lightgallery.css';
    @import 'lightgallery/css/lg-thumbnail.css';
    @import 'lightgallery/css/lg-zoom.css';
    
</style>