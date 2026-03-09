import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message, sender } = await req.json();

    // Vérifie si le message contient une référence Greathem Lab
    const isGreathemOrder = message.includes("GRL-");
    const isPaymentConfirmed = message.includes("reçu") || message.includes("5000");

    if (isGreathemOrder && isPaymentConfirmed) {
      // LOGIQUE : Ici le script déclenche l'envoi de l'email automatique
      return NextResponse.json({ status: "Order Validated" }, { status: 200 });
    }

    return NextResponse.json({ status: "Personal Transfer Ignored" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid Request" }, { status: 400 });
  }
}