import React from 'react';

const Tag = ({ tag }) => {
  return (
    <span className="inline-block bg-gray text-veryDarkGray rounded-full px-3 py-1 m-1 text-sm font-semibold">
        #{tag}
    </span>
  )
}

export default Tag;