import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { MainLayout } from "./layouts/MainLayout";
import { Inventory } from "./pages/inventory/Inventory";
import { Products } from "./pages/products/Products";
import { InOut } from "./pages/in_out/InOut";
import { Profile } from "./pages/profile/Profile";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Inventory />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/in-out",
				element: <InOut />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
