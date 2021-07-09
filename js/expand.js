const postWrapper = document.querySelector('.post-wrapper')
const pagination02 = document.querySelector('.pagination')
const pagination2ndPage = pagination02.querySelector('.next')
const pagination2ndPageCards = pagination2ndPage.classList.contains('disabled')
const outerCards = [...postWrapper.querySelectorAll('.outer')]
const imgBoxes = [...document.querySelectorAll('.imgBox')]


let Cards2;
console.log(outerCards)



/* pagination2ndPage.addEventListener('click', () => {
   console.log(pagination2ndPage)

   if (pagination2ndPage.classList.contains('disabled')) {
      Cards2 = [...outerCards.filter(e => e.classList.contains('show'))]
      console.log(Cards2)
      // cards[1].classList.add('expand')

   }
}) */
outerCards[1].querySelector('.card').addEventListener('mouseenter', (e) => {
   // e.preventDefault(
   hoverIMG()
})


function hoverIMG() {
   if (outerCards[1].classList.contains('show')) {
      outerCards[1].querySelector('.card').classList.add('cardexpand')
      setTimeout(() => {
         outerCards[1].classList.add('expand')
      }, 220)
   }
}

function hoverOutIMG() {
   outerCards[1].querySelector('.card').classList.remove('cardexpand')
   outerCards[1].classList.remove('expand')
}
outerCards[1].querySelector('.content').addEventListener('mouseleave', (e) => {
   e.preventDefault()
   hoverOutIMG()
})
outerCards[1].querySelector('.content').addEventListener('mouseleave', (e) => {
   e.preventDefault()
   hoverOutIMG()
})












outerCards[1].querySelector('.content a').addEventListener('click', (e) => {
   e.preventDefault()


   
      document.querySelectorAll('.s1')[1].querySelector('.main-container').classList.add('expandFunction')
      document.querySelector('.post-wrapper').classList.add('expand-wrapper')
      outerCards[7].classList.remove('expand')
   

   // setTimeout(() => {
      // showandHide()
      document.querySelectorAll('.s1')[1].querySelector('.main-container').classList.add('showand-hide')
   // }, 2300)


   // setTimeout(() => {
      showcaseProject()
   // }, 2780)
})


const showandHide = () => {
   outerCards.forEach(outerCard => {
      if (outerCard.classList.contains('show')) {

         setTimeout(() => {

            outerCard.classList.remove('show')
            outerCard.classList.add('hide')
         }, 2000)

      }
   })
}

const showOuter = () => {
   outerCards.forEach(outerCard => {
      setTimeout(() => {
         outerCard.classList.remove('hide')
         outerCard.classList.add('show')
      }, 2000)
   })
}

/* add rotatation */
const circles = document.querySelectorAll('.circles-projects')
const circlePairs = document.querySelector('.circle-pair')

circles.forEach(circle => rotationAddRemove(circle))
function rotationAddRemove(a) {
   a.addEventListener('mouseenter', () => {
      a.classList.add('circle-rotation')
   })
   a.addEventListener('mouseleave', () => {
      a.classList.remove('circle-rotation')
   })
}

circles[26].addEventListener('mouseenter', () => {
   circles[26].classList.add('circle-up-down')
})



/*if (circle.classList.contains('circleActive')) {
   
   circles.forEach(circle => circle.addEventListener('click', (e) => {
      e.preventDefault()
      circle.classList.remove('circleActive')
      textContentNow = paragraph.textContent = textBefore;
      cardNumber.textContent = '';
   }))

} else { */
const textBefore1st = document.querySelector('.contentCard p').textContent;
let clickingCount = 0;


const card = document.querySelector('.cardCont');
let circlesLocation = '';
console.log(circlesLocation)

