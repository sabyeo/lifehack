<template>
  <div class="main">
    <h1 id="title"> You have been linked with a group!</h1> 
    <p id="desc"> Here are the group members you have linked up with: </p> 
    <p> Feel free to contact us via phone or email </p>
    <p> {{this.test}} </p>
    <p class="contactbody"> <img src="../assets/Home.png" width=30px> NUS School of Computing, COM1, 13, Computing Dr, 117417</p>
    <p class="contactbody"> <img src="../assets/Phone.png" width=30px> +65 6253 3762</p>

  </div>
</template>

<script>
  export default {
       beforeCreate: function() {
          document.body.className = 'about';
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
