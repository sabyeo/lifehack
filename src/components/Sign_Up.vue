<template>
  <div class="main">
    <h1 id="title">Sign Up Page</h1> 
    <p id="desc"> Welcome to Life Hack, a web application which aims to... </p>
    <p>CONTACT DETAILS</p>  
    <p> Feel free to contact us via phone or email </p>
    <form>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name..."
        v-model="name"
      />
      <br><br>
      <input
        type="email"
        placeholder="Email address..."
        v-model="email"
      />
      <br><br>
      <input
        type="password"
        placeholder="password..."
        v-model="password"
      />
      <br><br>
      <input
        type="text"
        placeholder="Telegram User ID..."
        v-model="tele"
      />
      <br><br>
        <input
        type="text"
        placeholder="Self Introduction.."
        v-model="selfIntro"
      />
      <br><br>
      <select multiple="true" class="form-control" v-bind:class="{ 'fix-height': multiple === 'true' }" v-model="selectedMods">
        <option value="" selected disabled>Choose</option>
        <option v-for="mod in mods" :value="mod.moduleCode" :key="mod.moduleCode">{{ mod.moduleCode }}</option>
      </select>
       <br>
      <p id='mods'>Selected Modules: {{selectedMods.join(',  ')}}</p>
      <br><br>

      <button @click="register">Register</button>
  </form>
    
  </div>
</template>

<script>
import { auth, database} from "@/firebase/";
import mods from "../assets/moduleList.json"

export default {
  data() { 
    return { 
      email: '', 
      password: '', 
      name: '',
      tele: '',
      selfIntro: '',
      modules: '',
      mods: mods,
      selectedMods: null 
    }; 
  },
  methods: {
    register() {
      try { 
        auth.createUserWithEmailAndPassword(this.email, this.password);
        database.collection("user").doc(this.email).set({
            accountDetail: {email: this.email, name: this.name, tele: this.tele, password: this.password, selfIntro: this.selfIntro, modules: this.selectedMods}
          })
        this.$router.push("/sign_in");
      }
      catch (err) {
        this.error = err.message;
      }
    },
    // selectMods (event) {
    //   this.selectedMods = event.target.options[event.target.options.selectedIndex].text
    // }
  // beforeCreate: function() {
  //   document.body.className = 'about';
  // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<style scoped>
p{
    position: relative;
    text-align: left;
    margin-left: 10%;
    
}
#desc{
    font-size: 30px;
    
}

h1{
    position:relative;
    margin-left: 10%;
    margin-top:10%;
    text-align: left;
    font-size:60px;
    font-weight: lighter;
}

form{
  text-align: left;
  margin-left:10.2vw
}

input, select {
  font-size: 15px;
  padding: 5px 20px;
  width: 500px;
}

button {
  margin: 10px 0px;
  padding: 5px 20px;
  font-size: 20px;
}

#mods {
  padding-top: 10px;
  font-size: 20px
}

</style>
