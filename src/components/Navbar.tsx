import { Link } from "react-router-dom";

interface Props {
  children?: string;
}

function Navbar({ children }: Props) {
  return (
    <nav>
      <ul>
        <li>
          {children}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
