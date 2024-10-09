import { NextRequest, NextResponse } from "next/server";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '@/firebase';

// Function to handle email and password signup
export async function signUpWithEmail(req: NextRequest) {
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

// Function to handle Google signup
export async function signUpWithGoogle(req: NextRequest) {
    try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        const token = await userCredential.user.getIdToken();
        return NextResponse.json({
            message: "Google Sign-in Success",
            token: token,
        });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

// POST handler for the request
export async function POST(req: NextRequest) {
    const { type } = await req.json(); // Assuming the request contains a 'type' to distinguish between email/password and Google signup

    if (type === "email") {
        return await signUpWithEmail(req);
    } else if (type === "google") {
        return await signUpWithGoogle(req);
    } else {
        return NextResponse.json({ message: "Invalid signup type" }, { status: 400 });
    }
}
