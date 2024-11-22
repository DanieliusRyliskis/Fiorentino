import { useState } from 'react';

function Gallery(props) {
    // Here Goes Variables And Functions
    // console.log(props.optimizedImages.avif.left.length);

    const leftPictures = []
    const middlePictures = []
    const rightPictures = []
    
    for (let i = 0; i < props.optimizedImages.jpg.left.length; i++){
        leftPictures.push(
            <picture key={i}>
                <source 
                srcSet={props.optimizedImages.avif.left[i].srcSet.attribute}
                sizes='(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px'
                type='image/avif'
                />  
                <source 
                srcSet={props.optimizedImages.webp.left[i].srcSet.attribute}
                sizes='(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px'
                type='image/webp'
                />  
                <img 
                src={props.optimizedImages.jpg.left[i].src} 
                srcSet={props.optimizedImages.jpg.left[i].srcSet.attribute}
                sizes='(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px'
                className="w-full lg:h-[21.563rem] lg:object-cover cursor-pointer"
                decoding='async'
                alt="" 
                />
            </picture>
        );
    }

    for (let i = 0; i < props.optimizedImages.jpg.middle.length; i++){
        middlePictures.push(
            <picture key={i}>
                <source 
                srcSet={props.optimizedImages.avif.middle[i].srcSet.attribute}
                sizes='(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px'
                type='image/avif'
                />  
                <source 
                srcSet={props.optimizedImages.webp.middle[i].srcSet.attribute}
                sizes='(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px'
                type='image/webp'
                />  
                <img 
                src={props.optimizedImages.jpg.middle[i].src} 
                srcSet={props.optimizedImages.jpg.middle[i].srcSet.attribute}
                sizes='(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px'
                className="w-full lg:h-[43.875rem] lg:object-cover cursor-pointer"
                decoding='async'
                alt="" 
                />
            </picture>
        );
    }
    for (let i = 0; i < props.optimizedImages.jpg.right.length; i++){
        rightPictures.push(
            <picture key={i}>
                <source 
                srcSet={props.optimizedImages.avif.right[i].srcSet.attribute}
                sizes='(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px'
                type='image/avif'
                />  
                <source 
                srcSet={props.optimizedImages.webp.right[i].srcSet.attribute}
                sizes='(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px'
                type='image/webp'
                />  
                <img 
                src={props.optimizedImages.jpg.right[i].src} 
                srcSet={props.optimizedImages.jpg.right[i].srcSet.attribute}
                sizes='(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px'
                className="w-full lg:h-[21.563rem] lg:object-cover cursor-pointer"
                decoding='async'
                alt="" 
                />
            </picture>
        );
    }


    // In Return Goes The HTML And JSX
    // You Can Only Return Single Element
    return (
        <div
            className="flex flex-col lg:flex-row gap-4 w-fit lg:w-[95%] mx-auto mb-[clamp(4rem,_3.2rem_+_4vw,_8rem)] xl:max-w-[83.5rem]"
            id="imageContainer"
        >
            <div className="flex flex-col w-[90%] mx-auto gap-4 xl:max-w-[28.75rem]">
                {leftPictures}
            </div>
            <div class="flex flex-col w-[90%] mx-auto gap-4 xl:max-w-[23.75rem]">
                {middlePictures}
            </div>
            <div class="flex flex-col w-[90%] mx-auto gap-4 xl:max-w-[28.75rem]">
                {rightPictures}
            </div>
        </div>
    );
}
export default Gallery;

