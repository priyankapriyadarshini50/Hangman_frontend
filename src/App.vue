<template>
   <!-- <navbar-component
      :pages="pages"
      :active-page="activePage"
      :nav-link-click="(index) => activePage = index"
  ></navbar-component> -->
    <simple-nav/>

    <!-- <page-viewer
        v-if="pages.length > 0"
        :page="pages[activePage]"
    ></page-viewer> -->

    <!-- <signin-form/> -->
    <router-view/>

</template>

<script>
//import PageViewer from './components/PageViewer.vue';

// import NavbarComponent from './components/NavbarComponent.vue';

import SimpleNav from '@/components/SimpleNav.vue';


export default {
  components: {
    //PageViewer,
    SimpleNav,
    // NavbarComponent,

  },
  created(){
    this.getPages();
  },
  data(){
    return{
      activePage: 0,
      pages:[]
    };
  },
  methods:{
    async getPages(){
      let res = await fetch('pages.json');
      let data = await res.json()
      
      this.pages = data;
    }
  },
}
</script>

<style>
</style>
