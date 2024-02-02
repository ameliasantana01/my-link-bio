import Image from 'next/image'

const Item = ({
    icon,
    img,
    text,
    url,
}: {
    icon?: React.ReactNode
    img?: string
    text: string
    url: string
}) => {
    const imageClasses = 'pl-3'
    return (
        <a
            className="relative flex flex-row w-full space-x-2 h-full justify-center items-center px-6 py-4 text-white bg-rose-600 rounded-full border-2 border-rose-600 border-solid hover:bg-white hover:text-rose-600 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href={url}
        >
            <div className={`absolute w-full ${icon ? 'translate-x-5' : 'translate-x-2'}`}>
                {icon || (
                    <Image
                        src={img as string}
                        className="rounded-full"
                        alt={text}
                        width={46}
                        height={46}
                    />
                )}
            </div>
            <div className={`flex w-full justify-center font-medium`}>
                <p className={`${img && 'pl-3 break-words'}`}>{text}</p>
            </div>
        </a>
    )
}

export default Item
