<template>
  <div class="w-2/3 text-left mx-auto mt-10 text-2xl">
    <p class="title font-bold text-xl my-8">{{ t("menu.projects") }}</p>
    <el-tabs
      v-model="activeName"
      type="border-card"
      @tab-click="handleClick"
      class="mb-12"
    >
      <div class="flex flex-row text-base my-4 whitespace-normal">
        <div>
          <span class="icon iconfont icon-gongsi" />
          {{ t("projects.type.company") }}
        </div>
        <div class="ml-8">
          <span class="icon iconfont icon-github1" />
          {{ t("projects.type.personal") }}
        </div>
      </div>
      <el-tab-pane :label="t('projects.tab.developer')" name="developer">
        <el-collapse v-model="activeItem" accordion>
          <el-collapse-item
            :name="`${index}`"
            v-for="(item, index) in developerList"
            :key="index"
            class="truncate"
          >
            <template #title>
              <span
                :class="`icon iconfont mr-4 ${
                  item.classfication === 'company'
                    ? 'icon-gongsi'
                    : 'icon-github1'
                }`"
              />
              <span class="truncate">{{ item.title }}</span>
            </template>
            <div class="text-gray-500">
              {{ item.date }}
            </div>
            <div class="my-4 whitespace-pre-wrap">
              <span class="font-bold inline-block w-28"
                >{{ t("projects.label.intro") }}:</span
              >
              <span class="whitespace-normal">{{ item.intro }}</span>
            </div>
            <div class="whitespace-normal">
              <span class="font-bold inline-block w-28"
                >{{ t("projects.label.technology") }}:</span
              >{{ item.technology }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane :label="t('projects.tab.researcher')" name="researcher">
        <el-collapse v-model="activeItem" accordion>
          <el-collapse-item
            :name="`${index}`"
            v-for="(item, index) in researcherList"
            :key="index"
            class="truncate"
          >
            <template #title>
              <span
                :class="`icon iconfont mr-4 ${
                  item.classfication === 'company'
                    ? 'icon-gongsi'
                    : 'icon-github1'
                }`"
              />
              <span class="truncate">{{ item.title }}</span>

              <iframe
                v-if="item.github"
                class="ml-5"
                frameborder="0"
                scrolling="0"
                width="91px"
                height="20px"
                :src="item.github"
              ></iframe>
            </template>
            <div>
              {{ item.date }}
            </div>

            <div class="flex flex-row justify-between mt-4">
              <div class="w-1/2">
                <span class="font-bold inline-block w-28"
                  >{{ t("projects.label.intro") }}:</span
                >
                <span class="whitespace-normal">{{ item.intro }}</span>
              </div>

              <div class="ml-8 w-1/2">
                <img
                  v-if="item.img"
                  :src="item.img"
                  :alt="item.title"
                  class="w-full"
                />
              </div>
            </div>
            <div class="whitespace-normal">
              <span class="font-bold inline-block w-28"
                >{{ t("projects.label.technology") }}:</span
              >{{ item.technology }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
import type { TabsPaneContext } from "element-plus";

type myclass = "company" | "personal";
interface projectsObject {
  title: string;
  date: string;
  intro: string;
  technology: string;
  classfication: myclass;
  github?: string;
  img?: string;
}

export default defineComponent({
  name: "ProjectsView",
  setup() {
    const { t, tm } = useI18n();
    const activeName = ref("developer");
    const activeItem = ref("0");
    const developerList: projectsObject[] = reactive(tm("projects.developer"));
    const researcherList: projectsObject[] = reactive(
      tm("projects.researcher")
    );
    const handleClick = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event);
    };
    return {
      activeName,
      activeItem,
      developerList,
      researcherList,
      t,
      tm,
      handleClick,
    };
  },
});
</script>
