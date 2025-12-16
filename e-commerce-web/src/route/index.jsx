import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "../layouts/MainContainer"
import Homepage from "../pages/Homepage"
import MenuPage from "../pages/MenuPage"
import Setting from "../pages/SettingPage"
import ProtectedRoute from "../features/althentication/components/ProtectedRoute"
import ProductProtectedRoute from "../features/products/components/ProductProtectedRoute"
import ProtectedRouteIsAdmin from "../features/althentication/components/ProtectedRouteIsAdmin"
import OrdersPage from "../pages/OrdersPage"
import SeeOrderPage from "../pages/SeeOrderPage"



const router = createBrowserRouter([
    {
        path: '/', element: (
            <ProductProtectedRoute>
                <ProtectedRoute>
                    <MainContainer />
                </ProtectedRoute>
            </ProductProtectedRoute>),
        children: [
            { path: '/', element: <Homepage /> },
            { path: '/menu', element: <MenuPage /> },
            { path: '/setting', element: <ProtectedRouteIsAdmin><Setting /></ProtectedRouteIsAdmin> },
            { path: '/menu', element: <ProductProtectedRoute><MenuPage /></ProductProtectedRoute> },
            { path: '/contactus', element: <h1 className="mt-40">contactus page</h1> },
            { path: '/your-order', element: <SeeOrderPage /> },
            { path: '/orders', element: <OrdersPage /> },
        ]
    }
])

export default function Router() {
    return <RouterProvider router={router} />
}