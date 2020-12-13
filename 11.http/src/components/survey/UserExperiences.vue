<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click='load'>Load Submitted Experiences</base-button>
      </div>
      <p v-if='isloading&&!error' >loading</p>
      <p v-if='!isloading && (!results||results.length==0)&& !error'> enter some data first</p>

     <p v-if='error&&!isloading'>{{error}}</p>
      <ul v-else >
        
        <survey-result 
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        >result.rating</survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
data(){
  return{
     results:[],
     isloading:false,
    error:null
  };
},mounted(){
  this.load();
},
methods:{
  load(){
  this.isloading=true;
  this.error=null; 
      fetch('https://vuehttp-d2802.firebaseio.com/surveys.json').then((res)=>{
      if(res.ok){
        console.log(res);
      return res.json();
      }
    }).then((data)=>{
       this.isloading=false;
      console.log(data);
      const result=[];
      for(const id in data){
        result.push({
          id:id,
          name:data[id].name,
          rating:data[id].rating,
        })
      }

      this.results=result;
    })
    .catch((error)=>{
       this.isloading=false;
      this.error='Failed to fetch data';
      console.log(this.error);
      console.log(error);
    });

  }
},
  components: {
    SurveyResult,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>