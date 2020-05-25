<template>
	<div>
		<h1>The User Page</h1>
		<hr />
		<button @click="navigateToHome" class="btn btn-primary">Go to home</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
	methods: {
		navigateToHome() {
			this.$router.push("/");
		},
	},
};
</script>
