// src/main/java/com/example/ecommerce/controller/FeatureFlagController.java

package com.zosh.controller;

import com.zosh.modal.FeatureFlag;
import com.zosh.repository.FeatureFlagRepository;
import com.zosh.service.FeatureFlagService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// FeatureFlagController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/feature-flags")
public class FeatureFlagController {

    private final FeatureFlagService featureFlagService;

    @Autowired
    public FeatureFlagController(FeatureFlagService featureFlagService) {
        this.featureFlagService = featureFlagService;
    }

    @GetMapping("/homepage-design")
    public ResponseEntity<Boolean> getHomepageDesignVariant() {
        boolean homepageDesignVariant = featureFlagService.getHomepageDesignVariant();
        return ResponseEntity.ok(homepageDesignVariant);
    }

    @PutMapping("/homepage-design")
    public ResponseEntity<String> toggleHomepageDesignVariant(@RequestParam boolean enabled) {
        featureFlagService.setHomepageDesignVariant(enabled);
        return ResponseEntity.ok("Homepage design variant toggled: " + enabled);
    }
}


