<template>
  <div>
    <Alert
      v-if="showAlert"
      type="error"
      title="Invalid email"
      text="wrong email type"
    />

    <v-expansion-panels
      v-model="panels"
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
          About</v-expansion-panel-title
        >
        <v-expansion-panel-text v-for="(item, j) in val.about" :key="j">
          <ul class="colapse-list">
            <li class="flexColapse title">First Name:</li>
            <li class="flexColapse">{{ item.firstName }}</li>

            <li class="flexColapse title">Last Name:</li>
            <li class="flexColapse">{{ item.lastName }}</li>

            <li class="colapse-email">
              Email:
              <div class="hr-btn"></div>
              <div>
                <span @click="dialog = true">
                  <v-icon :icon="item.editEmail"></v-icon>
                </span>

                <v-dialog v-model="dialog" width="350px">
                  <v-card>
                    <v-card-text>
                      <v-text-field
                        v-model="editEmail"
                        @change="handleEditEmail(item.email)"
                        label="Email"
                        required
                        variant="outlined"
                        type="email"
                        hint="Email Required"
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        :disabled="editEmail === '' ? true : false"
                        @click="saveEmail"
                        color="primary"
                        block
                      >
                        Editar</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </li>
            <li class="emails">{{ email }}</li>
            <hr />

            <li class="flexColapse title">Phone Number:</li>
            <li class="flexColapse">{{ item.phoneNumber }}</li>

            <li class="flexColapse title">Country:</li>
            <li class="flexColapse">{{ item.country }}</li>

            <li class="flexColapse title">Category:</li>
            <li class="flexColapse">{{ item.category }}</li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import Alert from "../../../../components/Alert/Alert.vue";
export default {
  components: {
    Alert,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      panels: [0, 1],
      readonly: null,
      dialog: null,
      editEmail: "",
      email: "danielle_munchen@gmail.com",
      showAlert: false,
    };
  },
  mounted() {
    this.handleEditEmail(this.email);
  },
  methods: {
    handleEditEmail(item) {
      this.email = item;
    },
    saveEmail() {
      const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
      if (emailRegex.test(this.editEmail)) {
        this.email = this.editEmail;
        this.dialog = false;
        this.editEmail = "";
      } else {
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },
  },
};
</script>
