<template>
    <footer class="text-center text-lg-start bg-light text-muted">
            <section class=""  style="background-color: #d0bbae;">
                <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3" style="padding-top:20px;">

                        <div class="col-xl-3 mx-auto">
                            <img src="../assets/img/logo6.png" style="height: 4rem;">
                            <p class="fs">
                                <strong>New Hope</strong>
                                <br>
                                Saúde Mental
                            </p>
            
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                Navegacão
                            </h6>
                            <p>
                                <a class="text-reset" @click="$router.push({ path: '/Informacoes' })">Informações</a>
                            </p>
                            <p>
                                <a class="text-reset" @click="$router.push({ path: '/Perguntas' })">Perguntas Frequentes</a>
                            </p>
                            <p>
                                <a class="text-reset" @click="$router.push({ path: '/Depoimentos' })">Depoimentos</a>
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


        <div class="text-center p-4" style="background-color: #b69d8e;">
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


<style></style>