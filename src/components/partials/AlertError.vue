<script>
export default {
    name: 'ErrorAlert',
    props: { hasError: Boolean, errors: Object },
}
</script>

<template>
    <div v-if="hasError" class="container display-flex justify-content-center my-5">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <ul>
                <li v-for="(value, key) in errors" :key="key">{{ key }} : {{ value }}</li>
            </ul>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
    </div>
</template>