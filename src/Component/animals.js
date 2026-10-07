import sutuImg from '../images/sutu.jpg';
import khiImg from '../images/khi.jpg';
import nguaImg from '../images/ngua.jpg';

export default [
  {
    name: 'Lion',
    scientificName: 'Panthero leo',
    size: 140,
    diet: ['meat'],
    image: sutuImg,
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    size: 205,
    diet: ['plants', 'insects'],
    image: khiImg,
    additional: {
      notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.'
    }
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    size: 322,
    diet: ['plants'],
    image: nguaImg,
    additional: {
      notes: 'There are three different species of zebra.',
      link: 'https://en.wikipedia.org/wiki/Zebra'
    }
  }
];