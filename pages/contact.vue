<template>
	<div class="container">
		<div class="contact">
			<form ref="contact" class="form" name="contact" action="/submit" data-netlify="true" method="POST" autocomplete="off" @submit.prevent="submit()">
			<!-- <form ref="contact" class="form" name="contact" action="/submit" @submit.prevent="submit()"> -->
				<ValidationObserver ref="observer">

					<h1>What adventures you are planning?</h1>
					<!-- <h3>Call us: <i class="icon icon-whatsapp"></i> +(27) 797 724 652</h3> -->
					<h3>Write us a message:</h3>
					<div class="text_input">
						<ValidationProvider v-slot="{ errors, classes }" rules="email|required">
							<input v-model="email" class="input_anim" type="email" name="email" placeholder="e-mail" />
							<span class="error" :class="classes"><i class="icon icon-attention"></i> {{ errors[0] }}</span>
							<span class="focus-border"></span>
						</ValidationProvider>
					</div>

					<div class="text_input">
						<ValidationProvider v-slot="{ errors, classes }" rules="required">
							<input v-model="subject" class="input_anim" type="text" name="subject" placeholder="subject" />
							<span class="error" :class="classes"><i class="icon icon-attention"></i> {{ errors[0] }}</span>
							<span class="focus-border"></span>
						</ValidationProvider>
					</div>

					<div class="text_input">
						<ValidationProvider v-slot="{ errors, classes }" rules="required">
							<input v-model="message" class="input_anim" type="text" name="message" placeholder="message" />
							<span class="error" :class="classes"><i class="icon icon-attention"></i> {{ errors[0] }}</span>
							<span class="focus-border"></span>
						</ValidationProvider>
					</div>

					<button class="btn" type="submit">
						Send
					</button>
				</ValidationObserver>
			</form>
		</div>

		<!-- <div class="google_map">
			<div class="mapouter">
				<div class="gmap_canvas">
					<iframe id="gmap_canvas" width="100%" height="400" src="https://maps.google.com/maps?q=cape%20town&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
				</div>
			</div>
		</div> -->
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
			const isValid = await this.$refs.observer.validate()
			if (!isValid) {
				console.log(isValid)
				return
			}

			//  ship it
			// sending to API...
			this.$refs.contact.submit()

			// reset the values ...
			// this.email = ''
			// this.subject = ''
			// this.message = ''

			// You should call it on the next frame
			requestAnimationFrame(() => {
				this.$refs.observer.reset()
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	margin: 0;
}
.hidden {
	display: none;
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
		font-size: 1.5em;
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
				left: 0;
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
