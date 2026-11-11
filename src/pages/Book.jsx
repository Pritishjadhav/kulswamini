import { useState } from 'react';
import { Download, Eye, Sparkles, X, FileText, ArrowRight } from 'lucide-react';
import './Book.css';

const Book = () => {
  const [modalType, setModalType] = useState(null); // 'read' | 'download' | null

  const editions = [
    {
      year: '2026',
      title: '2026 Edition',
      subtitle: 'Diwali Special Edition • 136 Pages',
      file: '/events/Goandan2026.pdf',
      available: true
    },
    {
      year: '2025',
      title: '2025 Edition',
      subtitle: 'Annual Literary Edition • Archive',
      file: null,
      available: false
    },
    {
      year: '2024',
      title: '2024 Edition',
      subtitle: 'Annual Literary Edition • Archive',
      file: null,
      available: false
    }
  ];

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
              A beautiful collection of literature celebrating our culture and community
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
                src="/events/home.jpeg" 
                alt="Gondan Book Cover"
                className="book-cover-minimal"
              />
            </div>
            
            <div className="book-info-minimal">
              <h2>About The Book</h2>
              <p>
                "Gondan" is our yearly publication featuring diverse literary works from our 
                community members. This curated book contains inspiring poems, stories, 
                and articles reflecting our culture, social causes, and community heritage.
              </p>
              
              <div className="book-buttons-minimal">
                <button 
                  type="button" 
                  className="btn-read-minimal" 
                  onClick={() => setModalType('read')}
                >
                  <Eye size={18} />
                  Read Online
                </button>
                <button 
                  type="button" 
                  className="btn-download-minimal" 
                  onClick={() => setModalType('download')}
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Launch Ceremony Section */}
      <section className="book-ceremony-section">
        <div className="container">
          <div className="book-ceremony-card">
            <div className="ceremony-header">
              <div className="ceremony-badge">
                <Sparkles size={16} />
                BOOK RELEASE CEREMONY
              </div>
              <h2>Gondan Publication & Launch</h2>
              <p>
                Dignitaries and members of Kulswamini Pratishthan unveiling the Gondan Special Edition publication.
              </p>
            </div>
            
            <div className="ceremony-image-wrapper">
              <img 
                src="/events/gondan.jpeg" 
                alt="Gondan Book Release Ceremony - Kulswamini Pratishthan" 
                className="ceremony-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Select Year Modal for Read Online / Download */}
      {modalType && (
        <div className="book-modal-backdrop" onClick={() => setModalType(null)}>
          <div className="book-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="book-modal-header">
              <div className="book-modal-title-group">
                <span className="book-modal-badge">
                  {modalType === 'read' ? 'READ ONLINE' : 'DOWNLOAD'}
                </span>
                <h3>Select Edition Year</h3>
                <p>
                  Choose which year you would like to {modalType === 'read' ? 'read online' : 'download'}:
                </p>
              </div>
              <button 
                type="button" 
                className="book-modal-close-btn" 
                onClick={() => setModalType(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="book-modal-list">
              {editions.map((item) => (
                <div key={item.year} className="book-modal-row">
                  <div className="book-modal-item-left">
                    <div className="book-modal-icon-badge">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="book-modal-item-year">{item.title}</h4>
                      <span className="book-modal-item-desc">{item.subtitle}</span>
                    </div>
                  </div>

                  <div className="book-modal-item-right">
                    {item.available && item.file ? (
                      modalType === 'read' ? (
                        <a 
                          href={item.file} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="modal-btn-action"
                          onClick={() => setModalType(null)}
                        >
                          <Eye size={16} />
                          Read
                        </a>
                      ) : (
                        <a 
                          href={item.file} 
                          download={`Gondan-${item.year}.pdf`} 
                          className="modal-btn-action download"
                          onClick={() => setModalType(null)}
                        >
                          <Download size={16} />
                          Download
                        </a>
                      )
                    ) : (
                      <span className="modal-badge-coming-soon">Coming Soon</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
