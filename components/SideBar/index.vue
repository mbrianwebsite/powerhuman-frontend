<script setup>
import IconGrid from '~/assets/svgs/ic-grid.svg'
import IconUser from '~/assets/svgs/ic-users.svg'
import IconBrief from '~/assets/svgs/ic-briefcase.svg'
import IconFlag from '~/assets/svgs/ic-flag.svg'
import IconBox from '~/assets/svgs/ic-box.svg'
import IconHome from '~/assets/svgs/ic-home.svg'
import IconGift from '~/assets/svgs/ic-gift.svg'
import IconSetting from '~/assets/svgs/ic-settings.svg'
import IconSignout from '~/assets/svgs/ic-signout.svg'
</script>
<template>
    <!-- Sidebar -->
    <div class="hidden lg:block fixed lg:max-w-[295px] w-full overflow-y-auto h-full bg-white z-[999]" id="sidebarHRIS">
        <div class="px-6 py-[50px] gap-y-[50px] flex flex-col">
            <div class="flex items-center justify-between">
                <NuxtLink to="/" class="flex justify-center">
                    <img src="~/assets/svgs/logo-type.svg" alt="">
                </NuxtLink>
                <a href="#" id="toggleCloseSidebar" class="lg:hidden">
                    <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </a>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-sm text-grey">Daily Use</div>
                <SidebarMenu url="/overview" :img="IconGrid" title="Overview" />
                <SidebarMenu url="/companies/1/employees" :img="IconUser" title="Employees" />
                <SidebarMenu url="/companies/1/teams" :img="IconBrief" title="My Teams" />
                <SidebarMenu url="/companies/1/roles" :img="IconFlag" title="Roles" />
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-sm text-grey">Others</div>
                <SidebarMenu url="/insurance" :img="IconBox" title="Insurances" />
                <SidebarMenu url="/companies" :img="IconHome" title="Company" />
                <SidebarMenu url="/rewards" :img="IconGift" title="Rewards" />
                <SidebarMenu url="/settings" :img="IconSetting" title="Settings" />
                <SidebarMenu url="/logout" :img="IconSignout" title="LogOut" />
            </div>
        </div>
    </div>
</template>