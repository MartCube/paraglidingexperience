<template>
	<div class="container">
		<div class="booking">
			<div class="title">
				<h1>discover your</h1>
				<h1>next adventure</h1>
			</div>
			<div class="calendar">
				<no-ssr>
					<div class="input-data">
						<h3>Available Tours</h3>
						<v-select v-model="selectedTour" placeholder="Tours" :options="tours"></v-select>
					</div>

					<div class="input-data">
						<h3>Arrival <i class="icon-calendar"></i></h3>
						<v-date-picker v-model="ArrivalDate" :min-date="new Date()"></v-date-picker>
					</div>

					<div class="input-data">
						<h3>Departure <i class="icon-calendar"></i></h3>
						<v-date-picker v-model="DepartureDate" :min-date="ArrivalDate"></v-date-picker>
					</div>

					<div class="btn" @click="Submit">
						Submit
					</div>
				</no-ssr>
			</div>
		</div>
		<div class="tours">
			<div class="card" @click="$router.push('/malecki_tour')">
				<div class="image">
					<img src="/tours/1.jpg" alt="" />
				</div>
				<h2>Andreas Malecki tour</h2>
				<h3><i class="icon icon-star"></i> All Inclusive</h3>
				<h3><i class="icon icon-clock"></i> 7 days</h3>
				<h3><i class="icon icon-location"></i>Cape Town, Porterville</h3>
				<h3>Read More...</h3>
			</div>
			<div class="card" @click="$router.push('/bikefly_tour')">
				<div class="image">
					<img src="/tours/2.jpg" alt="" />
				</div>
				<h2>Bike and Fly tour</h2>
				<h3><i class="icon icon-star"></i> All Inclusive</h3>
				<h3><i class="icon icon-clock"></i> 7 & 10 days</h3>
				<h3><i class="icon icon-location"></i>Cape Town, Porterville, Hermanus</h3>
				<h3>Read More...</h3>
			</div>
			<div class="card" @click="$router.push('/standard_tour')">
				<div class="image">
					<img src="/tours/3.jpg" alt="" />
				</div>
				<h2>Standard tour</h2>
				<h3><i class="icon icon-star"></i> All Inclusive</h3>
				<h3><i class="icon icon-clock"></i> 7 & 10 & 14 days</h3>
				<h3><i class="icon icon-location"></i>Cape Town, Porterville, Hermanus</h3>
				<h3>Read More...</h3>
			</div>
		</div>
		<div class="intro">
			<div class="text">
				<h1>Tours</h1>
				<p>Parapax Adventure Tours offer you an unforgettable paragliding experience. We pay personal attention to all our clients and our first priority is safety. There are constant safety briefings during each trip and no risks are taken. From day one when you enquire about the ideal paragliding holiday until the day we bid you farewell, our highly experienced paragliding tour guide will ensure you get the best out of everyday of your visit.</p>
				<br />
				<p>Our tours let you discover South Africa with a combination of flying and culture. We visit the most scenic flying spots as well as hidden away amazing places. Our paragliding tours are for pilots of all levels. Beginners recently qualified, hungry for more, or experienced pilots wanting to fly big xc distances. Our professional team will plan a tour according to your needs. Come alone or as a group. Arrive as clients, leave as friends.</p>
			</div>
			<div class="image">
				<img src="/tours/intro.jpg" alt="" />
			</div>
		</div>

		<h2>Ower tours are really all inclusive!</h2>
		<div class="table">
			<div class="row">
				<p><i class="icon icon-bed"></i> Accommodation 3-4 Star</p>
				<p><i class="icon icon-food"></i>3x meals a day</p>
				<p><i class="icon icon-flight"></i>Airport pick up and drop off</p>
				<p><i class="icon icon-credit-card"></i>Secure Payment</p>
				<p><i class="icon icon-doc"></i>Registration with local association SAPHA</p>
			</div>
			<div class="row">
				<p><i class="icon icon-doc"></i>All Site fees</p>
				<p><i class="icon icon-drink"></i>Recovery and drinks</p>
				<p><i class="icon icon-guide"></i>Guiding by experienced paragliding pilot</p>
				<p><i class="icon icon-cloud"></i>Updated weather forecasts</p>
				<p><i class="icon icon-motorcycle"></i>Free alternative activities</p>
			</div>
		</div>
	</div>
