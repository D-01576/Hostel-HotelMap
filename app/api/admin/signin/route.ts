import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase';



export async function POST(req: NextRequest) {
    try {
        const {email, password} = await req.json() as any;
        if (!email || !password) {
            console.error("Missing email or password");
            return NextResponse.json({ message: "Email or password is missing" }, { status: 400 });
        }

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();

        return NextResponse.json({
            message: "Success",
            token: token,
        });
    } catch (error: any) {
        return NextResponse.json({ message: `Signup failed: ${error.message}`, code: error.code });
    }
}
