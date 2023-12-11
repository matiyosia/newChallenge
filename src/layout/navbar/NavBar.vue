<template>
  <v-app-bar style="background: #4436fd" name="app-bar" id="nav">
    <div class="d-flex align-center justify-space-between w-100">
      <div>
        <img
          class="mx-auto"
          style="padding-left: 22px"
          src="@/assets/image/edmachina.svg"
          alt="logo"
        />
      </div>
      <div class="d-flex align-center" style="padding: 0 10px">
        <v-avatar class="iconNav" style="color: white" :icon="web"></v-avatar>
        <img
          class="mx-auto"
          style="padding-left: 22px"
          src="@/assets/image/luna.svg"
          alt="logo"
        />

        <v-btn class="text-none" stacked>
          <v-badge content="4" color="error">
            <v-icon style="color: white">mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <div class="icon-user">
          <div class="icon-user-flex">
            <h4 class="icon-user-h4">Hellen Smit</h4>
            <p class="icon-user-p">Admin</p>
          </div>
          <div>
            <v-avatar
              style="position: relative"
              image="@/assets/image/navUser.svg"
            ></v-avatar>
            <img class="in-line" src="@/assets/image/line.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    web: "mdi-web",
    user: "https://tse2.mm.bing.net/th?id=OIP.wsfHR7AaqxCx9JGuTg3LpAHaHa&pid=Api&P=0&w=300&h=300",
    navIcon: "mdi-timelapse",
  }),
};
</script>
