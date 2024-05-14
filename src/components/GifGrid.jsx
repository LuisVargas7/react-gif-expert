import { GifItem } from './GifItem';
import { UseFetchGifs } from '../hooks/UseFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = UseFetchGifs(category);

    // const carga = () => {
    //     if (isLoading == true){
    //         return <h3> Cargando... </h3>
    //     };
    // }


    return (
        <>
             <h3>{category}</h3>
            {isLoading ? (<h2>Cargando...</h2>) : null}

            <div className="card-grid">
                {images.map((images) =>
                    <GifItem
                        key={images.id}
                        tittle={images.tittle}
                        url={images.url}
                    />
                )}
            </div>
        </>
    )
}
