import gsap from 'gsap';

gsap.to('.box', {
  // opacity: 1,
  autoAlpha: 1,
  duration: 1,
  rotate: 360,
  background: 'orange',
  borderRadius: '50%',
  scale: 1.25,
  ease: "power1.inOut",
  repeat: 1,
  // move back
  // yoyo: true

})