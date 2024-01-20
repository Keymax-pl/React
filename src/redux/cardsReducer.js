import shortid from "shortid";
import strContains from '../utils/strContains.js';

//selectors

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && 
  strContains(card.title, searchString));
export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite);


// actions
const createActionName = actionName => `app/card/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');

const createActionName1 = actionName => `app/card/${actionName}`;
const TOGGLE_CARD_FAVORITE = createActionName1('TOGGLE_CARD_FAVORITE');

const createActionName2 = actionName => `app/card/${actionName}`;
const REMOVE_CARD = createActionName1('REMOVE_CARD');

  // action creators
  export const addCard = payload => ({ type: ADD_CARD, payload });
  export const toggleCardFavorite = payload => ({ type: TOGGLE_CARD_FAVORITE, payload});
  export const removeCard = payload => ({ type: REMOVE_CARD, payload });

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case TOGGLE_CARD_FAVORITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      case REMOVE_CARD:
        return statePart.filter((card) => card.id !== action.payload);
      default:
        return statePart;
    }
}

export default cardsReducer;