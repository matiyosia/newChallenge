<template>
  <v-tabs v-model="tab" style="border: none" class="tabs-with-shadow">
    <v-tab
      class="tab-with-icon"
      style="text-transform: capitalize !important"
      value="one"
    >
      Activity</v-tab
    >
    <v-tab class="tab-with-icon" style="text-transform: capitalize !important">
      <span class="icon-text-wrapper">
        <img class="tab-icon" src="@/assets/image/email.svg" alt="" /> Email
      </span>
    </v-tab>
    <v-tab class="tab-with-icon" style="text-transform: capitalize !important">
      <span class="icon-text-wrapper">
        <img class="tab-icon" src="@/assets/image/phone.svg" alt="" /> Calls
      </span>
    </v-tab>
  </v-tabs>
  <v-card-text class="scrollTimeline">
    <v-window v-model="tab">
      <v-window-item value="one">
        <TimelineOverview />
      </v-window-item>
      <v-window-item value="two">
        <TimelineOverview />
      </v-window-item>
      <v-window-item value="three">
        <p>Contenido para Calls</p>
      </v-window-item>
    </v-window>
  </v-card-text>
</template>

<script>
import TimelineOverview from "../../TimelineOverview.vue";

export default {
  components: {
    TimelineOverview,
  },
  data() {
    return {
      tab: "one",
      emailDisabled: true,
      callsDisabled: true,
    };
  },
  methods: {
    activateTab(tab) {
      if (tab === "two") {
        this.emailDisabled = false;
      } else if (tab === "three") {
        this.callsDisabled = false;
      }
      this.tab = tab;
    },
  },
};
</script>

<style>
.tabs-with-shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.tab-with-icon {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: hsla(0, 0%, 93%, 1);
}

.icon-text-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  text-transform: capitalize !important;
  color: rgb(110, 107, 123);
  opacity: 0.4;
}

.tab-icon {
  color: #6e6b7b;
  margin-right: 5px;
}
</style>
