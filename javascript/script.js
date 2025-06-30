// Disable AOS on small screens or if browser is old
const isOldDevice = () => {
  const ua = navigator.userAgent.toLowerCase();
  return (
    /msie|trident|ucbrowser|opera mini/.test(ua) || // Very old/unsupported browsers
    window.innerWidth < 768 // Disable on small screens
  );
};

AOS.init({
  disable: isOldDevice,
  once: true,
  duration: 1000,
  easing: "ease-in-out",
});
