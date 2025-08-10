// Disable browser caching without affecting animations
document.addEventListener('DOMContentLoaded', function() {
  // Force browser to reload the page when navigating back to it
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      window.location.reload();
    }
  });
});