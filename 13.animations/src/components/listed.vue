<template>

	<transition-group tag='ul' name='user-list'>
<li v-for='user in users' :key='user' @click ='removeUser(user)'>{{user}}</li>
<div>
	<input type="text" ref='inputuser'>
	<button @click='addUser'>Add user</button>
</div>
</transition-group>


 </template>
<script >
export default{
data(){
return {
 users:['vpn','heman','kuku','gst','goli']
 }
},
methods:{
	addUser(){
		console.log(this.$refs.inputuser.value);
    this.users.unshift(this.$refs.inputuser.value);
	},
	removeUser(user){console.log('removeuser');
		this.users=this.users.filter(usr=>usr!==user);
	}
}
}
 </script>
<style scoped>
ul{
list-style: none;
margin: 0;
padding: 0;
}
li{
border: 1px solid lightgrey;
padding: 1rem;
text-align: center;
}
.user-list-enter-from{
 opacity: 0;
 transform: translateX(-30px);
}
.user-list-enter-active{
 transition: all 1s ease-out ;
	}
.user-list-enter-to{
	opacity: 1;
	transform: translateX(0px);
}
.user-list-leave-from{
 opacity: 1;
 transform: translateX(0px);
}
.user-list-leave-active{
 transition: all 1s ease-out ;
	}
.user-list-leave-to{
	opacity: 0;
	transform: translateX(30px);
}
.user-list-move{
	transition: transform 2s ease-out;
}



 </style>


