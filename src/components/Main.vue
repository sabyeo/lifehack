<template>
<div>
  <div id='left'>
    <div id='l'>
      <div class='button'><router-link style="text-decoration: none; color: inherit;" to="/friend" exact>
        <h2>Find a Friend</h2>
      </router-link></div>
    </div>
    <div id='r'>
      <div class='button'><router-link style="text-decoration: none; color: inherit;" to="/group" exact>
        <h2>Form a Group</h2>
      </router-link></div>
    </div>
  </div>
  <div id='right'>
    <h2> Friends </h2>
    <div v-for="friend in pairList" v-bind:key="friend.accountDetail.email">
      <FriendProfile v-bind:friend="friend" v-bind:ownModules="ownModules"></FriendProfile>
    </div>
    <h2> Groups </h2>
    <div v-for="group in this.groupList" v-bind:key="group.id">
      <li v-for="members in group" v-bind:key="members.name">{{members.name}}</li>
    </div>
  </div>
</div>
</template>

<script>
import { database } from "@/firebase/";
import FriendProfile from './FriendProfile.vue';

export default {
  name: 'Home',
  data(){
    return{
        msg: 'Friend Group Button',
        ownModules: [],
        pairList: [],
        groupList: [],
      }
  },
  components: {
    FriendProfile,
  },
  methods: {
    fetchItems: function () {
      database
        .collection("user")
        .doc('UA2rWxwH2XPxOypfWGZP') //TO REPLACE HARDCODE
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            this.ownModules = documentSnapshot.data().accountDetail.modules
            
            // get pairs
            let pairRefList = documentSnapshot.data().pairs
            pairRefList.forEach((ref) => {
              ref.get().then(snapshot => {
                this.pairList.push(snapshot.data())
              })
            })

            // get groups
            let groupRefList = documentSnapshot.data().groups
            groupRefList.forEach((ref) => {
              ref.groupId.get().then(snapshot => {
                let memberDetailsList = this.getGroupMembers(snapshot.data());
                this.groupMemberList.push(memberDetailsList)
              })
            })
          }
        });
    },
    getGroupMembers: function (data) {
      console.log('get group members called')
      let memberDetailsList = []
      let memberRefList = data.members.map(function(x){return x.reference})
      memberRefList.forEach((ref) => {
        ref.get().then(snapshot => {
          memberDetailsList.push(snapshot.data())
        })
      })
      return memberDetailsList
    }
  },
  created() {
    this.fetchItems();
  },
  mounted() {
      console.log('test')
      console.log(this.groupMemberList)
      console.log('test done')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-top: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#left {
  float: left;
  width: 80%;
}
#right {
  width: 20%;
  height: 100vh;
  float: right;
  border-color: #1D3557;
  border-style: solid;
}
.button {
    background-color: #A8DADC;
    margin: 20px 40px;
    border-radius: 20px;
    padding: 20px
}
#l {
  float: left;
  width: 30%;
  margin-top: 60vh;
  margin-left: 15%;
}
#r {
  float: right;
  width: 30%;
  margin-top: 60vh;
  margin-right: 15%;
}
</style>
