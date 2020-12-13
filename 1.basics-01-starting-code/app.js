const app =Vue.createApp({
	data() {
		return { name:'',
		confname:'',
			 courseGoalA:'<h2>finish</h2>',
			 courseGoal:'finish',
		vuelink:'https://vuejs.org/',
		counter :0,
	  watchername:''
		}; 
	},
	computed:{
     fullname()
     {
     	console.log('counter update but not refresh  because  ')
     		if(this.name=='')
				return '';
			return this.name;
			   }
	},
	watch :{
       counter(value,oldvalue){
     if(value>50){
     	console.log('newvalue'+value);
     	console.log('oldvalue' +oldvalue);
     	 this.counter=0;
     }

       }
	},
	methods:{
		outputgoal(){
			const ran = Math.random();
			if(ran<0.5){
				return 'learn'+this.courseGoalA+ran;
			}else{
				return 'jao so jao'+this.courseGoalA+ran;
			}
		},
		add(num){console.log('add in counter');
			this.counter=this.counter+num;
		},
		reduce(num){ console.log('reduce from counter');
			this.counter=this.counter-num;
		},
		setname(event ,lastname){
			if(event.target.value=='') 
				this.name='';
			else
			this.name =event.target.value +' '+lastname;
		},
		submit(event){
			console.log(event.target.value);

		},
		confirmname(){
			this.confname=name=this.name;
		},
		printname(){
			if(this.name=='')
				return '';
			return this.name;

		}

	}
	
});
app.mount('#user-goal');