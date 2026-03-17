require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const { Resend } = require('resend');

const app    = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/api/contact', async (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ error: 'Faltan campos obligatorios.' });
    }

    try {
        await resend.emails.send({
            from: `Portfolio <noreply@navacerradavaron.com>`,
            to:   'info@navacerradavaron.com',
            replyTo: email,
            subject: asunto || 'Nuevo mensaje desde el portfolio',
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
                        Puedes responder directamente a este email para contestar a ${nombre}.
                    </p>
                </div>
            `,
        });

        res.json({ ok: true });
    } catch (err) {
        console.error('Error enviando email:', err);
        res.status(500).json({ error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
