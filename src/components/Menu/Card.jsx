import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const Card = () => {
  const [menu, setMenu] = useState([])

  const fetchData = async () => {
    try {
      const menuData = []
      const snapShot = await getDocs(collection(db, 'menu'))
      snapShot.forEach((element) => {
        const data = element.data()
        menuData.push({
          id: element.id,
          img: data.img,
          name: data.name,
          desc: data.desc,
        })
      })
      setMenu(menuData)
    } catch (err) {
      console.error('Error fetching data', err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="menu-container">
      {menu.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.img} alt="crepe image" className="menu-image" />
            <div className="content">
              <h3 className="name">{item.name}</h3>
              <p className="desc">{item.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
