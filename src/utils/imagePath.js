export const getImagePath = (path) => {
    return process.env.NODE_ENV === 'production' 
        ? `/kspss/images${path.replace('/images', '')}` 
        : path;
};
