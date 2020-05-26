<template>
	<div>
		<h3>Some User Details</h3>
		<p>User loaded has ID: {{ $route.params.id }}</p>
		<router-link tag="button" :to="link" class="btn btn-primary"
			>Edit User
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			link: {
				name: "userEdit",
				params: { id: this.$route.params.id },
                query: { locale: "en", q: 100 },
                hash: '#data'
            }
		}; 
    },
    beforeRouteEnter(to, from, next) {
        debugger;
        // bu componentin açılması için her zaman true dönmesi lazım(authentication).
        if(true) {
            next();
            //beforeRouteEnter lifecycle ında data prop a ulaşmamız gerekiyorsa
            // bu şekilde ulaşılır.
            // next(vm => {
            //     vm.link
            // })
        }
        else{
            next(false)
        }

    }
};
</script>
