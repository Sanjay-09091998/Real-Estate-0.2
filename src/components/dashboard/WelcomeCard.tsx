import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

interface WelcomeCardProps {
  userName: string;
  plan: string;
  remainingViews: number;
  totalViews: number;
  onUpgrade?: () => void;
}

const WelcomeCard = ({
  userName,
  plan,
  remainingViews,
  totalViews,
  onUpgrade = () => {},
}: WelcomeCardProps) => {
  const progress = (remainingViews / totalViews) * 100;

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {userName}!</h1>
              <p className="text-gray-600">You're on the {plan} plan</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Property Views</span>
                <span>
                  {remainingViews} of {totalViews} remaining
                </span>
              </div>
              <Progress value={progress} />
            </div>
          </div>
          <Button onClick={onUpgrade}>Upgrade Plan</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
