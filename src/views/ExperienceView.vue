<template>
  <div class="w-2/3 text-left mx-auto mt-10 text-2xl">
    <p class="title font-bold text-xl my-8">{{ t("menu.experience") }}</p>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in tm('experience')"
        :key="index"
        type="primary"
        size="large"
        :timestamp="activity.date"
        center
      >
        <span
          :class="`icon iconfont mr-3 ${
            activity.type === 'research' ? 'icon-icdegree' : 'icon-shebeikaifa'
          }`"
        />
        <router-link v-if="activity.link" :to="activity.link">{{
          activity.title
        }}</router-link>
        <template v-else>
          {{ activity.title }}
        </template>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "ExperienceView",
  setup() {
    const { t, tm } = useI18n();
    return { t, tm };
  },
});
</script>
