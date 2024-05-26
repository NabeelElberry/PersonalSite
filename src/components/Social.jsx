export default function Social({ image, text, link, download }) {
  return (
    <div
      className="flex flex-row items-center min-w-min justify-center pt-2 space-x-1 transition ease-in-out duration-1p00
    hover:scale-110 "
    >
      {download && (
        <a
          href={link}
          className="flex flex-row items-center text-ivory"
          download
        >
          <img src={image} className="size-10 mr-1" />
          {text}
        </a>
      )}
      {!download && (
        <a href={link} className="flex flex-row items-center text-ivory">
          <img src={image} className="size-10 mr-1" /> {text}
        </a>
      )}
    </div>
  );
}
