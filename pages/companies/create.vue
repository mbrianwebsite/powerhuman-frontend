<script setup>
useHead({
    title: 'PowerHuman HRIS - Create Company'
})
definePageMeta({
    layout: 'full'
})

const form = ref({
    name: '',
    logo: null
})


</script>
<template>
    <section class="py-[200px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark mb-4">Create Companies</div>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Name</label>
                <input v-model="form.name" class="input-field" name="name" />
            </div>
            <NuxtLink to="/" class="w-full btn btn-primary mt-[14px]">
                Save
            </NuxtLink>
        </form>
    </section>
</template>