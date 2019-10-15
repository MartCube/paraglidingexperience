<template>
	<div class="container">
		<div class="special_tour">
			<div class="pepe">
				<img src="/tours/andreas_malecki.jpg" alt="Andreas Malecki" />

				<p>Top ranked competition pilot in 2011-2012</p>
				<p>Three times German Champion</p>
				<p>World Champion with the German team</p>
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

				<p><i class="icon icon-star"></i>: All Inclusive</p>
				<p><i class="icon icon-clock"></i>: 7 & 10 & 14 days</p>
				<p><i class="icon icon-calendar"></i>: 04 December - 13 December 2019</p>
				<p><i class="icon icon-location"></i>: Cape Town and Porterville</p>
				<p><i class="icon icon-man"></i>: 14 participants</p>
				<btn link="tours">
					Book now
				</btn>
			</div>
		</div>
	</div>
</template>

<script>
import btn from '~/components/btn.vue'

export default {
	components: {
		btn,
	},
}
</script>

<style lang="scss" scoped>
.special_tour {
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	align-content: center;

	.pepe {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		align-content: center;

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
			align-self: flex-start;
			background-color: white;
			color: #fc4a1a;

			transition: all 0.3;
			&:hover {
				background-color: #fc4a1a;
				color: white;
			}
		}
	}
}
</style>
