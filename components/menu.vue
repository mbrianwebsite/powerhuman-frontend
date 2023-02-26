<script setup>
defineProps({
    url: String,
    img: String,
    title: String
})


</script>

<template>
    <NuxtLink :to="url" class="nav-link">
        <img :src="img" alt="">
        {{ title }}
    </NuxtLink>
</template>