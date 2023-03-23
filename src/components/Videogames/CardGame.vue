<script>
export default {
    name: 'CardGame',
    components: {},
    props: { videogame: Object, isDetail: Boolean }
}

</script>

<template>
    <!-- <main class="container my-5"> -->
    <router-link :to="{ name: 'videogame-details', params: { id: videogame.id } }"
        class="card my-5 text-dark text-decoration-none p-2">
        <div v-if="!isDetail" class="overlay justify-content-center align-items-center">
            <i v-for="n in 5" class="fa-star text-warning mx-1 fs-5"
                :class="n <= videogame.vote ? 'fa-solid' : 'fa-regular'"></i>
        </div>
        <div class="g-0 cover" :class="{ 'row': isDetail }">
            <div :class="{ 'col-md-4': isDetail }">
                <img v-if="videogame.img_url" :src="videogame.img_url" class="card-img-top" :alt="videogame.title">
            </div>
            <div :class="{ 'col-md-8': isDetail }">
                <div class="card-body d-flex flex-column h-100 "
                    :class="isDetail ? 'justify-content-between' : 'justify-content-center  align-items-center'">
                    <h2 class=" card-title text-center m-0">{{ videogame.title }}</h2>
                    <p v-if="isDetail" class="card-text">{{ videogame.description }}</p>
                    <ul v-if="isDetail" class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Producer: </strong>{{ videogame.producer }}</li>
                        <li class="list-group-item"><strong>Pegi: </strong>{{ videogame.pegi }}</li>
                        <li class="list-group-item"><strong>Platform: </strong>{{ videogame.platform }}</li>
                        <li class="list-group-item text-warning caption"><strong class="text-dark">Vote: </strong>{{
                            videogame.vote }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </router-link>
    <!-- </main> -->
</template>


<style lang="scss" scoped>
.card {

    position: relative;
    cursor: pointer;

    .overlay {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #000000;
        border-radius: 5px;
    }

    img {
        height: 100%;

    }

    // &:hover .cover {
    //     display: none;
    // }

    &:hover .overlay {
        display: flex;
    }
}
</style>  