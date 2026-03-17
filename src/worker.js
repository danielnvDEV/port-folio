export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname === '/api/contact' && request.method === 'POST') {
            return handleContact(request, env);
        }

        return env.ASSETS.fetch(request);
    },
};

async function handleContact(request, env) {
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
                <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#0f0f1a;color:#f8fafc;border-radius:12px">
                    <h2 style="margin:0 0 24px;font-size:20px;background:linear-gradient(135deg,#a78bfa,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent">
                        Nuevo mensaje desde tu portfolio
                    </h2>
                    <table style="width:100%;border-collapse:collapse">
                        <tr>
                            <td style="padding:10px 0;color:#94a3b8;font-size:13px;width:90px">Nombre</td>
                            <td style="padding:10px 0;font-size:14px">${nombre}</td>
                        </tr>
                        <tr>
                            <td style="padding:10px 0;color:#94a3b8;font-size:13px">Email</td>
                            <td style="padding:10px 0;font-size:14px"><a href="mailto:${email}" style="color:#a78bfa">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding:10px 0;color:#94a3b8;font-size:13px">Asunto</td>
                            <td style="padding:10px 0;font-size:14px">${asunto || '—'}</td>
                        </tr>
                    </table>
                    <div style="margin-top:24px;padding:20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;font-size:14px;line-height:1.7;color:#cbd5e1">
                        ${mensaje.replace(/\n/g, '<br>')}
                    </div>
                    <p style="margin-top:24px;font-size:12px;color:#475569">
                        Responde directamente a este email para contestar a ${nombre}.
                    </p>
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
