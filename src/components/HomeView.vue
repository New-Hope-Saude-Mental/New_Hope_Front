<template>
    <!-- <img class="img img-fluid" src="../assets/img/ImgHome.png"> -->
    <div class="home" style="height: 93vh;">




    </div>
    <Home />
</template>
      
    
    
    
<script>
import Home from "@/components/HomeComponent.vue"
export default {
    name: 'HomeView',
    methods: {

    },
    components: {
        Home
    },

}
</script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .img {
    width: 300%;
    text-align: top;
} */

.home {
    z-index: -1;
    background-image: url('../assets/img/ImgHome.png');

    /* Defina o tamanho e a posição da imagem */
    background-size: cover;
    background-position: center center;

    /* Fixe a imagem no fundo */
    background-attachment: fixed;

    /* Garanta que a imagem ocupe toda a altura da janela do navegador */

}
</style>