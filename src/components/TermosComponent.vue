<template>
    <div class="terms-and-conditions">
        <div class="modal fade show" id="modal" tabindex="-1" role="dialog" style="display: block;"
            data-bs-backdrop="static">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Termos e Condições</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="closeModal"></button>

                    </div>
                    <div class="modal-body">
                        <!-- Conteúdo dos Termos e Condições -->

                        <h1>
                            TERMOS E CONDIÇÕES
                        </h1>
                        <p>
                            1. <strong>Aceitação dos Termos</strong>
                            Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado a estes termos e
                            condições. Se você não concordar, por favor, não use este site.

                            <br>
                            <br>

                            2. <strong>Uso do Conteúdo</strong>
                            Todo o conteúdo deste site é protegido por direitos autorais e é propriedade exclusiva da New
                            Hope. Você pode usar o conteúdo apenas para fins pessoais e não comerciais.

                            <br>
                            <br>

                            3. <strong>Privacidade</strong>
                            Nossa política de privacidade descreve como coletamos, usamos e protegemos suas informações
                            pessoais. Ao usar este site, você concorda com nossas práticas de privacidade.

                            <br>
                            <br>

                            4. <strong>Links para Terceiros</strong>
                            Este site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou
                            pelas práticas de privacidade desses sites.

                            <br>
                            <br>

                            5. <strong>Isenção de Responsabilidade</strong>
                            O uso deste site é por sua conta e risco. Não garantimos a precisão, integridade ou atualidade
                            do conteúdo. Não seremos responsáveis por quaisquer danos decorrentes do uso deste site.

                            <br>
                            <br>

                            6. <strong>Modificações</strong>
                            Reservamos o direito de modificar ou encerrar o site a qualquer momento, sem aviso prévio.

                            <br>
                            <br>

                            7. <strong>Lei Aplicável</strong>
                            Estes termos são regidos pelas leis do Brasil e qualquer disputa está sujeita à jurisdição dos
                            tribunais competentes.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="acceptTerms">Aceitar</button>
                        <button type="button" class="btn btn-secondary " data-bs-dismiss="modal"
                            @click="closeModal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {

    methods: {
        acceptTerms() {
            this.$emit("acceptTerms"); // Emitir o evento para aceitar os termos
        },

        closeModal() {
            // Verifique se o modal com o ID "myModal" existe antes de tentar fechá-lo
            var modal = document.getElementById("modal");
            if (modal) {
                modal.style.display = "none";
                window.location.href = "/";
            }
        }
    },
};
</script>
  