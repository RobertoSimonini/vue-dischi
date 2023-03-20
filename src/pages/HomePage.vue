<script>
import axios from 'axios';
import GameList from '../components/Videogames/GameList.vue';
export default {
    name: 'HomePage',
    components: { GameList },
}
</script>


<template>
    <AppLoader />
    <GameList />
</template>


<style lang="scss" scoped></style>