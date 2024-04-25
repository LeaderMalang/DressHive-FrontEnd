const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: './Images/keagan-henman-xPJYL0l5Ii8-unsplash.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: './Images/marcus-loke-xXJ6utyoSw0-unsplash.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: './Images/mnz-ToLMORRb97Q-unsplash.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: './Images/alex-haigh-fEt6Wd4t4j0-unsplash.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function Showcase() {
    return (
        <>
            <div className="mt-10 px-10">
                <div className="relative">
                    <h1 className="text-4xl font-medium text-gray-700 relative text-center">Showcase</h1>
                    <div className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 w-[5%] h-1 bg-red-600"></div>
                </div>
                <p className="mt-8 px-4">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <a key={product.id} href={product.href} className="group">
                                    <div className="relative bg-gray-200 rounded-lg overflow-hidden">
                                        <div
                                            className="pb-[100%] relative"
                                            style={{ paddingBottom: '100%' }}
                                        >
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 group-hover:opacity-75 ease-in duration-300"
                                            />
                                        </div>
                                        <div className="p-4 absolute bottom-0 right-auto left-0 hidden group-hover:block ease-in duration-300">
                                            <h3 className="mt-2 text-lg font-bold text-gray-700 text-left">{product.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900 text-left">{product.price}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}