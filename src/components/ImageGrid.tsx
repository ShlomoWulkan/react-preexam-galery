import { useState, useEffect } from 'react'
import Axios from 'axios'

export default function ImageGrid() {
    const [images, setImages] = useState<any>([])

    useEffect(
        () => {
            Axios.get('https://jsonplaceholder.typicode.com/photos').then(
              (response) => {
                setImages(response.data)
              }
            )
            
          },
          []
        )

  return (
    <div className="image-grid">
        <h1>Art pictures</h1>        
      ImageGrid
    </div>
  )
}
