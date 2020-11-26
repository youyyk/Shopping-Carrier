import { useEffect } from 'react'
import { firebase } from './services/firebase'

// const fetchData = async () => {
//   const snapshot = await firebase.database().ref('/').once('value')
//   const data = snapshot.val()
//   console.log(data)
// }

const fetchData = async () => {
  firebase.database().ref('/').on('value', snapshot => {
    const data = snapshot.val()
    console.log(data)
  })
}

export const App = () => {
  useEffect(() => {
    fetchData()
  }, [])
  return <div> Hello APP </div>
}