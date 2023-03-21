<script>
export default {
    name: 'CardGame',
    components: {},
    props: { videogame: Object, isDetail: Boolean }
}

</script>

<template>
    <div class="card mb-3">
        <div class="g-0" :class="{ 'row': isDetail }">
            <div :class="{ 'col-md-4': isDetail }">
                <img v-if="videogame.img_url" :src="videogame.img_url" class="card-img-top" :alt="videogame.title">
            </div>
            <div :class="{ 'col-md-8': isDetail }">
                <div class="card-body d-flex flex-column align-items-center h-100 "
                    :class="isDetail ? 'justify-content-between' : 'justify-content-center'">
                    <h2 class=" card-title text-center m-0">{{ videogame.title }}</h2>
                    <p v-if="isDetail" class="card-text">{{ videogame.description }}</p>
                    <ul v-if="isDetail" class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Producer: </strong>{{ videogame.producer }}</li>
                        <li class="list-group-item"><strong>Pegi: </strong>{{ videogame.pegi }}</li>
                        <li class="list-group-item"><strong>Platform: </strong>{{ videogame.platform }}</li>
                        <li class="list-group-item text-warning"><strong class="text-dark">Vote:
                            </strong>{{ videogame.vote }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
img {
    height: 100%;
}
</style>  