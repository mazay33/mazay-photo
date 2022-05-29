<template>
<header class="navbar">
        <div class="container">
            <div class="navbar__content">
                <router-link to="/" class="navbar__logo">Mazaev Andrey</router-link>
                <div class="navbar__burger" @click="isShow = !isShow" :class="{show: isShow}">
                    <span></span>
                </div>
                <ul class="navbar__list" :class="{show: isShow}">
                    <li class="navbar__item" :class="{show: isShow}" v-for="link in links" :key="link.alias">
                        <router-link 
                            class="navbar__link"
                            :to="link.url"      
                            @click="isShow = !isShow" >
                            {{link.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import {links} from '@/_config'
export default {
    data() {
        return{
            links: links,
            isShow: false,
        }
    }
}
</script>