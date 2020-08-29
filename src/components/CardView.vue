<template>
  <v-container
    id="content"
  >
    <v-card
      v-for="(item,index) in pic_data"
      :key="index"
      class="mx-auto mb-3"
      max-width="344"
    >
      <v-img
        :src="'http://'+item.pic_cover"
        height="200px"
      ></v-img>

      <v-card-title>
        {{item.pic_title}}
      </v-card-title>

      <v-card-subtitle>
          解压密码统一为: <span style="color:red">mahoo12138</span>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn text>提取码：{{item.key}}</v-btn>

        <v-btn
          color="purple"
          text
          @click="openLink(item.pic_link)"
        >
          打开链接
        </v-btn>

        <!-- <v-spacer></v-spacer>

        <v-btn
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn> -->
      </v-card-actions>

  </v-card>
    
  </v-container>
</template>

<script>
export default {
  name: 'CardView',
  data:() => ({
    list: ['dsadsa0','dsadas','dsadsa0','dsadas','dsadsa0','dsadas','dsadsa0','dsadas','dsadsa0','dsadas',]
  }),
  props:{
    pic_data: Array
  },
  methods:{
    openLink(link){
      window.open(link,'_blank')
    },
  },
  created(){
    // console.log("CardView" + this.pic_data)
  }
}
</script>

<style>

</style>