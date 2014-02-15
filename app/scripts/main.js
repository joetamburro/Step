Parse.initialize("rFRxcDA5rl9aA5ze4Bi1Mrkx78ptWVVu4PUZo9kr", "3d2EM2hDuMATrmjdhCOViF3SPKFvKqoKq4mQ5jd8");

// $(document).ready(function(){
//   // $('.action').select2();


// });






// $(document).ready(function() {
 
//   var body = document.body,
//     nav = document.getElementById('nav'),
//     toggle = document.getElementById('ss-rewind'),
//     wrapper = document.getElementById('wrapper'),
//     overlay = document.getElementById('overlay'),
//     sidebar = document.getElementById('sidebar');
  
//   function toggleNav() {
//     function setHeight(value) {
//       sidebar.firstChild.style.height = value+'%';
//     }
    
//     function toggleScrollbar(value) {
//       sidebar.style.opacity = value;
//     }
    
//     var windowHeight = window.innerHeight,
//       wrapperHeight = wrapper.scrollHeight;
    
//     if ( wrapperHeight > windowHeight ) {
//       toggleSidebar(1);
//       setHeight( ( windowHeight / wrapperHeight ) * 100 );
//     }
    
//     wrapper.onscroll = function() {
//       var scrolledPercentage = ( wrapper.scrollTop / wrapper.scrollHeight ) * 100;
//       sidebar.firstChild.style.top = scrolledPercentage+'%';
//     }
    
//     window.onresize = function() {
//       var windowHeight = window.innerHeight,
//         wrapperHeight = wrapper.scrollHeight;
  
//       setHeight( ( windowHeight / wrapperHeight ) * 100 );
  
//       if ( body.getAttribute('data-nav') ) {
//         if ( wrapperHeight < windowHeight ) {
//           toggleSidebar(0);
//         } else {
//           toggleSidebar(1);
//         }
//       }
//     }
    
//     var attr = 'data-nav',
//       cls = 'open';
    
//     if ( !body.getAttribute(attr) ) {
//       body.setAttribute(attr, cls);
//     } else {
//       body.removeAttribute(attr);
//       toggleSidebar(0);
//     }
//   }
  
//   overlay.onclick = function() {
//     toggleNav();
//   }
//   toggle.onclick = function() {
//     toggleNav();
//   }
 
//   $('a[href*=#]:not([href=#])').click(function() {
//       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//           var target = $(this.hash);
//           target = target.length ? target : $('[name=' + this.hash.slice(1) +']'
//           );
//           if (target.length) {
//             $('html,body').animate({
//                 scrollTop: target.offset().top
//             }, 1000);
//           return false;
//           }
//       }
//     });
 
  
// })