new Vue({
	el :'#app',
	data: {
		 name:'vpn',
		 website:'vipin.com' ,
		 age:1,
		 websitetag:'<a href="vipin.com"  >hello</a>',
		 x:0,
		 y:0,
		 error:false, 
		 success:true ,
		 teams:[
		 	{name:'vpn',age:23},
		 	{name:'hello',age:21},
		 	{name:'world',age:20} 
		 ]
	},
	 methods:{
	 	 hello: function(){
	 	 	 return 'hello'+ this.name
	 	 }, 
	 	 updateXY:function(event){
	 	 	 this.x=event.offsetX;
	 	 	 this.y=event.offsetY;

	 	 }
	 	,
	 	nameenter: function() {
	 		alert("enter name");
	 	},
	 	 ageenter: function(){
	 	 	 alert('ageenter');
	 	 }
	 }
});
 