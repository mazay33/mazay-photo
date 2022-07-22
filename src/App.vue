<template>
    <div class="wrapper">
    <TheHeader />
    <div class="wrapper-content">
            <router-view v-slot ="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
    </div>
    <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import AOS from 'aos'

export default {
components: {
        TheHeader,
        TheFooter
    },
mounted(){
    AOS.init({
        duration: 800
    })
}
}

</script>

<style lang="scss">
    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 0.5s;
    }
    .fade-enter-from,
    .fade-leave-to{
        opacity: 0;

    }
</style>
