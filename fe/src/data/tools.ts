export type Tool = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string; // image URL
  url: string; // external link
};

export const tools: Tool[] = [
  {
    slug: "image-compressor",
    title: "Image Compressor",
    description:
      "Compress images in your browser without losing quality. Great for preparing assets for the web.",
    thumbnail: "https://picsum.photos/seed/img-compress/640/360",
    url: "https://squoosh.app/",
  },
  {
    slug: "markdown-to-pdf",
    title: "Markdown → PDF",
    description:
      "Convert Markdown files to polished PDFs with one click. Supports code blocks and math.",
    thumbnail: "https://picsum.photos/seed/md-pdf/640/360",
    url: "https://www.markdowntopdf.com/",
  },
  {
    slug: "color-palette-picker",
    title: "Color Palette Picker",
    description:
      "Generate harmonious color palettes and export them to CSS variables or Tailwind config.",
    thumbnail: "https://picsum.photos/seed/colors/640/360",
    url: "https://coolors.co/",
  },
  {
    slug: "json-formatter",
    title: "JSON Formatter",
    description:
      "Pretty-print, validate, and query JSON data. Works fully offline in your browser.",
    thumbnail: "https://picsum.photos/seed/json/640/360",
    url: "https://jsonformatter.org/",
  },
  {
    slug: "qr-code-generator",
    title: "QR Code Generator",
    description:
      "Create custom QR codes with logos, colors, and high‑resolution exports for print.",
    thumbnail: "https://picsum.photos/seed/qrcode/640/360",
    url: "https://www.qrcode-monkey.com/",
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    description:
      "Generate strong, unique passwords with custom rules and copy‑to‑clipboard.",
    thumbnail: "https://picsum.photos/seed/passwords/640/360",
    url: "https://passwordsgenerator.net/",
  },
];


