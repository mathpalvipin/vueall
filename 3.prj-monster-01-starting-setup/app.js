function getrandomvalue(min ,max){
	 return Math.floor(Math.random()*(max-min))+max;
		
}
const app = Vue.createApp({
	data(){
		 return {
          playerhealth :100,
          monsterhealth:100,
          currentround:0,
          winner:null,
          logMessage:[]
		 };
	},
	computed:{
		 monsterbar()
{
	if(this.monsterhealth<0){
return {width:'0%'};
}
	 return {width :this.monsterhealth +'%'};
},
playerbar(){
	if(this.playerhealth<0){
	return {width:'0%'};
}
	 return { width: this.playerhealth +'%'};
},
mayspecialattack(){
	 return this.currentround%3!==0;
}
	},
	watch:{
		playerhealth(value){
if(value<=0&& this.monsterhealth<=0){
console.log(" A draw");
this.winner='draw';
}else if (value<=0) {
	console.log('player lost');
	this.winner='monster';

}
		},

		monsterhealth(value){

if(value<=0&& this.playerhealth<=0){
console.log('draw');
this.winner='draw'
}else if (value<=0) {
	console.log('monster lost');
	this.winner='player';

}
		}
	},

	methods:{
		restart(){
		    this.playerhealth=100;
		    this.monsterhealth=100;
		    this.currentround=0;
		    this.winner=null;
		    this.logMessage=[];
		},
		 attackMonster(){
         this.currentround++;
		 const attckvalue= getrandomvalue(5,12);
		 this.monsterhealth-=attckvalue;
		 console.log('monsterhealth decrease by '+attckvalue);
		 this.addLogMessage('player','attack', attckvalue);
		 this.attackPlayer();
		 if(this.playerhealth<0){
		 	console.log('player lost');


		 }
		 },
		  attackPlayer(){
		 const attckvalue= getrandomvalue(8,15);
		 console.log('playerhealth decrease by '+attckvalue)
    this.addLogMessage('monster' ,'attack', attckvalue);
		 this.playerhealth-=attckvalue;
		 },
	
	specialAttack(){ console.log('specialAttack');
		this.currentround++;
		 const attackvalue= getrandomvalue( 10,25);
		 this.monsterhealth-=attackvalue;
    this.addLogMessage('player' ,'attack', attckvalue);

		 this.attackPlayer(); 

	},
	healPlayer(){
		 const healvalue= getrandomvalue(4,18);
		 if(this.playerhealth+healvalue>100)
		{this.playerhealth=100;
			console.log("no healing required");}
		else{console.log("healing");
    this.addLogMessage('player' ,'heal', healvalue);

		 this.playerhealth+=healvalue;
		}
		this.attackPlayer();
		if(this.playerhealth<0){
			console.log('player lost');
		}
	},

surrender(){
	 this.winner='monster';
},
addLogMessage(who , what,value){
	this.logMessage.unshift({
		actionby:who,
		actiontype:what,
		actionvalue:value
	});
}
}
	
});

app.mount('#game');