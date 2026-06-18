package org.example.dsa.exercise2;

//Linear Search
public class SearchDemo {

    public static Product linearSearch(Product[] products, int targetId) {

        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }

        return null;
    }
}
