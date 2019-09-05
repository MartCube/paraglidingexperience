<template>
	<div class="container">
		<div class="bg">
			<div class="contact">
				<div class="info">
					<h2>What adventures you are planning?</h2>
					<h3>Call us: <i class="icon-phone" />+(389) 72321151</h3>
				</div>
				<form class="form">
					<h2>Write us a message:</h2>
					<div class="text_input">
						<input class="input_anim" type="email" name="email" placeholder="e-mail" />
						<span class="focus-border" />
					</div>
					<div class="text_input">
						<input class="input_anim" type="text" name="subject" placeholder="subject" />
						<span class="focus-border" />
					</div>
					<div class="text_input">
						<input class="input_anim" type="text" name="message" placeholder="message" />
						<span class="focus-border" />
					</div>

					<a class="btn" href="#">
						Send
					</a>
				</form>
			</div>
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
}
</script>

<style lang="scss" scoped>
.container {
	margin-top: 0;
}
.bg {
	width: 100%;
	min-height: 100vh;
	background-image: url('/contact.jpg');

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
}
.contact {
	width: 530px;
	padding: 30px;
	border-radius: 25px;

	background-color: rgba(255, 255, 255, 0.9);
	-webkit-box-shadow: 2px 0px 20px 10px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: 2px 0px 20px 10px rgba(0, 0, 0, 0.2);
	box-shadow: 2px 0px 20px 10px rgba(0, 0, 0, 0.2);
	.info {
		display: flex;
		flex-direction: column;
		width: 100%;

		h2 {
			font-size: 2em;
			margin-bottom: 30px;
		}
		h3 {
			i {
				color: #fc4a1a;
			}
		}
	}

	.form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;

		h2 {
			margin: 30px 0;
		}
		// ## Input style ##
		.text_input {
			width: 100%;
			margin-bottom: 20px;
			position: relative;
			z-index: 2;
		}

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

		// ## Send button ##
		.btn {
			align-self: center;
			width: 180px;
			padding: 10px;
			margin: 20px 0;
			border-radius: 50px;
			border: #fc4a1a 2px solid;
			user-select: none;

			background-color: rgba(255, 255, 255, 0);
			//background-image: linear-gradient(to right, #f7b733 0%, #fc4a1a 51%, #f7b733 100%);

			box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.5);
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
	margin-top: 50px;
}
.gmap_canvas {
	overflow: hidden;
	background: none !important;
	height: 400px;
	width: 100%;
}
</style>
