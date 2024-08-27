import { auth } from "@/auth";

export default auth((req) => {
  // Vous pouvez ajouter des personnalisations ici si nécessaire
});

// Optionnel : configurer le middleware pour ignorer certains chemins
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
