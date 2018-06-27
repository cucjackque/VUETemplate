<template>
  <div>
    <wv-tabbar>
      <wv-tabbar-item to="/" :isOn=$store.state.active[0] @click="change(true, false, false)">
        <div class="tab_bar_item">home</div>
      </wv-tabbar-item>
      <wv-tabbar-item to="/tab1" :isOn=$store.state.active[1] @click="change(false,true,false)">
        <div class="tab_bar_item">tab1</div>
      </wv-tabbar-item>
      <wv-tabbar-item to="/tab2" :isOn=$store.state.active[2] @click="change(false,false,true)">
        <div class="tab_bar_item">tab2</div>
      </wv-tabbar-item>
    </wv-tabbar>
  </div>

</template>

<script>
    import Vue from 'vue'
    import {Tabbar, TabbarItem} from 'we-vue'
    // import {mapState} from 'vuex'

    Vue.use(Tabbar)
    Vue.use(TabbarItem)
    export default {
      name: "footerNav",
      data(){
        return{

        }
      },
      computed: {
        getState:function(){
          return this.$store.state.homeActive;
        }
      },
      methods:{
        change:function(param1,param2,param3){
          this.$store.commit('setActive', [param1, param2, param3]);
        }
      }
    }
</script>

<style scoped>
  .tab_bar_item{
    height:1.5rem;
    font-size:0.5rem;
  }
</style>
