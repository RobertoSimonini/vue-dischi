<script>
export default {

}
</script>


<template>
    <main class="py-5">
        <div class="container">
            <form action="">
                <div class="mb-5">
                    <label for="email" class="form-label text-light">Indirizzo Email</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com">
                </div>
                <div class="mb-5">
                    <label for="suggestion" class="form-label text-light">Suggerisci un articolo</label>
                    <textarea class="form-control" id="suggestion" name="suggestion" rows="10"></textarea>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="newsletter" name="newsletter">
                        <label class="form-check-label text-light" for="newsletter">Iscriviti alla newsletter</label>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

main {
    background-color: $main-bg-color;
    min-height: calc(100vh - 56px);
}
</style>