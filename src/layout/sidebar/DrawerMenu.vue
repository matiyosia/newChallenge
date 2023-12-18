<template>
  <v-navigation-drawer
    ref="siderLayaput"
    id="siderLayaput"
    expand-on-hover
    rail
    class="navigator"
    @mouseout="estado = false"
    @mouseover="estado = true"
  >
    <div class="drawerFlex">
      <RouterLink to="/">
        <v-list class="navIconHome">
          <v-list-item>
            <v-list-item-title class="flexbox-nav">
              <span class="material-icons white"> home </span>
              <p class="paragrhp-nav dash">Dashboard</p>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </RouterLink>

      <img
        v-if="!estado"
        style="
          margin-left: 10px;
          padding-top: 0px;
          padding-bottom: 0px;
          width: 15px;
        "
        src="@/assets/image/carduser/more.svg"
        alt="more"
      />
      <p v-else class="siderReport">Reports</p>

      <RouterLink to="/setting-profile">
        <v-list class="focused">
          <v-list-item>
            <v-list-item-title class="flexbox-nav">
              <span class="material-icons"> add_box </span>
              <p class="paragrhp-nav">Smart Enroller</p>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </RouterLink>
      <v-list class="focused">
        <v-list-item>
          <v-list-item-title class="flexbox-nav">
            <span class="material-icons"> outbound </span>
            <p class="paragrhp-nav">Dropout Shield</p>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list class="focused">
        <v-list-item>
          <v-list-item-title class="flexbox-nav">
            <span class="material-icons"> autorenew </span>
            <p class="textDrawerFine">Retention Partner</p>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list class="focused" @click="handleExpanded">
        <v-list-item>
          <v-list-item-title class="flexbox-nav">
            <span class="material-icons"> analytics </span>
            <p class="paragrhp-nav flexNav">
              Risk Detector
              <span v-if="isExpanded" class="material-symbols-outlined">
                expand_less
              </span>
              <span v-else class="material-symbols-outlined">expand_more</span>
            </p>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <div v-if="isExpanded" :class="{ none: !estado }">
        <ul class="ulNav">
          <li class="list-nav">
            <span class="material-icons circle"> circle </span> My Reports
          </li>
          <li class="list-nav">
            <span class="material-icons circle"> circle </span> My Reports
          </li>
          <li class="list-nav">
            <span class="material-icons circle"> circle </span> My Reports
          </li>
        </ul>
      </div>

      <v-list class="focused" @click="handleExpandedSchool">
        <v-list-item>
          <v-list-item-title class="flexbox-nav">
            <span class="material-icons"> school </span>
            <p class="paragrhp-nav flexNavs">
              Academic Offer
              <span v-if="isExpandedSchool" class="material-symbols-outlined">
                expand_less
              </span>
              <span v-else class="material-symbols-outlined expandR"
                >expand_more</span
              >
            </p>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <div v-if="isExpandedSchool" :class="{ none: !estado }">
        <ul class="ulNav">
          <li class="list-nav">
            <span class="material-icons circle"> circle </span> My Reports
          </li>
          <li class="list-nav">
            <span class="material-icons circle"> circle </span> My Reports
          </li>
          <li class="list-nav">
            <span class="material-icons circle"> circle </span> My Reports
          </li>
        </ul>
      </div>

      <v-list class="focused">
        <v-list-item>
          <v-list-item-title class="flexbox-nav">
            <span class="material-icons"> leaderboard </span>
            <p class="paragrhp-nav">My Reports</p>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list class="focused">
        <v-list-item>
          <v-list-item-title class="flexbox-nav">
            <span class="material-icons"> addchart </span>
            <p class="textDrawerFine">Custom Reports</p>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list class="focused">
        <v-list-item>
          <v-list-item-title class="flexbox-nav">
            <span class="material-icons"> account_tree </span>
            <p class="textDrawerFine">Workflows</p>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
      isExpandedSchool: false,
      drawerOpen: false,
      estado: false,
      visibility: null,
    };
  },
  methods: {
    handleExpanded() {
      this.isExpanded = !this.isExpanded;
    },
    handleExpandedSchool() {
      this.isExpandedSchool = !this.isExpandedSchool;
    },
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.expandR {
  margin-right: 4rem;
}
.none {
  display: none;
}
.textDrawerFine {
  font-size: 15px;
  font-weight: 500;
  color: #6e6b7b;
  font-style: normal;
  &:focus {
    color: #fff;
  }
}
.navigator {
  border: none !important;
  background-color: white;
}
.flexNav {
  display: flex;
  align-items: center;
  gap: 3.5rem;
}
.flexNavs {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.ulNav {
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  gap: 20px;
  margin-top: 20px;
  cursor: pointer;
  .circle {
    font-size: 12px;
  }
  .list-nav {
    color: #6e6b7b;
  }
}
.material-icons {
  fill: var(--menu-menu-button-bg-default, #fff);
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
  color: #6e6b7b;
  margin-left: -8px;
  z-index: 99999;
  position: relative;
  padding-left: 8px;
  &:focus {
    color: #fff !important;
  }
}
.flexbox-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  padding: 5px;
  border-radius: 6px 5px 5px;
}

.paragrhp-nav {
  font-size: 15px;
  font-weight: 700;
  color: #6e6b7b;
  &:focus {
    color: #fff;
  }
}

.navIconHome {
  padding: 3px 5px;
  border-radius: 6px;
  background: #4436fd !important;
  margin-bottom: 20px !important;
}

.white,
.dash {
  color: #fff !important;
}
.focused {
  background-color: var(--menu-menu-bg, #fff) !important;
  color: var(--menu-menu-button-text-default, #6e6b7b) !important;
  font-feature-settings: "clig" off, "liga" off !important;
  fill: var(--menu-menu-button-bg-default, #fff) !important;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05)) !important;
  padding: 3px 5px 0px;
  border-radius: 6px;
  margin-top: 10px !important;
  &:focus {
    background-color: #4436fd !important;
    color: white !important;
    border-radius: 6px;
    padding: 3px 5px;
    p {
      color: white !important;
    }
    .material-icons {
      color: white !important;
    }
  }
  &:hover {
    background: #f8f8f8 !important;
    border-radius: 6px !important;
    cursor: pointer !important;
    color: #6e6b7b;
    p {
      color: #6e6b7b !important;
    }
    .material-icons {
      color: #6e6b7b !important;
    }
  }
}
</style>
