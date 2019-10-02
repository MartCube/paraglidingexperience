<template>
	<div class="btn" @click="$router.push(link)">
		<slot>btn text</slot>
	</div>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
$transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);

.btn {
	align-self: center;
	width: 180px;
	padding: 10px;
	margin: 20px 0;
	border-radius: 50px;
	border: #fc4a1a 2px solid;
	background-color: rgba(255, 255, 255, 0);
	box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.2);

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
</style>
