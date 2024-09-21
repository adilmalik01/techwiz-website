import './App.css';
import Contact from './components/contact/contact';
import Navbar from './components/navbar';
import Products from './components/products/products';
import VideoEmbed from './components/video/video';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="bgimage">
        <div className="overlay"></div>
        <h1>HOME STYLER</h1>
      </div>
      <Products />
      < VideoEmbed />
      <Contact/>

      
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h6>Get connected with us on social networks:</h6>
        <div class="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Google+</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>

      <div class="footer-section">
        <h6>TW ELEMENTS</h6>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div class="footer-section">
        <h6>PRODUCTS</h6>
        <ul>
          <li><a href="#">Angular</a></li>
          <li><a href="#">React</a></li>
          <li><a href="#">Vue</a></li>
          <li><a href="#">Laravel</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h6>USEFUL LINKS</h6>
        <ul>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h6>CONTACT</h6>
        <p>New York, NY 10012, US</p>
        <p>Email: info@example.com</p>
        <p>Phone: +01 234 567 88</p>
        <p>Fax: +01 234 567 89</p>
      </div>
    </div>

    <div class="footer-bottom">
      © 2023 Copyright: <strong>TW Elements</strong>
    </div>
  </footer>

    </div>
  );
}

export default App;
