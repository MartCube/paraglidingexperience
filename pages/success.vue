<template>
	<div class="container">
		<div class="message">
			<img src="logo.png" alt="" />
			<h3>Thank you for reaching to us.</h3>
			<br />
			<br />
			<p>Your message was successfully send.</p>
			<p>We will replay you to your email as soon as posible.</p>
			<btn link="/">
				Go Back
			</btn>
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
.container {
	margin: 0;
}
.message {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;

	width: 600px;
	padding: 25px;
	background: linear-gradient(292deg, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 20%, rgba(151, 151, 151, 0.03) 20%, rgba(151, 151, 151, 0.03) 40%, rgba(215, 215, 215, 0.03) 40%, rgba(215, 215, 215, 0.03) 60%, rgba(254, 254, 254, 0.03) 60%, rgba(254, 254, 254, 0.03) 80%, rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%), linear-gradient(62deg, rgba(34, 34, 34, 0.03) 0%, rgba(34, 34, 34, 0.03) 20%, rgba(171, 171, 171, 0.03) 20%, rgba(171, 171, 171, 0.03) 40%, rgba(206, 206, 206, 0.03) 40%, rgba(206, 206, 206, 0.03) 60%, rgba(210, 210, 210, 0.03) 60%, rgba(210, 210, 210, 0.03) 80%, rgba(69, 69, 69, 0.03) 80%, rgba(69, 69, 69, 0.03) 100%),
		linear-gradient(314deg, rgba(235, 235, 235, 0.03) 0%, rgba(235, 235, 235, 0.03) 20%, rgba(254, 254, 254, 0.03) 20%, rgba(254, 254, 254, 0.03) 40%, rgba(178, 178, 178, 0.03) 40%, rgba(178, 178, 178, 0.03) 60%, rgba(211, 211, 211, 0.03) 60%, rgba(211, 211, 211, 0.03) 80%, rgba(73, 73, 73, 0.03) 80%, rgba(73, 73, 73, 0.03) 100%), linear-gradient(32deg, rgba(182, 182, 182, 0.01) 0%, rgba(182, 182, 182, 0.01) 12.5%, rgba(208, 208, 208, 0.01) 12.5%, rgba(208, 208, 208, 0.01) 25%, rgba(178, 178, 178, 0.01) 25%, rgba(178, 178, 178, 0.01) 37.5%, rgba(143, 143, 143, 0.01) 37.5%, rgba(143, 143, 143, 0.01) 50%, rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.01) 62.5%, rgba(92, 92, 92, 0.01) 62.5%, rgba(92, 92, 92, 0.01) 75%, rgba(56, 56, 56, 0.01) 75%, rgba(56, 56, 56, 0.01) 87.5%, rgba(253, 253, 253, 0.01) 87.5%, rgba(253, 253, 253, 0.01) 100%),
		linear-gradient(247deg, rgba(103, 103, 103, 0.02) 0%, rgba(103, 103, 103, 0.02) 12.5%, rgba(240, 240, 240, 0.02) 12.5%, rgba(240, 240, 240, 0.02) 25%, rgba(18, 18, 18, 0.02) 25%, rgba(18, 18, 18, 0.02) 37.5%, rgba(38, 38, 38, 0.02) 37.5%, rgba(38, 38, 38, 0.02) 50%, rgba(246, 246, 246, 0.02) 50%, rgba(246, 246, 246, 0.02) 62.5%, rgba(9, 9, 9, 0.02) 62.5%, rgba(9, 9, 9, 0.02) 75%, rgba(167, 167, 167, 0.02) 75%, rgba(167, 167, 167, 0.02) 87.5%, rgba(86, 86, 86, 0.02) 87.5%, rgba(86, 86, 86, 0.02) 100%), linear-gradient(90deg, hsl(194, 0%, 10%), hsl(194, 0%, 10%));
	border-radius: 20px;
	color: white;

	img {
		margin-bottom: 10px;
		height: 60px;
	}
	.btn {
		color: white;
	}
}

@media (max-width: 750px) {
	.message {
		width: 100vw;
		height: 60vh;
		border-radius: 0;

		text-align: center;
	}
}
</style>
