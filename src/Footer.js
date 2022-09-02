import React, { useEffect } from 'react'
import './Footer.css'

const Footer = () => {

  useEffect(() => {
    const nameLink = document.querySelector('#nameLink')
  
    return () => {
        nameLink.addEventListener('mouseover', () => {
          nameLink.innerHTML = 'Show Portfolio'
        })
        nameLink.addEventListener('mouseout', () => {
          nameLink.innerHTML = 'Griger'
        })
    }
  }, [])
  

  return (
    <footer className='footer'>
        <p>
            Hecho con 💚 por 
            <a href="https://github.com/Grigerlord" id='nameLink'>Griger</a>
        </p>
        
    </footer>
  )
}

export { Footer }