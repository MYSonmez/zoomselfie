import NextImage from "next/image";
import type { ImageProps } from "next/image";

const DEFAULT_SIZES = "(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 50vw";

export default function ResponsiveImage({ src, sizes, placeholder, quality, ...props }: ImageProps) {
  const hasBlurData = typeof src === "object" && "blurDataURL" in src && Boolean(src.blurDataURL);

  return (
    <NextImage
      src={src}
      sizes={sizes ?? DEFAULT_SIZES}
      quality={quality ?? 82}
      placeholder={placeholder ?? (hasBlurData ? "blur" : "empty")}
      {...props}
    />
  );
}
