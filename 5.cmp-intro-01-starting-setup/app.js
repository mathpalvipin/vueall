const app = Vue.createApp({
	 data(){
	 	 return {
	 	 	visible:false,
	 	 	 friends :[
	 	 	 {
	 	 	 	id:'vpn',
	 	 	 	 phone :'2345678',
	 	 	 	email:'vpn@gmail.com',
	 	 	 	name:'vpnmathpal'
	 	 	 },
	 	 	 {   id:'lucy',
	 	 	 	 phone :'287654332',
	 	 	 	email:'lucy@gmail.com',
	 	 	 	name:'lucy'

	 	 	 }]
	 	 };
	 },
	 methods:{
toggleDetail(){
	 this.visible=! this.visible;
}
	 }
});
app.component('friend-contact',{
	template:`
        <ul>
        <li >
          <h2>{{friend.name}}</h2>
          <button @click='toggleDetail'>
          {{visible ? 'hide':'show' }} Details</button>
          <ul v-if='visible'>
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
        
      </ul>
	`,
	data(){ return { 
		visible:false
	};
},
props:[
	'friend'
],
	methods:{
		toggleDetail(){
	 this.visible=! this.visible;
}

	}
});
app.mount('#app');