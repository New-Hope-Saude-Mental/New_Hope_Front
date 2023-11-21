<template>
    <footer class="text-center text-lg-start bg-light text-muted zi justify-content-end">
        <section class="" style="background-color: #8C8C8C;">
            <div class="container text-center text-md-start">

                <div class="row" style="padding-top:20px; color: #E3E3E3">
                    <div class="col-lg-2 ">
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



                    <div class=" col-lg-2   mb-4 ">
                        <div class="text text-uppercase fw-bold mb-4">
                            Desenvolvido por:
                        </div>
                        <div>
                            Larrissa
                        </div>
                        <div>
                            William
                        </div>
                        <div>

                            <a class=" text text-reset" data-bs-toggle="modal" data-bs-target="#exampleModal">Mais
                                Informações.</a>
                            <!-- <button data-bs-toggle="modal" data-bs-target="#Infos">teste</button> -->
                        </div>
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5 text-black" id="exampleModalLabel">Desenvolvedores.</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body  text-black">
                                    <div class="d-flex flex-column">
                                        <div class="d-flex flex-column mt-3">
                                            <h4>
                                                Participantes:
                                            </h4>
                                            <h5>
                                                Larissa de Oliveira Santos.
                                            </h5>
                                            <div class="d-flex">
                                                <h6>
                                                    <Strong>Email:</Strong>
                                                </h6>
                                                <h6>
                                                    larisan970@gmail.com
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column mt-3">
                                            <h5>
                                                William Victor Soares Silva Marques Fraga.
                                            </h5>
                                            <div class="d-flex">
                                                <h6>
                                                    <Strong>Email:</Strong>
                                                </h6>
                                                <h6>
                                                    william.fraga@fatec.sp.gov.br
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3">
                                        <div class="d-flex">
                                            <h6>
                                                <Strong> Cursando:</Strong>
                                            </h6>
                                            <h6>
                                                Desenvolvimento de Software Multiplataforma. 4°Semestre
                                            </h6>
                                        </div>
                                        <div class="d-flex">
                                            <h6>
                                                <Strong> Instituição de ensino:</Strong>
                                            </h6>
                                            <h6>
                                                Fatec Zona Sul - Dom Paulo Evaristo Arns
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-lg-2  mx-auto mb-4">

                        <h6 class="text text-uppercase fw-bold mb-4">
                            Navegacão
                        </h6>
                        <p>
                            <a class="text text-reset" @click="$router.push({ path: '/Informacoes' })">Informações</a>
                        </p>
                        <p>
                            <a class="text text-reset" @click="$router.push({ path: '/Perguntas' })">Perguntas
                                Frequentes</a>
                        </p>
                        <p>
                            <a class="text text-reset" @click="$router.push({ path: '/Depoimentos' })">Depoimentos</a>
                        </p>
                    </div>

                    <div class="col-lg-2 col-lg-3  mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">Contate-nos</h6>

                        <i class="fas fa-envelope "></i>
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

.text {
    font-family: 'Sometype Mono', sans-serif;
    color: #E3E3E3;
}
</style>