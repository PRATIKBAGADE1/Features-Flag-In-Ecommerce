package com.zosh.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.zosh.modal.Product;
import com.zosh.service.SaleService;

import java.util.List;

// @RestController
// @RequestMapping("/api/sale")
// public class SaleController {

//     @Autowired
//     private SaleService saleService;

//     @GetMapping
//     public List<Product> getAllProducts() {
//         return saleService.findAllProducts();
//     }

//     @PostMapping("/{id}/toggleSale")
//     public void toggleSale(@PathVariable Long id) {
//         saleService.toggleProductSaleStatus(id);
//     }
// }
@RestController
@RequestMapping("/api/sale")
public class SaleController {

    private final SaleService saleService;

    // Ensure constructor matches your service class name
    public SaleController(SaleService saleService) {
        this.saleService = saleService;
    }

    @GetMapping("/all")
	public ResponseEntity<List<Product>> findAllProduct(){
		
		List<Product> products = saleService.getAllProducts();
		
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
	}

    
    @PutMapping("/{productId}/toggleSale")
    public void toggleProductSale(@PathVariable Long productId, @RequestBody boolean onSale) {
        saleService.toggleSaleStatus(productId, onSale);
    }
    
}