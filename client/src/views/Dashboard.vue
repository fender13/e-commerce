<template>
    <div>
        <b-container>
            <b-row>
                <b-col cols="4">
                    <div>
                        <div>

                        </div>
                        <div>
                            <a href="#"></a>
                        </div>
                    </div>
                </b-col>
                <b-col cols="4">col-8</b-col>
                <b-col cols="4">col-8</b-col>
            </b-row>
            <b-row>
                <b-col cols="4">
                    <div>
                        <div>

                        </div>
                        <div>
                            <a href="#">List Product</a>
                        </div>
                    </div>
                </b-col>
                <b-col cols="4">
                    <div>
                        <div>

                        </div>
                        <div>
                            <router-link to="/addproduct">Add New Product</router-link>
                        </div>
                    </div>
                </b-col>
                <b-col cols="4">col-8</b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {    
    name: 'DashboardPage'
}
</script>


<style scoped>

</style>
