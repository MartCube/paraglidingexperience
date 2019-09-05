<template>
	<div class="footer">
		<div class="copyrights">
			<div>
				<p>Copyright &copy; Parapax Paragliding club.</p>
				<p>Cape Town, South Africa.</p>
				<p>All Rights Reserved 2019.</p>
				<p>
					Designed by
					<a href="https://martcube.netlify.com/" target="_blank">
						Mart Cube
					</a>
				</p>
			</div>
		</div>
		<div class="social">
			<h2>Connect with us</h2>
			<p>Find us on social medias:</p>
			<div class="social_btns">
				<a class="facebook" href="#" title="Facebook">
					<i class="icon icon-facebook" />
				</a>
				<a class="instagram" href="#" title="Instagram">
					<i class="icon icon-instagram" />
				</a>
				<a class="tripadvisor" href="#" title="Trip Advisor">
					<i class="icon icon-tripadvisor" />
				</a>
				<a class="twitter" href="#" title="Twitter">
					<i class="icon icon-twitter" />
				</a>
				<a class="youtube" href="#" title="YouTube">
					<i class="icon icon-youtube-play" />
				</a>
			</div>
		</div>
		<div class="website_map">
			<div class="links">
				<h3>Website Map:</h3>
				<n-link to="/tours">Tours</n-link>
				<n-link to="/about">About us</n-link>
				<n-link to="/gallery/">Gallery</n-link>
				<n-link to="/faq">FAQ</n-link>
				<n-link to="/contact">Contact</n-link>
			</div>
		</div>
		<div class="arrow" @click="ScrollToTop">
			<i class="icon icon-up-big" />
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		ScrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		},
	},
}
</script>

<style lang="scss" scooped>
$transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
$size: 40px;
$colors: (
	facebook: #3b5998,
	instagram: #dd2a7b,
	tripadvisor: #00a680,
	twitter: #38a1f3,
	youtube: #c4302b,
);

