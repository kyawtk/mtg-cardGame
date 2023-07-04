import img1 from '../assets/images/img (1).jpg'
import img2 from '../assets/images/img (2).jpg'
import img3 from '../assets/images/img (3).jpg'
import img4 from '../assets/images/img (4).jpg'
import img5 from '../assets/images/img (5).jpg'
import img6 from '../assets/images/img (6).jpg'
import img7 from '../assets/images/img (7).jpg'
import img8 from '../assets/images/img (8).jpg'
import img9 from '../assets/images/img (9).jpg'
import img10 from '../assets/images/img (10).jpg'
import img11 from '../assets/images/img (11).jpg'
import img12 from '../assets/images/img (12).jpg'
import img13 from '../assets/images/img (13).jpg'
import img14 from '../assets/images/img (14).jpg'
import img15 from '../assets/images/img (15).jpg'
import img16 from '../assets/images/img (16).jpg'
import img17 from '../assets/images/img (17).jpg'
import img18 from '../assets/images/img (18).jpg'
import img19 from '../assets/images/img (19).jpg'
import img20 from '../assets/images/img (20).jpg'
import img21 from '../assets/images/img (21).jpg'
import img22 from '../assets/images/img (22).jpg'
import img23 from '../assets/images/img (23).jpg'
import img24 from '../assets/images/img (24).jpg'
import img25 from '../assets/images/img (25).jpg'
import img26 from '../assets/images/img (26).jpg'
import img27 from '../assets/images/img (27).jpg'
import img28 from '../assets/images/img (28).jpg'
import img29 from '../assets/images/img (29).jpg'
import img30 from '../assets/images/img (30).jpg'



const cardsdata = [
  { src: img1, clicked: false, id: crypto.randomUUID() },
  { src: img2, clicked: false, id: crypto.randomUUID() },
  { src: img3, clicked: false, id: crypto.randomUUID() },
  { src: img4, clicked: false, id: crypto.randomUUID() },
  { src: img5, clicked: false, id: crypto.randomUUID() },
  { src: img6, clicked: false, id: crypto.randomUUID() },
  { src: img7, clicked: false, id: crypto.randomUUID() },
  { src: img8, clicked: false, id: crypto.randomUUID() },
  { src: img9, clicked: false, id: crypto.randomUUID() },
  { src: img10, clicked: false, id: crypto.randomUUID() },
  { src: img11, clicked: false, id: crypto.randomUUID() },
  { src: img12, clicked: false, id: crypto.randomUUID() },
  { src: img13, clicked: false, id: crypto.randomUUID() },
  { src: img14, clicked: false, id: crypto.randomUUID() },
  { src: img15, clicked: false, id: crypto.randomUUID() },
  { src: img16, clicked: false, id: crypto.randomUUID() },
  { src: img17, clicked: false, id: crypto.randomUUID() },
  { src: img18, clicked: false, id: crypto.randomUUID() },
  { src: img19, clicked: false, id: crypto.randomUUID() },
  { src: img20, clicked: false, id: crypto.randomUUID() },
  { src: img22, clicked: false, id: crypto.randomUUID() },
  { src: img23, clicked: false, id: crypto.randomUUID() },
  { src: img24, clicked: false, id: crypto.randomUUID() },
  { src: img25, clicked: false, id: crypto.randomUUID() },
  { src: img26, clicked: false, id: crypto.randomUUID() },
  { src: img27, clicked: false, id: crypto.randomUUID() },
  { src: img28, clicked: false, id: crypto.randomUUID() },
  { src: img29, clicked: false, id: crypto.randomUUID() },
  { src: img30, clicked: false, id: crypto.randomUUID() },
  { src: img21, clicked: false, id: crypto.randomUUID() },
  
];



export default cardsdata;




function shuffleArray(array) {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export {shuffleArray}


