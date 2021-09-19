export const INITIAL_STATE = {
  sections: [
    {
      title: 'Shimoga',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/arecanut-trading.appspot.com/o/1492092832_shimoga-review-tourist-places-tourist-destinations-tourist.jpg.jpg?alt=media&token=5db4716b-ffdf-46f5-919c-00c194aaa22c',
      id: 1,
      linkUrl: 'shop/shimoga'
    },
    {
      title: 'sagar',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/arecanut-trading.appspot.com/o/1_S9_Ngva-EmYASUtx2hG8Hg.jpeg?alt=media&token=850e6517-5c84-4bce-a6b0-139f76d22e50',
      id: 2,
      linkUrl: 'shop/sagar'
    },
    {
      title: 'davanagere',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/arecanut-trading.appspot.com/o/2018091021.jpeg?alt=media&token=f986338e-78b8-451c-9fb4-c8f774ab2c76',
      id: 3,
      linkUrl: 'shop/davanagere'
    },
    {
      title: 'mangaluru',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/arecanut-trading.appspot.com/o/place-2014-10-21-14-mangaloredb97f922bd0d9034575822628e83dc09.jpeg?alt=media&token=bb9afc18-e638-4038-a968-dc461796cfc5',
      size: 'large',
      id: 4,
      linkUrl: 'shop/mangaluru'
    },
    {
      title: 'bengaluru',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/arecanut-trading.appspot.com/o/1-1529930005.jpeg?alt=media&token=fa965b4b-0dcf-4e92-b5c4-96d361ae29a9',
      size: 'large',
      id: 5,
      linkUrl: 'shop/bengaluru'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
