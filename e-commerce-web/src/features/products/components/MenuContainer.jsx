
import FoodCardContainer from "./FoodCardContainer"
import ShowCategory from "./ShowCategory"


export default function MenuContainer() {
    return (
        <div className="flex mt-30  h-[26rem] justify-center ">
            <ShowCategory />
            <FoodCardContainer />
        </div>
    )
}