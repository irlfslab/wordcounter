import { Link } from "react-router"
import PageNotFoundImage  from "../assets/page-not-found.jpg";

export const PageNotFound = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p data-testid="pnfText">Oops - Page Not Found!</p>
          <img src={PageNotFoundImage } alt="" />
          <Link to="/">
            <button data-testid="homeBtn">Back To Word Counter</button>
          </Link>
        </div>
      </section>
    </main>
  )
}