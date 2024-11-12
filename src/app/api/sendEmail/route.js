import nodemailer from 'nodemailer';

export async function POST(req) {
  const { nomeCompleto, email, status, matricula, servico, mensagem } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'contato.previjaperi@gmail.com',
      pass: 'kkpw wisx xeoc qrkm', 
    },
  });

  const mailOptions = {
    from: email,
    to: 'contato.previjaperi@gmail.com',
    subject: `Assunto: ${servico}`,
    text: `
      Nome completo: ${nomeCompleto}
      E-mail: ${email}
      Status: ${status}
      Matrícula: ${matricula}
      Serviço: ${servico}
      
      Mensagem:
      ${mensagem}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'E-mail enviado com sucesso!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Erro ao enviar e-mail', error }), { status: 500 });
  }
}
