<template>

<v-navigation-drawer
id="siderLayaput"
expand-on-hover
rail
:v-model="drawerOpen"
>

	<div>
		<v-list class="navIconHome">
			<v-list-item>
				<v-list-item-title class="flexbox-nav">
					<span class="material-icons white">
						home
					</span>
					<p class="paragrhp-nav dash">Dashboard</p>
				</v-list-item-title>
			</v-list-item>
		</v-list>

		<img
		style="margin-left: 20px;padding-top: 0px;padding-bottom: 0px; width: 15px;"
		src="@/assets/image/carduser/more.svg"
		alt="more"
		/>

		<v-list class="focused">
			<v-list-item>
				<v-list-item-title class="flexbox-nav">
					<span class="material-icons">
					add_box
					</span>
					<p class="paragrhp-nav">Smart Enroller</p>
				</v-list-item-title>
			</v-list-item>
		</v-list>

		<v-list class="focused">
			<v-list-item >
					<v-list-item-title class="flexbox-nav">
					<span class="material-icons">
					outbound
					</span>
					<p class="paragrhp-nav">Dropout Shield</p>
				</v-list-item-title>
			</v-list-item>
		</v-list>

		<v-list class="focused">
			<v-list-item >
					<v-list-item-title class="flexbox-nav">
					<span class="material-icons">
					autorenew
					</span>
					<p class="textDrawerFine">Retention Partner</p>
				</v-list-item-title>
			</v-list-item>
		</v-list>

		<v-list class="focused" @click="handleExpanded">
			<v-list-item >
					<v-list-item-title class="flexbox-nav">
					<span class="material-icons">
					analytics
					</span>
					<p class="paragrhp-nav flexNav">Risk Detector <span class="material-icons">expand_more</span></p>
				
				</v-list-item-title>
				<div v-if="isExpanded">
				<ul class="ulNav">
					<li class="list-nav"> <span class="material-icons circle">
					circle
					</span> My Reports
					</li>
					<li class="list-nav"> <span class="material-icons circle">
					circle
					</span> My Reports
					</li>
					<li class="list-nav"> <span class="material-icons circle">
					circle
					</span> My Reports
					</li>
				</ul>
			</div> 
			</v-list-item>
		</v-list>

		<v-list class="focused" @click="handleExpandedSchool">
			<v-list-item >
					<v-list-item-title class="flexbox-nav">
					<span class="material-icons">
						school
					</span>
					<p class="paragrhp-nav flexNavs">Academic Offer <span class="material-icons">expand_more</span></p>
				
				</v-list-item-title>
				<div v-if="isExpandedSchool">
				<ul class="ulNav">
					<li class="list-nav"> <span class="material-icons circle">
					circle
					</span> My Reports
					</li>
					<li class="list-nav"> <span class="material-icons circle">
					circle
					</span> My Reports
					</li>
					<li class="list-nav"> <span class="material-icons circle">
					circle
					</span> My Reports
					</li>
				</ul>
			</div> 
			</v-list-item>
		</v-list>

		<v-list class="focused">
			<v-list-item >
					<v-list-item-title class="flexbox-nav">
					<span class="material-icons">
					leaderboard
					</span>
					<p class="paragrhp-nav">My Reports</p>
				</v-list-item-title>
			</v-list-item>
		</v-list>

		<v-list class="focused">
			<v-list-item >
					<v-list-item-title class="flexbox-nav">
					<span class="material-icons">
					addchart
					</span>
					<p class="textDrawerFine">Custom Reports</p>
				</v-list-item-title>
			</v-list-item>
		</v-list>

		<v-list class="focused">
			<v-list-item >
					<v-list-item-title class="flexbox-nav">
					<span class="material-icons">
					account_tree
					</span>
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
	  drawerOpen: false
    };
  },
  methods:{
	handleExpanded(){
		this.isExpanded = !this.isExpanded;
	},
	handleExpandedSchool(){
		this.isExpandedSchool = !this.isExpandedSchool;
	},
	toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
}, watch: {
    drawerState(newValue) {
      console.log(newValue)
    },
  },
}
</script>

<style lang="scss" scoped>

.textDrawerFine{
	font-size: 15px;
	font-weight: 500;
	color: #6E6B7B;
	font-style: normal;
	&:focus{
		color: #FFF ;
	}
}

.flexNav{
	display: flex;
	align-items: center;
	gap: 3.5rem;
}
.flexNavs{
	display: flex;
	align-items: center;
	gap: 2.5rem;
}

.ulNav{
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
	gap: 15px;
	margin-top: 20px;
	.circle{
		font-size: 14px;
	}
	.list-nav{
		color:#6E6B7B ;
	}
}
.material-icons{
	fill: var(--menu-menu-button-bg-default, #FFF);
	filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
	color: #6E6B7B;
	margin-left: -0.4rem;
	z-index: 99999;
	position: relative;
	&:focus{
		color: #FFF !important;
	}
}
.flexbox-nav{
	display: flex;
	align-items: center;
	gap: 9px;
	cursor: pointer;
	padding: 0.3rem;
	border-radius: 6px 5px 5px;
}

.paragrhp-nav{
	font-size: 15px;
	font-weight: 700;
	color: #6E6B7B;
	&:focus{
		color: #FFF ;
	}
}

.navIconHome{
	padding: 0px;
	border-radius: 6px;
	margin: 5px;
	background: #4436FD !important;
	margin-bottom: 20px !important;
}

.white, .dash{
	color: #FFF !important;
}
.focused{
	box-shadow: 4px 0px 15px 0px rgba(0, 0, 0, 0.11);
	padding: 0px;
	border-radius: 6px;
	margin-top: 10px !important;
	margin: 5px;
	&:focus{
		background-color: #4436FD !important;
		color: white !important;
		border-radius: 6px;
		margin: 5px;
		p{
			color: white !important;
		}
		.material-icons{
			color: white !important;
		}
	}
	&:hover{
        background: #F8F8F8 !important;
        border-radius: 6px !important;
        cursor:  pointer !important;
		color: #6E6B7B;
		p{
			color: #6E6B7B !important;
		}
		.material-icons{
			color: #6E6B7B !important;
		}
      }
}
</style>