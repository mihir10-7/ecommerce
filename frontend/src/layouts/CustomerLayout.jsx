import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CustomerLayout({ children }) {
    return (
        <>
            <Navbar />

            <div className="container mt-4">
                {children}
            </div>

            <Footer />
        </>
    );
}

export default CustomerLayout;