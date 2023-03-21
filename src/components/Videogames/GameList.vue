<script>
import CardGame from './CardGame.vue'
export default {
    name: 'GameList',
    components: { CardGame },
    props: { videogames: Array }
}

</script>

<template>
    <div class="row-cols-4 row align-items-stretch">
        <div class="col d-flex " v-for="videogame in videogames" :key="videogame.id">
            <CardGame :videogame="videogame" :isDetail="false" />
        </div>
    </div>
</template>


<style lang="scss" scoped></style>  