<template>
    <nav class="navbar shadow " style="border-bottom: 5px solid;border-color: rgba(145, 110, 58, 0.808);">
        <div class="container-fluid d-flex ">
            <div class="navbar-brand d-flex ">
                <img src="../assets/img/logo6.png" style="height: 4rem;" @click="$router.push({ path: '/' })">
                <div class="d-block" @click="$router.push({ path: '/' })">
                    <div class="dvlogo">
                        <a class="text-start fs-3 nome-empresa link-offset-2 link-underline link-underline-opacity-0 ">New
                            Hope</a>
                    </div>
                    <div class="dvlogo pt-3">
                        <a class="fs-6 links link-offset-2   link-underline link-underline-opacity-0">Saúde mental</a>
                    </div>
                </div>
            </div>
            <div class="links d-flex gap-4 justify-content-end">
                <a class="link-offset-2 link-underline link-underline-opacity-0" href="#"
                    @click="$router.push({ path: '/Depoimentos' })">Informações</a>
                <a class="link-offset-2 link-underline link-underline-opacity-0" href="#"
                    @click="$router.push({ path: '/Informacoes' })">Perguntas frequentes</a>
                <a class="link-offset-2 link-underline link-underline-opacity-0" href="#"
                    @click="$router.push({ path: '/Perguntas' })">Depoimentos</a>
            </div>
        </div>

    </nav>

    <teste />
</template>
  



<script>
import teste from "@/components/HomeComponent.vue"
export default {
    name: 'NavbarComponent',
    methods: {

    },
    components: {
        teste
    },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .fs {
    font-size: small;
} */

.dvlogo {
    height: 17px;
}

.navbar {
    background-color: #e4d5cb;
}

.nome-empresa {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.links {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>