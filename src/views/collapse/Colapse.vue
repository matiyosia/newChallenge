<template>
    <div class="colapse">
      
        <v-expansion-panels
      v-model="panel"
      :readonly="readonly"
      multiple
      v-for="(val,i) in data?.sidebar"
      :key="i"
      style="width: 340px;"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="colapse-title"> <img style="padding-right: 5px;" src="@/assets/image/colapse.svg" alt=""> Detalles del estudiante</v-expansion-panel-title>
        <v-expansion-panel-text v-for="(item,j) in val.student" :key="j">
            <ul class="colapse-list">
                <li>Periodo: {{ item.period }}</li>
                <li>Estado: {{ item.status }}</li>
                <li>Colegio: {{ item.school }}</li>
                <li>Mod Admision: {{ item.admission }}</li>
                <li>Segmento: {{ item.segment }}</li>
                <li>Segmento detalle: {{ item.segment }}</li>
                <hr>
                <li><div class="flexbox"><div><p>Matematica:</p> </div><div><p>{{ item.matematica }}</p></div></div></li>
                <li><div class="flexbox"><div><p>Quimica:</p> </div><div><p>{{ item.quimica }}</p></div></div></li>
                <li><div class="flexbox"><div><p>Programación:</p> </div><div><p>{{ item.programacion }}</p></div></div></li>
                <li><div class="flexbox"><div><p>Comunicación:</p> </div><div><p>{{ item.comunicacion }}</p></div></div></li>
            </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
      </v-expansion-panels>

    
    <v-expansion-panels
    v-model="panels"
    :readonly="readonly"
      multiple
      v-for="(val,i) in data?.sidebar"
      :key="i"
      style="width: 340px;"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="colapse-title"><img style="padding-right: 5px;" src="@/assets/image/colapse.svg" alt=""> About</v-expansion-panel-title>
        <v-expansion-panel-text  v-for="(item,j) in val.about" :key="j" >
            <ul class="colapse-list">
                <li>Periodo: </li>
                <li>{{ item.period }}</li>
                <li>Nombre: </li>
                <li>{{ item.firstName}}</li>
                <li>Apellido: </li>
                <li>{{ item.lastName }}</li>
                <li class="colapse-email">Email: {{ email}}
                  <hr>
    <div >
    <span
      @click="dialog = true"
    >
    <v-icon :icon="item.editEmail"></v-icon>
    </span>

    <v-dialog
      v-model="dialog"
      width="350px"
    >
      <v-card>
        <v-card-text>
            <v-text-field
            v-model="editEmail"
            @change="handleEditEmail(item.email)"
            label="Email"
            required
          ></v-text-field>


        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveEmail"  color="primary" block> Editar</v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
                </li>
                <li>Celular: </li>
                <li>{{ item.phoneNumber }}</li>
                <li>Pais:</li>
                <li> {{ item.country }}</li>
                <li>Categoria: </li>
                <li>{{ item.category}}</li>
                
            </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-expansion-panels
      v-model="panelCareer"
      :readonly="readonly"
      multiple
      v-for="(val,i) in data?.sidebar"
      :key="i"
      style="width:340px;"
    >
      <v-expansion-panel>
        <v-expansion-panel-title class="colapse-title"><img style="padding-right: 5px;" src="@/assets/image/colapse.svg" alt=""> Carrera</v-expansion-panel-title>
        <v-expansion-panel-text v-for="(item,j) in val.career" :key="j">
            <ul class="colapse-list">
                <li>Carrera: {{ item.name }}
                    <v-select
                    label="Seleciona una opcion"
                    :items="['Software Developer', 'Testing']"
                    ></v-select>
                </li>
                <li>Carrera ID: </li>
                <li>{{ item.careerId }}</li>
                <li>Tipo: </li>
                <li>{{ item.type }}</li>
                <li>Modalidad: </li>
                <li>{{ item.modality }}</li>
                <li>Status: </li>
                <li>{{ item.status}}</li>
                <li>Estudiante ID: </li>
                <li>{{ item.studentId }}</li>
                <li>Cohorte: </li>
                <li>{{ item.cohort }}</li>
            </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div>
          <v-card width="340">

      <template v-slot:subtitle >
        <p style="color: #7367F0;font-family: 12; font-weight: 700;">Manage Widgets</p>
      </template>
    </v-card>
        </div>
    </div>
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
        panel: null,
        panels: null,
        panelCareer:null,
        readonly: false,
        dialog: false,
        editEmail:'',
        email:'danielle_munchen@gmail.com'
      }
    },
    mounted() {
        
        this.handleEditEmail(this.email)

    },
    methods: {
        handleEditEmail(item){
        this.email = item
    },
        saveEmail(){
            this.email = this.editEmail
            this.dialog = false
            this.editEmail = ''
        }
  }
      
  };
  </script>
  