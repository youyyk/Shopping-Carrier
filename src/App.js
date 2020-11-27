import { useEffect } from 'react'
import { firebase } from './services/firebase'
import * as readData from './services/readData'
import * as accountList from './data/accountList'
// const fetchDataAccount = async () => {
//   const snapshot = await firebase.database().ref('/').once('value')
//   const data = snapshot.val()
//   console.log(data)
// }

const fetchDataAccount = async () => {
  firebase.database().ref('/Account').on('value', snapshot => {
    const data = snapshot.val()
    readData.readFile(data)
    accountList.updateAccount(data)
    accountList.printAccountList()
  })
}

const fetchDataEvent = async () => {
  firebase.database().ref('/Event').on('value', snapshot => {
    const data = snapshot.val()
    readData.readFile(data)
  })
}

export const App = () => {
  useEffect(() => {
    fetchDataAccount()
    fetchDataEvent()
  }, [])
  return <div> Hello APP </div>
}