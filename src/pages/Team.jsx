import TeamMemberCard from '../components/TeamMemberCard';
import FounderCard from '../components/FounderCard';
import teamGroupImg from '../assets/team-group.jpg';
import bapusahebImg from '../assets/bapusaheb.png';
import sambhajiraoImg from '../assets/sambhajirao.jpg';
import changedevPingaleImg from '../assets/changedev.jpg';
import vittalJadhavImg from '../assets/vitthal.jpeg';
import dineshWadekarImg from '../assets/dinesh.jpg';
import sandipChaudhariImg from '../assets/sandip.jpg';
import vilasRatnaparkhiiImg from '../assets/vilas.jpeg';
import arjunJadhavImg from '../assets/arjun.jpg';
import nandkumarMalshiraskarImg from '../assets/nandkumar.jpg';
import dnyaneshwarKhaireImg from '../assets/dnyaneshwar.jpg';
import pandurangGadilkarImg from '../assets/pandurang-gadilkar.jpg';
import machhindraJadhavImg from '../assets/machindra.jpeg';
import vilasDhokaleImg from '../assets/vilas-dhokale.jpg';
import laxmanNalawaideImg from '../assets/laxman.jpg.jpeg';
import somnathGawadeImg from '../assets/somnath.jpg.jpeg';
import atulDeodikarImg from '../assets/atul.jpg.jpeg';
import santoshJadhavImg from '../assets/santosh.jpg.jpeg';
import vitthalGoreImg from '../assets/vitthal gore.jpg.jpeg';
import bibhishanChoudhariImg from '../assets/bibhishan.jpg.jpeg';
import subhashImg from '../assets/subhash.jpg.jpeg';
import ujwalaPingaleImg from '../assets/ujwala.jpg.jpeg';
import shankarJadhavImg from '../assets/shankar.jpg.jpeg';
import tanajiGawadeImg from '../assets/Tanaji.jpeg';

// ALL TEAM MEMBERS AND TEAM GROUP PHOTO NOW USE REAL PHOTOS! 🎉

