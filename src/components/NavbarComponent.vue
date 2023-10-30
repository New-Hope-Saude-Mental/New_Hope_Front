<template>
    <nav class="navbar shadow " style="border-bottom: 5px solid;border-color: #767676;">
        <div class="container-fluid d-flex ">
            <div class="navbar-brand d-flex ">
                <img src="../assets/img/LogoOfc.jpeg" style="height: 4rem;" @click="$router.push({ path: '/' })">
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
                <a class="text link-offset-2 link-underline link-underline-opacity-0" href="#"
                    @click="$router.push({ path: '/Informacoes' })">Informações</a>
                <a class="text link-offset-2 link-underline link-underline-opacity-0" href="#"
                    @click="$router.push({ path: '/Perguntas' })">Perguntas frequentes</a>
                <a class="text link-offset-2 link-underline link-underline-opacity-0" href="#"
                    @click="$router.push({ path: '/Depoimentos' })">Depoimentos</a>
                <a class="text link-offset-2 link-underline link-underline-opacity-0" href="#"
                    @click="$router.push({ path: '/Termos' })">Termos</a>
            </div>
        </div>

    </nav>
</template>
  



<script>

export default {
    name: 'NavbarComponent',
    methods: {

    },
    components: {

    },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .fs {
    font-size: small;
} */
@import url(https://fonts.google.com/specimen/Sometype+Mono?query=somet);
.dvlogo {
    height: 17px;
}

.navbar {
    background-color: #8C8C8C;
}

.nome-empresa {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: #E3E3E3;
}

.links {
    font-family: 'Sometype Mono', sans-serif;
    color: #E3E3E3;
}

.text{
    font-family: 'Sometype Mono', sans-serif;
    color: #E3E3E3;
}
</style>