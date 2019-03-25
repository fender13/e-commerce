<template>
    <div>
        <b-carousel
        id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        :interval="4000"

        v-model="slide"
        >
            <!-- Text slides with image -->
            <b-carousel-slide
                img-src="https://storage.googleapis.com/my-commerce/img/0001.jpg"
            />

            <b-carousel-slide
                img-src="https://storage.googleapis.com/my-commerce/img/0002.jpg"
            />

            <b-carousel-slide
                img-src="https://storage.googleapis.com/my-commerce/img/0003.jpg"
            />

            <b-carousel-slide
                img-src="https://storage.googleapis.com/my-commerce/img/0004.jpeg"
            />

            <b-carousel-slide
                img-src="https://storage.googleapis.com/my-commerce/img/0005.jpg"
            /> 
        </b-carousel>
    </div>
</template>

<script>
export default {
    name: 'MainSlider',
    data() {
        return {
            slide: 0,
            sliding: null
        }
    }
}
</script>

<style scoped>

</style>
