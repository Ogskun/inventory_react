import React from "react";
import Logo from "../../assets/logo-python.png";

export const Login = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="bg-white p-[30px] rounded shadow-md w-[360px] text-center">
				<div className="mx-auto w-[50px]">
					<img src={Logo} />
				</div>
				<h4 className="font-medium mb-5 mt-1">Login to your account</h4>

				<form method="POST" className="flex flex-col gap-4">
					<input
						type="text"
						placeholder="Email Address"
						className="w-full font-normal text-sm rounded border-[2px] px-5 py-3"
					/>
					<input
						type="password"
						placeholder="Password"
						className="w-full font-normal text-sm rounded border-[2px] px-5 py-3"
					/>
					<button className="bg-[#BF2323] hover:bg-[#a81e1e] text-white text-sm font-normal cursor-pointer px-5 py-3 rounded w-full mb-1">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};
