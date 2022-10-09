import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        {/* A slug is a unique string (typically a normalized version of title or other representative string), often used as part of a URL */}
        <div className='product-card'>
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className='product-name'>{name}</p>
          <p className='product-price'>Rs.{price}</p>

        </div>
      </Link>
    </div>

    
  )
}

export default Product
