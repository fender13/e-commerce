<template>
    <div class="main-introduce">
        <b-container>
            <b-row class="text-center" >
                <b-col class="tagline">
                    <div >
                        <h1 class="text-center">Why Hack-Commerce?</h1>
                    </div>
                </b-col>
            </b-row>
            <b-row class="row1">
                <b-col class="column">
                    <b-card
                        overlay
                        img-src="https://storage.googleapis.com/my-commerce/img/g1.jpg"
                        img-alt="Card Image"
                    >
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        overlay
                        img-src="https://storage.googleapis.com/my-commerce/img/g2.png"
                        img-alt="Card Image"
                    >
                    </b-card>
                </b-col>
                <b-col>
                    <b-card
                        overlay
                        img-src="https://storage.googleapis.com/my-commerce/img/g3.png"
                        img-alt="Card Image"
                    >
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
    
</template>

<script>
export default {
    name: 'MainIntroduce'
}
</script>

<style scoped>
.main-introduce {
    margin-top: 5%;
    display: flex;
}

.column {
    height: 230px;
}

.row .tagline {
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
}

h1 {
    font-size: 200%;
}

.row1 {
    margin-top: 5%;
}

.row2 {
    margin-top: 5%;
}

.icon {
    text-align: center;
}

h4 {
    text-align: center;
    font-size: 15px;
}

p {
    text-align: center;
    font-size: 15px;
}

</style>
