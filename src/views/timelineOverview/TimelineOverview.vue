        <template>
            <div class="activity">
                <div class="activity-container">
                <div>
                    <p style="font-size: 18px; font-weight: 700; color: #888888;padding-left: 0.5rem;">Timeline</p>
                </div>
                <div class="activity-select">   
                <v-select
                    class="select-primary"
                    placeholder="Year"
                    label="Yaer"
                    v-model="selectedYear"
                    :items="years"
                    variant="outlined"
                ></v-select>
                <v-select
                    style="width: 140px;height: 38px;  box-shadow: none;"
                    placeholder="Filter By User"
                    label="Filter By User"
                    v-model="selectedUSer"
                    :items="name"
                    variant="outlined"
                ></v-select>

                <v-text-field
                style="width: 243px;height: 38px;  box-shadow: none;"
        :loading="loading"
        density="compact"
        variant="outlined"
        label="Search.."
        append-inner-icon="mdi-magnify"
        class="placeholder"
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
            <div class="cardTimeline">
                <v-card-text style="background:#F0F0F0" class="text--primary">
                    <div>
                        <div class="date">
                        <div>
                            <p class="date-p"><span style="color:#7367F0;">{{ item.titleColor }}</span> {{ item.subTitle }} </p>
                        </div>
                        <div>
                            <p>{{ item.date}}</p>
                        </div>
                        </div>
                        <p class="date-p-text">{{ item.text }} <span style="color: #7367F0;">{{ item.name }}</span></p>
                    </div>
                    
                </v-card-text>
            </div>
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
                icon: 'mdi-message-text',
                text: 'Whatsapp chat meeting.',
                name:'Whathsap',
                date:'Ago-23,2023-13:32',
                titleColor:'Chat Meeting',
                subTitle:'by Prof. Jean Charleton',
            },
            {
                id: 3,
                color: '#7367F0',
                icon: 'mdi-school',
                title:'Agust 2023',
                subTitle:'by Danielle Munchen Schollengberg',
                name:'Inactive',
                text: 'For:"Career Plannig and Developmen" Assignment Name:"Quiz 01",Delivered ON TIME. Grade :TBD',
                date:'Nov-23,2023-13:32',
                titleColor:'LMS Assignment Delivered'

            },
            {
                id: 4,
                color: '#7367F0',
                icon: 'mdi-phone',
                text: 'For: “Career Planning and Development”Assignment Name: “Quiz 01”, Delivered ON TIME.Grade: TBD',
                name:'Direct call',
                date:'Sep-23,2023-13:32',
                subTitle:'from Gerardo Moyano',
                titleColor:'Call'
                },
                {
                id: 5,
                color: '#7367F0',
                text: 'from Career Planning and Development,by Prof. Jean Charleton',
                name:'Direct call',
                date:'Sep-23,2023-13:32',
                titleColor:'Tag Added',
                subTitle:'Multiple Problems, Injuried, Check, Late'
                },
                {
                id: 6,
                color: '#7367F0',
                text: 'by Gerardo Moyano',
                name:'Direct call',
                date:'Sep-23,2023-13:32',
                titleColor:'Tag Added',
                subTitle:'Inactive, Control, Schollarship'

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
