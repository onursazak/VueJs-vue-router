<template>
	<div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded id : {{ id }} </p>
        <button @click="navigateToHome" class="btn btn-primary"> Go to home</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // routes.js deki /user/:id aşağıda params.id olarak çağırıldı.
            // iki noktadan sonra istenen herhangi bir parametre adı yazılabilir
            // ve bu this.$route.params. olarak cagirilabilir.
            id: this.$route.params.id
        }
    },
    watch: {
        // burası yazılmazsa user1den user2ye tıklandığında link değişse bile 
        // id değişmez.id yi yenilemek için watchda dinleyip yeni id yi setledik.
        '$route'(to,from) {
            this.id = to.params.id;
        }
    },
	methods: {
		navigateToHome() {
            this.$router.push('/');
        },
	},
};
</script>
