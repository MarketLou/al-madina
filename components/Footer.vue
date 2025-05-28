<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section logo-section">
        <img src="/logo.png" alt="Xclusive Auto Detailing Logo" class="footer-logo">
      </div>
      
      <div class="contact-and-hours">
        <div class="footer-section contact-info-section">
          <h3>Contact</h3>
          <p>
            <a href="tel:5026321758" class="contact-link">(502) 632-1758</a>
          </p>
          <p>
            <a href="https://www.google.com/maps/place/Xclusive+Auto+Detailing+%26+Window+Tinting/@38.2587259,-85.7185366,17z" 
               target="_blank" 
               rel="noopener noreferrer"
               class="contact-link">
              1733 Mellwood Ave,<br>
              Louisville, KY 40206
            </a>
          </p>
        </div>

        <div class="footer-section hours-section">
          <h3>Hours</h3>
          <div class="hours-list">
            <div class="hours-item"><span class="day">Monday:</span> <span class="time">9AM-7PM</span></div>
            <div class="hours-item"><span class="day">Tuesday:</span> <span class="time">9AM-7PM</span></div>
            <div class="hours-item"><span class="day">Wednesday:</span> <span class="time">9AM-7PM</span></div>
            <div class="hours-item"><span class="day">Thursday:</span> <span class="time">9AM-7PM</span></div>
            <div class="hours-item"><span class="day">Friday:</span> <span class="time">9AM-7PM</span></div>
            <div class="hours-item"><span class="day">Saturday-Sunday:</span> <span class="time">Closed</span></div>
          </div>
        </div>
      </div>
      
      <div class="footer-section map-section">
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.4776069746897!2d-85.72112682357897!3d38.25872587725433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8869a049d2610511%3A0x982d80b4a39f2e44!2sXclusive%20Auto%20Detailing%20%26%20Window%20Tinting!5e0!3m2!1sen!2sus!4v1710390000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>Copyright ©2025 Market Lou, LLC. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #161D2D;
  color: white;
  padding: 2rem 2rem 1rem;
  width: 100%;
  position: relative;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.logo-section {
  grid-column: 1;
  grid-row: 1;
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
}

.contact-and-hours {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
}

.contact-info-section {
  flex: 0 1 auto;
}

.hours-section {
  flex: 0 1 auto;
}

.map-section {
  grid-column: 2;
  grid-row: 1 / span 2;
  width: 507px;
  height: 315px;
  margin: 0.5rem;
  align-self: end;
  justify-self: end;
}

.footer-logo {
  max-width: 250px;
  height: auto;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.contact-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: white;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0;
  margin: 0;
  text-align: left;
}

.hours-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
}

.hours-item .day {
  min-width: 100px;
  color: white;
  font-weight: 600;
}

.hours-item .time {
  color: white;
}

.map-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
  
  .logo-section {
    grid-row: 1;
    grid-column: 1 / -1;
    justify-self: center;
  }
  
  .contact-and-hours {
    grid-row: 2;
    grid-column: 1;
  }
  
  .map-section {
    grid-row: 3;
    grid-column: 1;
    width: 100%;
    max-width: 507px;
    justify-self: center;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1rem 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-and-hours {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    text-align: center;
  }

  .logo-section {
    justify-content: center;
  }

  .footer-logo {
    max-width: 200px;
  }

  .contact-info-section,
  .hours-section {
    width: 100%;
  }

  .hours-list {
    align-items: center;
  }

  .hours-item {
    width: 100%;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .hours-item:last-child {
    border-bottom: none;
  }

  .hours-item .day {
    min-width: unset;
    flex: 1;
    text-align: left;
  }

  .hours-item .time {
    flex: 1;
    text-align: right;
  }

  .map-section {
    height: 250px;
    margin: 0;
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .contact-link {
    font-size: 1.1rem;
    padding: 0.5rem 0;
    display: inline-block;
  }
}

/* Additional small screen optimizations */
@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 1rem 1rem;
  }

  .footer-content {
    gap: 1.5rem;
  }

  .hours-item {
    font-size: 0.95rem;
  }

  .map-section {
    height: 200px;
  }

  .footer-bottom p {
    font-size: 0.75rem;
  }
}
</style> 