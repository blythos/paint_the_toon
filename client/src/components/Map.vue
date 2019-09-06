<template lang="html">
  <div id="map">
  </div>
</template>

<script>
import L from 'leaflet';
export default {
  name: 'map',
  components: {
    L
  },
  data() {
    return {
      zoom: 15,
      center: [55.865332, -4.258086],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  },
  mounted(){
    this.map = L.map('map');
    this.map.addEventListener('click', (e) => {
      let coords = [e.latlng.lat, e.latlng.lng]
      this.addMarker(coords, `Lat: ${coords[0]}, Lng: ${coords[1]} `)
    });
    this.map.setView(this.center, this.zoom);
    L.tileLayer(this.url, {attribution: this.attribution}).addTo(this.map);
    this.addMarker([55.865332, -4.258086], "Codeclan Glasgow");
    this.addMarker([55.946910,-3.202068], "Codeclan Edinburgh");
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
