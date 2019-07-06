// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'

// const TOKEN =
//   'pk.eyJ1IjoiYWxzbGVhZGVycyIsImEiOiJjang1aXNrcGkwMmR5M3lsZzg4OXFyNWRqIn0.qQib-cz84tOegHyTyc0U9g'
// export default function DrivingMap() {
//   const [view, setView] = useState({
//     latitude: 27.9506,
//     // this is up to 90
//     longitude: -82.4572,
//     // this is up to 180
//     zoom: 4
//   })
//   const [selectedInfo, setSelectedInfo] = useState(null)
//   const [mapData, setMapData] = useState([])
//   const [currentLocation, setCurrentLocation] = useState('')
//   // const [currentCoord, setCurrentCoord] = useState([])
//   const [plannedDestination, setPlannedDestination] = useState('')
//   // const [plannedCoord, setPlannedCoord] = useState([])

//   useEffect(() => {
//     axios
//       .get(
//         'https://api.mapbox.com/directions/v5/mapbox/driving/13.43,52.51;13.42,52.5;13.41,52.5?radiuses=40;;100&geometries=polyline6&access_token=' +
//           TOKEN
//       )
//       .then(resp => {
//         console.log(resp.data)
//       })
//   }, [])

//   return (
//     <div>
//       <h2>This should be a map</h2>
//       <p>Ideally with a line</p>
//       <ReactMapGL
//         {...view}
//         width="85vw"
//         height="60vh"
//         mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
//         mapboxApiAccessToken={TOKEN}
//         onViewportChange={view => {
//           setView(view)
//         }}
//       >
//         <div style={{ position: 'absolute', left: 0 }}>
//           <NavigationControl />
//           {/* <MapboxDirections /> */}
//           {/* <MapboxDirections
//               {...directions(
//                 (accessToken = 'TOKEN'),
//                 (unit = 'metric'),
//                 (profile = 'mapbox/cycling')
//               )}
//             /> */}
//         </div>
//         {/* {mapData.map(city => {
//             return (
//               <Marker key={city.id} latitude={city.lat} longitude={city.long}>
//                 <button
//                   className="marker"
//                   onClick={e => {
//                     e.preventDefault()
//                     setSelectedInfo(city)
//                   }}
//                 />
//               </Marker>
//             )
//           })} */}

//         {selectedInfo ? (
//           <Popup
//             latitude={selectedInfo.lat}
//             longitude={selectedInfo.long}
//             onClose={() => {
//               setSelectedInfo(null)
//             }}
//           >
//             <h2>{selectedInfo.place}</h2>
//           </Popup>
//         ) : null}
//       </ReactMapGL>
//     </div>
//   )
// }
