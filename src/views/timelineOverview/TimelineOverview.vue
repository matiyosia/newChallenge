<template>
  <div class="activity">
    <div class="activity-container">
      <div>
        <p
          style="
            font-size: 18px;
            font-weight: 700;
            color: #888888;
            padding-left: 0.5rem;
          "
        >
          Timeline
        </p>
      </div>
      <div class="activity-select">
        <v-select
          class="select-primary"
          placeholder="Year"
          label="Year"
          v-model="selectedYear"
          :items="years"
          variant="outlined"
        ></v-select>
        <v-select
          style="width: 180px; height: 38px; box-shadow: none"
          placeholder="Filter By User"
          label="Filter By User"
          v-model="selectedUSer"
          :items="name"
          variant="outlined"
        ></v-select>

        <v-text-field
          style="width: 243px; height: 38px; box-shadow: none"
          density="compact"
          variant="outlined"
          label="Search.."
          append-inner-icon="mdi-magnify"
          class="placeholder"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </div>
    </div>
    <div class="timelineContainer">
      <v-timeline side="end" class="timelimeCustom">
        <v-timeline-item
          v-for="(item, i) in filteredItems"
          style="font-size: 0.7rem; width: 100%;"
          :key="i"
          :dot-color="item.color"
          :icon="item.icon"
          :size="item.icon ? 'small' : 'x-small'"
        >
          <p class="timeline-title">{{ item.title }}</p>
          <div class="cardTimeline">
            <v-card-text
              style="background: #f0f0f0; width: 100%"
              class="text--primary"
            >
              <div>
                <div class="date">
                  <div>
                    <p class="date-p">
                      <span style="color: #7367f0">{{ item.titleColor }}</span>
                      {{ item.subTitle }}
                    </p>
                  </div>
                  <div>
                    <p>{{ item.date }}</p>
                  </div>
                </div>
                <p :class="`date-p-text text_${i}_latter`">
                  {{ item.text }}
                  <span style="color: #7367f0">{{ item.name }}</span>
                </p>
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
    selectedYear: null,
    selectedUSer: null,
    search: null,
    filterSearch: [],
    name: [],
    years: [],
    items: [
      {
        id: 1,
        color: "#7367F0",
        icon: "mdi-email",
        title: "September 2023",
        titleColor: "Email Sent",
        subTitle: "by Gerardo Moyano",
        text: "Upselling email sent. ",
        name: "Wiew Email",
        date: "Sep 23, 2023 - 13:32",
      },
      {
        id: 2,
        color: "#7367F0",
        icon: "mdi-message-text",
        text: "Whatsapp chat meeting.",
        date: "Ago 23, 2023 - 13:32",
        titleColor: "Chat Meeting",
        subTitle: "by Prof. Jean Charleton",
      },
      {
        id: 3,
        color: "#7367F0",
        icon: "mdi-school",
        title: "Agust 2023",
        subTitle: "by Danielle Munchen Schollengberg",
        text: "For: “Career Planning and Development” Assignment Name: “Quiz 01”, Delivered ON TIME. Grade: TBD",
        date: "Nov 23, 2023 - 13:32",
        titleColor: "LMS Assignment Delivered",
      },
      {
        id: 4,
        color: "#7367F0",
        icon: "mdi-phone",
        text: "Direct Call made to +52 55 22126164 Call Duration: 0 mins. 10 sec.",
        date: "Sep 23, 2023 - 13:32",
        subTitle: "from Gerardo Moyano",
        titleColor: "Call",
      },
      {
        id: 5,
        color: "#7367F0",
        text: "Multiple Problems, Injuried, Check, Late",
        date: "Sep 23, 2023 - 13:32",
        titleColor: "Tag Added",
        subTitle:
          "from Career Planning and Development,by Prof. Jean Charleton",
      },
      {
        id: 6,
        color: "#7367F0",
        text: "Inactive, Control, Schollarship",
        date: "Sep 23, 2023 - 13:32",
        titleColor: "Tag Added",
        subTitle: "by Gerardo Moyano",
      },
      {
        id: 7,
        color: "#7367F0",
        icon: "mdi-email",
        titleColor: "Email Sent",
        subTitle: "by Prof. Jean Charleton",
        text: "Check email sent.",
        name: "Wiew Email",
        date: "Sep 23, 2023 - 13:32",
      },
      {
        id: 8,
        color: "#7367F0",
        icon: "mdi-phone",
        title: "July 2023",
        titleColor: "call",
        subTitle: "from Gerardo Moyano",
        text: "Direct Call made to +52 55 22126164 Call Duration: 1 mins. 22 sec.",
        date: "Jul 12, 2023 - 1:45pm",
      },
      {
        id: 9,
        color: "#7367F0",
        icon: "mdi-phone",
        titleColor: "call",
        subTitle: "from Gerardo Moyano",
        text: "Direct Call made to +52 55 22126164 Call Duration: 1 mins. 22 sec.",
        date: "Jul 12, 2023 - 1:45pm",
      },
    ],
  }),
  mounted() {
    const year = this.items.map((y) => {
      return y.date;
    });
    this.years = year;

    const names = this.items.map((n) => {
      return n.name;
    });
    this.name = names;
  },
  methods: {},
  computed: {
    filteredItems() {
      let filtered = this.items;

      if (this.selectedYear) {
        filtered = filtered.filter((item) =>
          item.date.includes(this.selectedYear)
        );
      } else if (this.selectedUSer) {
        filtered = filtered.filter((item) =>
          item.name.includes(this.selectedUSer)
        );
      } else if (this.search) {
        filtered = filtered.filter((item) => {
          return (
            item.subTitle.toLowerCase().includes(this.search.toLowerCase()) ||
            (item.text &&
              item.text.toLowerCase().includes(this.search.toLowerCase())) ||
            (item.name &&
              item.name.toLowerCase().includes(this.search.toLowerCase()))
          );
        });
      }

      return filtered;
    },
  },
};
</script>
