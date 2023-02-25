<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user.js"
const userStore = useUserStore()


useHead({
    title: 'PowerHuman HRIS - Register',
})
definePageMeta({
    layout: 'full'
})

const form = ref({
    email: '',
    password: '',
    name:''
})

const { isLogin } = storeToRefs(userStore)


const loading = ref(true)

const checkLogin = () => {
    console.log(isLogin.value)
    if (isLogin.value == true) {
        navigateTo("/")
    }
}

onMounted(async () => {
    await nextTick(async () => {
       await userStore.fetchUser()
       checkLogin()
    })
    loading.value = false
})


async function register() {
    try {
        const { data } = await useFetch('https://powerhuman-backend.test/api/register', {
            method: 'POST',
            body: form
        })
        localStorage.setItem('access_token', data.value.result.access_token)
        localStorage.setItem('token_type', data.value.result.token_type)

        // userStore.fetchUser()
        navigateTo("/")

    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <Loading v-if="loading"/>
    <section v-if="!loading" class="py-[50px] flex flex-col items-center justify-center px-4">
        <img src="~/assets/svgs/logo-type.svg" alt="">
        <div class="text-[32px] font-semibold text-dark mt-[70px]">
            Sign Up
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Manage your employees to achieve <br> a bigger goals for your company
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Fullname Name</label>
                <input v-model="form.name" type="text" class="input-field">
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Email Address</label>
                <input v-model="form.email" type="email" class="input-field">
        </div>
        <div class="form-group">
                <label for="" class="text-grey">Password</label>
                <input v-model="form.password" type="password" class="input-field">
            </div>
            <div @click="register" class="w-full btn btn-primary mt-[14px]">
                Continue
            </div>
            <!-- <button type="button" class="w-full btn btn-primary mt-[14px]">
                            Continue
                        </button> -->
        </form>
    </section>
</template>