</template>

<script>
import { pageEnter, pageLeave } from '~/assets/animate'

export default {
	transition: {
		mode: 'out-in',
		css: false,
		enter(el, done) {
			pageEnter(el, done)
		},
		leave(el, done) {
			pageLeave(el, done)
		},
	},

	data() {
		return {
			selectedTour: '',
			tours: ['Standard Tour', 'Pepe Malecki Tour', 'Bike and Fly Tour'],
			ArrivalDate: new Date(),
			DepartureDate: new Date(),
		}
	},
	methods: {
		Submit() {
			console.log(this.ArrivalDate)
		},
	},
}
</script>

<style lang="scss" scoped>
.table {
	display: flex;
	margin: 50px 0;

	.row {
		width: 350px;
		margin: 0 50px;
		text-align: right;
		i {
			float: left;
		}
	}
	p {
		padding: 20px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}
}

$transition: all 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
.container {
	margin: 0;
}
.booking {
	width: 100%;
	height: 100vh;
	background-image: url('/2.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	align-content: center;
	padding: 5% 10%;
	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		align-content: center;

		align-self: flex-start;

		h1 {
			margin: 0;
			color: white;
			text-transform: uppercase;
			font-size: 5em;
			text-align: left;
		}
	}

	.calendar {
		width: 100%;
		height: 120px;
		background-color: rgba(252, 74, 26, 0.8);

		display: flex;
		justify-content: space-around;
		align-items: center;
		align-content: center;
		h3 {
			color: white;
			margin: 10px 20px;
		}
		span {
			width: 120px;
		}

		.input-data {
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			flex-wrap: wrap;
		}

		.v-select {
			width: 200px;
			background: white;
			border-radius: 5px;
		}

		.btn {
			width: 120px;
			padding: 7px;
			margin: 0 20px;
			border-radius: 5px;
			// border: #fc4a1a 2px solid;
			background-color: white;
			box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.2);

			text-decoration: none;
			text-align: center;
			color: #fc4a1a;
			font-size: 1.2em;
			cursor: pointer;
			user-select: none;

			transition: all 0.3s ease;
			&:hover {
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
			}
			&:active {
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
			}
		}
	}
}

.intro {
	width: 80%;
	margin: 100px 0;

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;

	.text {
		max-width: 60%;
		padding: 0 50px;
	}
	.image {
		position: relative;
		img {
			max-width: 100%;
			object-fit: cover;
			object-position: center;
			box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.75);
			border-radius: 5px;
		}
	}
}

.inclusive {
	width: 80%;

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;

	.text {
		margin: 0 50px;
	}
	.image {
		position: relative;
		img {
			max-width: 400px;
			object-fit: cover;
			object-position: center;
			border-radius: 5px;
		}
	}
}

.tours {
	width: 80%;
	margin: 5% 0;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	align-content: center;

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		align-content: center;

		.image {
			position: relative;
			img {
				max-width: 300px;
				object-fit: cover;
				object-position: center;
				box-shadow: 0 -5px 40px -14px rgba(0, 0, 0, 0.75);
				border-radius: 5px;
			}
		}
		h2 {
			border-bottom: 2px solid #fc4a1a;
			margin: 10px;
			font-size: 1.8em;
		}
		h3 {
			margin-left: 10px;
		}
		h3:last-child {
			color: #fc4a1a;
			margin: 5px 30px;
		}
		.btn {
			width: 120px;
			padding: 7px;
			margin: 10px;
			border-radius: 5px;
			border: #343a40 2px solid;
			background-color: rgba(255, 255, 255, 0);
			box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.2);

			text-decoration: none;
			text-align: center;
			color: #343a40;
			font-size: 1.2em;
			cursor: pointer;
			user-select: none;

			transition: all 0.3s ease;
			&:hover {
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
			}
			&:active {
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
			}
		}

		cursor: pointer;
		transition: all 0.3s;
		&:hover {
			transform: scale(1.05) translateY(-10px);
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
		}
	}
}
</style>
