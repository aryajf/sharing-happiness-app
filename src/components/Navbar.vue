<template>
    <div>
        <nav class="navbar navbar-custom navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand"><i class="uil uil-smile-beam"></i> Sharing Happiness App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <a id="signout" class="nav-link" aria-current="page" @click="signout">Signout</a>
                </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    methods: {
        signout(){
            this.$store.dispatch('logout')
        }
    },
}
</script>
<style lang="scss" scoped>
    .navbar-custom{
        margin: 0 0 5px;
        background-color: #E91E63;
        color: #e7e7e7;
    }
    .nav-link, .navbar-brand{
        cursor: pointer;
        color: #e7e7e7;
        &:hover{
            color: #ccc;
        }
    }
</style>