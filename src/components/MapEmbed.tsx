/** Google Maps location of the Gravio office. */
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.6488239428463!2d55.25954337538074!3d25.181332977720963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69ce4be99a07%3A0xe359738b5b1bb1d3!2sChurchill%20Tower%20-%20Al%20Amal%20St%20-%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1793909619845!5m2!1sen!2sae";

export function MapEmbed() {
  return (
    <div className="map-embed">
      <iframe
        src={MAP_SRC}
        title="Map showing Churchill Tower, Business Bay, Dubai"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
