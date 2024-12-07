import React from 'react'

function NavbarBottom() {


  const data = [
    "Muddatli to'lov",
    "Arzon narxlar",
    "Elektronika",
    "Maishiy texnika",
    "Kiyim",
    "Poyabzallar",
    "Aksessuarlar",
  ]

  return (
    <div className='navbar-bottom container'>
      {
        data.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })
      }
    </div>
  )
}

export default NavbarBottom