<script>
import GameList from '../components/Videogames/GameList.vue';
import axios from 'axios'
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'HomePage',
    components: { GameList },
    data() {
        return {
            videogames: [],
            isLoading: false,
            hasError: false,
        }
    },
    methods: {
        fetchVideoGames() {
            this.isLoading = true;
            axios.get(apiBaseUrl + 'videogames').then(res => {
                this.videogames = res.data;
            }).catch(() => {
                this.hasError = true;
            }).then(() => {
                this.isLoading = false;
            })
        }
    },
    created() {
        this.fetchVideoGames();
    }
}
</script>
   
<template>
    <app-loader v-if="isLoading"></app-loader>
    <!-- videogames -->
    <div v-else class="container">
        <!-- <error-alert :hasError="hasError" @close="hasError = false"></error-alert> -->
        <GameList :videogames="videogames" />
    </div>
</template>

<style lang="scss" scoped></style>