<template>
  <div class="home flex-1 flex flex-col justify-center items-center">
    <div class="banner flex flex-row justify-center items-center w-full">
      <div class="intro flex flex-col w-1/2 text-left mr-8 text-lg">
        <p class="flex flex-row items-center tracking-widest">
          <span class="block w-5 h-0.5 bg-gray-400 shadow-lg mr-2" />{{
            $t("hi")
          }}
        </p>
        <h1 class="my-6">
          <span class="name font-bold text-3xl">{{ $t("name") }}</span>
        </h1>
        <p>{{ $t("intro") }}</p>
        <div class="mt-6 w-1/3 flex flex-row brightness-50">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="item.name"
            placement="top"
            v-for="item in iconList"
            :key="item.id"
          >
            <a :href="item.link" class="mr-6">
              <span :class="`icon iconfont ${item.class}`" />
            </a>
          </el-tooltip>
        </div>
      </div>
      <div class="profile rounded saturate-50">
        <img
          src="@/assets/image/background/profile.pic.jpg"
          alt="profile"
          class="w-28 rounded saturate-200 sm:w-56"
        />
      </div>
    </div>
    <div class="skills w-full py-12 flex flex-col">
      <p class="title font-bold text-xl my-12">{{ $t("skills.title") }}</p>
      <div class="w-full flex flex-1 flex-row justify-around items-center">
        <div
          v-for="item in skillObject"
          :key="item.icon"
          class="flex flex-col w-1/4 h-80 bg-background-box p-5 rounded"
        >
          <span :class="`icon iconfont ${item.icon} text-4xl m-3`" />
          <h3 class="mb-5">{{ item.title }}</h3>
          <p class="tools">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useI18n } from "vue-i18n";
interface IconObject {
  id: string;
  name: string;
  link: string;
  class: string;
}
interface SkillObject {
  icon: string;
  title: string;
  content: string;
}
export default defineComponent({
  name: "HomeView",
  setup() {
    const { t } = useI18n();
    const iconList: IconObject[] = reactive([
      {
        id: "email",
        name: t("icon.email"),
        link: "mailto:yanan.wang.cs@gmail.com",
        class: "icon-email",
      },
      {
        id: "github",
        name: t("icon.github"),
        link: "https://github.com/Yanan-Wang-cs",
        class: "icon-github2",
      },
      {
        id: "cv",
        name: t("icon.cv"),
        link: "/doc/CV.pdf",
        class: "icon-gerenjianli",
      },
      {
        id: "google",
        name: t("icon.google"),
        link: "https://scholar.google.com/citations?user=MkHlV1sAAAAJ&hl=en&oi=sra",
        class: "icon-Google",
      },
    ]);
    const skillIcons = [
      { icon: "icon-shebeikaifa" },
      { icon: "icon-bushu" },
      { icon: "icon-zuzhijigou" },
    ];
    const skillObject: SkillObject[] = reactive(
      skillIcons.map((item, index) => {
        return {
          ...item,
          title: t(`skills.list[${index}].title`),
          content: t(`skills.list[${index}].content`),
        };
      })
    );
    console.log(skillObject);
    return { iconList, skillObject };
  },
});
</script>
<style lang="scss" scoped>
.home {
  line-height: 150%;
  background-color: $background;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  .banner {
    height: calc(100vh - 59px);
    .profile {
      background: var(--el-color-primary);
      rotate: -10deg;
      img {
        rotate: 10deg;
      }
    }
    .name {
      background-image: -webkit-linear-gradient(
        left,
        var(--el-text-color-primary) 0%,
        var(--el-text-color-primary) 49%,
        var(--el-color-primary) 50%,
        var(--el-color-primary) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .skills {
    background-color: lighten($color: $background, $amount: 8);
    height: calc(100vh - 2 * 59px);
    .tools {
      word-spacing: 10px;
    }
  }
}
</style>
