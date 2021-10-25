import React from 'react'
import { useFetchGift } from '../hooks/useFetchGift'
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ category }) => {

    const { data: images, loading } = useFetchGift(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando</p>}
            <div className="card-grid">

                {images.map(img =>
                    <GiftGridItem
                        key={img.id}
                        {...img}
                    />
                )}
            </div>
        </>
    )
}
