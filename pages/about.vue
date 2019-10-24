<template>
	<div class="container">
		<div class="about">
			<h1>About Parapax Paragliding</h1>
			<p>With a passion for flying, Stef Juncker launched the idea of Parapax in 1999.</p>
			<p>Parapax is the market leader and original tandem paragliding company in Africa.</p>
			<p>A team of highly experienced pilots and managers make this exciting, well thought out company a success.</p>
			<p>The crew always put safety and fun first, standing well out amongst our competitors.</p>
			<p>Today Stef has over 15 000 accident free flights and prides himself on running one of the world's best tandem paragliding businesses.</p>
		</div>
		<div class="team">
			<h1>The Team</h1>
			<div class="grid">
				<div class="image">
					<img src="/about/1.jpg" alt="" />
					<div class="color-overlay"></div>
					<div class="text1">
						<h2>Susan de Villiers</h2>
					</div>
					<div class="text2">
						<p>Tandem Pilot</p>
					</div>
				</div>
				<div class="image">
					<img src="/about/2.jpg" alt="" />
					<div class="color-overlay"></div>
					<div class="text1">
						<h2>Marc Aldridge</h2>
					</div>
					<div class="text2">
						<p>Tandem Pilot</p>
					</div>
				</div>
				<div class="image">
					<img src="/about/3.jpg" alt="" />
					<div class="color-overlay"></div>
					<div class="text1">
						<h2>Theunis de Bruin</h2>
					</div>
					<div class="text2">
						<p>Tandem Pilot</p>
					</div>
				</div>
				<div class="image">
					<img src="/about/4.jpg" alt="" />
					<div class="color-overlay"></div>
					<div class="text1">
						<h2>Stef Juncker</h2>
					</div>
					<div class="text2">
						<p>Owner / Tandem Pilot</p>
					</div>
				</div>
				<div class="image">
					<img src="/about/5.jpg" alt="" />
					<div class="color-overlay"></div>
					<div class="text1">
						<h2>Witness Mutiforo</h2>
					</div>
					<div class="text2">
						<p>Manager</p>
					</div>
				</div>
				<div class="image">
					<img src="/about/6.jpg" alt="" />
					<div class="color-overlay"></div>
					<div class="text1">
						<h2>Francois de Villiers</h2>
					</div>
					<div class="text2">
						<p>General Manager</p>
					</div>
				</div>
			</div>
		</div>

		<!-- <div class="btn" @click="openModal">
			open modal
		</div>
		<modal v-model="modal" /> -->
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
			modal: false,
		}
	},
	methods: {
		openModal() {
			setTimeout(() => {
				this.modal = !this.modal
			}, 0)
		},
	},
}
</script>

<style lang="scss" scoped>
$transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);

.about {
	width: 60%;
	p {
		line-height: 1.4;
	}
}

.team {
	max-width: 1000px;
	margin: 10% 0;
	text-align: center;

	.grid {
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;

		.image {
			position: relative;
			overflow: hidden;
			width: 300px;
			height: 300px;
			margin: 10px;
			border-radius: 10px;

			img {
				max-width: 300px;
				border-radius: 10px;
				transition: all 0.35s ease;
			}
			.color-overlay {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				border-radius: 10px;
				background: rgba(0, 0, 0, 0.55);
				opacity: 0;
				transition: $transition;
			}

			.text1 {
				position: absolute;
				bottom: 0;
				text-align: left;
				color: white;
				background: rgba(0, 0, 0, 0.5);
				padding: 5px 15px;
				width: 100%;
				p {
					color: #fc4a1a;
				}
				opacity: 1;
				transition: all 0.35s ease;
			}
			.text2 {
				position: absolute;
				bottom: 0;
				text-align: left;
				color: white;
				padding: 5px 15px;
				p {
					color: #fc4a1a;
				}
				opacity: 0;
				transition: all 0.35s ease;
			}

			&:hover {
				img {
					transform: scale(1.15);
				}
				.color-overlay {
					opacity: 1;
				}
				.text1 {
					background: rgba(0, 0, 0, 0);
					transform: translateY(-40px);
				}
				.text2 {
					opacity: 1;
					transform: translateY(-15px);
				}
			}
		}
	}
}

.btn {
	align-self: center;
	width: 180px;
	padding: 10px;
	margin: 20px 0;
	border-radius: 50px;
	border: #fc4a1a 2px solid;
	background-color: rgba(255, 255, 255, 0);
	box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.5);

	text-decoration: none;
	text-align: center;
	color: #fc4a1a;
	font-size: 1.2em;
	cursor: pointer;
	user-select: none;

	transition: all 0.3s ease;
	&:hover {
		background-color: #fc4a1a;
		color: white;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
	}
	&:active {
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	}
}

@media (max-width: 750px) {
	.about {
		width: 80%;
	}
}
</style>
