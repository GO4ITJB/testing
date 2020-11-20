// //GSAP word animation
// const words = ['Welcome to the world of Hedonic'];
// let cursor = gsap.to('.hero__cursor', {opacity: 0,duration: 1, ease: 'power2.inOut', repeat: -1});

// let masterTL = gsap.timeline({delay: .5});

// words.forEach(word => {
//   let tl = gsap.timeline({})
//   tl.to('.hero__h-anim', {duration: 2, text: word})
// });



//
// new fullpage('#fullpage', {
//   autoScrolling: true,
//   navigation: true,
//   onLeave: (origin, destination, direction) => {
//     // Kill off tweens in previous section
//     const oldElems = origin.item.querySelectorAll("*");
//     gsap.killTweensOf(oldElems);
    
//     // Create new tweens for new section
//     const section = destination.item;
//     const title = section.querySelector('h1');
    
//     let afterFadeIn;
    
//     if(destination.index === 2 || destination.index === 3) {
//       const cans = section.querySelectorAll('.product__can');
//       const description = section.querySelectorAll('.product__text--1');

//       gsap.fromTo(description, {x: -1000, opacity: 0}, {duration: 1.1, x: 0, opacity: 1})
//       gsap.fromTo(cans, {xPercent: 100}, {duration: 0.7, xPercent: -50});
//       gsap.set(cans, {opacity: 0});
//       gsap.set(cans[0], {opacity: 1});
      
//       afterFadeIn = () => {
//         gsap.timeline({
//           repeat: -1,
//           defaults: { duration: 1}
//         })
//           .set(cans[0], {zIndex: 0})
//           .to(cans[1], {opacity: 1, delay: 1})
//           .to(cans[2], {opacity: 1, delay: 1})
//           .to(cans[3], {opacity: 1, delay: 1})
//           .to(cans[4], {opacity: 1, delay: 1})
//           .to(cans[5], {opacity: 1, delay: 1})
//           .to(cans[6], {opacity: 1, delay: 1})
//           .to(cans[7], {opacity: 1, delay: 1})
//           .to(cans[8], {opacity: 1, delay: 1})
//           .to(cans[9], {opacity: 1, delay: 1})
//           .to(cans[10], {opacity: 1,})
//           .set(cans[0], {zIndex: 1})
//           .fromTo(cans[0], {opacity: 0}, {opacity: 1, immediateRender: false})
//       }
//     }

//     if(destination.index === 3) {
//       const cans = section.querySelectorAll('.product__can');
//       const description = section.querySelectorAll('.product__text--2');

//       gsap.fromTo(description, {x: 1000, opacity: 0}, {duration: 1.1, x: 0, opacity: 1})
//       gsap.fromTo(cans, {x: -1000}, {duration: 1, x: 0, delay: .5});
//       gsap.set(cans, {opacity: 0});
//       gsap.set(cans[0], {opacity: 1});
      
//       afterFadeIn = () => {
//         gsap.timeline({
//           repeat: -1,
//           defaults: { duration: 1}
//         })
//           .set(cans[0], {zIndex: 0})
//           .to(cans[1], {opacity: 1, delay: 1})
//           .to(cans[2], {opacity: 1, delay: 1})
//           .to(cans[3], {opacity: 1, delay: 1})
//           .to(cans[4], {opacity: 1, delay: 1})
//           .to(cans[5], {opacity: 1, delay: 1})
//           .to(cans[6], {opacity: 1, delay: 1})
//           .to(cans[7], {opacity: 1, delay: 1})
//           .to(cans[8], {opacity: 1, delay: 1})
//           .to(cans[9], {opacity: 1, delay: 1})
//           .to(cans[10], {opacity: 1,})
//           .set(cans[0], {zIndex: 1})
//           .fromTo(cans[0], {opacity: 0}, {opacity: 1, immediateRender: false})
//       }
//     }
    
//     const tl = gsap.timeline({delay: 0.5} );
//     tl.fromTo(title, {
//       y: 50, 
//       opacity: 0
//     }, {
//       y: 0, 
//       opacity: 1, 
//       onComplete: afterFadeIn
//     });
//   }
// });
