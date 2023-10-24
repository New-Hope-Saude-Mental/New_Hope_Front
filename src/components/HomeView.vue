<template>
    <!-- <img class="img img-fluid" src="../assets/img/ImgHome.png"> -->
    <div class="video-background" style="height: 100vh;">

        <div class="rainbow-overlay"></div>
        <div class="d-flex justify-content-center pt-5">

            <h2 class="pt-5" style="max-width: 55vh;z-index: 10;">
                Efeitos da hospitalização no estado emocional e psicológicos dos pacientes afetados por doenças crônicas e
                internação
            </h2>
        </div>

        <video autoplay loop muted playsinline class="background-video">
            <source src="@/assets/img/file.mp4" type="video/mp4">
            Seu navegador não suporta a reprodução de vídeos.
        </video>


    </div>
    <div class="content">
        <Home />
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
    z-index: -1;
    background-image: url('../assets/img/file.mp4');

    /* Defina o tamanho e a posição da imagem */
    background-size: cover;
    background-position: center center;

    /* Fixe a imagem no fundo */
    background-attachment: fixed;
    background-attachment: fixed;

    /* Garanta que a imagem ocupe toda a altura da janela do navegador */

}

.video-background {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.rainbow-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    /* background: linear-gradient(to bottom, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff); */
    opacity: 0.35;
    /* 5% de opacidade */
    background: var(--bg-gradient);

}

.background-video {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    object-fit: cover;
}

.content {
    position: relative;
    z-index: 1;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    /* Adicione outros estilos ao seu conteúdo */
}
</style>