<template>
    <v-app>
        <h1>{{title}}</h1>
        <Card /> 
    </v-app>
</template>
<script>
    import Card from 'card.vue'
    export default {
        components: {
            Card
        },
        data () {
            return{
                title: 'Hello from Vue'
            }
        }
    }
</script>