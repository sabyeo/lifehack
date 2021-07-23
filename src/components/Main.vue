<template>
<div id='outer'>
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
    <div v-for="friend in this.pairList" v-bind:key="friend.accountDetail.email">
      <FriendProfile v-bind:friend="friend" v-bind:ownModules="ownModules"></FriendProfile>
    </div>
    <h2> Groups </h2>
    <div v-for="group in groupList" v-bind:key="group.groupName">
      <GroupProfile v-bind:group="group"></GroupProfile>
    </div>
  </div>
</div>
</template>

<script>
import { database } from "@/firebase/";
import FriendProfile from './FriendProfile.vue';
import GroupProfile from './GroupProfile.vue';

export default {
  name: 'Home',
  data(){
    return{
        ownEmail: "",
        ownModules: [],
        pairList: [],
        groupList: [],
      }
  },
  components: {
    FriendProfile,
    GroupProfile,
  },
  methods: {
    fetchItems: function () {
      database
        .collection("user")
        .doc('UA2rWxwH2XPxOypfWGZP') //TO REPLACE HARDCODE
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            this.ownEmail = documentSnapshot.data().accountDetail.email
            this.ownModules = documentSnapshot.data().accountDetail.modules
            
            // get pairs
            let pairRefList = documentSnapshot.data().pair
            pairRefList.forEach((ref) => {
              ref.get().then(snapshot => {
                var memberRefList = snapshot.data().members
                memberRefList.forEach((memberRef) => {
                  memberRef.get().then(snapshot => {
                    if (snapshot.exists) {
                      if (snapshot.data().accountDetail.email != 'nat@gmail.com') {//HARDCODE TO CHANGE
                        this.pairList.push(snapshot.data())
                      }
                    }
                  })
                })
              })
            })
            console.log("PAIRING")
            console.log(this.pairList)

            // get groups
            let groupRefList = documentSnapshot.data().groups
            groupRefList.forEach((ref) => {
              ref.get().then(snapshot2 => {
                if (snapshot2.exists) {
                  this.groupList.push(snapshot2.data())
                }
              })
            })
            console.log("GROUPING")
            console.log(this.groupList)
          }
        });
    },
  },
  created() {
    this.fetchItems();
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  height: 100%;
  float: right;
  border-color: #1D3557;
  border-style: solid;
  border-radius: 20px;
  padding-top: 20px;
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

#outer {
  margin: 20px;
}
</style>
