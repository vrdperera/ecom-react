export default function NavBar() {
  const links = ['about', 'skincare', 'makeup', 'suppliments', 'contact'];

  return (
    <footer className="bg-dark text-white p-4 flex justify-between">
      <a href="/" className="text-2xl font-['Krona_One'] text-yellow">
        NipJ
      </a>

      <div className="flex items-center">
        {links.map((link) => (
          <a className="mr-4" href={`/${link}`}>
            {link}
          </a>
        ))}
      </div>

      {/* <a
        className="text-dark-grey text-xs"
        href="https://www.linkedin.com/in/vrdperera/"
        target="_blank"
        rel="noreferrer"
      >
        <p>engineeredbyvrd &copy; 2022</p>
      </a> */}
    </footer>
  );
}
