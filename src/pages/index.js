export const sendMail = async (formData) => {
  try {
    const subject = `Demande de devis - ${formData.fullName}`;

    const html = `
      <h2>Nouvelle demande de devis</h2>
      <p><strong>Nom complet:</strong> ${formData.fullName}</p>
      <p><strong>Entreprise:</strong> ${formData.company || "Non renseigné"}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Téléphone:</strong> ${formData.phone}</p>
      <p><strong>Pays de destination:</strong> ${formData.destinationCountry || "Non renseigné"}</p>
      <p><strong>Type de produit:</strong> ${formData.productType || "Non renseigné"}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `;

    const response = await fetch(
      "https://email-proxy-smoky.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          subject: subject,
          html: html,
        }),
      },
    );

    return await response.json();
  } catch (error) {
    console.error("Send email error:", error);
    throw error;
  }
};
