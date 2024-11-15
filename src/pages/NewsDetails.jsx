
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import DetailsCard from "./DetailsCard";


const NewsDetails = () => {

    
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-10/12 mx-auto grid grid-cols-12 gap-6">
        <section className="col-span-9">
             <h2 className="font-semibold mb-3">Dragon News</h2>
             
        <DetailsCard></DetailsCard>
        
        </section>
        <aside className="col-span-3">
            <RightNav></RightNav>

        </aside>
            </main>
        </div>
    );
};

export default NewsDetails;