import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import './BirthdayNotification.css';

const BirthdayNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [birthdayPeople, setBirthdayPeople] = useState([]);

  // Team members with their birth dates
  const teamMembers = [
    { name: "Mr. Pandurang Gadilkar", role: "Founder", dob: "27/10/1949" },
    { name: "Mr. Bapusaheb Jadhav", role: "Chairman", dob: "29/12/1962" },
    { name: "Mr. Changedev Pingale", role: "Secretary", dob: "01/06/1963" },
    { name: "Mr. Vitthal Jadhav", role: "Treasurer", dob: "16/07/1973" },
    { name: "Mr. Dinesh Wadekar", role: "Assistant Treasurer", dob: "21/03/1980" },
    { name: "Mr. Sandip Chaudhari", role: "Member", dob: "14/06/1985" },
    { name: "Mr. Vilas Ratnaparkhii", role: "Member", dob: "10/06/1960" },
    { name: "Mr. Arjun Jadhav", role: "Member", dob: "06/07/1970" },
    { name: "Dr. Nandkumar Malshiraskar", role: "Immediate Hon. President", dob: "31/10/1962" },
    { name: "Mr. Dnyaneshwar Khaire", role: "Chairperson", dob: "01/06/1963" }
  ];

  const checkBirthday = () => {
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1; // JavaScript months are 0-indexed

    const birthdaysToday = teamMembers.filter(member => {
      if (member.dob) {
        const [day, month] = member.dob.split('/').map(Number);
        return day === todayDay && month === todayMonth;
      }
      return false;
    });

    if (birthdaysToday.length > 0) {
      setBirthdayPeople(birthdaysToday);
      setShowNotification(true);
    }
  };

  useEffect(() => {
    checkBirthday();
  }, []);

  const closeNotification = () => {
    setShowNotification(false);
  };

  if (!showNotification || birthdayPeople.length === 0) {
    return null;
  }

  return (
    <div className="birthday-notification" onClick={closeNotification}>
      <div className="birthday-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeNotification} aria-label="Close">
          <X />
        </button>
        <div className="birthday-icon">
          <Gift />
        </div>
        <div className="birthday-message">
          <h3>🎉 Happy Birthday! 🎂</h3>
          {birthdayPeople.length === 1 ? (
            <>
              <p>
                <strong>Team Kulswamini Pratishthan Pune</strong> wishes{' '}
                <span className="birthday-name">{birthdayPeople[0].name}</span>{' '}
                ({birthdayPeople[0].role}) a very Happy Birthday!
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Team Kulswamini Pratishthan Pune</strong> wishes a very Happy Birthday to:
              </p>
              <ul className="birthday-list">
                {birthdayPeople.map((person, index) => (
                  <li key={index}>
                    <span className="birthday-name">{person.name}</span> ({person.role})
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="birthday-wish">
            May this special day bring you joy, happiness, and continued success in all your endeavors! 🎈
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayNotification;