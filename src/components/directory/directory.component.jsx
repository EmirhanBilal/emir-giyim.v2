import { Link } from 'react-router-dom'
import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'
const Directory = ({ kategoriler }) => {
  return (
    <div className='dizin-konteynırı'>
      {kategoriler.map((kategori) => (
        <CategoryItem key={kategori.id} category={kategori} />
      ))}
    </div>
  )
}

export default Directory
