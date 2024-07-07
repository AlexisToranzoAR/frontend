import { Input } from "@nextui-org/input";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen w-full">
      <div className="hidden lg:block">
        <img
          src="/login.jpg"
          alt="Product image"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Bienvenido a Causa</h1>
            <p className="text-muted-foreground">
              Ingresa tu usuario y contrasena para iniciar sesion
            </p>
          </div>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Input label="Usuario" id="username" type="text" required />
            </div>
            <div className="grid gap-2">
              <Input
                label="Contrasena"
                id="password"
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Iniciar sesion
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
