/* ========== Scroll Reveal ============ */
const scroll = ScrollReveal(
  {
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true, 
  }
);

scroll.reveal(`.section-1 p`, {
  origin: "left",
  interval: 0,
  delay: 0,
}
);

scroll.reveal(`.section-2 p`,{
  origin: "right",
  interval: 100, 
})

scroll.reveal(`.section-3 p`,{
  origin: 'top',
  interval: 100,
})