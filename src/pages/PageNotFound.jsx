import { Link } from "react-router"
import PageNotFoundImage  from "../assets/page-not-found.jpg";

export const PageNotFound = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p> Oops - Page Not Found!</p>
          <img src={PageNotFoundImage } alt="" />
        </div>
      </section>
    </main>
  )
}