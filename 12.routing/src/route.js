import {createRouter, createWebHistory} from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import userFooter from './components/users/userFooter.vue';
import teamFooter from './components/teams/teamfooter.vue';
import NotFound from './components/nav/NotFound.vue';
 const router = createRouter ({history:createWebHistory(),
routes:[
// {path:'/',redirect:'/teams'},
{name:'teams',
path:'/teams',
components:{default:TeamsList,footer:teamFooter},
alias:'/',
children:[
{name:'team-members',path:':teamId', component:TeamMembers,props:true}

	]},
{name:'user',
path:'/users',
meta:{needAuth:true},
components:{default:UsersList,footer:userFooter},
beforeEnter(to,from,next){
	console.log('beforeEnter');
	//console.log(to,from);
	next();
}
},
// {path:'/teams/:teamId',component:TeamMembers,props:true}, NOW i am usinf chind in TEAm route
{path:'/:notFound(.*)',component:NotFound}

 ],
scrollBehavior(_,_2,savedPostion){
//console.log(to,from,savedPostion);
if(savedPostion){
	return savedPostion;
}
return { top:0,left:0};
}
 });
 router.beforeEach(function(to,from,next){
console.log('beforeEach');
if(to.meta.needAuth){
	console.log('needAuth');
	const needauth =confirm('NEED Auth');
    next(needauth);


}
//console.log(to,from);
// if(to.name==='team-members'){
// 	next();
// }else{
// 	next({name:'team-members',params:{teamId:'t3'}});
// }

next();
 });
 export default router;