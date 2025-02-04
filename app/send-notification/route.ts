import admin from "firebase-admin";
import { Message } from "firebase-admin/messaging";
import { NextRequest, NextResponse } from "next/server";


if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
    });
  }


export async function POST(request: NextRequest) {
    try {
      const { token, title, message } = await request.json();
      const payload: Message = {
        token,
        notification: { title, body: message },
      };
  
      await admin.messaging().send(payload);
  
      return NextResponse.json(
        { success: true, message: "Notification sent!" },
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
    } catch (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
    }
  }
  