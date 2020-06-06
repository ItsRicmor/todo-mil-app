import FootTimeEnum from '../constants/FoodTimeEnum';

export function getHourByFoodTime(foodTime) {
  switch (foodTime) {
    case FootTimeEnum.BREAKFAST:
      return '8 AM';
    case FootTimeEnum.LUNCH:
      return '12 PM';
    case FootTimeEnum.DINNER:
      return '6 PM';
  }
}