circles.forEach(circle => circle.addEventListener('click', function clickEvent(e) {
   const paragraph = document.querySelector('.contentCard p');
   const cardNumberValue = e.target.dataset.card_number;
   const cardParaValue = e.target.dataset.project;
   const cardNumber = document.querySelector('.contentCard h2');
   const circleHasClass = circle.classList.contains('circleActive')

   const boxCard = document.querySelector('.boxCard');
   const cardContainer = document.querySelector('.cardCont');
   // console.log(circleHasClass)
   let textContentNow;
   e.preventDefault()
   let numbClass;
   clickingCount++;
   
   card.querySelector('a').href = '';
   cardContainer.className = 'cardCont';
   cardContainer.classList.remove('card_inHover')
   cardContainer.classList.remove('card_hoverOut')
   
   if (circle.classList.contains('not-this') === false) {


      fstArray[3].classList.remove('not-active')
      


      /*console.log(cardNumberValue)
      console.log(boxCard)
      console.log(cardContainer)
      console.log(clickingCount)*/
      cardContainer.classList.remove('card_notChange')
   }

      //if (clickingCount < 2) {
         if (cardNumber.textContent != '') {
            cardNumber.textContent = '';
            card.querySelector('a').href = '';

         }

         console.log(clickingCount)
         contentAddRemove(card, paragraph, cardParaValue)

   
         // if (cardNumber.textContent == '') {

            console.log(clickingCount)
            cardNumber.appendChild(document.createTextNode(cardNumberValue))
            circle.classList.add('circleActive');
            numbClass = cardNumber.textContent;
            circlesLocation = circle.dataset.link; 
            card.querySelector('a').href = circlesLocation;


            console.log(circlesLocation)
            // circle.location = circle.dataset.link;
            cardContainer.classList.toggle(`card${numbClass}`)
            



         hoverInOut_Card(cardContainer)
         contentAddRemove(card, paragraph, cardParaValue)

         // console.log('its true')

      //} 

      /*if (clickingCount === 2) {
         console.log(clickingCount)
         console.log(circlesLocation)
         clickingCount--;
      
         circleLocation = '';
         
         // circlesLocation = circle.dataset.link; 
      
         cardNumber.textContent = '';
         circle.classList.remove('circleActive')
         // contentRemove(paragraph)
      
         /*cardNumber.appendChild(document.createTextNode(cardNumberValue))
         contentAddRemove(card, paragraph, cardParaValue)
         numbClass = cardNumber.textContent;
         cardContainer.classList.toggle(`card${numbClass}`)*/
      
      //}
      


   if (circle.classList.contains('not-this') === true) {
      paragraph.textContent = textBefore1st;
      cardContainer.classList.remove('card_inHover')
      cardContainer.classList.remove('card_hoverOut')
      cardContainer.classList.add('card_notChange')
   }

   function contentAddRemove(a, b, c) {

      a.addEventListener('mouseenter', () => {
         if (cardContainer.classList.contains('card_notChange') == false) {
            textContentNow = b.textContent = '';
            setTimeout(() => {
               textContentNow = b.textContent = c;
            }, 700)
         }
      })
      // b.textContent = textBefore1st;

   }
   function contentRemove(b) {
      textContentNow = b.textContent = '';
      setTimeout(() => {
         b.textContent = textBefore1st;
      }, 100)
      // circle.classList.remove('circleActive')
      cardNumber.textContent = '';
   }

   function hoverInOut_Card(a) {
      a.addEventListener('mouseenter', (e) => {
         if (cardContainer.classList.contains('card_notChange') == false) {
            e.preventDefault()
            a.classList.add('card_inHover')
            a.classList.remove('card_hoverOut')

            a.addEventListener('mouseleave', (e) => {
               e.preventDefault()
               if (cardContainer.classList.contains('card_notChange') == false) {
                  a.classList.add('card_hoverOut')
               }
            })
         }
      })
   }

   
}))

card.querySelector('a').addEventListener('click', function(e) {
   e.preventDefault(); 
   console.log(circlesLocation, card.querySelector('a').href)
   if(card.querySelector('a').getAttribute('href') === circlesLocation) {
   window.open(card.querySelector('a').href, '_blank')
   }
})

function listenToCardBtn(a) {
   a.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(a.href);
      window.open(a.href, '_blank')
      return false;
   })
}




document.querySelector('.cancelBtn ').addEventListener('click', (e) => {
   e.preventDefault()
      fstArray.forEach((e) => {
         e.classList.add('not-active')
      })
   setTimeout(() => {
      document.querySelector('.showcase-container').classList.add('not-active')
   }, 600)
   setTimeout(() => {

      document.querySelector('.post-wrapper').classList.remove('expand-wrapper')
   }, 800)
   setTimeout(() => {
      document.querySelectorAll('.s1')[1].querySelector('.main-container').classList.remove('expandFunction')
      document.querySelectorAll('.s1')[1].querySelector('.main-container').classList.remove('showand-hide')
   }, 800)
   document.querySelector('.showcase-container').classList.remove('growAnim')
   document.querySelector('.showcase-container').classList.add('shrinkAnim')

})
let thisArray;
const fstArray = [...document.querySelectorAll('.showcase-container .not-active')];

// window.addEventListener('scroll', () => {
function showcaseProject() {
   // console.log(window.pageYOffset);
   // if (window.pageYOffset >= 1330) {
      document.querySelector('.showcase-container').classList.remove('shrinkAnim')
      setTimeout(() => {
         document.querySelector('.showcase-container').classList.remove('not-active')
      }, 699)
      setTimeout(() => {
         document.querySelector('.showcase-container').classList.add('growAnim')
      }, 200)

      setTimeout(() => {
         fstArray.forEach((e) => {
            if (e.classList.contains('cancelBtn') == false) {
               e.classList.remove('not-active')
            }
         })
      }, 1800)

   // }


   // console.log(fstArray);
}


