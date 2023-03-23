<script>
import axios from 'axios';
export default {
    name: 'ContactPage',
    data() {
        return {
            form: { email: '', subject: '', message: '', subscription: false },
            isLoading: false
        }
    },
    methods: {
        sendMail() {
            this.isLoading = true;
            axios.post('http://localhost:8000/api/contact-message', this.form).then(() => {
                this.form = { email: '', subject: '', message: '', subscription: false };
            }).catch(err => {
                console.error(err);
            }).then(() => {
                this.isLoading = false;
            })
        }
    }
}
</script>


<template>
    <main class="py-5">
        <AppLoader v-if="isLoading" />
        <div v-else class="container">
            <form @submit.prevent="sendMail">
                <div class="mb-5">
                    <label for="email" class="form-label text-light">Indirizzo Email</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com"
                        v-model="form.email">
                </div>
                <div class="mb-5">
                    <label for="subject" class="form-label text-light">Oggetto</label>
                    <input type="text" class="form-control" id="subject" name="subject" v-model="form.subject">
                </div>
                <div class="mb-5">
                    <label for="message" class="form-label text-light">Suggerisci un articolo</label>
                    <textarea class="form-control" id="message" name="message" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="d-flex justify-content-center mb-5">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="subscription" name="subscription"
                            v-model="form.subscription">
                        <label class="form-check-label text-light" for="subscription">Iscriviti alla newsletter</label>
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary">Invia</button>
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