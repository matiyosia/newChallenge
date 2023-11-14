<template>
  <v-navigation-drawer
    :class="{
      'sider': true,
      'sider-expanded': isExpanded
    }"
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
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Risk Detector"
            style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px; "
      
          ></v-list-item>
          
        </template>

        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Admin"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            :title="title"
            :prepend-icon="icon"
            :value="title"
          >
        </v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="Actions"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>

   

    
       <v-list-item style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px; " prepend-icon="mdi-school" title="Academic Offe"  value="Academic Offer"></v-list-item>

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
  style="background: white;box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 10px; padding: 10px; "
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
      path:ROUTES.SETTING_PROFILE,
      open: [''],
      admins: [

      ],
      cruds: [

      ],
      items: [
        { text: 'Retention Partner', icon: 'mdi-cached' },
      ],
    };
  },
  methods: {
    goDirect(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>


