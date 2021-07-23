<template>
  <div class="main">
    <h1 id="title">Sign Up Page</h1> 
    <p id="desc"> Create an account and start making some friends in class!</p>

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
      <select multiple="true" data-live-search="true" v-bind:class="{ 'fix-height': multiple === 'true' }" v-model="selectedMods">
        <option value="" selected disabled>Choose</option>
        <option v-for="mod in mods" :value="mod.moduleCode" :key="mod.moduleCode">{{ mod.moduleCode }}</option>
      </select>
       <br>
      <span>Selected Modules: {{selectedMods}}</span>
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