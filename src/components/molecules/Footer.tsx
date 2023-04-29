export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex h-10 flex-wrap items-center justify-center px-2 text-center text-gray-400 sm:h-14 md:flex-nowrap">
      <span className="text-xs sm:text-base">
        ©{currentYear} Sapiens v0.0.1
      </span>
      <span className="ml-1 text-xs sm:text-base">- Derechos reservados.</span>
    </footer>
  );
}
