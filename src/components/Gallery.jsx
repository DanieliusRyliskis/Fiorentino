import { useState } from 'react';
import { useEffect } from 'react';

function Gallery(props) {
    const [modalOpened, setModalOpened] = useState(false);
    const [loading, setLoading] = useState(true);
    const [position, setPosition] = useState('');
    const [index, setIndex] = useState('');

    // if modalOpened === true then listen to key events
    useEffect(() => {
        if (modalOpened) {
            document.body.style.height = '100%';
            document.body.style.overflow = 'hidden';
        } else if (!modalOpened) {
            document.body.style.height = '';
            document.body.style.overflow = '';
        }
        // Cleanup Later
    }, [modalOpened]);

    const closeModal = function () {
        setModalOpened(false);
    };

    const preview = function (e) {
        setModalOpened(true);
        setPosition(e.target.dataset.position);
        setIndex(e.target.dataset.index);
        // Index Will Change
        // let index = e.target.dataset.index;
        console.log(`${position} ${index}`);
        // middle 2 -> right 2 - left 3
        // if left index is an odd number than skip the middle when going forwards
        // if right index is also an odd number than skip the middle when going backwards
        const positions = ['left', 'middle', 'right'];
        // Function For Going To The Next Image
        // const arrayIndex = positions.indexOf(position);
        // const nextArrayIndex = (arrayIndex + 1) % positions.length;
        // const nextPosition = positions[nextArrayIndex];
        // Generate Modal
    };

    const genPicture = function (position, height) {
        const pictures = [];
        for (let i = 0; i < props.optimizedImages.jpg[position].length; i++) {
            pictures.push(
                <picture key={i}>
                    <source
                        srcSet={
                            props.optimizedImages.avif[position][i].srcSet
                                .attribute
                        }
                        sizes="(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px"
                        type="image/avif"
                    />
                    <source
                        srcSet={
                            props.optimizedImages.webp[position][i].srcSet
                                .attribute
                        }
                        sizes="(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px"
                        type="image/webp"
                    />
                    <img
                        src={props.optimizedImages.jpg[position][i].src}
                        srcSet={
                            props.optimizedImages.jpg[position][i].srcSet
                                .attribute
                        }
                        sizes="(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px"
                        className={`w-full ${height} lg:object-cover cursor-pointer`}
                        decoding="async"
                        onClick={(e) => preview(e)}
                        data-position={position}
                        data-index={i}
                        alt=""
                    />
                </picture>,
            );
        }
        return pictures;
    };

    const leftPictures = genPicture('left', 'lg:h-[21.563rem]');
    const middlePictures = genPicture('middle', 'lg:h-[43.875rem]');
    const rightPictures = genPicture('right', 'lg:h-[21.563rem]');

    // In Return Goes The HTML And JSX
    // You Can Only Return Single Element
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4 w-fit lg:w-[95%] mx-auto mb-[clamp(4rem,_3.2rem_+_4vw,_8rem)] xl:max-w-[83.5rem]">
                <div className="flex flex-col w-[90%] mx-auto gap-4 xl:max-w-[28.75rem]">
                    {leftPictures}
                </div>
                <div className="flex flex-col w-[90%] mx-auto gap-4 xl:max-w-[23.75rem]">
                    {middlePictures}
                </div>
                <div className="flex flex-col w-[90%] mx-auto gap-4 xl:max-w-[28.75rem]">
                    {rightPictures}
                </div>
            </div>
            {/* Modal Window */}
            {modalOpened && (
                <>
                    <div
                        className="fixed z-20 top-0 left-0 w-screen h-screen bg-black opacity-50"
                        id="modal"
                    ></div>
                    <div className="fixed z-50 w-screen h-screen top-0 left-0">
                        <img
                            className="absolute top-[2%] right-[2%] cursor-pointer"
                            src="/svg/Close.svg"
                            id="closeIcon"
                            onClick={closeModal}
                            alt=""
                            decoding="async"
                        />
                        {!loading ? (
                            <picture>
                                <source
                                    srcSet={
                                        props.optimizedImages.avif[position][
                                            index
                                        ].srcSet.values[2].url
                                    }
                                    type="image/avif"
                                />
                                <source
                                    srcSet={
                                        props.optimizedImages.webp[position][
                                            index
                                        ].srcSet.values[2].url
                                    }
                                    type="image/webp"
                                />
                                <img
                                    src={
                                        props.optimizedImages.jpg[position][
                                            index
                                        ].srcSet.values[2].url
                                    }
                                    className="absolute max-w-[85%] max-h-[80%] left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]"
                                    decoding="async"
                                    onLoad={() => setLoading(false)}
                                    alt=""
                                />
                            </picture>
                        ) : (
                            <picture>
                                <source
                                    srcSet={
                                        props.optimizedImages.avif[position][index]
                                            .srcSet.attribute
                                    }
                                    sizes="(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px"
                                    type="image/avif"
                                />
                                <source
                                    srcSet={
                                        props.optimizedImages.webp[position][index]
                                            .srcSet.attribute
                                    }
                                    sizes="(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px"
                                    type="image/webp"
                                />
                                <img
                                    src={
                                        props.optimizedImages.jpg[position][index]
                                            .src
                                    }
                                    srcSet={
                                        props.optimizedImages.jpg[position][index]
                                            .srcSet.attribute
                                    }
                                    sizes="(max-width: 40em) 600px, (min-width: 40.063em) and (max-width: 80em) 900px, 600px"
                                    className="absolute max-w-[85%] max-h-[80%] left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]"
                                    decoding="async"
                                    alt=""
                                />
                            </picture>
                        )}
                        <img
                            className="absolute top-1/2 translate-y-[-50%] left-[5%] hidden lg:inline-block cursor-pointer"
                            src="/svg/Arrow_left.svg"
                            id="arrowLeft"
                            alt=""
                            decoding="async"
                        />
                        <img
                            className="absolute top-1/2 translate-y-[-50%] right-[5%] hidden lg:inline-block cursor-pointer"
                            src="/svg/Arrow_right.svg"
                            id="arrowRight"
                            alt=""
                            decoding="async"
                        />
                        {/* <div className="w-full h-full" id="background"></div> */}
                    </div>
                </>
            )}
        </>
    );
}
export default Gallery;
