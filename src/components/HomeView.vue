<template>
    <!-- <img class="img img-fluid" src="../assets/img/ImgHome.png"> -->
    <div class="container-fluid home">

        <div class="row">
            <div class="col">

            </div>
            <div class="col-10">
                <Home style="margin-top: 91vh;" />
            </div>
            <div class="col ">

            </div>
        </div>

    </div>
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
    background-image: url('../assets/img/ImgHome.png');

    /* Defina o tamanho e a posição da imagem */
    background-size: cover;
    background-position: center center;

    /* Fixe a imagem no fundo */
    background-attachment: fixed;

    /* Garanta que a imagem ocupe toda a altura da janela do navegador */
    height: 100vh;

    /* Evite a repetição da imagem */
    background-repeat: no-repeat;
    height: 91vh;
}
</style>