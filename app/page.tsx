import Image from 'next/image'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoTiktok } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { RiMessage3Fill } from 'react-icons/ri'

import Item from '@/components/Item'

export default function Home() {
    const SOCIAL_MEDIAS = [
        {
            icon: <BsInstagram />,
            title: 'Instagram',
            url: 'https://www.instagram.com/ameliamariesantana',
        },
        {
            icon: <IoLogoTiktok />,
            title: 'Tik Tok',
            url: 'https://tiktok.com/@ameliamsantana',
        },
        {
            icon: <MdOutlineEmail />,
            title: 'Correo Electrónico',
            url: 'mailto:ameliamariesantana@gmail.com',
        },
    ]

    const OPTIONS = [
        {
            icon: <RiMessage3Fill className="text-3xl" />,
            text: 'Cuentame de ti',
            url: 'https://ngl.link/ameliamariesantana',
        },
        {
            img: '/img/amelia-alt.webp',
            text: 'Propuestas para nuestra ciudad',
            url: 'https://docs.google.com/document/d/1-pvvIFhOggPpFQ5wr7hH1Dm7wPjHs4CDgMJc7_hLOw8/',
        },
        {
            icon: <BiSolidDonateHeart className="text-3xl" />,
            text: 'Aporta para la campaña',
            url: 'https://patreon.com/ameliamsantana?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link',
        },
    ]
    return (
        <main className="flex flex-col w-full max-w-xl justify-center items-center space-y-5 bg-white p-5 rounded-xl">
            <div className="flex flex-col items-center">
                <Image
                    src="/img/logo.webp"
                    alt="Amelia Santana Regidora 2024"
                    width={261}
                    height={149}
                />
                <Image
                    src="/img/amelia.webp"
                    quality={100}
                    alt="Amelia Santana"
                    width={128}
                    height={128}
                    className="rounded-full"
                />
            </div>
            <div className="flex space-x-6">
                {SOCIAL_MEDIAS.map((socialMedia, i) => (
                    <a
                        key={i}
                        href={socialMedia.url}
                        title={socialMedia.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl overflow-none active:scale-110 sm:hover:scale-110 text-amber-950 transition-all duration-300"
                    >
                        {socialMedia.icon}
                    </a>
                ))}
            </div>
            <p className="text-center text-slate-700">
                Tu candidata a regidora por la C3 para juntos construir una mejor Ciudad Corazón
                ♥️🙌
            </p>

            <div className="w-full py-3 space-y-5">
                {OPTIONS.map((option, i) => (
                    <Item key={i} {...option} />
                ))}
            </div>
        </main>
    )
}
