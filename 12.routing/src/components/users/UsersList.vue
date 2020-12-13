<template>
  <button @click='confirminput'> confirm</button>
  <button @click='savechange'>savechanges</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
  <router-view name='footer'></router-view>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  beforeRouteEnter(to,from,next){
    console.log('beforeRouteEnter in user components');
 //   console.log(to,from);
    next();

  },
  beforeRouteLeave(to,from,next){
    console.log('beforeRouteLeave');
    if(this.saveschange){
      next();
    }else{
      const wanttoleave =confirm('are you sure ? datanot saved');
      next(wanttoleave);
    }
  },
  unmounted(){
    console.log('unmounted');
  },
  components: {
    UserItem,
  },
  data(){
  return  {
savedchange:false,
  };
  },
  inject: ['users'],
  methods:{
    confirminput(){
    this.$router.push('/teams');
},
savechange(){
  this.savedchange=true;
  }
}
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>