    import { getGifs } from "../helpers/getGif";
    import { useEffect, useState } from 'react';

    export const useFetchGifs = (category) => {
        const [gifs, setGifs] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        const getImages = async () => {
            const newGifs = await getGifs(category);
            setGifs(newGifs);
            setIsLoading(false); // Set loading to false after fetching
        }

        useEffect(() => {
            getImages();
        }, []);

      return {
        gifs,
        isLoading,
      }
    }