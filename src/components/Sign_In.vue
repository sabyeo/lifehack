<template>
  <div class="main">
    <h1 id="title"> Sign In page</h1> 
    <p id="desc"> Welcome to Life Hack, a web application which aims to... </p>
    <form @submit.prevent="login">     
      <h2>Login</h2>     
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
      <button type="submit">
        Login
      </button>   
  </form> 
  </div>
</template>

<script>
import { auth} from "@/firebase/";

export default {
  data() { 
    return { 
      email: '', 
      password: '', 
    }; 
  },
  methods: {
    login() {
      auth.signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.push('/main');
      })
      .catch(error => {
        alert(error.message);
      });
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
