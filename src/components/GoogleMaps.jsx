import '../assets/styles/components/GoogleMaps.css'

const GoogleMaps = () => {
  return (
    <div className="GoogleMaps">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.3436092494703!2d-70.58216598507566!3d-33.41428500304263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf1f354428e7%3A0x6392698aeaca2398!2sNeveria%204672%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sar!4v1639921805819!5m2!1ses!2sar" 
        allowFullScreen="" 
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default GoogleMaps