<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col">

            </div>
            <div class="col-10">
                <perguntas />
            </div>
            <div class="col ">

            </div>
        </div>

    </div>
</template>
      
    
    
    
<script>
import perguntas from "@/components/PerguntasComponent.vue"
export default {
    name: 'PerguntasView',
    methods: {

    },
    components: {
        perguntas
    },

}
</script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>