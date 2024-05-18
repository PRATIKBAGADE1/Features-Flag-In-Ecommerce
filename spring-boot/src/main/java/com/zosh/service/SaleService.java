package com.zosh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.zosh.modal.Product;
import com.zosh.repository.ProductRepository;

import jakarta.transaction.Transactional;

import java.util.List;
@Service
public class SaleService {

    private ProductRepository productRepository;

    public SaleService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    // Assuming this method is missing or incorrectly named
    public List<Product> listAllProducts() {
        return productRepository.findAll();
    }

    
    @Transactional
    public ResponseEntity<Product> toggleSaleStatus(Long productId, boolean isOnSale) {
        System.out.println(isOnSale);
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    
        product.setOnSale(isOnSale); // Set the sale status based on the switch button state
    
        productRepository.save(product); // Persist the changes

       
    
    
        if (product.isOnSale()) {
            product.setDiscountedPrice(product.getPrice() - (product.getPrice() * product.getDiscountPersent() / 100));
        } else {
            // Assuming you wish to reset discountPrice if not on sale
            product.setDiscountedPrice(0);
        }
        productRepository.save(product);
        return ResponseEntity.ok(product);
    
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'getAllProducts'");
    }
}