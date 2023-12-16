<template>
  <v-expansion-panels
    v-model="panelCareer"
    :readonly="readonly"
    multiple
    v-for="(val, i) in data?.sidebar"
    :key="i"
    class="colapseW"
  >
    <v-expansion-panel>
      <v-expansion-panel-title class="colapse-title"
        ><img
          style="padding-right: 5px"
          src="@/assets/image/colapse.svg"
          alt=""
        />
        Career Details</v-expansion-panel-title
      >
      <v-expansion-panel-text v-for="(item, j) in val.career" :key="j">
        <ul class="colapse-list">
          <li>
            {{ item.name }}:
            <v-select
              id="selectHome"
              label="Seleciona una opcion"
              :items="['Software Developer', 'Testing']"
              variant="outlined"
            />
          </li>
          <br />
          <li class="flexColapse title">Career ID:</li>
          <li class="flexColapse">{{ item.careerId }}</li>
          <li class="flexColapse title">Type:</li>
          <li class="flexColapse">{{ item.type }}</li>
          <li class="flexColapse title">Modality:</li>
          <li class="flexColapse">{{ item.modality }}</li>
          <li class="flexColapse title">Status:</li>
          <li class="flexColapse">{{ item.status }}</li>
          <li class="flexColapse title">Student ID:</li>
          <li class="flexColapse">{{ item.studentId }}</li>
          <li class="flexColapse title">Cohorte:</li>
          <li class="flexColapse">{{ item.cohort }}</li>
        </ul>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      panelCareer: [0, 1],
      readonly: null,
    };
  },
};
</script>
