import Navbar from '../components/navBar';
import Footer from '../components/footer';
//imports header and footer for repeated use
const About = () => (
    <div>
        <Navbar />
        <main>
            <section>
                <h1>About Us</h1>
                <p>Print-A-Smile Foundation is dedicated to bringing joy to children in need by providing 3D-printed toys and holiday gifts. Our mission is to ensure that every child experiences the magic of receiving a gift during the holiday season.</p>
                <p>We work with local communities, donors, and volunteers to make a positive impact and bring smiles to the faces of children.</p>
            </section>
        </main>
        <Footer />
    </div>
);

export default About;