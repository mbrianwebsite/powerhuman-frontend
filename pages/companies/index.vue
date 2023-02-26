<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

useHead({
    title: 'PowerHuman HRIS - Select Company'
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

const fetchCompany = async () => {
    const { data } = await useFetch(
        "https://powerhuman-backend.test/api/company",
        {
            // mode: "no-cors",
            method: "GET",
            headers: {
                Authorization:
                    localStorage.getItem("token_type") +
                    " " +
                    localStorage.getItem("access_token"),
            },
        }
    );
    console.log(data.value.result.data)
    companies.value = data.value.result.data
}

onMounted(async () => {
    await nextTick(async () => {
        await userStore.fetchUser()
        checkLogin()
        await fetchCompany()
    })
    loading.value = false
})

const companies = ref("")
const selectedCompany = ref()

</script>
<template>
    <Loading v-if="loading" />
    <section v-if="!loading" class="py-[200px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
        <div class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Companies</label>
                <!-- <p v-if="$fetchState.pending">Fetching companies...</p> -->
                <select v-model="selectedCompany" name="companies" id=""
                    class="appearance-none input-field form-icon-chevron_down">
                    <option v-for="company in companies" :value="company.id" :key="company.id">
                        {{ company.name }}
                    </option>
                </select>
            </div>
            <NuxtLink :to="`/companies/${selectedCompany}`" class="w-full btn btn-primary mt-[14px]">
                Continue
            </NuxtLink>
            <div class="text-center">or</div>
            <NuxtLink to="/companies/create" class="w-full border btn btn-white">
                Create New Company
            </NuxtLink>
        </div>
    </section>
</template>