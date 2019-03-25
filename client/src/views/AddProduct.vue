<template>
    <div>
        <div class="form-addProduct">
            <form enctype="multipart/form-data" @submit.prevent="addProduct">
                <div>
                    <h1>Add New Product</h1>
                </div>
                <div class="mt-3">
                    <div class="mt-3">Product Name</div>
                    <b-form-input v-model="title" id="input-default" type="text" placeholder="Enter product name" />
                </div>
                <div class="mt-3">
                    <div class="mt-3">Product Price</div>
                    <b-form-input v-model="price" id="input-default" type="number" placeholder="Enter product price" />
                </div>
                <div class="mt-3">
                    <div>Selected file: {{ file ? file.name : '' }}</div>
                    <input type="file" ref="file" :value="file" @change="onImageChange()" />
                </div>
                <div class="mt-3">
                    <div class="mt-3">Product Description</div>
                    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
                <div class="mt-3 add-product">
                    <b-button type="submmit">Save</b-button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from '../database/server.js'
import router from '@/router'
export default {
    name: 'AddProduct',
    data() {
        return {
            title: '',
            price: 0,            
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                // The configuration of the rich-text editor.
            },
            file: ''
            
        };
    },
    methods: {
        addProduct: function() {
            let token = localStorage.getItem('token')
            let dataFormat = new FormData();
            dataFormat.append("image", this.$refs.file.files[0])
            dataFormat.append("productName", this.title)
            dataFormat.append("productPrice", this.price)
            dataFormat.append("productDescription", this.editorData)

            axios.post('http://localhost:8081/product/addnewproduct', dataFormat, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(({ data }) => {
                this.title = ''
                this.price = 0
                this.editorData = ''
                this.file = ''
                router.push('/dashboard')
            })
            .catch(err => {
                console.log(err);
            });
        },
        onImageChange: function(e) {
            console.log(e)
        }
    }
}
</script>

<style scoped>
.form-addProduct {
    margin-top: 5%;     
    margin-left: 25%;   
    margin-right: 25%;
}

h1 {
    text-align: center;
}

.add-product {
    text-align: right;
}

</style>
