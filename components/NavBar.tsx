import Link from "next/link";
import {useRouter} from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <Link href={"/"}>
        <a className={router.pathname === "/" ? "Active" : ""}>Home</a>
      </Link>
      <Link href={"/about"}>
        <a className={router.pathname === "/about" ? "Active" : ""}>About</a>
      </Link>
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }
          
          a {
            text-decoration: none;
          }
          
          .Active {
            color: yellow;
          }
        `}
      </style>
    </nav>
  );
}

export default NavBar;