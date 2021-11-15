import { Link } from "react-router-dom";
import './nav.css';

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link className="nav" to="/">Home</Link>
        <Link className="nav" to="/about">About</Link>
        <Link className="nav" to="/contact">Contact</Link>
      </ul>
    </nav>
  )
}
