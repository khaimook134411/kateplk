import React, {useState} from 'react'
import { firestore } from './firebase/firebase'

export default function Admin() {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [url, setUrl] = useState('')

    const saveI = () => {
        if(!name || !des || !url){
            return
        }
        firestore.collection('industrial')
        .add({
            name : name,
            description : des,
            imgUrl : url
        })
        .then(_ => {
            setName('')
            setDes('')
            setUrl('')
        })
    }
    const saveP = () => {
        if(!name || !des || !url){
            return
        }
        firestore.collection('process')
        .add({
            name : name,
            description : des,
            imgUrl : url
        })
        .then(_ => {
            setName('')
            setDes('')
            setUrl('')
        })
    }
    

  return (
    <div style={{marginTop:125,color:'#fff'}}>
        <input value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder="name"/>
         <input value={des}
               onChange={(e) => setDes(e.target.value)}
               placeholder="des"/>
         <input value={url}
               onChange={(e) => setUrl(e.target.value)}
               placeholder="url"/>
        <div onClick={saveI}>industrial</div>
        <div onClick={saveP}>process</div>
    </div>
  )
}
