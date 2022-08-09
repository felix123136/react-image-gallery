import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Nav from './components/Nav';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    function getFetchURL() {
      return `https://pixabay.com/api/?key=${process.env.React_App_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo`;
    }
    async function fetchData() {
      try {
        const res = await fetch(getFetchURL());
        const data = await res.json();
        setImages(data.hits);
        setIsLoading(false);
      }catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, [searchTerm]);
  return (
    <>
      <div className="container mx-auto bg-almostWhite dark:bg-veryDarkGray">
        <Nav />
        <h1 class="text-4xl mt-16 mb-24 text-center font-extrabold text-slate-200 tracking-tight text-veryDarkGray dark:text-almostWhite md:text-5xl">React Image Gallery</h1>
        <ImageSearch searchTerm={(text) => setSearchTerm(text)}/>
        {!isLoading && images?.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>} 
        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : 
          <div className='justify-items-center items-center grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {images.map((image) => {
              return <ImageCard key={image.id} image={image}/>
            })}
          </div>}
      </div>
      <footer className="bg-almostWhite text-veryDarkGray text-center pt-4 pb-1 dark:bg-veryDarkGray dark:text-almostWhite">
        &#169;Created by Felix Pherry.
      </footer>
    </>
  );
}

export default App;