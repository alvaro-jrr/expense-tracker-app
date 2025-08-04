import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface TextFieldProps {
  id: string;
  className?: string;
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, "id">;
  label: string;
  error?: string;
}

export function TextField({
  id,
  className,
  label,
  error,
  inputProps,
}: TextFieldProps) {
  const hasError = Boolean(error);
  const errorMessageId = `${id}-error`;

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <Label className="font-medium" htmlFor={id}>
        {label}
      </Label>

      <Input
        id={id}
        {...inputProps}
        aria-invalid={hasError}
        aria-errormessage={errorMessageId}
        className="w-full"
      />

      {hasError ? (
        <p className="text-sm text-destructive" id={errorMessageId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
