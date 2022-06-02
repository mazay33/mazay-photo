<template>
<div class="container">
<div class="photo">
    <div class="slide-index">{{+this.$route.params.index +1}}/{{this.category.photos.length}}</div>
    <div @click='escape' class="slide-close"></div>
    <div @click="prev" class="photo__selector photo__selector_prev">
        
    </div>
    <div class="photo__img">
        <img :src="currentPhoto ? currentPhoto.src : ''" alt="">
    </div>
    <div @click="next" class="photo__selector photo__selector_next">
        
    </div>
</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'categories'
        ]),
        index() {
            return +this.$route.params.index
        },
        categoryId() {
            return this.$route.params.category
        },
        category() {
            return this.categories.find(el => el.category === this.categoryId)
        },
        currentPhoto() {
            if (this.category) {
                return this.category.photos[this.index]
            }
            return ''
        },
        prevIndex() {
            if (this.index === 0) {
                return this.category.photos.length - 1
            }
            return this.index - 1
        },
        nextIndex() {
            if (this.index === this.category.photos.length - 1) {
                return 0
            }
            return this.index + 1
        },
    },
    methods: {
        next() {
            +this.$router.push({
                name: 'Photo',
                params: {
                    category: this.categoryId,
                    index: this.nextIndex
                }
            })
        },
        prev() {
            +this.$router.push({
                name: 'Photo',
                params: {
                    category: this.categoryId,
                    index: this.prevIndex
                }
            })
        },
        escape(){
            this.$router.push({
                name: 'Album',
                params: {
                    id: this.category.category
                }
            })
        },
        arrowSlide(e) {
            switch (e.key) {
                case 'ArrowRight':
                    this.next()
                    break;
                case 'ArrowLeft':
                    this.prev()
                    break;
                case 'Escape':
                    this.escape()
                    break;
            }
        }
        
    },

    mounted: function() {
    window.addEventListener('keyup',this.arrowSlide);
    },

    beforeUnmount: function() {
    window.removeEventListener('keyup',this.arrowSlide);
}
}
</script>

<style lang="scss" scoped>
@keyframes fadeImage {
    0% {
        opacity: 0;
        transform: scale3d(.1,.1,.1);
    }
    100% {
        opacity: 1;
        transform: scale3d(1,1,1);
    }
}

.container{
    max-width: 100%;
    padding: 0;
}
.slide-index{
    position: absolute;
    top: 0;
    left: 0;
    margin: -100px 0 0 30px;
    opacity: 0.5;
    letter-spacing: 1px;
    color: #fff
}
.slide-close{
    position: absolute;
    top: 0;
    right: 0;
    margin: -100px 30px 0 0;
    width: 32px;
    height: 32px;
    opacity: 0.5;
    transition: all 0.2s linear;
    &:hover{
        opacity: 1;
        transition: all 0.2s linear;
    }
    &:before,&:after{
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: rgb(223, 223, 223);
    }
    &::before{
    transform: rotate(45deg); 
    }
    &::after{
    transform: rotate(-45deg); 
    }
}
.photo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -120px;
    height: 100vh;
    background-color: #000;
    &__img{
        animation: fadeImage .5s 
    }

    &__img img {
        display: block;
        height: 100vh;
        object-fit: cover;
    }
    &__selector {
        flex: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;

        width: 40px;
        height: 40px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        margin: 0 50px 0 50px;
        opacity: 0.3;
        transition: all .2s linear;

    &_next{
        transform: rotate(45deg);
    }   
    &_prev{
        transform: rotate(-135deg);
    }   
    &:hover{
        opacity: 1;
        transition: all .2s linear;
        }
    }
}
</style>