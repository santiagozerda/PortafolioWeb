import { Resend } from "resend";
 
const resend = new Resend(process.env.RESEND_API_KEY);
 
export async function POST(req) {
  try {
    const { nombre, email, asunto, mensaje } = await req.json();
 
    // Validación del lado del servidor
    if (!nombre || !email || !asunto || !mensaje) {
      return Response.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }
 
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",  // ← cambiá por tu dominio verificado cuando lo tengas
      to: "santiagozerda766@gmail.com",              // ← ⚠️ IMPORTANTE: poner tu email acá
      subject: `[Portfolio] ${asunto}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #fb923c;">Nuevo mensaje desde tu portfolio</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${asunto}</p>
          <hr style="border-color: #fb923c33;" />
          <p><strong>Mensaje:</strong></p>
          <p style="color: #374151;">${mensaje}</p>
        </div>
      `,
    });
 
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return Response.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}