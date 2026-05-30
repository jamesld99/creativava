type BlobProps = {
  className?: string;
  variant?: "purple" | "pink" | "coral" | "mint";
};

const fills = {
  purple: "#b69bf7",
  pink: "#ff8cbb",
  coral: "#ffbf85",
  mint: "#8ed9c8",
};

export function DecorativeBlob({
  className = "",
  variant = "purple",
}: BlobProps) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 200 200"
      aria-hidden
    >
      <path
        fill={fills[variant]}
        fillOpacity="0.35"
        d="M45.3,-58.2C57.9,-47.8,66.7,-31.2,68.9,-13.4C71.1,4.4,66.7,23.4,56.8,38.8C46.9,54.2,31.5,66,14.2,72.4C-3.1,78.8,-22.3,79.8,-38.8,72.6C-55.3,65.4,-69.1,50,-74.8,32.1C-80.5,14.2,-78.1,-6.2,-68.9,-22.8C-59.7,-39.4,-43.7,-52.2,-26.4,-61.4C-9.1,-70.6,9.6,-76.2,27.1,-68.5C44.6,-60.8,32.7,-68.6,45.3,-58.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
