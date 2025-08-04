import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FormHeader } from "../../components/form-header";

export function LoginForm({ className }: { className?: string }) {
  return (
    <section className={cn("space-y-6", className)}>
      <FormHeader
        title="Iniciar Sesión"
        description="Ingresa tu correo electrónico para iniciar sesión en tu cuenta"
      />

      <form className="space-y-6" method="post">
        <div className="space-y-4">
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

        <Button className="w-full">Acceder</Button>
      </form>

      <p className="text-sm text-muted-foreground text-center">
        ¿No tienes una cuenta aún?{" "}
        <Link href="/sign-up" className="text-primary hover:underline">
          Regístrate
        </Link>
      </p>
    </section>
  );
}
