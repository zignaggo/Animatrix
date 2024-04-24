"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-black-700 group-[.toaster]:border-2 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-background group-[.toast]:text-muted-foreground group-[.toast]:right-0",
          closeButton:
            "group-[.toast]:relative group-[.toast]:bg-white group-[.toast]:text-black-950 group-[.toast]:right-0 group-[.toast]:left-auto",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
