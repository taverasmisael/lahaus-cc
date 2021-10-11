// next/image was crashing the app on resize for some reason ¯\_(ツ)_/¯
/* eslint-disable @next/next/no-img-element */
import { useMemo } from 'react'
import classNames from 'classnames'
import { RealEstate } from '@/shared/real-state.interface'

import styles from './BookmarkRealEstateCarousel.module.css'

const MAX_IMAGES = 3
const EMPTY_STATE_URL = '/imgs/empty-state.png'

function BookmarkRealEstateCarousel({
  items,
}: BookmarkRealEstateCarouselProps) {
  const images = useMemo(() => getCarouselImages(items), [items])
  const showOverlay = useMemo(() => items.length > MAX_IMAGES, [items])

  return (
    <div
      className={classNames(styles.carousel, {
        [styles.singleChild]: images.length === 1,
        [styles.twoChildren]: images.length === 2,
      })}
    >
      {images.map((image, idx) => (
        <div
          key={idx}
          className={classNames(styles.image, styles[`image${idx}`])}
        >
          <img
            src={image}
            alt={items[idx]?.attributes?.name}
            className="w-full h-full object-cover"
          />
          {idx === 2 && showOverlay && (
            <div className={styles.overlay}>
              <div className={styles.overlayText}>
                +{items.length - MAX_IMAGES}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

interface BookmarkRealEstateCarouselProps {
  items: RealEstate[]
}

export default BookmarkRealEstateCarousel

function getCarouselImages(items: RealEstate[]) {
  const images = items.slice(0, MAX_IMAGES).reduce((prev, item) => {
    const firstImage = item.attributes.gallery_urls[0]
    return firstImage ? [...prev, firstImage] : prev
  }, [] as string[])

  return images.length ? images : [EMPTY_STATE_URL]
}
