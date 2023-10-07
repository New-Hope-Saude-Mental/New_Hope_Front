<template>
    <nav class="navbar shadow">
        <div class="container-fluid d-flex">
            <div class="navbar-brand">
                <img src="src/assets/21.svg ">
                <a class="nome-empresa link-offset-2  fs-5 link-underline link-underline-opacity-0 fs-2">New Hope</a>
                <br>
                <a class="links link-offset-2  fs-5 link-underline link-underline-opacity-0">Saúde mental</a>
            </div>
            <div class="links d-flex gap-3 fs-6 justify-content-end">
                <a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Informações</a>
                <a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Perguntas frequentes</a>
                <a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Depoimentos</a>
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
.navbar {
    background-color: #e4d5cb;
}

.nome-empresa {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.links{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>