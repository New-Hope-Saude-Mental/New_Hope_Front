<template>
    <footer class="text-center text-lg-start bg-light text-muted zi justify-content-end">
        <section class="" style="background-color: #8C8C8C;">
            <div class="container text-center text-md-start">

                <div class="row" style="padding-top:20px; color: #E3E3E3">
                    <div class="col-xl-3 mx-auto">
                        <img src="../assets/img/LogoOfc.jpeg" style="height: 4rem;" @click="$router.push({ path: '/' })">
                        <div class="d-block" @click="$router.push({ path: '/' })">
                            <div class="dvlogo">
                                <a
                                    class="text-start fs-3 nome-empresa link-offset-2 link-underline link-underline-opacity-0 "><strong>New
                                    Hope</strong></a>
                                    <br>
                                <a class="fs-6 links link-offset-2   link-underline link-underline-opacity-0">Saúde
                                    mental</a>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="col-xl-3 mx-auto">
                        <img src="../assets/img/LogoOfc.jpeg" style="height: 4rem;">
                        <p class="fs">
                            <strong>New Hope</strong>
                            <br>
                            Saúde Mental
                        </p>

                    </div> -->

                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text text-uppercase fw-bold mb-4">
                            Navegacão
                        </h6>
                        <p>
                            <a class="text text-reset" @click="$router.push({ path: '/Informacoes' })">Informações</a>
                        </p>
                        <p>
                            <a class="text text-reset" @click="$router.push({ path: '/Perguntas' })">Perguntas Frequentes</a>
                        </p>
                        <p>
                            <a class="text text-reset" @click="$router.push({ path: '/Depoimentos' })">Depoimentos</a>
                        </p>
                    </div>

                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">Contate-nos</h6>

                        <i class="fas fa-envelope me-3"></i>
                        trabalhosit2@gmail.com

                    </div>

                </div>

            </div>
        </section>


        <div class="text-center p-4" style="background-color: #767676; color: #E3E3E3">
            © 2023 Copyright:
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">NewHope</a>
        </div>

    </footer>
</template>



<script>
export default {
    name: 'FooterComponent',
    methods: {

    },
    components: {

    },

}
</script>


<style>
@import url(https://fonts.google.com/specimen/Sometype+Mono?query=somet);

.zi {
    z-index: 10;
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