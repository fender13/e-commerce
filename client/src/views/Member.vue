<template>
    <div>
        <div class="member-area">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col class="bv-example-row mycontent-left">
                        <div v-if="register">
                            <h2 class="register-form"><img src="../assets/icon/register.png" alt="">Register</h2>
                            <div class="form-container register">
                                <b-form @submit.prevent="userRegister">
                                    <b-row class="mb-3">
                                        <b-col>
                                            <label for="fistName">First Name:</label>
                                            <b-form-input id="firstName" v-model="firstName" type="text" placeholder="Enter your first name" required />
                                        </b-col>
                                        <b-col>
                                            <label for="lastName">Last Name:</label>
                                            <b-form-input id="lastName" v-model="lastName" type="text" placeholder="Enter your last name" required />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-3">
                                        <b-col>
                                            <label for="username">Username:</label>
                                            <b-form-input id="username" v-model="username" type="text" placeholder="Enter your username" required />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-3">
                                        <b-col>
                                            <label for="email">Email:</label>
                                            <b-form-input id="email" v-model="email" type="email" placeholder="Enter your email" required />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-3">
                                        <b-col>
                                            <label for="password">Password:</label>
                                            <b-form-input id="password" v-model="password" type="password" placeholder="Enter your password" required />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-3">
                                        <b-col>
                                            <b-button type="submit" >Register</b-button>
                                        </b-col>
                                    </b-row>
                                </b-form>
                            </div>
                        </div>
                        <div v-if="login">
                            <h2 class="login-form"><img src="../assets/icon/login.png" alt="">Login</h2>
                            <div class="form-container login">
                                <b-form @submit.prevent="userLogin">
                                    <b-row class="mb-3">
                                        <b-col>
                                            <label for="username">Username:</label>
                                            <b-form-input id="username" v-model="username" type="text" placeholder="Enter your username" required />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-3">
                                        <b-col>
                                            <label for="password">Password:</label>
                                            <b-form-input id="password" v-model="password" type="password" placeholder="Enter your password" required />
                                        </b-col>
                                    </b-row>
                                    <b-row class="mb-3">
                                        <b-col>
                                            <b-button type="submmit">Login</b-button>
                                        </b-col>
                                    </b-row>
                                </b-form>
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <div>
                            <div>
                                <h2>Register</h2>
                            </div>
                            <div>
                                <p style="text-align: center;">Registering for this site allows you to access your order status and history. Just fill in the register fields, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                            </div>
                            <div class="logreb-button" v-if="register">
                                <b-button @click="clickGoToLogin">Login</b-button>
                            </div>
                            <div class="logreb-button" v-if="login">
                                <b-button @click="clickGoToRegister">Register</b-button>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import router from '../router'
export default {
    name: 'MemberArea',
    data() {
        return {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            login: true,
            register: false,
            islogin: false,
            role: '',
            token: ''
        }
    },
    methods: {
        clickGoToLogin() {
            this.login = true
            this.register = false
        },
        clickGoToRegister() {
            this.login = false
            this.register = true
        },
        clickGoToHome() {
            this.$router.push({ name:'home' })
        },
        userRegister() {
            this.$store.dispatch('userRegistration', {
                firstName: this.firstName,
                lastName: this.lastName,
                username: this.username,
                email: this.email,
                password: this.password
            })
            this.firstName = ''
            this.lastName = ''
            this.username = ''
            this.email = ''
            this.password = ''
        },
        userLogin() {
            this.$store.dispatch('userLogin', {
                username: this.username,
                password: this.password
            })
            this.username = ''
            this.password = ''
        }
    }
}
</script>

<style scoped>
.member-area {
    margin-top: 5%;
}

.mycontent-left {
    height: 500px;
}

.register-form {
    text-align: left;
}

.login-form {
    text-align: left;
}

.form-container {
    margin-top: 5%;
}

h2 {
    text-align: center;
}

p {
    font-size: 15px;
}

.col label {
    text-align: left;
}

.logreb-button {
    margin-top: 5%;
    text-align: center;
}
</style>
