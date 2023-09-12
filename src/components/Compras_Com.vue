<template>
    <div class="hello">
        <h1>soy compras</h1>
        <v-img src="../assets/compras.jpg"></v-img>
      
    
    </div>
  </template>
  
  <script>
  export default {
    name: 'Compras_Com',
    props: {
      msg: String
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
  img{
    width: 40%;
  }
  </style>
  