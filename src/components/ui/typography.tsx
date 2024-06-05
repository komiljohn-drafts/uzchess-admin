import clsx from "clsx"
import React, { ReactNode } from "react"

type TTagName = "h1" | "h2" | "h3" | "h4" | "p" | "span"

type TTextVariant = "h1" | "body-m" | "body-s"

const textSizeByTagName: Record<
  TTextVariant,
  {
    tagName: TTagName
    size: string
  }
> = {
  h1: {
    tagName: "h1",
    size: "text-h1"
  },
  "body-m": {
    tagName: "p",
    size: "text-base"
  },
  "body-s": {
    tagName: "p",
    size: "text-sm"
  }
}

export interface TypographyProps {
  tag?: TTagName
  className?: string
  variant?: TTextVariant
  children: ReactNode | string
  onClick?: () => void
}

function Typography({
  tag,
  children,
  className = "",
  variant = "body-m",
  onClick
}: TypographyProps) {
  const { tagName, size } = textSizeByTagName[variant]

  return React.createElement(
    tag || tagName,
    {
      className: clsx(size, className),
      onClick
    },
    children
  )
}

export default Typography
