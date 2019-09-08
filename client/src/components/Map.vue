<template lang="html">
  <div id="map">
  </div>
</template>

<script>
import L from 'leaflet';
import Service from '@/services/Service.js'
export default {
  name: 'map',
  components: {
    L
  },
  data() {
    return {
      zoom: 13,
      center: [55.865332, -4.258086],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      murals: []
    }
  },
  mounted(){
    Service.getTrails()
    .then(trail => this.murals = trail)
    .then(trail => trail.forEach(mural => this.addMarker([mural.location.longitude, mural.location.latitude], mural.name)))

    this.map = L.map('map');
    this.map.addEventListener('click', (e) => {
      let coords = [e.latlng.lat, e.latlng.lng]
      this.addMarker(coords, `Lat: ${coords[0]}, Lng: ${coords[1]} `)
    });
    this.map.setView(this.center, this.zoom);
    L.tileLayer(this.url, {attribution: this.attribution}).addTo(this.map);
  },
  methods: {
    addMarker(coords, message){
      L.marker(coords).addTo(this.map)
      .bindPopup(message)
    }
  }
}
</script>

<style lang="css" scoped>
#map {
	width:50vw;
	height:80vh;
}
@import "~leaflet/dist/leaflet.css";
</style>
