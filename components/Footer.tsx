import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-[#232636] py-8">
      <div className="container-gv flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-black">
          GAME<span className="text-[#7c5cff]">SHOP</span>
          <span className="ml-1 text-sm font-semibold text-[#9aa3b8]">Colombia</span>
        </p>
        <nav className="flex gap-4 text-sm text-[#9aa3b8]">
          <Link href="/tienda">Tienda</Link>
          <Link href="/carrito">Carrito</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
        <p className="text-sm text-[#9aa3b8]">© {new Date().getFullYear()} GameShop Colombia</p>
      </div>
    </footer>
  );
}
