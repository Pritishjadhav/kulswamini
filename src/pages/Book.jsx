import { Download, Book as BookIcon, Eye } from 'lucide-react';
import './Book.css';

const Book = () => {
  return (
    <div className="book-page-minimal">
      {/* Minimal Hero Section */}
      <section className="book-hero-minimal">
        <div className="container">
          <div className="hero-content-minimal">
            <div className="book-badge-minimal">
              LITERARY COLLECTION
            </div>
            
            <h1 className="book-title-minimal">Gondan Book</h1>
            
            <p className="book-subtitle-minimal">
              A beautiful collection of Marathi literature celebrating our culture
            </p>
          </div>
        </div>
      </section>

      {/* Compact Book Section */}
      <section className="book-section-minimal">
        <div className="container">
          <div className="book-grid-minimal">
            <div className="book-image-minimal">
              <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Gondan Book Cover"
                className="book-cover-minimal"
              />
            </div>
            
            <div className="book-info-minimal">
              <h2>About The Book</h2>
              <p>
                "Gondan" is our yearly publication featuring diverse literary works from our 
                community members. This curated Marathi book contains inspiring poems, 
                stories, and articles reflecting our culture.
              </p>
              
              <div className="book-buttons-minimal">
                <button className="btn-read-minimal">
                  <Eye size={18} />
                  Read Online
                </button>
                <button className="btn-download-minimal">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
