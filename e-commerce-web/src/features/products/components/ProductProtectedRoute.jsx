import Spinner from "../../../components/Spinner"
import useProduct from "../hook/useProduct"

export default function ProductProtectedRoute({ children }) {
    // const { isProductLoading } = useProduct()


    return (
        <>
            {/* {isProductLoading && <Spinner />} */}
            {children}
        </>
    )
}