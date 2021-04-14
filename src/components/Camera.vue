<template>
  <div>
    <div class="row">
      <div class="col" id="camera-container">
        <video @play="playCamera" ref="camera" id="camera" style="width:100%" width="425" height="318" autoplay muted></video>
        <canvas ref="canvas"></canvas>
      </div>
    </div>
    <div class="row">
      <div class="col">
          <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" id="OnCamera" @change="OnCamera($event)">
          <label class="form-check-label" for="OnCamera">Turn ON / OFF Camera</label>
          </div>
      </div>
      <div class="col">
          <div class="form-check form-switch">
          <input class="form-check-input" ref="toggleLandmark" @change="toggleLandmark($event)" type="checkbox" id="toggleLandmark">
          <label class="form-check-label" for="toggleLandmark">Toggle Landmark</label>
          </div>
      </div>
    </div>
    <hr>
    <div class="row mt-4">
      <div class="col">
        <table class="table table-striped table-responsive">
          <thead>
          <tr>
              <th scope="col"><i class="uil uil-user"></i> Nama</th>
              <th scope="col"><i class="uil uil-0-plus"></i> Umur</th>
              <th scope="col"><i class="uil uil-house-user"></i> Tempat Tinggal</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>{{user.nama}}</td>
              <td>{{user.umur}}</td>
              <td>{{user.tinggal}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
const canvas = require('canvas')
const faceapi = require('@vladmandic/face-api')
const { ImageData } = canvas
faceapi.env.monkeyPatch({
  Canvas: HTMLCanvasElement,
  Image: HTMLImageElement,
  ImageData: ImageData,
  Video: HTMLVideoElement,
  createCanvasElement: () => document.createElement('canvas'),
  createImageElement: () => document.createElement('img')
})

export default {
  name: 'Camera',
  data(){
    return{
      playingCamera : null,
      localstream : null,
      landmark : false
    }
  },
  computed: {
    ...mapGetters({
        user : 'user'
    })
  },
  methods: {
    startVideo(status) {
      const constraints = (window.constraints = {
        audio: false,
        video: true
      })

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          if(status){
            this.localstream = stream
            this.$refs.camera.srcObject = this.localstream
          }else{
            stream.getTracks().forEach(function(track) {
                track.stop()
            })
          }
        })
        .catch(error => {
          alert("May the browser didn't support or there is some errors: " + error)
      })
    },
    async playCamera(){
      const displaySize = {width : this.$refs.camera.width, height : this.$refs.camera.height}
      faceapi.matchDimensions(this.$refs.canvas, displaySize)
      this.playingCamera = setInterval(async () => {
        const detections = await faceapi.detectAllFaces(this.$refs.camera, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        this.$refs.canvas.getContext("2d").clearRect(0,0,this.$refs.canvas.width, this.$refs.canvas.height)
        faceapi.draw.drawDetections(this.$refs.canvas, resizedDetections)
        if(this.landmark == true){
          faceapi.draw.drawFaceLandmarks(this.$refs.canvas, resizedDetections)
        }
        faceapi.draw.drawFaceExpressions(this.$refs.canvas, resizedDetections)
      }, 100)
    },
    OnCamera(e){
      if(e.target.checked){
        Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('/models'),
          faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
        ]).then(this.startVideo(true))
      }else{
        this.localstream.getTracks()[0].stop()
        this.$refs.canvas.clear()
        clearInterval(this.playingCamera)
      }
    },
    toggleLandmark(e){
      if(e.target.checked){
        this.landmark = true
      }else{
        this.landmark = false
      }
    }
  }
}
</script>

<style lang="scss">
  .form-switch{
    cursor: pointer;
  }
  #camera-container{
    position : relative;
  }
  #camera{
    background-color: #666;
  }
  canvas{
    position: absolute;
    left:12.5px;
    top:0;
  }
</style>