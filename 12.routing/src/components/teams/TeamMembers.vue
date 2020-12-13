<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
  <router-link to='/teams/t2'> Do  to Team 2</router-link>

</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject:['teams', 'users'],
  props:['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [

      ],
    };
  },methods:{
   load(teamId){
    console.log(this.$route);

  const selectTeam= this.teams.find(team=>team.id==teamId);
  const members = selectTeam.members;
  const selectMembers =[];
  for(const member of members){
   const selectUser =this.users.find(user=> user.id===member);
   selectMembers.push(selectUser)
  }
this.teamName=selectTeam.name;
this.members=selectMembers;

  }

   
  },
  created(){
    
 this.load(this.teamId)
},watch:{
  teamId(newid){
    this.load(newid);

  }
}
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>