const Team = () => {
  // Professional blank profile icon for team members without photos
  const blankProfileIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f8f9fa;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23e9ecef;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='75' cy='75' r='75' fill='url(%23grad1)' stroke='%23dee2e6' stroke-width='2'/%3E%3Ccircle cx='75' cy='55' r='20' fill='%236c757d'/%3E%3Cpath d='M75 85 C60 85, 45 95, 45 110 L105 110 C105 95, 90 85, 75 85 Z' fill='%236c757d'/%3E%3C/svg%3E";

  // Generate 26 team members (adding Atul Deodikar)
  const teamMembers = Array.from({ length: 26 }, (_, i) => ({
    name: i === 0 ? "Mr. Bapusaheb Jadhav" : i === 1 ? "Mr. Sambhajirao Chaudhari" : i === 2 ? "Mr. Changadev Pingale" : i === 3 ? "Mr. Vitthal Jadhav" : i === 4 ? "Mr. Aarun Sakore" : i === 5 ? "Mr. Dinesh Wadekar" : i === 6 ? "Miss. Shanta Sakore" : i === 7 ? "Mr. Narayan Gawade" : i === 8 ? "Mr. Sandip Chaudhari" : i === 9 ? "Mr. Vilas Ratnaparkhii" : i === 10 ? "Mr. Arjun Jadhav" : i === 11 ? "Dr. Nandkumar Malshiraskar" : i === 12 ? "Mr. Dnyaneshwar Khaire" : i === 13 ? "Mr. Machhindra Jadhav" : i === 14 ? "Mr. Vilas Dhokale" : i === 15 ? "Mr. Nitin Pansare" : i === 16 ? "Mr. Laxman Nalewade" : i === 17 ? "Mr. Somnath Gawade" : i === 18 ? "Mr. Atul Deodikar" : i === 19 ? "Mr. Santosh Jadhav" : i === 20 ? "Mr. Vitthal Gore" : i === 21 ? "Mr. Bibhishan Choudhari" : i === 22 ? "Mr. Subhash Yewale" : i === 23 ? "Miss. Ujwala Pingale" : i === 24 ? "Mr. Chandrakant Jadhav" : i === 25 ? "Mr. Tanaji Gawade" : `Volunteer Name ${i + 1}`,
    role: i === 0 ? "Chairman" : i === 1 ? "Vice Chairman" : i === 2 ? "Secretary" : i === 3 ? "Treasurer" : i === 4 ? "Deputy Secretary" : i === 5 ? "Assistant Treasurer" : i === 6 ? "Member" : i === 7 ? "Member" : i === 8 ? "Member" : i === 9 ? "Member" : i === 10 ? "Member" : i === 11 ? "Immediate Hon. President" : i === 12 ? "Chairperson" : i === 13 ? "Member" : i === 14 ? "Member" : i === 15 ? "Member" : i === 16 ? "Member" : i === 17 ? "Member" : i === 18 ? "Member" : i === 19 ? "Member" : i === 20 ? "Member" : i === 21 ? "Member" : i === 22 ? "Member" : i === 23 ? "Member" : i === 24 ? "Member" : i === 25 ? "Member" : i < 5 ? "Core Committee" : "Dedicated Volunteer",
    image: i === 0 ? bapusahebImg : i === 1 ? sambhajiraoImg : i === 2 ? changedevPingaleImg : i === 3 ? vittalJadhavImg : i === 4 ? blankProfileIcon : i === 5 ? dineshWadekarImg : i === 6 ? blankProfileIcon : i === 7 ? blankProfileIcon : i === 8 ? sandipChaudhariImg : i === 9 ? vilasRatnaparkhiiImg : i === 10 ? arjunJadhavImg : i === 11 ? nandkumarMalshiraskarImg : i === 12 ? dnyaneshwarKhaireImg : i === 13 ? machhindraJadhavImg : i === 14 ? vilasDhokaleImg : i === 15 ? blankProfileIcon : i === 16 ? laxmanNalawaideImg : i === 17 ? somnathGawadeImg : i === 18 ? atulDeodikarImg : i === 19 ? santoshJadhavImg : i === 20 ? vitthalGoreImg : i === 21 ? bibhishanChoudhariImg : i === 22 ? subhashImg : i === 23 ? ujwalaPingaleImg : i === 24 ? shankarJadhavImg : i === 25 ? tanajiGawadeImg : blankProfileIcon
  }));

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">Meet the heart behind our mission—our dedicated volunteers.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container text-center">
          <div style={{marginBottom: '4rem'}}>
            <h2 className="section-title">Team Kulswamini</h2>
            <img 
              src={teamGroupImg} 
              alt="Group Photo" 
              style={{width: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)'}}
            />
          </div>

          <h2 className="section-title">Members</h2>
          
          {/* Special member - Mr. Pandurang Gadilkar */}
          <div style={{marginBottom: '3rem', display: 'flex', justifyContent: 'center'}}>
            <FounderCard 
              name="Mr. Pandurang Gadilkar"
              role="Founder"
              image={pandurangGadilkarImg}
              dob="27/10/1949"
              contact="+91 9960064033"
            />
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2" style={{gap: '1rem'}}>
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                dob={
                  index === 0 ? "29/12/1962" : 
                  index === 2 ? "01/06/1963" : 
                  index === 3 ? "16/07/1973" : 
                  index === 5 ? "21/03/1980" : 
                  index === 8 ? "14/06/1985" : 
                  index === 9 ? "10/06/1960" : 
                  index === 10 ? "06/07/1970" : 
                  index === 11 ? "31/10/1962" : 
                  index === 12 ? "01/06/1963" : 
                  index === 13 ? "01/05/1974" : 
                  index === 14 ? "15/01/1957" : 
                  index === 15 ? "25/12/1979" : 
                  index === 16 ? "13/09/1969" : 
                  index === 17 ? "01/06/1970" : 
                  index === 18 ? "10/10/1970" : 
                  index === 19 ? "24/10/1982" : 
                  index === 20 ? "01/06/1964" : 
                  index === 21 ? "02/06/1971" : 
                  index === 22 ? "01/06/1964" : 
                  index === 23 ? "15/03/1966" : 
                  index === 24 ? "12/07/1971" : 
                  index === 25 ? "01/03/1964" : 
                  undefined
                }
                contact={
                  index === 0 ? "+91 9922401862" : 
                  index === 2 ? "+91 9860618486" : 
                  index === 3 ? "+91 9511713219" : 
                  index === 5 ? "+91 9922435628" : 
                  index === 8 ? "+91 98507 95998" : 
                  index === 9 ? "+91 9422309321" : 
                  index === 10 ? "+91 9970791478" : 
                  index === 11 ? "+91 9822464852" : 
                  index === 12 ? "+91 9325009914" : 
                  index === 13 ? "+91 8605985499" : 
                  index === 14 ? "+91 8237001052" : 
                  index === 15 ? "+91 9764442188" : 
                  index === 16 ? "+91 9923292564" : 
                  index === 17 ? "+91 8766835084" : 
                  index === 18 ? "+91 9765402573" : 
                  index === 19 ? "+91 9225918051" : 
                  index === 20 ? "+91 9822276229" : 
                  index === 21 ? "+91 8975892976" : 
                  index === 22 ? "+91 9922919601" : 
                  index === 23 ? "+91 7709166502" : 
                  index === 24 ? "+91 9420467295" : 
                  index === 25 ? "+91 7276098097" : 
                  undefined
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Team;
