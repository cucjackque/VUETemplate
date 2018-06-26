<template>
  <div>
    <wv-tabbar>
      <wv-tabbar-item to="/" is-on>
        <div class="tab_bar_item">home</div>
      </wv-tabbar-item>
      <wv-tabbar-item to="/tab1">
        <div class="tab_bar_item">tab1</div>
      </wv-tabbar-item>
      <wv-tabbar-item to="/tab2">
        <div class="tab_bar_item">tab2</div>
      </wv-tabbar-item>
    </wv-tabbar>
  </div>

</template>

<script>
    import Vue from 'vue'
    import {Tabbar, TabbarItem} from 'we-vue'
    Vue.use(Tabbar)
    Vue.use(TabbarItem)
    export default {
      name: "footerNav",
      data(){
        return{

        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .tab_bar_item{
    height:1rem;
    padding:auto auto;
  }
</style>
