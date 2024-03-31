import logo from '@assets/images/header-logo.webp'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const navlinks = [
        {
            text: "Services",
            link: "#services",
            color: "bg-yellow-600"
        },
        {
            text: "Clients",
            link: "#clients",
            color: "bg-red-600"
        },
        {
            text: "Service",
            link: "#demo",
            color: "bg-blue-600"
        },
    ]

    return (
        <div className="fixed h-16 top-0 left-0 right-0 shadow-lg z-40 bg-white">
            <div className="container mx-auto h-full w-full flex items-center sm:px-12 px-6 justify-between">
                <div className='w-32'>
                    <Image
                        src={logo}
                        alt="card_img"
                        className="w-auto h-full object-contain"
                        priority
                    />
                </div>
                <div className="h-full flex gap-8 justify-between">
                    {navlinks?.map((navlink) =>
                        <Link href={navlink.link} key={navlink.link} className={`relative flex items-center px-2 font-semibold text-neutral-700 hover:text-neutral-900 transition-all duration-300 group`}>
                            {navlink.text}
                            <div className={`inline-block absolute h-1 bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 ${navlink.color}`} />
                        </Link>
                    )
                    }
                </div>
            </div>
        </div >

    )
}

export default Header