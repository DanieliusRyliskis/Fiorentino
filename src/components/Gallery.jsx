import { useState } from 'react';

function Gallery(props) {
    // Here Goes Variables And Functions
    console.log(props.optimizedImages);

    // In Return Goes The HTML And JSX
    // You Can Only Return Single Element
    return (
        <div
            class="flex flex-col lg:flex-row gap-4 w-fit lg:w-[95%] mx-auto mb-[clamp(4rem,_3.2rem_+_4vw,_8rem)] xl:max-w-[83.5rem]"
            id="imageContainer"
        >
            <div class="flex flex-col w-[90%] mx-auto gap-4 xl:max-w-[28.75rem]">
                {left.map((c) => (
                    <Picture
                        src={images[c.file_path].default}
                        widths={[600, 900]}
                        sizes={
                            '(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 64em) 900px, (min-width: 64.063em) 600px'
                        }
                        class={`w-full lg:h-[21.563rem] lg:object-cover cursor-pointer`}
                        alt={c.title}
                        formats={['avif', 'webp']}
                        fallbackFormat="jpg"
                        quality={'high'}
                    />
                ))}
            </div>
            <div class="flex flex-col w-[90%] mx-auto gap-4 xl:max-w-[23.75rem]">
                {middle.map((c) => (
                    <Picture
                        src={images[c.file_path].default}
                        widths={[600, 900]}
                        sizes={
                            '(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 64em) 900px, (min-width: 64.063em) 600px'
                        }
                        class="w-full lg:h-[43.875rem] lg:object-cover cursor-pointer aspec"
                        alt={c.title}
                        formats={['avif', 'webp']}
                        fallbackFormat="jpg"
                        quality={'high'}
                    />
                ))}
            </div>

            <div class="flex flex-col w-[90%] mx-auto gap-4 xl:max-w-[28.75rem]">
                {right.map((c) => (
                    <Picture
                        src={images[c.file_path].default}
                        widths={[600, 900]}
                        sizes={
                            '(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 64em) 900px, (min-width: 64.063em) 600px'
                        }
                        class={`w-full lg:h-[21.563rem] lg:object-cover cursor-pointer`}
                        alt={c.title}
                        alt={c.title}
                        formats={['avif', 'webp']}
                        fallbackFormat="jpg"
                        quality={'high'}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
