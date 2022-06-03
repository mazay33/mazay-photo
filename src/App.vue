<template>
    <div class="wrapper">
    <TheHeader v-if="$route.name !== 'Photo'" />
    <div class="wrapper-content">
            <router-view v-slot ="{ Component }">
                <transition appear name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
    </div>
    <TheFooter v-if="$route.name !== 'Photo'" />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
components: {
        TheHeader,
        TheFooter
    },
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
