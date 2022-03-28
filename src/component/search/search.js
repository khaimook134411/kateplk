import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebase/firebase'
import style from './search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Search() {
    const [search, setSearch] = useState('')
    const [listItem, setListItem] = useState([])
    const [showItem, setShowItem] = useState([])

    const onSearch = (text) => {
        setSearch(text)
        var temp = []
        if (!text) {
            setShowItem([])
            return
        }
        listItem.map((value, index) => {
            if (value.name.toLowerCase().search(text) > -1 || value.description.toLowerCase().search(text) > -1) {
                temp = [...temp, value.name]
            }
        })
        console.log(temp);
        setShowItem(temp)
    }

    useEffect(() => {
        const industrialRef = firestore.collection('industrial')
        const processRef = firestore.collection('process')
        industrialRef.get().then(async (docs) => {
            var temp = []
            await docs.forEach((doc) => {
                temp = [...temp, doc.data()]
            })
            processRef.get().then(async (docs) => {
                await docs.forEach((doc) => {
                    temp = [...temp, doc.data()]
                })

                setListItem(temp)
            })
        })
    }, [])

    return (
        <>
            <div className={style.search}>
                <FontAwesomeIcon icon={faSearch} />
                <input value={search} id="" type="search" placeholder="Find Product"
                    onChange={(e) => { onSearch(e.target.value) }} />
                {
                    showItem.map((value, index) => {
                        return (
                            <div key={index}>
                                {value}
                            </div>
                        )
                    })
                }
            </div>

        </>

    )
}
