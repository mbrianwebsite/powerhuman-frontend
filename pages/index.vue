<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore()
const router = useRouter();


useHead({
    title: 'PowerHuman HRIS - Select Company'
})
definePageMeta({
    layout: 'full'
})

const { isLogin } = storeToRefs(userStore)

const loading = ref(true)

const checkLogin = () => {
    console.log(isLogin.value)
    if (isLogin.value == false) {
        router.push({ path: '/login' })
    }
}

onMounted(async () => {
    await nextTick(async () => {
       await userStore.fetchUser()
       checkLogin()
    })
    loading.value = false
})

</script>
<template>
    <Loading v-if="loading"/>
    <section v-else class="py-[200px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
        <div class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Companies {{ isLogin }}</label>

                <!-- <p v-if="$fetchState.pending">Fetching companies...</p> -->
                <select name="companies" id="" class="appearance-none input-field form-icon-chevron_down">
                    <!-- <option :value="company.id" v-for="company in companies.data.result.data">
                                                                                                                                                                                                                                                                                                                                                                                        {{ company.name }}
                                                                                                                                                                                                                                                                                                                                                                                    </option> -->
                    <option value="">blablabla</option>
                    <option value="">blablabla</option>
                    <option value="">blablabla</option>
                    <option value="">blablabla</option>
                </select>
            </div>
            <button type="button" class="w-full btn btn-primary mt-[14px]">
                Continue
            </button>
            <div class="text-center">or</div>
            <NuxtLink to="/companies/create" class="w-full border btn btn-white">
                Create New Company
            </NuxtLink>
        </div>
    </section>
</template>