export async function onRequestPost(context) {
    const { request, env } = context;

    let body;
    try {
        body = await request.json();
    } catch {
        return json({ error: 'Petición inválida.' }, 400);
    }

    const { nombre, email, asunto, mensaje } = body;

    if (!nombre || !email || !mensaje) {
        return json({ error: 'Faltan campos obligatorios.' }, 400);
    }

    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${env.RESEND_API_KEY}`,
            'Content-Type':  'application/json',
        },
        body: JSON.stringify({
            from:     'Portfolio <noreply@navacerradavaron.com>',
            to:       'info@navacerradavaron.com',
            reply_to: email,
            subject:  asunto || 'Nuevo mensaje desde el portfolio',
            html: `
                <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:520px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
                    <div style="padding:8px 24px;background:#7c3aed">
                        <p style="margin:0;font-size:12px;font-weight:600;color:#ffffff;letter-spacing:1px;text-transform:uppercase">Portfolio · Nuevo mensaje</p>
                    </div>
                    <div style="padding:28px 24px">
                        <table style="width:100%;border-collapse:collapse;font-size:14px">
                            <tr>
                                <td style="padding:10px 0;color:#6b7280;width:80px;vertical-align:top;border-bottom:1px solid #f3f4f6">Nombre</td>
                                <td style="padding:10px 0;color:#111827;font-weight:600;border-bottom:1px solid #f3f4f6">${nombre}</td>
                            </tr>
                            <tr>
                                <td style="padding:10px 0;color:#6b7280;vertical-align:top;border-bottom:1px solid #f3f4f6">Email</td>
                                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6"><a href="mailto:${email}" style="color:#7c3aed;text-decoration:none">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding:10px 0;color:#6b7280;vertical-align:top">Asunto</td>
                                <td style="padding:10px 0;color:#111827">${asunto || '—'}</td>
                            </tr>
                        </table>
                        <div style="margin-top:20px;padding:16px;background:#f9fafb;border-left:3px solid #7c3aed;border-radius:0 4px 4px 0;font-size:14px;line-height:1.7;color:#374151">
                            ${mensaje.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <div style="padding:12px 24px;background:#f9fafb;border-top:1px solid #e5e7eb">
                        <p style="margin:0;font-size:12px;color:#9ca3af">Responde a este email para contestar directamente a ${nombre}.</p>
                    </div>
                </div>
            `,
        }),
    });

    if (!res.ok) {
        const err = await res.text();
        console.error('Resend error:', err);
        return json({ error: 'No se pudo enviar el mensaje.' }, 500);
    }

    return json({ ok: true });
}

function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json' },
    });
}
