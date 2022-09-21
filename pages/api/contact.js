import { app, firestore } from "firebase-admin";
import { cert, initializeApp } from "firebase-admin/app";

if (process.env.NODE_ENV === "development") {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY))
  });
}

export default async function handler(req, res) {
  let { email, name, company, message } = req.body;

  if (!email) {
    return res.status(400).json({
      error: {
        en: "Please enter a valid email address.",
        fr: "Veuillez entrer une adresse email valide."
      }
    });
  }

  if (!name) {
    return res.status(400).json({
      error: {
        en: "Please enter your name.",
        fr: "Veuillez entrer votre nom."
      }
    });
  }

  if (!company) {
    company = "N/A";
  }

  if (!message) {
    return res.status(400).json({
      error: {
        en: "Please enter a message.",
        fr: "Veuillez entrer un message."
      }
    });
  }

  try {
    await firestore()
      .collection("mail")
      .add({
        to: "giroux.dominik@gmail.com",
        message: {
          subject: `📫 New message from ${name} (${company})`,
          text: `FROM: ${name} - ${email} (${company})\n\n${message}`,
          html: `
            <p><strong>FROM: ${name} - ${email} (${company})</strong></p>
            <br /> <p>${message}</p>
          `
        }
      });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message || error.toString() });
  }
}
