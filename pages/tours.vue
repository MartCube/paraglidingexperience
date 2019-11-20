<template>
	<div class="container">
		<div class="booking">
			<div class="title">
				<h1>discover your</h1>
				<h1>next adventure</h1>
			</div>
			<div class="calendar">
				<h3>Check for Availability :</h3>

				<ValidationObserver ref="tour" tag="form" class="tour_form" name="tour" action="/success" data-netlify="true" netlify-honeypot="bot-field" method="POST" autocomplete="off" @submit.prevent="submit()">
					<!-- eslint-disable-next-line -->
				<input type="hidden" name="form-name" value="contact">	<p class="hidden"><label>Don’t fill this out: <input name="bot-field"></label></p>

					<ValidationProvider v-slot="{ errors, classes }" rules="email|required" tag="div" class="input-data">
						<h3>Email</h3>
						<input v-model="email" type="text" name="email2" placeholder="email" />
						<span class="error" :class="classes"> {{ errors[0] }} <i class="icon icon-attention"></i></span>
					</ValidationProvider>

					<button class="btn" type="submit">
						Send
					</button>
					<!-- <no-ssr>
						<div class="input-data">
							<h3>Available Tours</h3>
							<v-select v-model="selectedTour" :options="tours"></v-select>
						</div>

						<div class="input-data">
							<h3>Arrival <i class="icon-calendar"></i></h3>
							<v-date-picker v-model="ArrivalDate" :min-date="new Date()"></v-date-picker>
						</div>

						<div class="input-data">
							<h3>Departure <i class="icon-calendar"></i></h3>
							<v-date-picker v-model="DepartureDate" :min-date="ArrivalDate"></v-date-picker>
						</div>
					</no-ssr>
					<div class="input-data">
						<h3>&nbsp;</h3>
						<button class="btn" type="submit">
							Book
						</button>
					</div> -->
				</ValidationObserver>
			</div>
		</div>
		<div class="tours">
			<div class="card">
				<div class="image">
					<img src="/tours/standard.jpg" />
				</div>
				<div class="about">
					<h2>Standard Tour</h2>
					<p>The Standard tours consist of a tour bus and paragliding guide/driver who will accompany you on the tour. This tour is for the beginner to the more experienced paragliding pilot. We will show you the best paragliding sites as well as the best South Africa has to offer in terms of culture and sightseeing. This tour moves around relative to the weather.</p>
					<p>Non-flying family and friends are welcome on this tour.</p>
				</div>
				<div class="info">
					<p>
						<span>capacity <i class="icon icon-man"></i></span>20 people
					</p>
					<p>
						<span>duration <i class="icon icon-clock"></i></span>7 & 14 days
					</p>
					<p>
						<span>location <i class="icon icon-location"></i></span>Hermanus
					</p>
					<p>prize: 1200 $</p>
				</div>
			</div>
			<div class="card">
				<div class="image">
					<img src="/tours/oneday.jpg" />
				</div>
				<div class="about">
					<h2>One Day Tour</h2>
					<p>Come and join us on our very popular one day tour. These tours consist of day tours to Cape Town, Porterville and Hermanus. An experienced guide will accompany you for the day.</p>
				</div>
				<div class="info">
					<p>
						<span>capacity <i class="icon icon-man"></i></span>20 people
					</p>
					<p>
						<span>duration <i class="icon icon-clock"></i></span>1 day
					</p>
					<p>
						<span>location <i class="icon icon-location"></i></span>South Africa
					</p>
					<p>prize: 1200 $</p>
				</div>
			</div>
			<div class="card">
				<div class="image">
					<img src="/tours/bikefly.jpg" />
				</div>
				<div class="about">
					<h2>Bike and Fly Tour</h2>
					<p>Come and indulge your senses and experience the true freedom of journey! Experience heaven and earth on this tour. A motorbike adventure combined with paragliding. Luggage and paragliders are transported in the support vehicle and non motorcyclists can ride in the support vehicle. Motorbike licence compulsory.</p>
				</div>
				<div class="info">
					<p>
						<span>capacity <i class="icon icon-man"></i></span>14 people
					</p>
					<p>
						<span>duration <i class="icon icon-clock"></i></span>7 & 10 days
					</p>
					<p>
						<span>location <i class="icon icon-location"></i></span>South Africa
					</p>
					<p>prize: 1200 $</p>
				</div>
			</div>
			<div class="card">
				<div class="image">
					<img src="/tours/malecki.jpg" />
				</div>
				<div class="about">
					<h2>Pepe Malecki Tour</h2>
					<p>Parapax in association with the one and only Andreas Malecki. You will fly together with highly experienced pilots who will coach you and analyze your skills. This tour is for those who want to dramatically improve their XC and competition flying skills.</p>
				</div>
				<div class="info">
					<p>
						<span>capacity <i class="icon icon-man"></i></span>14 people
					</p>
					<p>
						<span>duration <i class="icon icon-clock"></i></span>7 days
					</p>
					<p>
						<span>location <i class="icon icon-location"></i></span>Portevile
					</p>
					<p>prize: 1200 $</p>
				</div>
			</div>
		</div>
		<div class="intro">
			<div class="text">
				<h1>About our Tours</h1>
				<p>Parapax Adventure Tours offer you an unforgettable paragliding experience. We pay personal attention to all our clients and our first priority is safety. There are constant safety briefings during each trip and no risks are taken. From day one when you enquire about the ideal paragliding holiday until the day we bid you farewell, our highly experienced paragliding tour guide will ensure you get the best out of everyday of your visit.</p>
				<br />
				<p>Our tours let you discover South Africa with a combination of flying and culture. We visit the most scenic flying spots as well as hidden away amazing places. Our paragliding tours are for pilots of all levels. Beginners recently qualified, hungry for more, or experienced pilots wanting to fly big xc distances. Our professional team will plan a tour according to your needs. Come alone or as a group. Arrive as clients, leave as friends.</p>
			</div>
			<div class="image">
				<img src="/tours/intro.jpg" alt="" />
			</div>
		</div>
		<div class="inclusive">
			<h1>Our tours are really all inclusive!</h1>
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
	</div>