.footer {
	position: relative;
	width: 100%;
	margin-top: 50px;
	padding: 30px 10%;
	background: linear-gradient(292deg, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 20%, rgba(151, 151, 151, 0.03) 20%, rgba(151, 151, 151, 0.03) 40%, rgba(215, 215, 215, 0.03) 40%, rgba(215, 215, 215, 0.03) 60%, rgba(254, 254, 254, 0.03) 60%, rgba(254, 254, 254, 0.03) 80%, rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%), linear-gradient(62deg, rgba(34, 34, 34, 0.03) 0%, rgba(34, 34, 34, 0.03) 20%, rgba(171, 171, 171, 0.03) 20%, rgba(171, 171, 171, 0.03) 40%, rgba(206, 206, 206, 0.03) 40%, rgba(206, 206, 206, 0.03) 60%, rgba(210, 210, 210, 0.03) 60%, rgba(210, 210, 210, 0.03) 80%, rgba(69, 69, 69, 0.03) 80%, rgba(69, 69, 69, 0.03) 100%),
		linear-gradient(314deg, rgba(235, 235, 235, 0.03) 0%, rgba(235, 235, 235, 0.03) 20%, rgba(254, 254, 254, 0.03) 20%, rgba(254, 254, 254, 0.03) 40%, rgba(178, 178, 178, 0.03) 40%, rgba(178, 178, 178, 0.03) 60%, rgba(211, 211, 211, 0.03) 60%, rgba(211, 211, 211, 0.03) 80%, rgba(73, 73, 73, 0.03) 80%, rgba(73, 73, 73, 0.03) 100%), linear-gradient(32deg, rgba(182, 182, 182, 0.01) 0%, rgba(182, 182, 182, 0.01) 12.5%, rgba(208, 208, 208, 0.01) 12.5%, rgba(208, 208, 208, 0.01) 25%, rgba(178, 178, 178, 0.01) 25%, rgba(178, 178, 178, 0.01) 37.5%, rgba(143, 143, 143, 0.01) 37.5%, rgba(143, 143, 143, 0.01) 50%, rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.01) 62.5%, rgba(92, 92, 92, 0.01) 62.5%, rgba(92, 92, 92, 0.01) 75%, rgba(56, 56, 56, 0.01) 75%, rgba(56, 56, 56, 0.01) 87.5%, rgba(253, 253, 253, 0.01) 87.5%, rgba(253, 253, 253, 0.01) 100%),
		linear-gradient(247deg, rgba(103, 103, 103, 0.02) 0%, rgba(103, 103, 103, 0.02) 12.5%, rgba(240, 240, 240, 0.02) 12.5%, rgba(240, 240, 240, 0.02) 25%, rgba(18, 18, 18, 0.02) 25%, rgba(18, 18, 18, 0.02) 37.5%, rgba(38, 38, 38, 0.02) 37.5%, rgba(38, 38, 38, 0.02) 50%, rgba(246, 246, 246, 0.02) 50%, rgba(246, 246, 246, 0.02) 62.5%, rgba(9, 9, 9, 0.02) 62.5%, rgba(9, 9, 9, 0.02) 75%, rgba(167, 167, 167, 0.02) 75%, rgba(167, 167, 167, 0.02) 87.5%, rgba(86, 86, 86, 0.02) 87.5%, rgba(86, 86, 86, 0.02) 100%), linear-gradient(90deg, hsl(194, 0%, 10%), hsl(194, 0%, 10%));
	color: white;

	display: flex;
	flex-direction: row;
	justify-content: space-around;

	.copyrights {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-basis: 30%;
		p {
			margin: 5px 0;
		}
		a {
			text-decoration: none;
			outline: none;
			color: white;
			margin: 5px 0;
			opacity: 0.6;
			&:hover {
				opacity: 0.3;
			}
		}
	}
	.social {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-basis: 30%;

		.social_btns {
			display: flex;

			a {
				display: flex;
				background-color: #343a40;
				width: $size;
				height: $size;
				line-height: $size;
				margin: 10px;

				position: relative;
				overflow: hidden;
				//overflow bug fix
				opacity: 0.99;
				border-radius: 50%;
				transition: $transition;

				&:before {
					content: '';
					background-color: #000;
					width: 120%;
					height: 120%;
					position: absolute;
					top: 90%;
					left: -110%;
					transform: rotate(45deg);
					transition: $transition;
				}

				.icon {
					margin: 0 auto;
					font-size: 25px;
					transform: scale(0.8);
					transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);

					&.icon-tripadvisor {
						font-size: 20px;
						padding-right: 5px;
					}
				}

				@each $class, $color in $colors {
					&.#{$class} {
						&:before {
							background-color: #{$color};
						}

						.icon {
							color: #{$color};
						}
					}
				}

				&:focus,
				&:hover {
					box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);

					&:before {
						top: -10%;
						left: -10%;
					}

					.icon {
						color: #fff;
						transform: scale(1);
					}
				}
			}
		}
	}
	.website_map {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;
		align-content: center;
		flex-basis: 30%;

		.links {
			display: flex;
			flex-direction: column;
			h3 {
				margin: 10px 0;
			}

			a {
				text-decoration: none;
				outline: none;
				color: white;
				margin: 5px;
				opacity: 0.7;
				&:hover {
					opacity: 1;
				}
			}
		}
	}
	.arrow {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 35px;
		height: 35px;
		background: white;

		line-height: 35px;
		border-radius: 50%;
		text-align: center;
		cursor: pointer;
		i {
			text-decoration: none;
			font-size: 20px;
			color: #343a40;
		}

		transition: $transition;
		&:hover {
			transform: scale(1.1);
			box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
		}
	}
}
@media (max-width: 400px) {
	.footer {
		flex-direction: column-reverse;
		height: 100vh;
		.social {
			order: 1;
		}
		.arrow {
			top: auto;
			bottom: 20px;
			right: 20px;
		}
	}
}
</style>
