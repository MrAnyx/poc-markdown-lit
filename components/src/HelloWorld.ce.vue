<template>
	<h1>Hello {{ label }} !</h1>
</template>

<script>
export default {
	name: "hello-world",
	props: {
		label: {
			type: String,
			required: false,
			default: "World",
		},
	},
};
</script>

<style scoped lang="scss">
h1 {
	color: red;
}
</style>
