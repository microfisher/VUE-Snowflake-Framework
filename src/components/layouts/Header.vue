<template>
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="@/assets/logo.png" class="w-2rem">
      <span class="ml-3 text-xl"></span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
</template>

<script setup>
  import { useLocale } from "@/stores/locale";
  //import { useWallet } from "@/stores/wallet";
  import { onMounted, onUnmounted, reactive, ref, toRefs, computed } from 'vue';

  //const wallet = useWallet();
  const locale = useLocale();

  // 钱包
  // const purse = reactive({
  //   balance : computed(() => wallet.balance),
  //   connected : computed(() => wallet.connected),
  //   confirmations: computed(() => wallet.confirmations),
  //   connect: async() =>{
  //     await wallet.connect();
  //   },
  //   disconnect: async() =>{
  //     await wallet.disconnect();
  //   }
  // });

  // 导航栏
  const navbar = reactive({
    isFixed: false,
    changeLanguage: (lang) => {
      locale.setLanguage(lang)
    },
    onScroll: () => {
      if (window.pageYOffset < 50) {
        navbar.isFixed = false;
      } else {
        navbar.isFixed = true;
      }
    },
    listen: () => {
      window.addEventListener("scroll", navbar.onScroll);
    },
    remove: () => {
      window.removeEventListener("scroll", navbar.onScroll);
    },
  });

  onMounted(() => {
    navbar.listen();
  });

  onUnmounted(()=>{
    navbar.remove();
  });
</script>

<style scoped>

</style>
