import { NextRequest, NextResponse } from "next/server";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase';

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken(); 
        return NextResponse.json({
            message: "Success",
            token: token, 
        });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 }); 
    }
}
