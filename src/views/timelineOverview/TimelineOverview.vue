        <template>
            <div class="activity">
                <div class="activity-container">
                <div>
                    <p style="font-size: 18px; font-weight: 700; color: #888888;">Timeline</p>
                </div>
                <div class="activity-select">   
                <v-select
                    style="width: 110px;height: 38px;"
                    placeholder="Year"
                    label="Yaer"
                    v-model="selectedYear"
                    :items="years"
                    variant="solo"
                ></v-select>
                <v-select
                    style="width: 140px;height: 38px;"
                    placeholder="Filter By User"
                    label="Filter By User"
                    v-model="selectedUSer"
                    :items="name"
                    variant="solo"
                ></v-select>

                <v-text-field
                style="width: 243px;height: 38px;"
        :loading="loading"
        density="compact"
        variant="solo"
        label="Search.."
        append-inner-icon="mdi-magnify"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
        
            </div>
        </div>
        <div class="timelineContainer">
            <v-timeline side="end">
            <v-timeline-item
            v-for="(item, i) in filteredItems"
            :key="i"
            :dot-color="item.color"
            :icon="item.icon"
            :size="item.icon ? 'small' : 'x-small'" 
            >
            <p class="timeline-title">{{ item.title }}</p>
            <v-card class="cardTimeline">
                <v-card-text style="background:#F0F0F0 ;width:970px;" class="text--primary">
                    <div>
                        <div class="date">
                        <div>
                            <p class="date-p"><span style="color:#7367F0;">{{ item.titleColor }}</span> {{ item.subTitle }} </p>
                        </div>
                        <div>
                            <p>{{ item.date}}</p>
                        </div>
                        </div>
                        <p class="date-p-text">{{ item.text }}  <span style="color: #7367F0;">{{ item.name }}</span></p>
                    </div>
                    
                </v-card-text>
            </v-card>
            </v-timeline-item>
            </v-timeline>
        
        </div>
            </div>
        </template>
        
        
        <script>
        export default {
            data: () => ({
            tab: null,
            selectedYear:null,
            selectedUSer:null,
            name:[],
            years:[],
            items: [
            {
                id: 1,
                color: '#7367F0',
                icon: 'mdi-email', 
                title:'September 2023',
                titleColor:'Email Sent',
                subTitle:'by Gerardo Moyano',
                text: 'Upselling email sent. ',
                name:'Wiew Email',
                date:'Sep-23,2023-13:32'
            },
            {
                id: 2,
                color: '#7367F0',
                icon: 'mdi-calendar',
                text: 'Segundo evento',
                name:'Whathsap',
                date:'Ago-23,2023-13:32',
                titleColor:'Chat Meeting',
                subTitle:'by Gerardo Moyano',
            },
            {
                id: 3,
                color: '#7367F0',
                icon: 'mdi-school',
                title:'Agust 2023',
                subTitle:'by prof. Jean Chaleton',
                name:'Inactive',
                text: 'For:"Career Plannig and Developmen" Assignment Name:"Quiz 01",Delivered ON TIME. Grade :TBD',
                date:'Nov-23,2023-13:32'
            },
            {
                id: 4,
                color: '#7367F0',
                icon: 'mdi-phone',
                text: 'For:"Career Plannig and Developmen" Assignment Name:"Quiz 01",Delivered ON TIME. Grade :TBD',
                name:'Direct call',
                date:'Sep-23,2023-13:32'
                },
                {
                id: 5,
                color: '#7367F0',
                text: 'For:"Career Plannig and Developmen" Assignment Name:"Quiz 01",Delivered ON TIME. Grade :TBD',
                name:'Direct call',
                date:'Sep-23,2023-13:32'
                },
                {
                id: 6,
                color: '#7367F0',
                text: 'For:"Career Plannig and Developmen" Assignment Name:"Quiz 01",Delivered ON TIME. Grade :TBD',
                name:'Direct call',
                date:'Sep-23,2023-13:32'
                },
                {
                id: 7,
                color: '#7367F0',
                icon: 'mdi-school',
                title:'Agust 2023',
                subTitle:'by prof. Jean Chaleton',
                name:'Direct call',
                text: 'For:"Career Plannig and Developmen" Assignment Name:"Quiz 01",Delivered ON TIME. Grade :TBD',
                date:'Oct-23,2023-13:32'
                },
                {
                id: 8,
                color: '#7367F0',
                icon: 'mdi-school',
                title:'Agust 2023',
                subTitle:'by prof. Jean Chaleton',
                name:'tres',
                text: 'For:"Career Plannig and Developmen" Assignment Name:"Quiz 01",Delivered ON TIME. Grade :TBD',
                date:'Sep-23,2023-13:32'
                },
            ],
            }),
            mounted() {
                const year =  this.items.map(y=>{
                    return y.date
                })
                this.years = year

                const names =  this.items.map(n =>{
                    return n.name
                })
                this.name = names
        },
        computed:{
            filteredItems() {
                if (this.selectedYear) {
                return this.items.filter(item => item.date.includes(this.selectedYear));
            }else if(this.selectedUSer){
                return this.items.filter(item => item.name.includes(this.selectedUSer));
            }else{
                return this.items
            }
                
            },
        },
        }
        </script>
