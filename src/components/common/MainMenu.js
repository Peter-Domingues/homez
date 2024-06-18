import { pageItems } from "@/data/navItems";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");

  useEffect(() => {
    pageItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname?.split("/")[1]) {
        setTopMenu("pages");
      }
    });
  }, [pathname]);

  const handleActive = (link) => {
    if (link.split("/")[1] == pathname?.split("/")[1]) {
      return "menuActive";
    }
  };

  return (
    <ul className="ace-responsive-menu">
      <li className="visible_list dropitem">
        <Link className="list-item" href="/">
          <span
            className={
              topMenu == "home" ? "title menuActive" : "title menu-item"
            }
          >
            HOME
          </span>
        </Link>
      </li>

      <li className="visible_list dropitem">
        <Link className="list-item" href="/#featured">
          <span
            className={
              topMenu == "featured" ? "title menuActive" : "title menu-item"
            }
          >
            FEATURED PROPERTIES
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link className="list-item" href="/#mylistings">
          <span
            className={
              topMenu == "mylistings" ? "title menuActive" : "title menu-item"
            }
          >
            MY LISTINGS
          </span>
        </Link>
      </li>

      <li className="visible_list dropitem">
        <Link className="list-item" href="/#new">
          <span
            className={
              topMenu == "new" ? "title menuActive" : "title menu-item"
            }
          >
            PRE-CONSTRUCTION
          </span>
        </Link>
      </li>

      <li className="megamenu_style dropitem">
        <Link className="list-item" href="/listing">
          <span
            className={
              topMenu == "listing" ? "title menuActive" : "title menu-item"
            }
          >
            ADVANCED SEARCH
          </span>
        </Link>
      </li>

      <li className="visible_list dropitem">
        <Link className="list-item" href="/#sold">
          <span
            className={
              topMenu == "sold" ? "title menuActive" : "title menu-item"
            }
          >
            SOLD
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link className="list-item" href="/about">
          <span
            className={
              topMenu == "about" ? "title menuActive" : "title menu-item"
            }
          >
            ABOUT ME
          </span>
        </Link>
      </li>
      <li className="visible_list dropitem">
        <Link className="list-item" href="/contact">
          <span
            className={
              topMenu == "about" ? "title menuActive" : "title menu-item"
            }
          >
            CONTACT
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
