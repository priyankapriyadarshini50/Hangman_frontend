<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary"
        :class="[`navbar-${theme}`, `bg-${theme}`]"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Brand</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li v-for="(page, index) in pages" class="nav-item" :key="index">
                        <navbar-link
                            :page="page"
                            :isActive="activePage == index"
                            @click.prevent="navLinkClick(index)"
                        ></navbar-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-primary"
                    @click.prevent="changeTheme()"
                    >Toggle</button>
                </form>
            </div>
        </div>
    </nav>

</template>

<script>

import NavbarLink from "./NavbarLink.vue"

export default{
    components: {
        NavbarLink
    },
    props: ['pages', 'activePage', 'navLinkClick'],
               
    data(){
        return {
            theme: 'light',
        };
    },
    methods:{
        changeTheme(){
            let theme = 'light';
            if(this.theme == 'light'){
                theme = 'dark';
            }
            this.theme = theme;
        }
    },
}
</script>