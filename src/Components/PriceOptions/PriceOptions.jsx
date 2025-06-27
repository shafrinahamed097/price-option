import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = ({option}) => {
  const priceOptions =  [
  {
    "id": 1,
    "name": "Basic Plan",
    "price": "$29/month",
    "features": [
      "Access to all cardio and strength equipment",
      "Locker room access",
      "1 free personal training session per month",
      "Open 6am - 10pm",
      "Free Wi-Fi access",
      "Monthly fitness assessment",
      "No contract required"
    ]
  },
  {
    "id": 2,
    "name": "Standard Plan",
    "price": "$49/month",
    "features": [
      "Includes Basic Plan benefits",
      "Unlimited group fitness classes (Zumba, Yoga, HIIT)",
      "Free nutrition consultation every 3 months",
      "Access to sauna & steam room",
      "Priority class booking",
      "Fitness tracking mobile app access",
      "1 guest pass/month"
    ]
  },
  {
    "id": 3,
    "name": "Premium Plan",
    "price": "$79/month",
    "features": [
      "Includes Standard Plan benefits",
      "5 personal training sessions per month",
      "24/7 Gym Access",
      "Towel and laundry service",
      "Free access to workshops and fitness events",
      "Reserved parking spot",
      "Massage chair access",
      "Health insurance discount partnerships"
    ]
  },
  {
    "id": 4,
    "name": "Student Plan",
    "price": "$25/month",
    "features": [
      "Access to gym equipment during off-peak hours",
      "Valid student ID required",
      "Weekday access only (7am - 5pm)",
      "2 group fitness classes per week",
      "Free orientation session",
      "Study-friendly lounge area",
      "Discounted healthy snacks at gym café"
    ]
  },
  {
    "id": 5,
    "name": "Couples Plan",
    "price": "$89/month",
    "features": [
      "Full access for 2 adults",
      "Includes all Premium Plan features",
      "2 guest passes/month",
      "Joint personal training session discounts",
      "Couples yoga classes",
      "Complimentary drinks for both",
      "Anniversary month surprise gift"
    ]
  }
];

  return (
    <div>
        <h2 className="text-5xl">Best Prices in the town</h2>
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option} />)
        }
      
    </div>
  );
};

export default PriceOptions;