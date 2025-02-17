import React from 'react';

const ContentRenderer = ({ content }) => {
    return (
        <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }} 
        />
    );
};

export default ContentRenderer;
