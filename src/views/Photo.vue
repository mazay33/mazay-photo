<template>
<div class="container">
<div class="photo" @click="closeOnClick">
    <div class="photo__index" ref="index">{{+this.$route.params.index +1}}/{{this.category.photos.length}}</div>
    <div class="photo__close" ref="close"></div>
    <div @click="prev" ref="leftSelector" class="photo__selector photo__selector_prev"></div>
    <div class="photo__img">
            <transition name="fade" mode="out-in" >
            <img ref="img" 
                :src="currentPhoto ? currentPhoto.src : ''" alt="" :key="index">
            </transition>
    </div>
    <div @click="next" ref="rightSelector" class="photo__selector photo__selector_next"> 
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
        photos(){
            return this.category.photos
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
        closeOnClick(e){
            if (e.target != this.$refs.img &&
                e.target != this.$refs.leftSelector &&
                e.target != this.$refs.rightSelector &&
                e.target != this.$refs.index){
                this.escape()
            }
        },
        arrowSlide(e){
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
        },
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
.info{
    color: #fff;
    position: absolute;
    top: 100px;
    left: 0;
    width: 300px;
}
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

.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}

.container{
    max-width: 100%;
    padding: 0;
}

.photo {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: -120px;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
    &__img{
        display: flex;
        align-items: center;
        animation: fadeImage .5s 
    }

    &__img img {
        display: block;
        max-height: 100vh;
    }
    &__selector {
        position: absolute;
        top: 45%;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-top: 1px solid #fff;
        border-right: 1px solid #fff;
        opacity: 0.5;
        transition: all .2s linear;
            &:before {
            content: '';
            position: absolute;
            display: block;
            top: -10vh;
            left: -100vh;
            right: -100vh;
            bottom: 0;
            transform: rotate(45deg);
            }

    &_next{
        transform: rotate(45deg);
        right: 30px;
    }   
    &_prev{
        transform: rotate(-135deg);
        left: 30px;
    }   
    &:hover{
        opacity: 1;
        transition: all .2s linear;
        }
    }

.photo__index{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    margin: 15px;
    opacity: 0.5;
    letter-spacing: 1px;
    color: #fff
}

.photo__close{
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    margin: 15px;
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
}
</style>