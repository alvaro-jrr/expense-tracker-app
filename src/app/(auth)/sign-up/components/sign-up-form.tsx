import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FormHeader } from "../../components/form-header";

export function SignUpForm({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-6", className)}>
      <FormHeader
        title="Crea una cuenta"
        description="Haz que tu manejo de finanzas sea más fácil y eficiente"
      />

      <form className="space-y-6" method="POST">
        <div className="space-y-4">
          <TextField
            id="name"
            label="Nombre"
            inputProps={{ placeholder: "ej: John Doe" }}
          />

          <TextField
            id="email"
            label="Correo electrónico"
            inputProps={{
              type: "email",
              placeholder: "ej: john.doe@example.com",
            }}
          />

          <TextField
            id="password"
            label="Contraseña"
            inputProps={{
              type: "password",
            }}
          />
        </div>

        <Button className="w-full">Crear cuenta</Button>
      </form>

      <p className="text-sm text-muted-foreground text-center">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Inicia sesión
        </Link>
      </p>
    </section>
  );
}
