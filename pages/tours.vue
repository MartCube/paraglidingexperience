<template>
	<div class="container">
		<div class="intro">
			<h1>Tours</h1>
			<p>South Africa is one of the world’s most fascinating and beautiful countries to paraglide in.</p>
			<p>Our country is not a place you visit only once!</p>
			<p>The people, scenery, sunshine and excellent food and wine will captivate you.</p>
			<br />
			<p>Parapax Adventure Tours offer you an unforgettable paragliding experience. We pay personal attention to all our clients and our first priority is safety. There are constant safety briefings during each trip and no risks are taken. From day one when you enquire about the ideal paragliding holiday until the day we bid you farewell, our highly experienced paragliding tour guide will ensure you get the best out of everyday of your visit.</p>
			<br />
			<p>Our tours let you discover South Africa with a combination of flying and culture. We visit the most scenic flying spots as well as hidden away amazing places. Our paragliding tours are for pilots of all levels. Beginners recently qualified, hungry for more, or experienced pilots wanting to fly big xc distances. Our professional team will plan a tour according to your needs. Come alone or as a group. Arrive as clients, leave as friends. Comfortable transport and top accommodation.</p>
		</div>
		<div class="tours">
			<card />
			<card />
			<card />
			<card />
			<card />
			<card />
		</div>

		<div class="special_tour">
			<div class="pepe">
				<img src="/tours/andreas_malecki.jpg" alt="Andreas Malecki" />
				<h2>Andreas Malecki</h2>

				<p>Top ranked competition pilot between 2011-2012</p>
				<p>Three times German Champion</p>
				<p>One time World Champion with the German Paragliding team</p>
				<p>Currently ranked 25th in the world</p>
				<p>Winner of LOTS of paragliding competitions</p>
			</div>
			<div class="about">
				<h1>Andreas "Pepe" Malecki Tour</h1>
				<p>PARAPAX ADVENTURES in association with the one and only Andreas Malecki are planning a once in a lifetime XC and competition guided tour in Cape Town and Porterville, South Africa.</p>
				<br />
				<p>This tour is for pilots who want to dramatically improve their XC and competition flying skills. Our highly experienced guides including Pepe will be flying with you to analyze your skills and to coach and encourage you to fly further and faster by making the right decisions at the right time.</p>
				<br />
				<p>This tour is limited to just 14 participants. This is to ensure that you get plenty of personal attention by World class pilot Andreas Malecki . The tour will take place right before the Pre-PWC in Porterville that runs between the 15th and the 21st of December 2019.</p>
				<br />
				<h2>10 DAY TOUR</h2>
				<p>Date: 04 December - 13 December 2019</p>
				<p>Place: Cape Town and Porterville</p>
				<p>capacity: 14 participants</p>
				<a href="#" class="btn">
					BOOK NOW
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import card from '~/components/card.vue'
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
	components: {
		card,
	},
}
</script>

<style lang="scss" scoped>
$transition: all 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);

.intro {
	width: 60%;
}

.tours {
	width: 70%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;

	margin: 5% 0;
}

.special_tour {
	margin: 200px 0;
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: top;
	align-content: top;

	.pepe {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;

		flex-basis: 50%;
		text-align: center;
		img {
			width: 300px;
			margin-bottom: 20px;
		}
		h2 {
			font-size: 1.8em;
		}
	}
	.about {
		display: flex;
		flex-direction: column;
		flex-basis: 50%;
		position: relative;
		.btn {
			width: 200px;
			text-align: center;
			text-decoration: none;
			margin: 30px 0;
			padding: 10px 25px;
			margin: 20px 0;
			border-radius: 50px;
			z-index: 2;
			border: #fc4a1a 2px solid;
			background-color: white;
			color: #fc4a1a;

			transition: $transition;
			&:hover {
				background-color: #fc4a1a;
				color: white;
			}
		}
	}
}
</style>
