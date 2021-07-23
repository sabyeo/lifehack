

<template>
  <div class="main">
    <h1 id="title">Sign Up Page</h1> 
    <p id="desc"> Welcome to Life Hack, a web application which aims to... </p>
    <p>CONTACT DETAILS</p>  
    <p> Feel free to contact us via phone or email </p>
    <form>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email address..."
        v-model="email"
      />
      <input
        type="password"
        placeholder="password..."
        v-model="password"
      />
      <input
        type="text"
        placeholder="Name..."
        v-model="name"
      />
      <input
        type="text"
        placeholder="Telegram User ID..."
        v-model="tele"
      />
      <button @click="register">Register</button>
  </form>
    
  </div>
</template>

<script>
import { auth, database} from "@/firebase/";


export default {
  data() { 
    return { 
      email: '', 
      password: '', 
      name: '',
      tele: ''
    }; 
  },
  methods: {
    register() {
      try { 
        auth.createUserWithEmailAndPassword(this.email, this.password);
        database.collection("user").doc(this.email).set({
            accountDetail: {email: this.email, name: this.name, tele: this.tele, password: this.password}

          })
        this.$router.push("/sign_in");
      }
      catch (err) {
        this.error = err.message;
      }

    },
  // beforeCreate: function() {
  //   document.body.className = 'about';
  // }
  }
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

</style>
