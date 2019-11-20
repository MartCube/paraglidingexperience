<template>
	<div class="container">
		<div class="contact">
			<ValidationObserver ref="contact" tag="form" class="form" name="contact" action="/success" data-netlify="true" netlify-honeypot="bot-field" method="POST" autocomplete="off" @submit.prevent="submit()">
				<!-- eslint-disable-next-line -->
				<input type="hidden" name="bot-field" value="contact">	

				<h1>What adventures you are planning?</h1>
				<h3>call us:<i class="icon icon-whatsapp"></i> +(27) 762 865 106</h3>
				<h3>Write us a message:</h3>

				<ValidationProvider v-slot="{ errors, classes }" rules="email|required" tag="div" class="text_input">
					<input v-model="email" class="input_anim" type="email" name="email" placeholder="e-mail" />
					<span class="focus-border"></span>
					<span class="error" :class="classes"> {{ errors[0] }} <i class="icon icon-attention"></i></span>
				</ValidationProvider>

				<ValidationProvider v-slot="{ errors, classes }" rules="required" tag="div" class="text_input">
					<input v-model="subject" class="input_anim" type="text" name="subject" placeholder="subject" />
					<span class="error" :class="classes"> {{ errors[0] }} <i class="icon icon-attention"></i></span>
					<span class="focus-border"></span>
				</ValidationProvider>

				<ValidationProvider v-slot="{ errors, classes }" rules="required" tag="div" class="text_input">
					<input v-model="message" class="input_anim" type="text" name="message" placeholder="message" />
					<span class="error" :class="classes"> {{ errors[0] }} <i class="icon icon-attention"></i></span>
					<span class="focus-border"></span>
				</ValidationProvider>

				<button class="btn" type="submit">
					Send
				</button>
			</ValidationObserver>
		</div>

		<div class="google_map">
			<div class="mapouter">
				<div class="gmap_canvas">
					<iframe id="gmap_canvas" width="100%" height="400" src="https://maps.google.com/maps?q=cape%20town&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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
	data: () => ({
		email: '',
		subject: '',
		message: '',
	}),
	methods: {
		async submit() {
			const isValid = await this.$refs.contact.validate()
			if (!isValid) {
				return
			}

			//  ship it
			// sending to API...

			document.querySelector('.form').submit()
			//this.$refs.contact.submit()
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	margin: 0;
}

.contact {
	min-height: 100vh;
	margin-top: 60px;
	padding: 30px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	.icon-whatsapp {
		color: #25d366;
		font-size: 1.2em;
	}
	.form {
		max-width: 500px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;

		h1 {
			font-size: 2em;
		}
		h3 {
			margin-bottom: 20px;
		}
		// ## Input style ##
		.text_input {
			width: 100%;
			margin-bottom: 20px;
			position: relative;
			z-index: 2;

			input {
				width: 100%;
				background: transparent;
				margin-bottom: 10px;

				color: #343a40;
				font-family: 'Avenir-bold';
				font-size: 1em;
				letter-spacing: 2px;

				&:focus {
					outline: none;
				}
			}

			.input_anim {
				padding: 10px;
				border: 0;
				border-bottom: 3px solid #a9a9a9;

				~ .focus-border {
					position: absolute;
					bottom: 10px;
					left: 0;
					width: 0;
					height: 3px;

					background: #fc4a1a;
					transition: 0.5s;
				}

				&:focus ~ .focus-border {
					width: 100%;
					transition: 0.3s;
				}
			}

			.error {
				position: absolute;
				bottom: 45px;
				right: 0;
				margin: 0 5px;
				font-size: 0.8em;
				display: none;
				&.invalid {
					display: flex;
				}
			}
		}

		// ## Send button ##
		.btn {
			align-self: center;
			width: 180px;
			padding: 10px;
			margin: 20px 0;
			border-radius: 50px;
			border: #fc4a1a 2px solid;
			background-color: rgba(255, 255, 255, 0);
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
				background-color: #fc4a1a;
				color: white;
			}
			&:active {
				transform: translateY(2px);
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
			}
		}
	}
}

.mapouter {
	position: relative;
	text-align: right;

	height: 400px;
	width: 100vw;
}
.gmap_canvas {
	overflow: hidden;
	background: none !important;
	height: 400px;
	width: 100%;
}

@media (max-width: 750px) {
}
</style>
