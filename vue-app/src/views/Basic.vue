<template>
    <div class="basic-box">
      <d-rect></d-rect>
      <circle-ellipse></circle-ellipse>
      <d-line></d-line>
      <polygon-polyline></polygon-polyline>
      <d-path></d-path>
      <d-text></d-text>
      <d-marker></d-marker>
      <d-filter></d-filter>
      <linear-gradient></linear-gradient>
    </div>
</template>

<script>
import dRect from '@/components/d3/dRect'
import circleEllipse from '@/components/d3/circleEllipse'
import dLine from '@/components/d3/dLine'
import polygonPolyline from '@/components/d3/polygonPolyline'
import dPath from '@/components/d3/dPath'
import dText from '@/components/d3/dText'
import dMarker from '@/components/d3/dMarker'
import dFilter from '@/components/d3/dFilter'
import linearGradient from '@/components/d3/linearGradient'
export default {
  data () {
    return {

    }
  },
  components: {
    dRect,
    circleEllipse,
    dLine,
    polygonPolyline,
    dPath,
    dText,
    dMarker,
    dFilter,
    linearGradient
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
