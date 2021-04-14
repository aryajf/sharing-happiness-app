<template>
  <div>
    <div v-if="!accessed">
      <div class="container-fluid">
        <login/>
      </div>
    </div>
    <div v-else>
      <navbar/>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 order-md-2">
            <camera/>
          </div>  
          <div class="col-md-8 order-md-1">
            <list-video/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Login from '@/components/Login.vue'
import ListVideo from '@/components/ListVideo.vue'
import Camera from '@/components/Camera.vue'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
        accessed : 'accessed'
    })
  },
  components: {
    Navbar,Login,ListVideo,Camera
  }
}
</script>