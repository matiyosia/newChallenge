<template>
  <div class="home">
    <div>
      <div class="home-panel">
        <div v-for="(item, i) in data.sidebar" :key="i" class="homeCardW">
          <div class="home-card">
            <div>
              <img src="@/assets/image/iconUser.svg" alt="" />
            </div>
            <div>
              <h2>{{ item.name }}</h2>
              <h2>{{ item.lastName }}</h2>
              <div class="cardRegId">
                <div>
                  <p class="regID">Reg ID: {{ item.id }}</p>
                </div>
                <div>
                  <v-icon class="iconCardHome" icon=" mdi-content-copy" />
                </div>
              </div>
              <p>Status: {{ item.status }}</p>
            </div>
          </div>
          <div class="icons-users">
            <img src="@/assets/image/carduser/edit-note.svg" alt="note" />
            <img src="@/assets/image/carduser/chat.svg" alt="chat" />
            <img src="@/assets/image/carduser/calendar.svg" alt="calendar" />
            <img src="@/assets/image/carduser/email.svg" alt="email" />
            <img src="@/assets/image/carduser/phone.svg" alt="phone" />
            <img src="@/assets/image/carduser/more.svg" alt="more" />
          </div>
          <v-card-text> </v-card-text>
        </div>

        <div>
          <Colapse :data="data" />
        </div>
      </div>
    </div>

    <div class="home-content">
      <Content :data="data" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Colapse from "../collapse/Colapse.vue";
import Content from "../content/Content.vue";
import Loading from "../../components/loading/Loading.vue";
export default {
  components: {
    Colapse,
    Content,
    Loading,
  },
  mounted() {
    this.getMock();
  },
  methods: {
    ...mapActions(["getMock"]),
  },
  computed: {
    ...mapGetters(["loading", "data"]),
  },
};
</script>
