<style>
    div{
        text-align:center;
    }
    .theme--light.v-application{
        background-color: transparent !important;
        max-height: 100%;
    }
    .v-application--wrap{
        min-height: 0;
    }
    h1{
        font-weight: 100;
        font-size: 2.125rem;
    }
</style>
<template>
    <div>
        <h1>{{title}}</h1>
        <Card /> 
    </div>
</template>
<script>
    import Card from './card.vue'
    export default {
        components: {
            Card
        },
        data () {
            return{
                title: 'Hello from Vue ✌'
            }
        }
    }
</script>