<template>
  <div>
    <div id='left'>
      <h2>{{friend.accountDetail.name}}</h2>
      <h4>Common Modules:</h4>
      <li v-for="mod in friend.accountDetail.modules.filter(value => this.ownModules.includes(value))" v-bind:key="mod">
          {{mod}}
      </li>
    </div>
    <div id='right'>
      <a v-bind:href="'https://t.me/'+ friend.accountDetail.tele">
        <!-- HARDCODE USER TO CHANGE-->
        <button class="ui button" v-on:click='partnerMade("UA2rWxwH2XPxOypfWGZP", friend)'>CONNECT</button> 
      </a>
    </div>
  </div>
</template>

<script>
import { database } from "@/firebase/";
import firebase from "firebase";

export default {
  props: {
    friend: {
      type: Object,
    },
    ownModules: {
        type: Array,
    }
  },
  methods: {
    partnerMade: function(u1, u2) {
      const u1_ref = 'user/' + u1 // HARDCODE TO CHANGE U1
      const u2_ref = 'user/' + u2.accountDetail.email
      
      database.collection('pair').add({
        common_modules: u2.accountDetail.modules.filter(value => this.ownModules.includes(value)),
        members: [database.doc(u1_ref), database.doc(u2_ref)], 
      }).then(function(docRef) {
        const pairId = docRef.id;
        database.doc(u1_ref).update({
          pair: firebase.firestore.FieldValue.arrayUnion(database.doc('pair/' + pairId))
        })
        database.doc(u2_ref).update({
          pair: firebase.firestore.FieldValue.arrayUnion(database.doc('pair/' + pairId))
        })
      })
    }
  },
}
</script>

<style scoped>
div {
    background-color: #A8DADC;
    margin: 20px 40px;
    border-radius: 20px;
    padding: 10px 20px;
    text-align:left;
    overflow: hidden;
}

h2 {
    margin: 5px
}

h4 {
  margin: 10px 5px 5px 5px;
}

p {
    margin: 5px;
}

li {
  float: left;
  list-style-type: none;
  padding: 5px 20px 5px 5px;
}
#left {
  float: left;
  margin: 5px;
}
#right {
  float: right;
  margin: 5px;
  margin-top: 40px;
}
</style>