<script>
import axios from 'axios';
import CardGame from '../components/Videogames/CardGame.vue';
const apiBaseUrl = 'http://localhost:8000/api/videogames/';
export default {
    name: 'VideoGameDetails',
    components: { CardGame },
    data: () => ({
        videogame: null,
        isLoading: false,
    }),
    methods: {
        callVideogame() {
            this.isLoading = true;
            axios.get(apiBaseUrl + this.$route.params.id).then(res => {
                this.videogame = res.data;
            }).catch(err => {
                console.log(err)
            }).then(() => {
                this.isLoading = false;
            })
        }
    },
    created() {
        this.callVideogame();
    }
}
</script>


<template>
    <div class="container my-5">
        <CardGame :videogame="videogame" :isDetail="true" />
    </div>
</template>


<style lang="scss" scoped></style>