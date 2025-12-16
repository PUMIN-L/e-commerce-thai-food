

export default function OrderCard() {

    const information = {
        imageUrl: "https://res.cloudinary.com/dtbfee3ql/image/upload/v1765614039/dthrbftrxyxbfnic8ywu.png",
        name: "Tomyamkong",
        price: 300,
        amount: 2,
        id: 888
    }

    return (<>

        <div className="flex justify-center items-center gap-6 p-2 px-4 pl-5  bg-gray-900  rounded-lg">
            <div className="h-15 w-15">
                <img src={information.imageUrl} alt="food image" className="w-full h-full object-cover border-2  rounded-2xl" />
            </div>

            <div className="ml-[-1rem] flex flex-col flex-1">
                <div className="flex gap-2 text-white ">
                    <p>No.{information.id}</p>
                    <p>{information.name}</p>
                </div>
                <div className="flex gap-2 text-white  ">
                    <div className="cursor-pointer  gap-2 ">
                        <p className=" rounded no-spinner w-full" >
                            {information.amount} &times; {information.price} = ${information.amount * information.price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)


}