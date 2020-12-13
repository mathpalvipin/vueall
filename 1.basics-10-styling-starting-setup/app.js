const app = Vue.createApp({
	 data(){
	 	 return {
	 	 	 boxAselected:false,
	 	 	 boxBselected:false,
	 	 	 boxCselected:false
	 	 };
	 },
	 computed:
	 {
	 	 boxAclasses()
	 	 {
	 	 	 return { active : this.boxAselected};
	 	 },
	 	  boxCclasses(){
	 	 	 return { active : this.boxCselected};
	 	 }, boxBclasses(){
	 	 	 return { active : this.boxBselected};
	 	 }
	 },
	 methods:{
	 	 boxselected(box){
	 	 	 if(box=='A'){
	 	 	 	console.log('A');
	 	 	 	this.boxAselected=!this.boxAselected;

	 	 	 }else if(box=='B'){
	 	 	 	console.log('B');

	 	 	 this.boxBselected=!this.boxBselected;
	 	 	 }
	 	 	 else if(box=='C'){
	 	 	 	console.log('C');

	 	 	 this.boxCselected=!this.boxCselected;
	 	 	 }
	 	 }
	 }

});
app.mount('#styling');