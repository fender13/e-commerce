<template>
    <div class="main-navbar">
        <b-navbar toggleable="lg"  variant="default" class="navbar-container">
            <b-navbar-brand to="/">Hack-Commerce</b-navbar-brand>

            <b-navbar-toggle target="nav_collapse" />

            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item href="#">Shop Now</b-nav-item>

                    <b-nav-item href="#">Blog</b-nav-item>

                    <b-nav-item href="#">About Us</b-nav-item>

                    <b-nav-item href="#">Contact Us</b-nav-item>

                    <b-nav-item href="#">Faqs</b-nav-item>

                    <b-nav-item v-if="isLogin" to="/dashboard">Dashboard</b-nav-item>

                    <b-nav-item v-if="!isLogin" to="/member">Member</b-nav-item>

                    <b-nav-item v-if="isLogin" href="#">Logout</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'MainNavbar',
    computed: {
      isLogin() {
        return this.$store.getters.isLogin
      }
    }
}
</script>

<style scoped>
.main-navbar {
    /* height: 120px; */
    border-bottom: 1px solid black;
}

.navbar-container {
    margin-top: 1.5%;
    margin-bottom: 1.5%;
}

</style>
