'use client'
import { title, subtitle } from "@/components/primitives";
import TextInput from "@/components/input";
import ButtonCmp from "@/components/button";
import { useCallback } from "react";

export default function Home() {

	const handleClick = useCallback(
		() => {
			//TODO add login/registration logic
			console.log('click')
		},
		[],
	)
	
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Login/Registration&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>template.&nbsp;</h1>
				<br />
				<h1 className={title()}>
					Made with ReactJS and NestJS.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					By Davide Onano.
				</h2>
			</div>

			<div className="flex flex-col gap-3 w-6/12 ">
				<TextInput type="email" label="Email" placeholder="Enter your email" />
				<TextInput type="password" label="Password" placeholder="Enter your password" />
			</div>
			<ButtonCmp onPress={handleClick} className="hover:bg-grey-500" variant="ghost" color="success"></ButtonCmp>
		</section>
	);
}
