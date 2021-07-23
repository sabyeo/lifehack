<template>
  <div class="main">
    <h1 id="title"> Log In </h1> 
    <form @submit.prevent="login">   
      <h2>Email Address</h2>     
      <input       
        type="email"       
        placeholder="Email address..."       
        v-model="email"     
      />  
      <br><br>  
      <h2>Password</h2>  
      <input       
        type="password"       
        placeholder="Password..."       
        v-model="password"     
      />    
      <br><br>  
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
    margin-top:5%;
    text-align: left;
    font-size:60px;
    font-weight: lighter;
}

form{
  text-align: left;
  margin-left:10.2vw
}

input {
  font-size: 15px;
  padding: 5px 20px;
}

button {
  margin: 10px 0px;
  padding: 5px 20px;
  font-size: 20px;
}

</style>
