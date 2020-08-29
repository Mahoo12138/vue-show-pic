<template>
  <v-container>
    <v-col
      style="height:calc(90vh);"
    >
      <v-row
      justify="center"
    >
        <h1 class='home_title' size="20">套图博物馆</h1>
        
    </v-row>

    <v-row
      justify="center"
    >
        <p class='home_subtitle pa-3'>传递人间正能量</p>
        
    </v-row>

    <v-row
      justify="center"
    >
        <div class="text-center ma-3">
          <v-btn rounded color="primary" dark class="pa-6 ma-3" href="#content">立即观摩</v-btn>
          <v-btn rounded color="primary" dark class="pa-6 ma-3" @click="test">我是贤者</v-btn>
        </div>
        
    </v-row>
      
    </v-col>

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({

    }),
    methods:{
      test(){
        console.log("dasdasd")
        
      },
    }
  }
</script>


<style scoped>

.home_title{
  font-size: 3em;
  padding-top: calc(20vh);
  color: aliceblue;
  font-weight: unset;
}
.home_subtitle{
  color: beige;
  font-size: 1.2em;
  padding-top: 1vh;
}

</style>