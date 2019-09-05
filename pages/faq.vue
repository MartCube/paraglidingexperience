<template>
	<div class="container">
		<h1>Frequently Asked Questions</h1>
		<accordion>
			<template v-slot:header>
				How and when can I book?
			</template>
			<template v-slot:body>
				Call On the day, or in advance! Booking is best done by calling us on +27 (0)82 881 4724 for immediate attention, but an SMS or WhatsApp is also ok. Email booking is also acceptable, but we don't always immediately respond to email as we are often out flying, so calling is best. We require a mobile cell phone number for you to make a booking (even an international number). This is to reconfirm the booking on the morning of flight (we always do this as a matter of courtesy) and to inform you if there are unexpected weather changes. We don't schedule flights by email, so please do things telephonically. You can call and book spontaneously, on the day, but of course advanced booking always ensures you a place. We get really busy in the summer months and recommend advance booking. Always try to fly earlier in your time in Cape Town as our sport is weather dependent. Don't wait for a specific time on a specific day... Always try to fly on a morning on the first days that
				you are in our brilliant city. No deposit is generally required (only for groups or in peak season) and payment is cash on the day. We accept South African Rands, Euros and USD.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Pricing?
			</template>
			<template v-slot:body>
				Tandem Paragliding Flights = R1300pp (Standard Paragliding Flight) Tandem Paramotoring Flights = R1250pp (Standard Paramotoring Flight) 20Mins. Paramotoring Flights = R1450pp (Guaranteed 20mins. Paramotoring Flight) Longer Flights = R1850pp (Paragliding or Paramotoring) Optional : In-flight photos and videos, given on a 2 or 4GB SD card, adapter and protective casing that you get to keep – >> R300pp. Please note that the pictures and video taken by the pilots in flight are simply an optional extra on the flight and Parapax cannot be held responsible for the success of these. Technical glitches do sometimes (but vet rarely) occur and Parapax will simply refund you on the picture and video option. Optional Return Shuttle (Hotel, fly with us and back to your hotel -return transfers). OR Hotel, fly, Table Mountain, beaches, city, Waterfront >> R200 or R150pp depending on number of candidate students and distance. Gift Vouchers are also available
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				How can I pay?
			</template>
			<template v-slot:body>
				1. Best and easiest is cash on the day Cash before or after the flight – we accept SA Rands, USD, Euros (Fair exchange rates). Credit Card before the flight by internet – Paygate from our booking page. Electronic Transfer into our bank account – Investec Bank, Current Acc. 10010667097, branch 580105 ( 00 ), credit S Juncker. For group bookings and at really busy times, we may ask you for your credit card details only as a booking assurance on our part (for no shows). 2. Paypal (online) If you don’t have a pay pal account please do the following in order to make a payment: Create a PayPal account by going to https://www.paypal.com/ and securely link your bank, credit, and debit card details. When you check out online at millions of sites, just look for the PayPal button. Log into PayPal and speed through checkout securely with just an email and password. We have a No fly, no charge policy for bookings.
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Where do we meet?
			</template>
			<template v-slot:body>
				WE ALWAYS MEET AT THE VERY END OF SIGNAL HILL ROAD, under the first thorn tree, on the take-off site, at the parking place, (NOT at the Lions head parking lot) when we are flying in Cape town. Meet our friendly Parapax staff (look for our orange branded t-shirts and red caps). Directions: From the city of Cape town, highways and waterfront, drive up towards the table mountain cable-car station. You get to a turning circle, called Kloof Nek. Opposite Tafelberg road ( where the Table Mountain road actually begins) is signal hill road. Drive ALL the way to the very end of signal hill road (3.8km from Kloof Nek turning circle).Easy to find and a 5- 10 minute drive from Table Mountain’s lower cable car, Camps Bay / Clifton and the City of Cape Town. GPS co-ordinates: 33°55’03.7″S 18°24’08.5″E We look forward to welcoming you there and taking you flying!
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				What must I bring?
			</template>
			<template v-slot:body>
				Comfortable, closed running / walking shoes / Hiking boots (Takkies / trainers / joggers / sneakers), NOT Crocs, sandals, flip flops, nothing that flop or flips please! If you dont have any, tell us in advance and we will supply some of ours at no charge.... you dont need to go and buy shoes especially... we do have clean, extra pairs of closed shoes. - T-shirt and Long sleeved jersey / Fleece / Windstopper – Long or short pants - Sun-block (sunscreen) and hat (it’s often sunny and we don’t want you getting sunburned!) - Drinking Water
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
