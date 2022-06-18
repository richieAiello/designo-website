import { useEffect } from "react";
import { useLocation } from "react-router";

// Reference article: https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/
export default function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return(
    <>
      {props.children}
    </>
  );
};