<template>
  <v-navigation-drawer 
    id="siderLayaput"
    expand-on-hover
    rail
  >

  
    <v-list>
      <v-list-item
      style="background: rgb(68, 54, 253); border-radius: 10px; margin:5px;padding: 10px; color: white;"
        prepend-icon="mdi-home"
        title="Dashboard"
      ></v-list-item>
    </v-list>

    <img v-if="!isExpanded" style="margin-left: 20px;padding-top: 0px; width: 15px;" src="@/assets/image/carduser/more.svg" alt="more">

    <v-list density="compact" nav >
   
    <v-list>
  <v-list-item
  style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px; "
  @click="goDirect(path)"
  value="Setting profile"
>
<v-list-subheader>REPORTS</v-list-subheader>
  <v-list-item-title ><div style="display: flex;gap: 2.5rem;"><img src="@/assets/image/sidebar/suma.svg" alt="Profile Image" /> <p>Smart Enrroller</p></div></v-list-item-title>
</v-list-item>
  <v-list-item
  style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px; "
  @click="goDirect(path)"
  value="Setting profile"
>
  <v-list-item-title ><div style="display: flex;gap: 2.5rem;"><img src="@/assets/image/sidebar/fleche.svg" alt="Profile Image" /> <p>Dropout Shield</p></div></v-list-item-title>
</v-list-item>
      
      <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      color="primary"
      
        style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px; "
        >
        <template  v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>

  
    <v-list v-model:opened="open">
    <v-list-group value="Users">
      <template v-slot:activator="{ props }">
        <v-list-item-title
          class="active"
           style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px;" v-bind="props">
          <div  style="display: flex; gap: 2rem; justify-content: space-between;">
            <img class="activeIcon" style="width: 20px; height: 20px;" src="@/assets/image/sidebar/risk.svg" alt="Profile Image" />
            <p>Risk Detector</p>
            <span>
              <img v-if="open == false" src="@/assets/image/sidebar/abajo.svg" alt="">
              <img v-else src="@/assets/image/sidebar/open.svg" alt="">
            </span>
          </div>
        </v-list-item-title>
      </template>

      <v-list-item v-for="(item, index) in riskDetectorItems" :key="index" @click="goDirect(item.path)">
        <v-list-item-title>
          <v-icon style="color: #888888; font-size: 15px;" icon="mdi-circle"></v-icon>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>


    <v-list v-model:opened="openOffer">
      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-school"
            title="Academic Offer"
            style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px; "
      
          ></v-list-item>
          
        </template>

        <v-list-item v-for="(item, index) in riskDetectorItems" :key="index" @click="goDirect(item.path)">
          <v-list-item-title><v-icon style="color: #888888; font-size: 15px;" icon="mdi-circle"></v-icon> {{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

    </v-list>


       <v-list-item
  style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px; "
  @click="goDirect(path)"
  value="Setting profile"
>
  <v-list-item-title ><div style="display: flex;gap: 2.5rem;"><img src="@/assets/image/sidebar/report.svg" alt="Profile Image" /> <p>My Report</p></div></v-list-item-title>
</v-list-item>
       <v-list-item
  style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px; "
  @click="goDirect(path)"
  value="Setting profile"
>
  <v-list-item-title ><div style="display: flex;gap: 2.5rem;"><img src="@/assets/image/sidebar/customeReport.svg" alt="Profile Image" /> <p>Custom Report</p></div></v-list-item-title>
</v-list-item>
       <v-list-item
  style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 9px; "
  @click="goDirect(path)"
  value="Setting profile"
>
  <v-list-item-title ><div style="display: flex;gap: 2.5rem;"><img src="@/assets/image/sidebar/workflow.svg" alt="Profile Image" /> <p>Workflow</p></div></v-list-item-title>
</v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import { ROUTES } from '@/config/constant';


export default {
  components:{
    ROUTES
  },
  data() {
    return {
      isExpanded: false, 
      redirect:null,
      expandedText:false,
      path:ROUTES.SETTING_PROFILE,
      isActive: false,
      open: [''],
      openOffer:[''],
      riskDetectorItems: [
        { title: 'My report', path: '/' },
        { title: 'My report', path: '/' },
        { title: 'My report', path: '/' },
      ],
      items: [
        { text: 'Retention Partner', icon: 'mdi-cached' },
      ],

    };
  },
  mounted(){
  this.handleChange()
},
  methods: {
    goDirect(route) {
      this.$router.push({ path: route });
    },
    handleDrawer(opened) {
      this.isExpanded = opened;
    },
    handleChange(e) {
      console.log(e)
    },
    toggleActive() {
      this.isActive = !this.isActive;
    }
    
  },
};
</script>
