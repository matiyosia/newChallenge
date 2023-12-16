<template>
  <div class="colapse">
    <v-expansion-panels
      v-model="panel"
      :readonly="readonly"
      multiple
      v-for="(val, i) in data?.sidebar"
      :key="i"
      class="colapseW"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="colapse-title">
          <img
            style="padding-right: 5px"
            src="@/assets/image/colapse.svg"
            alt=""
          />Sobre el estudiante</v-expansion-panel-title
        >
        <v-expansion-panel-text v-for="(item, j) in val.student" :key="j">
          <ul class="colapse-list">
            <li>Periodo: {{ item.period }}</li>
            <li>Status: {{ item.status }}</li>
            <li>Colegio: {{ item.school }}</li>
            <li>Mod Admision: {{ item.admission }}</li>
            <li>Segmento: {{ item.segment }}</li>
            <li>Segmento detalle: {{ item.segment }}</li>
            <h2 class="risk-detail">Detalle Riesgo de Ingreso:</h2>
            <div class="hr-btn"></div>
            <li>
              <div class="flexbox">
                <div><p class="flex-width">Matematica:</p></div>
                <div>
                  <p class="items-column">{{ item.matematica }}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flexbox">
                <div><p class="flex-width">Quimica:</p></div>
                <div>
                  <p class="items-column">{{ item.quimica }}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flexbox">
                <div><p class="flex-width">Programación:</p></div>
                <div>
                  <p class="items-column">{{ item.programacion }}</p>
                </div>
              </div>
            </li>
            <li>
              <div class="flexbox">
                <div><p class="flex-width">Comunicación:</p></div>
                <div>
                  <p class="items-column">{{ item.comunicacion }}</p>
                </div>
              </div>
            </li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <ColapseAbout :data="data" />

    <ColapseCareerDetail :data="data" />

    <div>
      <div class="manage">
        <div>
          <p class="p-manage">Manage Widgets</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "../../components/Alert/Alert.vue";
import ColapseAbout from "./components/colapseAbout/ColapseAbout.vue";
import ColapseCareerDetail from "./components/colapseCareerDetail/ColapseCareerDetail.vue";
export default {
  components: {
    Alert,
    ColapseAbout,
    ColapseCareerDetail,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      panel: [0, 1],
      readonly: null,
      dialog: null,
    };
  },
};
</script>
