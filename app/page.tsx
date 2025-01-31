import NavBar from "./components/navbar";
import CardSession from "./components/card-session";
import FAQ from "./components/FAQ";
import Footer from "./components/footer";
export default function Home() {

  return (
      <div className="pt-[20px]">
        <NavBar/>
        <CardSession/>
        <FAQ/>
        <Footer/>
      </div>  
  );
}
