package org.example.dsa;

import org.example.dsa.exercise2.Product;

import static org.example.dsa.exercise2.BinarySearchDemo.binarySearch;
import static org.example.dsa.exercise2.SearchDemo.linearSearch;

public class Exercise2 {
    public static void main(String[] args) {
        //exercise 2 - linear and binary search
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories")
        };

        Product linearResult = linearSearch(products, 103);

        if (linearResult != null) {
            System.out.println("(Linear Search) Product Found: " + linearResult);
        } else {
            System.out.println("(Linear Search) Product Not Found");
        }

        Product binaryResult = binarySearch(products, 104);

        if (binaryResult != null) {
            System.out.println("(Binary Search) Product Found: " + binaryResult);
        } else {
            System.out.println("(Binary Search) Product Not Found");
        }
    }
}
