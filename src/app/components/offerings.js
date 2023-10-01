import offeringItems from "../data/offeringItems";


export default function Offerings(props) {

    let filteredItem = offeringItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
        <section className="md:px-12 px-6 py-12">
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center pb-6'>Offerings</div>
                <div className="max-w-7xl mx-auto">
                    <div className="md:grid md:grid-cols-2 md:gap-6 md:space-y-0 space-y-6">
                    {filteredItem.map(filteredItem => (
                        <div key={filteredItem.id} className="flex flex-row md:justify-center items-center md:bg-tan.50 md:p-6">
                                <div className='flex md:flex-shrink-0 pr-4 lg:block hidden'>
                                    <img
                                        src={filteredItem.src}
                                        width={150}
                                        alt={'Featured Client'}
                                    />
                                </div>
                                <div className="">
                                    <div className="font-bebasNeue text-4xl text-gray.700">{filteredItem.label}</div>
                                    <div className="">{filteredItem.description}</div>
                                    <ul className="list-disc pl-4">
                                        {filteredItem.list.map((list) =>
                                        <li key={list.list}>
                                            {list}
                                        </li>
                                        )}
                                    </ul>
                                </div>
                        </div>
                    ))}
                    </div>
                </div>
        </section>
        </>
    )
}






