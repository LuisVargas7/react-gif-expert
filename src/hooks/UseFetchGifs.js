import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs'

export const UseFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImagenes = async () => {
        const newImagenes = await getGifs(category);
        setImages(newImagenes);
        setIsLoading(false);

    };

    useEffect(() => {

        getImagenes();

    }, [])

    return {
        images,
        isLoading
    }
}