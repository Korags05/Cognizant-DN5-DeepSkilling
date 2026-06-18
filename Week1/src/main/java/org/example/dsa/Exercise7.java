package org.example.dsa;

import static org.example.dsa.exercise7.FinancialForecast.predictFutureValue;

public class Exercise7 {
    public static void main(String[] args) {




        //exercise 7 - financial forecasting
        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = predictFutureValue(
                currentValue,
                growthRate,
                years
        );

        System.out.println("Predicted Future Value = " + futureValue);
    }
}