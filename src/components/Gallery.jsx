import { useState } from 'react';
import { useEffect } from 'react';

function Gallery(props) {

    const [modalOpened, setModalOpened] = useState(false);
    const [position, setPosition] = useState('');
    const [index, setIndex] = useState('');

    console.log(`${position} ${index}`)

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

    const switchImage = function (direction){
        if (direction === 'Backwards'){
            if (position === 'left'){
                // Conditional To Check Whether Or Not It's The First Image
                if (index === 0) {
                    return
                } else {
                    setPosition('right')
                    setIndex(i => i - 1)
                }
            } else if (position === 'middle'){
                setPosition('left')
                setIndex(i => i * 2)
            } else if (position === 'right'){
                // If The Index Is An Even Number Go To The Middle Position
                if (index % 2 === 0){
                    setPosition('middle')
                    setIndex(i => i / 2)
                } else {
                    setPosition('left')
                }
            }
        } else if (direction === 'Forwards'){
            if (position === 'left'){
                // If The Index Is An Even Number Go To The Middle Position
                if (index % 2 === 0){
                    setPosition('middle')
                    setIndex(i => i / 2)
                } else {
                    setPosition('right')
                }
            } else if (position === 'middle'){
                setPosition('right')
                setIndex(i => i * 2)
            } else if (position === 'right'){
                // Conditional To Check Whether Or Not It's The Last Image
                if (index === props.optimizedImages.jpg.right.length - 1) {
                    return
                } else {
                    setPosition('left')
                    setIndex(i => i + 1)
                }
            }
        }
    }

    const preview = function (e) {
        setModalOpened(true);
        setPosition(e.target.dataset.position);
        setIndex(Number(e.target.dataset.index));
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
                        {/* Could Be Improved With Loading Image In The Background */}
                        { props.optimizedImages.jpg[position][index] &&                         
                          props.optimizedImages.webp[position][index] ? (

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
                                    alt=""
                                />
                            </picture>

                          ): null
                        }
                        <img
                            className="absolute top-1/2 translate-y-[-50%] left-[5%] hidden lg:inline-block cursor-pointer"
                            src="/svg/Arrow_left.svg"
                            id="arrowLeft"
                            onClick={() => switchImage('Backwards')}
                            alt=""
                            decoding="async"
                        />
                        <img
                            className="absolute top-1/2 translate-y-[-50%] right-[5%] hidden lg:inline-block cursor-pointer"
                            src="/svg/Arrow_right.svg"
                            id="arrowRight"
                            onClick={() => switchImage('Forwards')}
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
