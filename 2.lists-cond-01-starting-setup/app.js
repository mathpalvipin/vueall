const app = Vue.createApp({
  data() {
    return { 
    	enteredgoal:"",
    	goals: [] };
  },
  methods:{
  	 addGoal(){console.log('goal added');
  	 	 this.goals.push(this.enteredgoal);
  	 },
  	 removeGoal(ind){
  	 	 this.goals.splice(ind,1);
  	 }
  }
});

app.mount('#user-goals');
