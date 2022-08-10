import React, { useState } from 'react';

const ImageSearch = ({ searchTerm }) => {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        searchTerm(text);
    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b-2 border-lightTeal py-2">
                    <input onChange={(e) => {
                        setText(e.target.value);
                    }} className="appearance-none bg-transparent border-none w-full
                    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="Search for images..." />
                    <button className="text-almostWhite flex-shrink-0 bg-lightTeal hover:bg-darkTeal
                    border-lightTeal hover:border-darkTeal text-sm border-4 text-white py-1
                        px-2 rounded" type="submit">
                    Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch;
