import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnailDetails, clickThumbnailItem} = props
  const {id, imageUrl, thumbnailUrl, category} = eachThumbnailDetails

  const onClickThumbnailItem = () => {
    clickThumbnailItem(id)
  }

  return (
    <li className="thumbnail-item">
      <button onClick={onClickThumbnailItem} className="thumbnail-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
