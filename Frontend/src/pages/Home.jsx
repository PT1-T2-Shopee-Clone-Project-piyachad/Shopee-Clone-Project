import MainLayout from "../components/layout/MainLayout"
import Categories from "../components/share/Categories";
import Discount from './../components/share/Discount';
import TopProduct from "../components/share/TopProduct";

const Home = () => {
    return (
        <MainLayout title="Home" className="flex flex-col">
            <Discount />
            <Categories />
            <TopProduct />
        </MainLayout>
    )
}

export default Home