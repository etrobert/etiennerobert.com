import { Link } from './Link';

const Navigation = () => (
  <nav className="flex gap-4 text-xl fixed px-12 py-8">
    <Link href="/" className="font-bold">
      HOME
    </Link>
    <Link href="/blog" className="font-bold">
      BLOG
    </Link>
  </nav>
);

export default Navigation;
