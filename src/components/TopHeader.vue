<template>
  <el-affix :offset="0">
    <nav>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
      >
        <el-menu-item index="0">
          <img
            src="/image/icon/logo-black.png"
            alt="logo"
            class="h-14"
            @click="goHome"
          />
        </el-menu-item>
        <div class="flex-grow" />
        <div v-for="(topMenu, topIndex) in headerMenu" :key="`top${topIndex}`">
          <el-menu-item :index="`${topIndex + 1}`">
            <router-link :to="topMenu === 'home' ? '/' : `/${topMenu}`">{{
              $t(`menu.${topMenu}`)
            }}</router-link>
          </el-menu-item>
        </div>
        <div class="mr-6 flex flex-col justify-center cursor-pointer">
          <span
            :class="`icon iconfont ${
              currentLanguage === 'en'
                ? 'icon-zhongyingwen'
                : 'icon-zhongyingwen2zhongwen'
            }`"
            @click="setLanguage()"
          ></span>
        </div>
      </el-menu>
    </nav>
  </el-affix>
</template>

<script lang="ts">
// import { computed, ref } from "vue";
import { defineComponent, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "TopHeader",
  setup() {
    const activeIndex = ref("1");
    const { locale } = useI18n();
    const router = useRouter();
    const headerMenu = reactive([
      "home",
      "experience",
      "projects",
      "publications",
    ]);
    const buttons = [
      { type: "primary", text: "EN" },
      { type: "primary", text: "ZH" },
    ];
    let currentLanguage = ref(locale.value);

    function setLanguage() {
      let lang = locale.value === "en" ? "zh" : "en";
      currentLanguage.value = lang;
      locale.value = lang;
    }
    function goHome() {
      router.push("/");
    }
    return {
      setLanguage,
      activeIndex,
      headerMenu,
      buttons,
      currentLanguage,
      goHome,
    };
  },
});
</script>
