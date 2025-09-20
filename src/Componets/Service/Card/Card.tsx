
export interface IServiceProp {
    icon: string,
    title: string,
    description: string,
    tags: string[]
}

const Card = ({ service }: { service: IServiceProp }) => {
    return (
        <div className=" group  flex-1  h-80 p-2 sm:p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:shadow-md shadow-[#26a0da] flex flex-col justify-between">
            <div>
                <div className="flex justify-center mb-2">
                    <p className="text-4xl border rounded-md bg-radial-[at_25%_25%] from-[#212A37] to-zinc-900 to-75% border-gray-700 p-2 transition-all delay-200 ease-in group-hover:rotate-8 group-hover:scale-105">
                        {service.icon}
                    </p>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 text-center">{service.description}</p>
            </div>

            <div className="flex gap-2 items-center justify-center flex-wrap mt-auto">
                {service.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="border rounded-full border-gray-600 py-1 px-4 text-xs group-hover:bg-[#212A37] group-hover:border-[#26a0da]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>

    )
}

export default Card;