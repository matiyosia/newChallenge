<template>
  <div class="details">
    <h2>Record Details / AYSI32392</h2>
    <img src="@/assets/image/iconDetail.svg" alt="icon" />
  </div>
  <div class="content">
    <v-tabs
      v-model="tab"
      style="border: none"
      align-tabs="center"
      class="border-tabs"
      id="border"
    >
      <v-tab class="content-tabs" value="one">Overview</v-tab>
      <v-tab class="content-tabs" value="two">Enrollment</v-tab>
      <v-tab class="content-tabs" value="three">Academic</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <div class="content-card">
            <div
              id="card"
              v-for="(card, i) in data.cardOverview"
              :key="i"
              style="width: 100%"
              class="custom-card"
            >
              <div class="cards">
                <div class="content-card-flex" id="avatarsFlex">
                  <div>
                    <v-avatar
                      :icon="card.icon"
                      style="
                        max-width: 42px;
                        max-height: 42px;
                        background: #91cc75;
                        border-radius: 50%;
                        color: white;
                        align-items: center;
                        margin-left: 5px;
                      "
                    ></v-avatar>
                  </div>
                  <div class="age-days" style="text-align: right; flex-grow: 1">
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                      "
                    >
                      <h2>
                        {{ card.age }}
                        <v-avatar
                          v-if="card.conf"
                          :icon="card.conf"
                          style="max-width: 20px; max-height: 20px; color: gray"
                        ></v-avatar>
                      </h2>
                      <p>{{ card.days }}</p>
                    </div>
                  </div>
                </div>
                <div
                  class="content-flex"
                  style="display: flex; justify-content: space-between"
                >
                  <p class="created">{{ card.created }}</p>
                  <p class="createDate">{{ card.createDate }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="subPanels">
            <SubPanel />
          </div>
        </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
      </v-window>
    </v-card-text>
  </div>
</template>

<script>
import SubPanel from "../timelineOverview/component/subpanel/SubPanel.vue";

export default {
  components: {
    SubPanel,
  },
  data: () => ({
    tab: null,
    withResponsive: null,
  }),
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    getViewportWidth() {
      this.withResponsive = window.innerWidth;
    },
    handleResize() {
      this.getViewportWidth();
    },
  },
  mounted() {
    this.getViewportWidth();
    window.addEventListener("resize", this.handleResize);
  },
  updated() {
    this.getViewportWidth();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