</template>

<script>
import { pageEnter, pageLeave } from '~/assets/animate'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
	components: {
		ValidationProvider,
		ValidationObserver,
	},
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
			email: '',
			selectedTour: 'Standard Tour',
			tours: ['Standard Tour', 'One Day Tour', 'Pepe Malecki Tour', 'Bike and Fly Tour'],
			ArrivalDate: new Date(),
			DepartureDate: new Date(),
		}
	},
	methods: {
		async submit() {
			const isValid = await this.$refs.tour.validate()
			console.log(isValid)
			if (!isValid) {
				return
			}
			// sending to API
			document.querySelector('.tour_form').submit()
		},
	},
}
</script>

<style lang="scss" scoped>
$transition: all 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
.container {
	margin: 0;
}
.booking {
	width: 100%;
	height: 100vh;
	background-image: url('/tours.jpg');
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
			font-size: 4.2em;
			text-align: left;
		}
	}

	.calendar {
		width: 100%;
		padding: 30px;
		background-color: rgba(252, 74, 26, 0.8);
		color: white;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: center;

		.tour_form {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-content: center;

			span {
				width: 120px;
			}

			input[type='text'] {
				width: 200px;
				padding: 8px;
				border: 1px solid #ccc;
				border-radius: 5px;
				font-weight: 700;
				font-size: 1em;
				&:focus {
					outline: none;
					box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.2);
					border: 1px solid #fc4a1a;
				}
			}
			.input-data {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				align-content: center;
				position: relative;
				h3 {
					color: white;
					margin: 10px 0;
				}

				.error {
					position: absolute;
					bottom: 45px;
					right: 0;

					color: #343a40;
					font-size: 0.8em;
					display: none;
					&.invalid {
						display: flex;
					}
				}
			}

			.v-select {
				width: 200px;
				background: white;
				border-radius: 5px;
			}

			.btn {
				align-self: center;
				width: 120px;
				padding: 10px;
				border-radius: 10px;
				border: none;
				background-color: white;
				box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.5);

				user-select: none;
				outline: none;

				font-family: 'Avenir-bold';
				text-decoration: none;
				text-align: center;
				color: #fc4a1a;
				font-size: 1.2em;
				cursor: pointer;

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
}

.tours {
	margin: 5% 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	.card {
		max-width: 1100px;
		margin: 50px 0;

		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		align-content: center;

		border: 1px solid #ccc;
		p {
			font-size: 1em;
		}
		.image {
			position: relative;
			display: flex;
			align-self: center;
			max-width: 300px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center;
			}
		}
		.about {
			width: 500px;
			padding: 0 25px;
			padding-top: 25px;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			align-content: center;

			h2 {
				margin-bottom: 20px;
			}
		}
		.info {
			width: 300px;
			padding-top: 25px;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			align-content: center;
			p {
				width: 80%;
				padding: 10px 0;
				border-bottom: 1px solid rgba(0, 0, 0, 0.2);
				text-align: right;
				float: right;
				span {
					float: left;
				}
			}
		}
	}
}

.intro {
	width: 80%;
	margin: 50px 0;

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;

	.text {
		max-width: 60%;
		padding: 0 50px;
		h1 {
			margin: 30px 0;
		}
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
	margin: 50px 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;

	.table {
		display: flex;
		.row {
			max-width: 400px;

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
}

@media (max-width: 750px) {
	.container {
		margin: 0;
	}
	h2 {
		text-align: center;
	}
	.booking {
		height: 100vh;
		margin-top: 60px;
		justify-content: center;
		align-items: center;
		align-content: center;
		.title {
			display: none;
		}
		.calendar {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 10px;

			.tour_form {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.input-data {
					margin-bottom: 20px;
					flex-direction: column;
					justify-content: flex-start;
					align-items: center;
					align-content: center;
				}
			}
		}
	}
	.tours {
		width: 100%;
		justify-content: center;
		align-items: center;
		align-content: center;
		.card {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			align-content: center;
			border: none;

			.about,
			.info {
				width: 350px;
			}

			.about {
				h2 {
					align-self: center;
				}
			}
			.info {
				justify-content: center;
				align-items: center;
				align-content: center;
			}
		}
	}
	.intro {
		flex-direction: column-reverse;
		h1 {
			text-align: center;
		}
		.text {
			max-width: 100%;
			padding: 0;
		}
	}
	.inclusive {
		text-align: center;
		.table {
			flex-direction: column;
			.row {
				margin: 0;
			}
		}
	}
}
</style>
