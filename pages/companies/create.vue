<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

useHead({
    title: 'PowerHuman HRIS - Create Company'
})
definePageMeta({
    layout: 'full'
})

const userStore = useUserStore()

const { isLogin } = storeToRefs(userStore)

const loading = ref(true)

const checkLogin = () => {
    console.log(isLogin.value)
    if (isLogin.value == false) {
        navigateTo("/login")
    }
}

onMounted(async () => {
    await nextTick(async () => {
        await userStore.fetchUser()
        checkLogin()
    })
    loading.value = false
})


const form = ref({
    name: '',
    logo: null
})

const createCompany = async () => {
    const { data } = await useFetch(
        "https://powerhuman-backend.test/api/company",
        {
            // mode: "no-cors",
            method: "POST",
            body: form,
            headers: {
                Authorization:
                    localStorage.getItem("token_type") +
                    " " +
                    localStorage.getItem("access_token"),
            },
        }
    );

    navigateTo("/companies")
}


</script>
<template>
    <Loading v-if="loading" />
    <section v-if="!loading" class="py-[200px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark mb-4">Create Companies</div>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Name</label>
                <input v-model="form.name" class="input-field" name="name" />
            </div>
            <div @click="createCompany" class="w-full btn btn-primary mt-[14px]">
                Save
            </div>
        </form>
    </section>
</template>