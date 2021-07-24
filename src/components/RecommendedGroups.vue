<template>
  <div class="main">
    <h1 id="title"> Find a group </h1> 
    <p id="desc"> Here are the recommended groups:</p>
    <div v-for="item in groupList" v-bind:key="item.id" id='container'>
      <p> {{item[1]}} </p>
      <p> Number of Common Modules with your pair: {{item[0].data().common_modules.length}} </p>
     
      <button v-on:click="join_group(item)"  id = 'button'> 
        Join
      </button>
    </div>
    
  </div>
</template>

<script>

import { database, auth } from "@/firebase/";
import firebase from "firebase";

  export default {
    data() {
      return{
        groupList: [],
        pairId:this.$route.params.id,
        groupCommonModules: [],
        groupMembers: [],
        docId : null,
        grouptelee: []
        
      };
    },
    beforeCreate: function() {
      document.body.className = 'about';
    },
    methods: {
    //   get_group_modules: async function(group) {
    //     let modlist = []
    //     group.members[0].reference.get().then(snapshot => {
    //         snapshot.data().accountDetail.modules.forEach((module) => {
    //             modlist.push(module)
    //         });
    //     });
    //     console.log(modlist)
    //     await group.members.forEach((member) => {
    //         member.reference.get().then(snapshot=>{
                
    //             snapshot.data().accountDetail.modules.forEach((module) => {
    //                 if(modlist.includes(module) == false){
    //                     modlist = modlist.filter(function(e) { return e !== module })
    //                 }
    //             });
    //         });
    //     });
    //     return modlist
    //   },

    join_group: async function(item) {
        this.groupMembers = []
        this.groupMembersNames = []
        this.groupMembers.push(database.doc('pair/'+item[0].id))
        this.groupMembers.push(database.doc('pair/'+this.pairId))
        this.groupMembersNames.push(item[0].id)
        this.groupMembersNames.push(this.pairId)
        let groupMembersIDs = []
        let grouptele = []
  
        await this.groupMembersNames.forEach(id=>{
            database.collection("pair").doc(id).get().then(doc => {
                doc.data().members.forEach(member => {
                    member.get().then(snapshot => {
                        groupMembersIDs.push(snapshot.id)
                        grouptele.push(snapshot.data().accountDetail.tele)
                        
                })
            })
        })
        })
        
        
        let docid = null
        var doc = database.collection('groups').doc()
        doc.set({
                common_modules: this.groupCommonModules,
                pairs: this.groupMembers,
                groupName: 'group '+Math.floor(Math.random()*10)
            }).then(()=>{docid = doc.id}).then(()=>{
                this.docId = docid
                console.log(docid)
                console.log(groupMembersIDs)

                alert('Group has been successfully created')
            
                groupMembersIDs.forEach(item => {
                    console.log(item)
                    database
                    .collection("user")
                    .doc(item)
                    .set({ // ORIGINALLY UPDATE
                        "groups":firebase.firestore.FieldValue.arrayUnion(database.doc('groups/'+docid))
                    })
                    
                })
                
                })
        window.open('https://t.me/joinchat/cqj5u5hX604zZjRl')

        
        
        

        // this.groupMembersNames.push(itemId)
        // this.groupMembersNames.push(this.pairId)
        // console.log(this.groupMembers)
        // let already_added = false
        // await database
        // .collection("groups")
        // .get()
        // .then((querySnapShot)=>{
        //     querySnapShot.forEach((doc) => {
        //         let pairs = []
        //         doc.data().pairs.forEach((pair) => {
        //             pair.get().then(snapshot =>{
        //             pairs.push(snapshot.id)
        //             })
        //         })
        //         console.log(pairs)
        //         console.log(this.groupMembersNames)
        //         this.sameMembers(pairs,this.groupMembersNames)
        //         // console.log(this.sameMembers(pairs,this.groupMembersNames))
        //         if (this.sameMembers(pairs,this.groupMembersNames)==true && this.sameMembers(this.groupMembersNames,pairs)==true){
        //             console.log("HERE")
        //             already_added = true
        //         } 
        //     })
        // })
        // console.log(already_added)
        // if (already_added == false){
        //     console.log('ADDED SUCCESSFULLY')


        // }
        // else{
        //     alert("Already Joined Group")
        // }
    },

    fetchItems: function () { 
        var user = auth.currentUser;
        if (user){
        database
        .collection("pair")
        .get()
        .then((querySnapShot) => {
            querySnapShot.forEach((doc) => {

                if (doc.id === this.pairId) {
                    let common_modules = {}
                    common_modules = doc.data().common_modules
                    this.groupMembers = []
                
                    // console.log(common_modules)
                    database
                        .collection("pair") 
                        .get()
                        .then((querySnapShot2) => { 
                            if (querySnapShot2.id != doc.id){
                                let group_modules = {}
                                let filtered = 0
                                querySnapShot2.forEach(async (doc2) => {
                                    group_modules = doc2.data().common_modules
                                    // console.log(group_modules)
                                    // console.log(common_modules)
                                    filtered = group_modules.filter(value => common_modules.includes(value)).length
                                    console.log(filtered)
                                    this.groupCommonModules = group_modules.filter(value => common_modules.includes(value))

                                    if (filtered != 0){
                                        if (doc2.id != this.pairId){
                                            let members = []
                                            doc2.data().members.forEach((member) => {
                                                member.get().then(snapshot2 => {
                                                    members.push(snapshot2.data().accountDetail.name)
                                                })
                                            })
                                            this.groupList.push([doc2,members])
                                        
                                        }
                                    }
                                    
                                });
                            }
            
                        });
                }
            })
        });
        }
    },
    sameMembers: function(arr1,arr2){
        arr1.forEach(arr1item => {
            let matched = false
            console.log('ARRAY1 ITEM')
            console.log(arr1item)
            arr2.forEach(arr2item =>{
                console.log('ARRAY2 ITEM')
                console.log(arr2item)
                if(arr2item == arr1item){
                    matched = true
                }
            })
            if (matched == false){
                return false
            }
        })
        return true
    }
   
    },

    created() {
        this.fetchItems();
        
    },
    mounted() {
        // console.log(this.pairId)
        console.log(this.groupList)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title{
  margin-right:17%;
}
#container{
  border-style: solid;
  border-width: 2px;
  width: 80%;
  margin-left:10%;
  margin-bottom:2%;
  padding-bottom:1%;
  
}
#button{
    width:50px;
    height:30px;
}

</style>
