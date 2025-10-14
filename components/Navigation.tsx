import { Link } from './Link';

const Navigation = () => (
  <nav className="fixed flex gap-4 px-12 py-8 text-xl">
    <Link href="/" className="font-bold">
      HOME
    </Link>
    <Link href="/blog" className="font-bold">
      BLOG
    </Link>
  </nav>
);

export default Navigation;
