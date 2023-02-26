<script setup>
useHead({
    title: 'PowerHuman HRIS - Login',
})
definePageMeta({
    layout: 'full'
})

const form = ref({
    email: '',
    password: ''
})

</script>

<template>
    <section class="py-[50px] flex flex-col items-center justify-center px-4">
        <img src="~/assets/svgs/logo-type.svg" alt="">
        <div class="text-[32px] font-semibold text-dark mt-[70px]">
            Sign In
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Manage your employees to achieve <br> a bigger goals for your company
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Email Address</label>
                <input v-model="form.email" type="email" class="input-field">
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Password</label>
                <input v-model="form.password" type="password" class="input-field">
            </div>
            <div @click="login" class="w-full btn btn-primary mt-[14px]">
                Sign In
            </div>
        </form>
    </section>
</template>