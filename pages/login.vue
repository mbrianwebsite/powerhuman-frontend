<script setup>

import { useUserStore } from "@/stores/user.js"
const userStore = useUserStore()
const router = useRouter();


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

async function login() {
    try {
        const { data } = await useFetch('https://powerhuman-backend.test/api/login', {
            method: 'POST',
            body: form
        })
        localStorage.setItem('access_token', data.value.result.access_token)
        localStorage.setItem('token_type', data.value.result.token_type)

        userStore.fetchUser()
        router.push({ path: "/" });

    } catch (error) {
        console.error(error);
    }
}
// const login = async () => {
//     const { data } = await useFetch('https://powerhuman-backend.test/api/login', {
//         method: 'POST',
//         body: form
//         // method: 'GET',
//         // mode: 'no-cors',
//         // body: Array
//     })
//     console.log(data.value.result)
// }

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
            <!-- <button type="button" class="w-full btn btn-primary mt-[14px]">
                                                                                                                                                                                                                                                                    Sign In
                                                                                                                                                                                                                                                                </button> -->
        </form>
    </section>
</template>