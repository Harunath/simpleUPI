import { NextResponse } from "next/server";
import prisma from "@repo/db/client";

export const POST = async (req: Request) => {
	try {
		const body = await req.json();
		const { name, email, number, password } = body;
		const result = await prisma.user.create({
			data: {
				email,
				name,
				number,
				password,
			},
		});
		return NextResponse.json({ message: "Successful", result });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error creating user:", error);
			return NextResponse.json(
				{ message: "Error", error: error.message },
				{ status: 500 }
			);
		}
	}
};

export const GET = async (req: Request) => {
	try {
		const result = await prisma.user.findMany();
		return NextResponse.json({ message: "Successful", result });
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error creating user:", error);
			return NextResponse.json(
				{ message: "Error", error: error.message },
				{ status: 500 }
			);
		}
	}
};
