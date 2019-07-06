// import React, { useState } from 'react'
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'

// const TOKEN =
//   'pk.eyJ1IjoiYWxzbGVhZGVycyIsImEiOiJjang1aXNrcGkwMmR5M3lsZzg4OXFyNWRqIn0.qQib-cz84tOegHyTyc0U9g'

// export default function Test1() {
//   const [view, setView] = useState({
//     latitude: 27.9506,
//     // this is up to 90
//     longitude: -82.4572
//     // this is up to 180
//     // zoom: 4
//   })

//   const Map = ReactMapboxGl({
//     accessToken: TOKEN
//   })

//   return (
//     <Map
//       {...view}
//       style="mapbox://styles/mapbox/satellite-streets-v11"
//       containerStyle={{
//         height: '100vh',
//         width: '100vw'
//       }}
//     >
//       <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
//         <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
//       </Layer>
//     </Map>
//   )
// }
