import React from "react";

export default function Footer() {
  return (
    //  Footer
    <footer className="py-5 bg-dark">
      <div className="container">
          <div className="left">
            <p className="p-footer">Cine suntem</p>
            <p className="p-footer">Istorie</p>
            <p className="p-footer">Echipa noastra</p>
          </div>
          <div className="right">
            <p className="p-footer">Contact</p>
            <p className="p-footer">Termeni si conditii</p>
            
              
                <img className="retele" src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="" />
                <img className="retele" src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" />
                <img className="retele"src="https://cdn-icons-png.flaticon.com/128/15789/15789316.png" alt="" />
              
            
          </div>
          <div className="centre">
            <p className="p-footer">Parteneri</p>
            <p className="p-footer">Magazine distribuitoare</p>
            <p className="p-footer">Locatii depozite</p>
          </div>
      </div>
    </footer>
  );
}