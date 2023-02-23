<script setup>
useHead({
    title: 'PowerHuman HRIS - Select Company'
})
definePageMeta({
    layout: 'full'
})
</script>
<template>
    <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">Select Companies</div>
    <div class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Companies</label>

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