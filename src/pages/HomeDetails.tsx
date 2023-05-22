import {Link} from "react-router-dom";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";

const product = {
    name: '3 xonali xonadon',
    price: '$300',
    href: '#',
    images: [
        {
            src: 'https://source.unsplash.com/random/400x600/?house,1',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://source.unsplash.com/random/400x400/?house,2',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://source.unsplash.com/random/400x400/?house,3',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://source.unsplash.com/random/400x600/?house,4',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    // sizes: [
    //     {name: 'XXS', inStock: false},
    //     {name: 'XS', inStock: true},
    //     {name: 'S', inStock: true},
    //     {name: 'M', inStock: true},
    //     {name: 'L', inStock: true},
    //     {name: 'XL', inStock: true},
    //     {name: '2XL', inStock: true},
    //     {name: '3XL', inStock: true},
    // ],
    description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae delectus deserunt earum eligendi et fuga in ipsum libero magnam nisi omnis quas quibusdam ratione sint sit suscipit tempore ullam veniam, voluptatum! Ad animi aperiam eius eos, impedit, modi numquam officia quasi quidem quod rem saepe sapiente sed soluta voluptatum?',
    highlights: [
        'Lorem ipsum dolor sit amet.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet, consectetur.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    ],
    details:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore laboriosam quibusdam repellendus totam? Dicta dignissimos eaque ex expedita impedit itaque tenetur. Amet consequatur deleniti distinctio dolores eaque, fugit, ipsum magnam optio rem saepe vero voluptatibus! Cupiditate, expedita ut. Aliquam asperiores, cumque delectus dicta dignissimos, doloremque, doloribus enim excepturi explicabo facere id illum laudantium magni neque nesciunt nihil provident quaerat quos ratione totam unde voluptates voluptatibus? Ad, assumenda blanditiis consequatur dicta dolore doloribus ea esse eveniet ex excepturi facere hic id laboriosam nam neque, nesciunt nihil non nulla obcaecati porro quas recusandae sunt velit voluptates voluptatibus. Eaque labore reprehenderit sint!',
}
const reviews = {href: '#', totalCount: 117}

export const HomeDetails = () => {
    return (
        <div className="bg-white">


            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list"
                        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li className="text-sm">
                            <Link to="/" aria-current="page"
                                  className="font-medium text-gray-900 flex hover:text-gray-600 gap-2 items-center">
                                <ArrowLeftIcon className="h-6 w-6"/> Ortga
                            </Link>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={product.images[1].src}
                                alt={product.images[1].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={product.images[2].src}
                                alt={product.images[2].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={product.images[3].src}
                            alt={product.images[3].alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div
                    className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                {/*<p className="sr-only">{reviews.average} out of 5 stars</p>*/}
                                <a href={reviews.href}
                                   className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} odam hozirda bu e'lonni ko'ryapti
                                </a>
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-gray-900">Bog'lanish</h3>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Olmazor tumani
                                    </a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                +998 (90) 123-45-67
                            </button>
                        </form>
                    </div>

                    <div
                        className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Qulayliklar</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Qo'shimcha ma'lumotlar</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
