<template>
    <div class="row" style="height:75vh;margin:auto;">
        <div class="col d-flex justify-content-center align-items-center">
            <h1 id="title">Sharing Happiness App <i class="uil uil-laughing"></i></h1>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center">
            <div id="form-card" class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="">
                <div class="card-body">
                    <form @submit.prevent="submit">
                        <div class="mb-3">
                        <label for="nama" class="form-label"><i class="uil uil-user"></i> Nama</label>
                        <input type="text" v-model="form.nama" class="form-control" id="nama" required>
                        </div>
                        <div class="mb-3">
                        <label for="umur" class="form-label"><i class="uil uil-0-plus"></i> Umur</label>
                        <input type="number" v-model="form.umur" min="1" class="form-control" id="umur" required>
                        </div>
                        <div class="mb-3">
                        <label for="tinggal" class="form-label"><i class="uil uil-house-user"></i> Tempat Tinggal</label>
                        <input type="text" v-model="form.tinggal" class="form-control" id="tinggal" required>
                        </div>
                        <button type="submit" class="btn btn-login">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form : {
                nama: '',
                umur: 1,
                tinggal: '',
            }
        }
    },
    methods : {
        submit(){
            if(this.form.nama != '' && this.form.umur != 0 && this.form.tinggal != ''){
                this.$store.dispatch('login', this.form)
            }
        }
    }
}
</script>

<style lang="scss">
    .form-control{
        outline: none;
        box-shadow:none !important;
        border:1px solid #ccc !important;
    }
    .btn-login{
        color: #fff;
        background-color: #E91E63;
        border-color: #E91E63;
        &:hover{
            color: #fff;
            background-color: #EC407A;
        }
    }
    #form-card{
        opacity: 0;
        transform:translate(0,-100px);
        animation: upFadeIn ease-out 2s forwards;
        -webkit-animation: upFadeIn ease-out 2s forwards;
        -moz-animation: upFadeIn ease-out 2s forwards;
        -o-animation: upFadeIn ease-out 2s forwards;
        -ms-animation: upFadeIn ease-out 2s forwards;
    }
    #title{
        opacity: 0;
        animation: fadeIn ease 5s forwards;
        -webkit-animation: fadeIn ease 5s forwards;
        -moz-animation: fadeIn ease 5s forwards;
        -o-animation: fadeIn ease 5s forwards;
        -ms-animation: fadeIn ease 5s forwards;
    }

    @keyframes fadeIn {
    100% {opacity:1}
    }

    @-moz-keyframes fadeIn {
    100% {opacity:1}
    }

    @-webkit-keyframes fadeIn {
    100% {opacity:1}
    }

    @keyframes upFadeIn {
    100% {opacity:1;transform:translate(0,0);}
    }

    @-moz-keyframes upFadeIn {
    100% {opacity:1;transform:translate(0,0);}
    }

    @-webkit-keyframes upFadeIn {
    100% {opacity:1;transform:translate(0,0);}
    }
</style>