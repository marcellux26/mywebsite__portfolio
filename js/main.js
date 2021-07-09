
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100) {
      toTop.classList.add("active");
   } else {
      toTop.classList.remove("active");
   }
})

//pop-up box section 
//Click button appearing
window.addEventListener('scroll', () => {
   if (window.pageYOffset < 110) {
      $('.dodge').css({
         'animation-play-state': 'running'
      })
   } else {
      $('.dodge').css({
         'animation-play-state': 'paused'
      })
   }
})
let timer = null;
let elementClicked = false;
window.addEventListener('scroll', () => {


   popUpAppear();

   if (elementClicked == false) {
      timer = setTimeout(() => {
         if (timer == null) {
            clearTimeout(timer);
         } else {
            disappearClick()
         }

      }, 12000);
   }


})



document.querySelector('.click').addEventListener('click', () => {
   clearTimeout(timer);
   $('.click').css({
      'opacity': '1'
   });
   // console.log(timer);
   timer = null
   elementClicked = true;
   // console.log(elementClicked);


})


function popUpAppear() {
   if (window.pageYOffset > 1700) {
      $('.click').css({
         "opacity": "1", "transition": "0.5s ease-in"
      });
      btnCLickOpacity = btnCLick.querySelector('[style="opacity : 1"]');
      elementClicked = false;
      BtnVisible = true;
      // console.log("visible");
      // console.log(document.querySelector('.click').attributes["style"]);
   }

}


//pop-up 
const btnCLick = document.querySelector('.click');
let clickmeStyles = document.querySelector('.click').attributes['style'];
let btnCLickOpacity;
let BtnVisible = false;

// const setClick = setTimeout(() => {
//    clickTimer()
// }, 9000);

function disappearClick() {
   $('.click').css({
      "opacity": "0", "transition": "0.5s ease-in"
   })
   BtnVisible = false;
};



$(document).ready(function () {


   $('.click').click(function () {

      $('.popup-box').css({
         "display": "block", "pointer-events": "auto"
      })

   });
   $('.cancel-btn').click(function () {
      $('.popup-box').css({
         "display": "none", "pointer-events": "none"
      })
      timer = setTimeout(() => {
         if (timer == null) {
            clearTimeout(timer);
         } else {
            $('.click').css({
               "opacity": "0", "transition": "0.3s ease-in"
            })
            BtnVisible = false;
            // console.log("not Visible")
         }
      }, 400);

   });

   $('.btn-two').click(function () {

      // $('.btn-two').href = window.open('https://en.wikipedia.org/wiki/Giraffe', '_blank');
      $('.popup-box').css({
         "display": "none", "pointer-events": "none"
      });

      timer = setTimeout(() => {
         if (timer == null) {
            clearTimeout(timer);
         } else {
            $('.click').css({
               "opacity": "0", "transition": "0.3s ease-in"
            })
            BtnVisible = false;
            // console.log("not Visible")
         }
      }, 4600);
      /*
      setTimeout(() => {
         elementClicked = false;
      }, 3000)*/
   })

});


// profile img section 
$(document).ready(function () {
   $('.more').click(function () {
      $('.back').addClass('pf-active')
      $('.front').removeClass('pf-active')
   })
   $('.go-back').click(function () {
      $('.back').removeClass('pf-active')
      $('.front').addClass('pf-active')
   })
})



$(function () {

   //creating a style object for the ripple effect
   function RippleStyle(width, height, posX, posY) {
      this.width = (width <= height) ? height : width;
      this.height = (width <= height) ? height : width;
      this.top = posY - (this.height * 0.5);
      this.left = posX - (this.width * 0.5);
   }

   $('.button').on('mousedown', function (e) {
      //appending an element with a class name "btn-ripple"
      var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

      //getting the button's offset position
      var pos = $(this).offset();

      //get the button's width and height
      var width = $(this).outerWidth();
      var height = $(this).outerHeight();

      //get the cursor's x and y position within the button
      var posX = e.pageX - pos.left;
      var posY = e.pageY - pos.top;

      //adding a css style to the ripple effect
      var rippleStyle = new RippleStyle(width, height, posX, posY);
      rippleEl.css(rippleStyle);
   });

   //this event listener will be triggered once the ripple animation is done
   $('.button').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function () {
      $(this).remove();
   });
});


// Project Section
const postWrapperItems = document.querySelector('.post-wrapper').children;
console.log(postWrapperItems)
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const pageNumbers = document.querySelector('.page-num');

const maxItem = 6;
let index = 1;

const pagination = Math.ceil(postWrapperItems.length / maxItem)


prev.addEventListener('click', function (e) {
   e.preventDefault();
   index--;
   check();
   showItems();

})
next.addEventListener('click', function (e) {
   e.preventDefault();
   index++;
   check();
   showItems();
})

function check() {
   if (index == pagination) {
      next.classList.add('disabled');
   } else {
      next.classList.remove('disabled');
   }

   if (index == 1) {
      prev.classList.add('disabled');

   } else {
      prev.classList.remove('disabled');
   }

   
}



function showItems() {
   
   for (let i = 0; i < postWrapperItems.length; i++) {
      postWrapperItems[i].classList.add('hide')
      postWrapperItems[i].classList.remove('show')


      if ( i >= (index * maxItem) - maxItem && i < index* maxItem ) {
         postWrapperItems[i].classList.add('show')
         postWrapperItems[i].classList.remove('hide') 
      }
      pageNumbers.innerHTML = index;

   }
   

}



      window.onload = function (e) {
         
         e.preventDefault()
         showItems();
         check();
      }
