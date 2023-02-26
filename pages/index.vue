<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore()


useHead({
    title: 'PowerHuman HRIS - Select Company'
})
definePageMeta({
    layout: 'default'
})

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

</script>
<template>
    <Loading v-if="loading"/>
    <div class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">
        <!-- Top Section -->
        <section class="flex flex-col flex-wrap justify-between gap-6 md:items-center md:flex-row">
            <div class="flex items-center justify-between gap-4">
                <a href="#" id="toggleOpenSidebar" class="lg:hidden">
                    <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7">
                        </path>
                    </svg>
                </a>
                <div class="text-[32px] font-semibold text-dark">
                    Overview
                </div>
            </div>
            <div class="flex items-center gap-4">
                <form class="shrink md:w-[516px] w-full">
                    <input type="text" name="" id="" class="input-field !outline-none !border-none italic form-icon-search ring-indigo-200
                        focus:ring-2 transition-all duration-300 w-full" placeholder="Search people, team, project">
                </form>
                <a href="#"
                    class="flex-none w-[46px] h-[46px] bg-white rounded-full p-[11px] relative notification-dot">
                    <img src="~/assets/svgs/ic-bell.svg" alt="">
                </a>
            </div>
        </section>

        <section class="pt-[50px]">
            <!-- Section Header -->
            <div class="mb-[30px]">
                <div class="flex items-center justify-between gap-6">
                    <div>
                        <div class="text-xl font-medium text-dark">
                            Statistics
                        </div>
                        <p class="text-grey">Your business growth</p>
                    </div>
                </div>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
                <div class="card !gap-y-10 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Employees</p>
                            <div class="text-[32px] font-bold text-dark mt-[6px]">
                                18,500,000
                            </div>
                        </div>
                        <a href="employee_create.html">
                            <img src="~/assets/svgs/ric-plus.svg" alt="">
                        </a>
                    </div>
                    <div class="flex items-center union-images">
                        <img src="~/assets/images/user-f-3.png" alt="">
                        <img src="~/assets/images/user-m-1.png" alt="">
                        <img src="~/assets/images/user-f-1.png" alt="">
                        <img src="~/assets/images/user-m-2.png" alt="">
                        <img src="~/assets/images/user-f-2.png" alt="">
                    </div>
                </div>
                <div class="card !gap-y-10 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Teams</p>
                            <div class="text-[32px] font-bold text-dark mt-[6px]">
                                122,000
                            </div>
                        </div>
                        <a href="#">
                            <img src="~/assets/svgs/ric-plus.svg" alt="">
                        </a>
                    </div>
                    <div class="flex items-center union-images">
                        <img src="~/assets/svgs/ric-award.svg" alt="">
                        <img src="~/assets/svgs/ric-globe.svg" alt="">
                        <img src="~/assets/svgs/ric-target.svg" alt="">
                        <img src="~/assets/svgs/ric-box.svg" alt="">
                    </div>
                </div>
                <div class="card !gap-y-10 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-grey">Projects</p>
                            <div class="text-[32px] font-bold text-dark mt-[6px]">
                                150,000,000
                            </div>
                        </div>
                        <a href="#">
                            <img src="~/assets/svgs/ric-plus.svg" alt="">
                        </a>
                    </div>
                    <div class="flex items-center union-images">
                        <span
                            class="flex flex-col justify-center text-xs font-semibold text-center text-purple-500 bg-purple-100">SK</span>
                        <span
                            class="flex flex-col justify-center text-xs font-semibold text-center text-yellow-500 bg-yellow-100">DW</span>
                        <span
                            class="flex flex-col justify-center text-xs font-semibold text-center bg-sky-100 text-sky-500">FJ</span>
                        <span
                            class="flex flex-col justify-center text-xs font-semibold text-center text-orange-500 bg-orange-100">AP</span>
                        <span
                            class="flex flex-col justify-center text-xs font-semibold text-center text-green-500 bg-green-100">ML</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="pt-[50px]">
            <div class="grid md:grid-cols-2 gap-11">
                <!-- Documents -->
                <div>
                    <!-- Section Header -->
                    <div class="mb-[30px]">
                        <div class="flex items-center justify-between gap-6">
                            <div>
                                <div class="text-xl font-medium text-dark">
                                    Documents
                                </div>
                                <p class="text-grey">Standard procedure</p>
                            </div>
                        </div>
                    </div>
                    <div class="card md:min-h-[468px]">
                        <!-- Customer Guide -->
                        <div class="flex items-center justify-between pb-5 border-b border-gray-100">
                            <div class="flex items-center gap-4">
                                <img src="~/assets/svgs/ric-archive.svg" alt="">
                                <div>
                                    <div class="mb-1 font-semibold text-dark">
                                        Customer Guide
                                    </div>
                                    <p class="text-sm text-grey">180 MB • PDF</p>
                                </div>
                            </div>
                            <a href="#">
                                <img src="~/assets/svgs/ric-download.svg" alt="">
                            </a>
                        </div>
                        <!-- Twitch Record -->
                        <div class="flex items-center justify-between pb-5 border-b border-gray-100">
                            <div class="flex items-center gap-4">
                                <img src="~/assets/svgs/ric-twitch.svg" alt="">
                                <div>
                                    <div class="mb-1 font-semibold text-dark">
                                        Twitch Record
                                    </div>
                                    <p class="text-sm text-grey">700 GB • MP4</p>
                                </div>
                            </div>
                            <a href="#">
                                <img src="~/assets/svgs/ric-download.svg" alt="">
                            </a>
                        </div>
                        <!-- Personas Datasets -->
                        <div class="flex items-center justify-between pb-5 border-b border-gray-100">
                            <div class="flex items-center gap-4">
                                <img src="~/assets/svgs/ric-database.svg" alt="">
                                <div>
                                    <div class="mb-1 font-semibold text-dark">
                                        Personas Datasets
                                    </div>
                                    <p class="text-sm text-grey">11 GB • CSV</p>
                                </div>
                            </div>
                            <a href="#">
                                <img src="~/assets/svgs/ric-download.svg" alt="">
                            </a>
                        </div>
                        <!-- Marketing Book -->
                        <div class="flex items-center justify-between pb-5 border-b border-gray-100">
                            <div class="flex items-center gap-4">
                                <img src="~/assets/svgs/ric-book.svg" alt="">
                                <div>
                                    <div class="mb-1 font-semibold text-dark">
                                        Marketing Book
                                    </div>
                                    <p class="text-sm text-grey">891 MB • PDF</p>
                                </div>
                            </div>
                            <a href="#">
                                <img src="~/assets/svgs/ric-download.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>

                <!-- History -->
                <div>
                    <!-- Section Header -->
                    <div class="mb-[30px]">
                        <div class="flex items-center justify-between gap-6">
                            <div>
                                <div class="text-xl font-medium text-dark">
                                    History
                                </div>
                                <p class="text-grey">Track the flow</p>
                            </div>
                        </div>
                    </div>
                    <div class="card min-h-[468px]">
                        <!-- Item -->
                        <div class="flex items-center justify-between pb-5 border-b border-gray-100">
                            <div class="flex items-center gap-4">
                                <img src="~/assets/images/user-f-1.png" width="60" alt="">
                                <div>
                                    <div class="mb-1 font-semibold text-dark">
                                        Amalia Syahrina
                                    </div>
                                    <p class="text-sm text-grey">Promoted to Sr. Website Designer</p>
                                </div>
                            </div>
                        </div>
                        <!-- Item -->
                        <div class="flex items-center justify-between pb-5 border-b border-gray-100">
                            <div class="flex items-center gap-4">
                                <img src="~/assets/images/user-m-2.png" width="60" alt="">
                                <div>
                                    <div class="mb-1 font-semibold text-dark">
                                        Ah Park Yo
                                    </div>
                                    <p class="text-sm text-grey">Promoted to Front-End Developer</p>
                                </div>
                            </div>
                        </div>
                        <!-- Item -->
                        <div class="flex items-center justify-between pb-5 border-b border-gray-100">
                            <div class="flex items-center gap-4">
                                <img src="~/assets/images/user-f-2.png" width="60" alt="">
                                <div>
                                    <div class="mb-1 font-semibold text-dark">
                                        Sintia Siny
                                    </div>
                                    <p class="text-sm text-grey">Promoted to Accounting Executive</p>
                                </div>
                            </div>
                        </div>
                        <!-- Item -->
                        <div class="flex items-center justify-between pb-5 border-b border-gray-100">
                            <div class="flex items-center gap-4">
                                <img src="~/assets/images/user-m-1.png" width="60" alt="">
                                <div>
                                    <div class="mb-1 font-semibold text-dark">
                                        Jerami Putu
                                    </div>
                                    <p class="text-sm text-grey">Promoted to Quality Manager</p>
                                </div>
                            </div>
                        </div>
                        <!-- Item -->
                        <div class="flex items-center justify-between pb-5 border-b border-gray-100">
                            <div class="flex items-center gap-4">
                                <img src="~/assets/images/user-f-1.png" width="60" alt="">
                                <div>
                                    <div class="mb-1 font-semibold text-dark">
                                        Amalia Syahrina
                                    </div>
                                    <p class="text-sm text-grey">Promoted to Sr. Website Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>