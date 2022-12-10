const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendMail = async (req, res) => {
  try {
    const { name, surname, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `${name} ${surname} <${email}>`, // sender address
      to: "thecoffeeshopfs@gmail.com", // list of receivers
      subject: "Contact | The Coffee Shop", // Subject line
      html: `<strong>Gönderen:</strong> ${name} ${surname}
        <br>
        <strong>Mail Adresi:</strong> ${email}
        <br>
        <strong>Mesaj:</strong> ${message}`, // html body
    });

    await transporter.sendMail({
      from: '"The Coffee Shop ☕" <thecoffeeshopfs@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Contact | The Coffee Shop", // Subject line
      html: `<strong>Merhabalar!</strong> <br> 
      Sevgili <strong>${name} ${surname},</strong> 
      <br> 
      Talebiniz tarafımıza ulaştı.
      En yakın zamanda geri dönüş sağlayacağız. 🖤🚀
      <br>
      <br>
      <em><strong>The Coffee Shop Ekibi</strong></em> ☕`, // html body
    });

    res.status(200).json({ status: "success", message: "Talebiniz alındı." });
  } catch (err) {
    res
      .status(400)
      .json({ status: "fail", message: "Talebiniz alınamadı.", error: err });
  }
};
