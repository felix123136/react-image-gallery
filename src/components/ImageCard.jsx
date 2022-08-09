import React from 'react';
import Tag from './Tag';

const ImageCard = ({ image }) => {
    return (
        <div className="bg-veryDarkGray text-almostWhite max-w-sm rounded overflow-hidden shadow-lg dark:bg-almostWhite dark:text-veryDarkGray">
            <img src={image.webformatURL} alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-darkTeal text-xl mb-2">
                Photo by {image.user}
                </div>
                <ul>
                <li>
                    <strong>Views: </strong>
                    {image.views}
                </li>
                <li>
                    <strong>Downloads: </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes: </strong>
                    {image.likes}
                </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                <Tag key={0} tag={image.tags.split(', ')[0]}/>
                <Tag key={1} tag={image.tags.split(', ')[1]}/>
                <Tag key={2} tag={image.tags.split(', ')[2]}/>
            </div>
        </div>
    );
}

export default ImageCard;