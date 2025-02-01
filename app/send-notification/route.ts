import admin from "firebase-admin";
import { Message } from "firebase-admin/messaging";
import { NextRequest, NextResponse } from "next/server";

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  const serviceAccount = require("@/serviceKey.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
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
  