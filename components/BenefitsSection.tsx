const benefits = [
  {
    title: "Entrega instantánea",
    text: "Recibe tu clave digital en el correo en cuanto se confirma el pago.",
  },
  {
    title: "Oficial y seguro",
    text: "Juegos originales para PC, PlayStation, Xbox y Nintendo.",
  },
  {
    title: "Soporte 24/7",
    text: "Ayuda humana si hay algún problema con tu pedido.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {benefits.map((benefit) => (
        <article
          key={benefit.title}
          className="rounded-2xl border border-[#232636] bg-[#11131a] p-5"
        >
          <h3 className="font-semibold">{benefit.title}</h3>
          <p className="mt-2 text-sm text-[#9aa3b8]">{benefit.text}</p>
        </article>
      ))}
    </section>
  );
}
