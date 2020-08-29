<template>
  <v-app>
    <div class="home_bg">
      <v-main>
        <HelloView/>
        <card-view :pic_data=pic_card></card-view>

      </v-main>
    </div>
    <v-navigation-drawer
      app
      v-model="drawer"
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      hide-on-scroll
      color="rgba(0,0,0,0)"
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>

      <v-spacer></v-spacer>  
      <!-- 间隔 -->
      <v-btn
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>


  </v-app>
  
</template>

<script>
import HelloView from './components/HelloView';
import CardView from './components/CardView';

export default {
  name: 'App',

  components: {
    HelloView,
    CardView
  },

  data: () => ({
    drawer: false,
    pic_card : null
  }),
  methods: {
    openDrawer(){
      console.log('dasdas')
      this.drawer = ! this.drawer
    }
  },
  created() {
    const query = this.Bmob.Query("pics_info");
    query.find().then(res => {
        // console.log(res)
        this.pic_card = res
    });
  }
};
</script>
<style scoped>

.home_bg{
  width: 100%;
  height: calc(100vh);
  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url('https://cdn.jsdelivr.net/gh/Mahoo12138/blog-with-hexo/medias/banner/0.jpg');
}
</style>
