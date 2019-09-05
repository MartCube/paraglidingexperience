<template>
	<div class="card">
		<img src="" alt="" />
		<div class="text">
			<h2>DAY TOUR - CAPE TOWN</h2>
		</div>
		<a class="btn" href="#">
			Read More
		</a>
		<div class="color-overlay"></div>
	</div>
</template>

<style lang="scss" scoped>
$transition: all 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);

.card {
	position: relative;
	width: 400px;
	height: 225px;
	margin: 50px 25px;
	border-radius: 5px;
	background: url('/tours/1s.jpg');

	display: flex;
	flex-direction: column;
	justify-content: top;
	align-items: center;
	align-content: center;

	.text {
		text-align: center;
		padding: 5px 10px;
		margin: 20px 0;
		z-index: 2;
		background-color: #fc4a1a;
		color: white;
		font-size: 1.2em;
		transition: $transition;
	}

	.btn {
		text-decoration: none;
		padding: 10px 25px;
		border-radius: 50px;
		z-index: 2;
		border: white 2px solid;
		background-color: white;
		color: #fc4a1a;
		transform: translateY(80px);
		opacity: 0;
		transition: $transition;

		&:hover {
			border: #fc4a1a 2px solid;
			box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
		}
	}

	.color-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		border-radius: 5px;
		background: rgba(0, 0, 0, 0.5);
		opacity: 0.2;
		transition: $transition;
	}

	&:hover {
		.text {
			transform: translateY(30px);
		}
		.btn {
			opacity: 1;
			transform: translateY(30px);
		}
		.color-overlay {
			opacity: 1;
		}
	}
}
</style>
