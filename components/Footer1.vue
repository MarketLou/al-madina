<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section logo-section">
        <img src="/images/almadina-logo.png" alt="Al Madina Logo" class="footer-logo">
      </div>
      
      <div class="contact-and-hours">
        <div class="footer-section contact-info-section">
          <h3>{{ $t('footer.contact') }}</h3>
          <p>
            <a href="tel:5027970096" class="contact-link">(502) 797-0096</a>
          </p>
          <p>
            <a href="https://www.google.com/maps/place/6921+Southside+Dr,+Louisville,+KY+40214" 
               target="_blank" 
               rel="noopener noreferrer"
               class="contact-link">
              6921 Southside Dr,<br>
              Louisville, KY 40214
            </a>
          </p>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-section hours-section">
          <h3>{{ $t('footer.hours') }}</h3>
          <div class="hours-list">
            <div class="hours-item"><span class="day">{{ $t('footer.days.monday') }}:</span> <span class="time">11AM-9PM</span></div>
            <div class="hours-item"><span class="day">{{ $t('footer.days.tuesday') }}:</span> <span class="time">11AM-9PM</span></div>
            <div class="hours-item"><span class="day">{{ $t('footer.days.wednesday') }}:</span> <span class="time">11AM-9PM</span></div>
            <div class="hours-item"><span class="day">{{ $t('footer.days.thursday') }}:</span> <span class="time">11AM-9PM</span></div>
            <div class="hours-item"><span class="day">{{ $t('footer.days.friday') }}:</span> <span class="time">11AM-10PM</span></div>
            <div class="hours-item"><span class="day">{{ $t('footer.days.saturday') }}:</span> <span class="time">12PM-10PM</span></div>
            <div class="hours-item"><span class="day">{{ $t('footer.days.sunday') }}:</span> <span class="time">12PM-8PM</span></div>
          </div>
        </div>
      </div>
      
      <div class="footer-section map-section">
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.0634890876996!2d-85.7470022!3d38.136962799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8869a1e484d1f9af%3A0x12ad1b9d953c7b1f!2s6921%20Southside%20Dr%2C%20Louisville%2C%20KY%2040214!5e0!3m2!1sen!2sus!4v1689352427124!5m2!1sen!2sus"
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
      <p>{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #FEFAEB;
  color: #333;
  padding: 2rem 2rem 1rem;
  width: 100%;
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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
  max-width: 220px;
  height: auto;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.contact-link {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #000;
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  color: #333;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #000;
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
  color: #333;
  font-weight: 600;
}

.hours-item .time {
  color: #333;
}

.map-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer-bottom p {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
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
    max-width: 180px;
  }

  .social-icons {
    justify-content: center;
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .hours-item:last-child {
    border-bottom: none;
  }

  .hours-item .day {
    min-width: unset;
  }
}
</style> 