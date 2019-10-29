<template>
	<div class="container">
		<h1>Frequently Asked Questions</h1>
		<accordion>
			<template v-slot:header>
				How many people can join a tour?
			</template>
			<template v-slot:body>
				We try to keep it maximum 14 people on a trip but the average is 10. <br />
				want to give more personal attention from our paragliding guides and make it easier to do tours.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Are the tours only for paragliding pilots?
			</template>
			<template v-slot:body>
				No! We would love for the paragliding pilots’ family and friends to join. We do different daily tours and don’t just focus on paragliding.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Do your tours include international airfare?
			</template>
			<template v-slot:body>
				Travelers arrive from all over the world to begin our tours and it is not possible to include international airfare in our prices. We would be happy to help you arrange flights. Just ask for an air quote when making your booking.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				How experienced must I be in paragliding to go on this trip?
			</template>
			<template v-slot:body>
				Our paragliding tours are for pilots of all levels. Beginners recently qualified, hungry for more, or experienced pilots wanting to fly big xc distances
			</template>
		</accordion>

		<accordion>
			<template v-slot:header>
				I'm a single traveller, will I be charged extra for a single room?
			</template>
			<template v-slot:body>
				We do charge extra for a single room but there normally are lots of single travellers and you can share with someone if you want. Travellers of the same sex will share.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Can you provide me with a list of the hotels we will be staying at?
			</template>
			<template v-slot:body>
				We use a variety of hotels en-route and so a complete list of hotels won't be provided until day 1 of your tour. If your family requires contact information, or in case of emergency, please have them phone +27797724652. this number can be reached 24 hours a day, 7 days a week.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Can I join a tour late or leave it early?
			</template>
			<template v-slot:body>
				It's extremely difficult if not impossible to join a tour after it has begun. It is possible to leave a tour early however you will be responsible for your own arrangements from the moment you decide to leave the tour. You would also be responsible for all costs associated with joining a tour late or leaving one early. If you feel this may be necessary please contact us directly.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Are airport transfers included?
			</template>
			<template v-slot:body>
				Yes. We will pick you up at the airport and transfer you to your hotel and drop you off and the airport after the tour.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				What type of transportation is used on your tours?
			</template>
			<template v-slot:body>
				We will transport you and your luggage (paragliding gear) in a minibus. We will transport you on sightseeing trips and we will do recovery for you when you fly far.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				What is the most appropriate type of luggage to bring?
			</template>
			<template v-slot:body>
				We strongly recommend bringing a backpack or duffel bag, as suitcases can be cumbersome and difficult to store in buses, under seats, etc. Keep in mind that the paragliding pilots on the trip have a lot of luggage so please pack sensibly.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Who are my travelling companions?
			</template>
			<template v-slot:body>
				Most of the people on this trip share an adventurous spirit and are interested in paragliding.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Can I book extra nights of hotel accommodation before or after my tour?
			</template>
			<template v-slot:body>
				Yes, in most cases we can arrange additional accommodation at our starting or ending hotels.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				What is the best time to visit South Africa for flying?
			</template>
			<template v-slot:body>
				The summer months from September to April.
			</template>
		</accordion>
	</div>
</template>

<script>
import accordion from '~/components/accordion.vue'
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
		accordion,
	},
	data() {
		return {
			titles: ['hello', 'privet', 'zdravo', 'Bonjour'],
		}
	},
}
</script>

<style lang="scss" scoped>
.container {
	justify-content: flex-start;
}
</style>
